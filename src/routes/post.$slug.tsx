import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Folder, Download, ExternalLink, FileText, Megaphone, MessageCircle, Send } from "lucide-react";
import { getPost, getCategory, formatDate, SOCIAL, type Post, type Category } from "@/lib/site-data";
import { PostSidebar } from "@/components/site/PostSidebar";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";

export const Route = createFileRoute("/post/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    const category = getCategory(post.category)!;
    return { post, category };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.post.title} — ExamTaza.in` : "Post — ExamTaza.in";
    const description = loaderData?.post.summary ?? "Read full details.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
});

const LINK_ICON = {
  apply: ExternalLink,
  download: Download,
  official: ExternalLink,
  notification: FileText,
} as const;

function PostPage() {
  const { post, category } = Route.useLoaderData();

  return (
    <div className="container-page py-6 sm:py-8">
      {/* Breadcrumbs */}
      <nav className="text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-1.5">/</span>
        <Link to="/category/$slug" params={{ slug: category.slug }} className="hover:text-primary">
          {category.title}
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-foreground font-medium line-clamp-1">{post.title}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <article className="min-w-0 rounded-xl bg-surface border border-border shadow-[var(--shadow-card)] overflow-hidden">
          {/* Featured banner (no thumbnail image — a stylized banner instead) */}
          <div className="relative bg-gradient-to-br from-primary to-[oklch(0.42_0.2_260)] text-primary-foreground p-5 sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/15 backdrop-blur px-2 py-1 text-[11px] font-semibold uppercase tracking-wider">
              <Folder className="h-3 w-3" /> {category.title}
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              {post.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/85">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Published {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Megaphone className="h-4 w-4" /> Official Notification
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-8 space-y-6">
            {/* Summary alert */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
              <p className="text-sm text-foreground/85 leading-relaxed"><strong>Overview:</strong> {post.summary}</p>
            </div>

            {/* Article body */}
            <div className="prose-article" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Important Dates */}
            {post.importantDates && (
              <DataTable
                title="Important Dates"
                headers={["Event", "Date"]}
                rows={post.importantDates.map((d) => [d.event, d.date])}
              />
            )}

            {/* Application Fee */}
            {post.applicationFee && (
              <DataTable
                title="Application Fee"
                headers={["Category", "Fee"]}
                rows={post.applicationFee.map((d) => [d.category, d.fee])}
              />
            )}

            {/* Age Limit */}
            {post.ageLimit && (
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2 pb-2 border-b-2 border-primary">Age Limit</h2>
                <p className="text-sm sm:text-base text-foreground/85">{post.ageLimit}</p>
              </div>
            )}

            {/* Vacancy */}
            {post.vacancyTable && (
              <DataTable
                title="Vacancy Details"
                headers={["Post Name", "Vacancy", "Qualification"]}
                rows={post.vacancyTable.map((v) => [v.post, v.vacancy, v.qualification])}
              />
            )}

            {/* Important Links — premium card */}
            {post.importantLinks && post.importantLinks.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b-2 border-primary">
                  Important Links
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {post.importantLinks.map((l, i) => {
                    const Icon = LINK_ICON[l.type ?? "official"];
                    return (
                      <a
                        key={i}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-3 rounded-xl border-2 border-border bg-surface-muted p-4 hover:border-primary hover:bg-primary/5 hover:shadow-[var(--shadow-card-hover)] transition-all"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground">{l.label}</p>
                            <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                              {l.type ?? "Official Link"}
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 group-hover:bg-primary-hover transition">
                          Click Here
                        </span>
                      </a>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Join CTA inline */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp text-white text-sm font-semibold px-4 py-3 hover:opacity-90 transition shadow">
                <MessageCircle className="h-4 w-4" /> Join WhatsApp Group
              </a>
              <a href={SOCIAL.telegram} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-telegram text-white text-sm font-semibold px-4 py-3 hover:opacity-90 transition shadow">
                <Send className="h-4 w-4" /> Join Telegram Channel
              </a>
            </div>

            <DisclaimerBox />
          </div>
        </article>

        <div className="lg:sticky lg:top-[140px] lg:self-start">
          <PostSidebar />
        </div>
      </div>
    </div>
  );
}

function DataTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b-2 border-primary">{title}</h2>
      <div className="table-wrap">
        <table className="table-modern">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td key={j}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
