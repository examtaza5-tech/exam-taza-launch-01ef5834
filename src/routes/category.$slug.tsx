import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { getCategory, getPostsByCategory, formatDate, CATEGORIES, type Post } from "@/lib/site-data";
import { PostSidebar } from "@/components/site/PostSidebar";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    const posts = getPostsByCategory(category.slug);
    return { category, posts };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.category.title} — ExamTaza.in` : "Category — ExamTaza.in";
    const description = loaderData?.category.description ?? "Latest updates.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, posts } = Route.useLoaderData();

  return (
    <div className="container-page py-6 sm:py-8">
      {/* Breadcrumbs */}
      <nav className="text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-foreground font-medium">{category.title}</span>
      </nav>

      {/* Page header */}
      <header className="rounded-xl bg-gradient-to-r from-primary to-[oklch(0.42_0.2_260)] text-primary-foreground p-5 sm:p-7 shadow-[var(--shadow-card)]">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{category.title}</h1>
        <p className="mt-1.5 text-sm sm:text-base text-white/85 max-w-2xl">{category.description}</p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Posts list */}
        <div className="space-y-4">
          <div className="rounded-xl bg-surface border border-border shadow-[var(--shadow-card)] overflow-hidden">
            <div className="px-4 sm:px-5 py-3 border-b border-border bg-surface-muted">
              <h2 className="text-sm font-bold text-foreground">
                Showing {posts.length} {posts.length === 1 ? "post" : "posts"} in {category.title}
              </h2>
            </div>
            <ul className="divide-y divide-border">
              {posts.length === 0 && (
                <li className="px-4 sm:px-5 py-10 text-center text-sm text-muted-foreground">
                  No posts found in this category yet. Check back soon!
                </li>
              )}
              {posts.map((p: Post) => (
                <li key={p.slug} className="px-4 sm:px-5 py-4 hover:bg-surface-muted transition">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                          {category.short}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Calendar className="h-3 w-3" /> {formatDate(p.date)}
                        </span>
                      </div>
                      <Link
                        to="/post/$slug"
                        params={{ slug: p.slug }}
                        className="block text-base sm:text-[17px] font-semibold text-foreground hover:text-primary transition leading-snug"
                      >
                        {p.title}
                      </Link>
                    </div>
                    <Link
                      to="/post/$slug"
                      params={{ slug: p.slug }}
                      className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 hover:bg-primary-hover transition"
                    >
                      View Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <DisclaimerBox />
        </div>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-[140px] lg:self-start">
          <div className="rounded-xl bg-surface border border-border shadow-[var(--shadow-card)] overflow-hidden mb-6">
            <div className="bg-primary text-primary-foreground px-4 py-2.5">
              <h3 className="text-sm font-bold">Top Categories</h3>
            </div>
            <ul className="p-2 grid grid-cols-2 gap-2">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/category/$slug"
                    params={{ slug: c.slug }}
                    className={`block rounded-lg border px-3 py-2 text-xs font-medium text-center transition ${
                      c.slug === category.slug
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-surface-muted border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    }`}
                  >
                    {c.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <PostSidebar />
        </div>
      </div>
    </div>
  );
}
