import { Link } from "@tanstack/react-router";
import { MessageCircle, Send, ChevronRight } from "lucide-react";
import { CATEGORIES, SOCIAL, getLatestPosts, formatDate } from "@/lib/site-data";

export function PostSidebar() {
  const latest = getLatestPosts(6);

  return (
    <aside className="space-y-6">
      {/* Join Channels */}
      <div className="rounded-xl bg-surface border border-border shadow-[var(--shadow-card)] p-4">
        <h3 className="text-sm font-bold text-foreground mb-3">Join Our Community</h3>
        <div className="space-y-2">
          <a
            href={SOCIAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-whatsapp text-white text-sm font-semibold py-2.5 hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> Join WhatsApp Group
          </a>
          <a
            href={SOCIAL.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-telegram text-white text-sm font-semibold py-2.5 hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" /> Join Telegram Channel
          </a>
        </div>
      </div>

      {/* Latest Updates */}
      <div className="rounded-xl bg-surface border border-border shadow-[var(--shadow-card)] overflow-hidden">
        <div className="bg-primary text-primary-foreground px-4 py-2.5">
          <h3 className="text-sm font-bold">Latest Updates</h3>
        </div>
        <ul className="divide-y divide-border">
          {latest.map((p) => (
            <li key={p.slug}>
              <Link
                to="/post/$slug"
                params={{ slug: p.slug }}
                className="flex items-start gap-2 px-4 py-3 hover:bg-surface-muted transition group"
              >
                <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary">
                    {p.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{formatDate(p.date)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Categories */}
      <div className="rounded-xl bg-surface border border-border shadow-[var(--shadow-card)] overflow-hidden">
        <div className="bg-primary text-primary-foreground px-4 py-2.5">
          <h3 className="text-sm font-bold">Top Categories</h3>
        </div>
        <ul className="p-2 grid grid-cols-2 gap-2">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="block rounded-lg border border-border px-3 py-2 text-xs font-medium text-center bg-surface-muted hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                {c.short}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
