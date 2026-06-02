import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar, Folder, Download, ExternalLink, FileText, Megaphone,
  MessageCircle, Send, Languages, ChevronDown, ListChecks, ClipboardList,
} from "lucide-react";
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
  const { post, category } = Route.useLoaderData() as { post: Post; category: Category };
  const [lang, setLang] = useState<"en" | "hi">("en");
  const hasHindi = Boolean(post.contentHi);

  const articleHtml = lang === "hi" && post.contentHi ? post.contentHi : post.content;
  const articleTitle = lang === "hi" && post.titleHi ? post.titleHi : post.title;

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
          {/* Featured banner */}
          <div className="relative bg-gradient-to-br from-primary to-[oklch(0.42_0.2_260)] text-primary-foreground p-5 sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/15 backdrop-blur px-2 py-1 text-[11px] font-semibold uppercase tracking-wider">
              <Folder className="h-3 w-3" /> {category.title}
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              {articleTitle}
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
            {/* Language switch */}
            {hasHindi && (
              <div className="flex items-center justify-between flex-wrap gap-3 rounded-lg border border-border bg-surface-muted px-4 py-2.5">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <Languages className="h-4 w-4" /> Read in
                </span>
                <div className="inline-flex rounded-lg overflow-hidden border border-border bg-surface">
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={`px-4 py-1.5 text-sm font-semibold transition ${
                      lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-surface-muted"
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("hi")}
                    className={`px-4 py-1.5 text-sm font-semibold transition ${
                      lang === "hi" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-surface-muted"
                    }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>
            )}

            {/* Summary alert */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
              <p className="text-sm text-foreground/85 leading-relaxed"><strong>Overview:</strong> {post.summary}</p>
            </div>

            {/* Article body */}
            <div className="prose-article" dangerouslySetInnerHTML={{ __html: articleHtml }} />

            {post.importantDates && (
              <DataTable title="Important Dates" headers={["Event", "Date"]}
                rows={post.importantDates.map((d) => [d.event, d.date])} />
            )}

            {post.applicationFee && (
              <DataTable title="Application Fee" headers={["Category", "Fee"]}
                rows={post.applicationFee.map((d) => [d.category, d.fee])} />
            )}

            {post.ageLimit && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-2 pb-2 border-b-2 border-primary">Age Limit</h2>
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">{post.ageLimit}</p>
              </section>
            )}

            {post.vacancyTable && (
              <DataTable title="Vacancy Details" headers={["Post Name", "Vacancy", "Qualification"]}
                rows={post.vacancyTable.map((v) => [v.post, v.vacancy, v.qualification])} />
            )}

            {post.salary && (
              <DataTable title="Salary / Pay Scale" headers={["Post Name", "Pay Scale"]}
                rows={post.salary.map((s) => [s.post, s.payScale])} />
            )}

            {post.selectionProcess && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b-2 border-primary inline-flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-primary" /> Selection Process
                </h2>
                <ol className="space-y-2 pl-1">
                  {post.selectionProcess.map((s, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm sm:text-base text-foreground/85">
                      <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {post.howToApply && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b-2 border-primary inline-flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary" /> How To Apply
                </h2>
                <ol className="space-y-2 pl-1">
                  {post.howToApply.map((s, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm sm:text-base text-foreground/85">
                      <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/30">
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Important Links */}
            {post.importantLinks && post.importantLinks.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b-2 border-primary">
                  Important Links
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {post.importantLinks.map((l, i) => {
                    const Icon = LINK_ICON[l.type ?? "official"];
                    return (
                      <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-3 rounded-xl border-2 border-border bg-surface-muted p-4 hover:border-primary hover:bg-primary/5 hover:shadow-[var(--shadow-card-hover)] transition-all">
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

            {/* FAQ */}
            {post.faqs && post.faqs.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b-2 border-primary">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-2">
                  {post.faqs.map((f, i) => (
                    <FaqItem key={i} q={f.q} a={f.a} />
                  ))}
                </div>
              </section>
            )}

            {/* Conclusion */}
            {post.conclusion && (
              <section className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                <h2 className="text-base font-bold text-foreground mb-1">Conclusion</h2>
                <p className="text-sm text-foreground/85 leading-relaxed">{post.conclusion}</p>
              </section>
            )}

            {/* Join CTA */}
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
          </div>
        </article>

        <div className="lg:sticky lg:top-[140px] lg:self-start">
          <PostSidebar />
        </div>
      </div>

      {/* Disclaimer directly above footer */}
      <div className="mt-8">
        <DisclaimerBox />
      </div>
    </div>
  );
}

function DataTable({ title, headers, rows }: { title: string; headers: string[]; rows: string[][]; }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b-2 border-primary">{title}</h2>
      <div className="table-wrap">
        <table className="table-modern">
          <thead>
            <tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-surface-muted transition"
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-3 -mt-1 text-sm text-muted-foreground leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}
