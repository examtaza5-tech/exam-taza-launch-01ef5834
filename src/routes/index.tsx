import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  ChevronRight,
  Briefcase,
  IdCard,
  Trophy,
  BookOpen,
  KeyRound,
  GraduationCap,
  MessageCircle,
  Send,
  Bell,
  Sparkles,
  MousePointerClick,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import {
  CATEGORIES,
  SOCIAL,
  getLatestPosts,
  formatDate,
  type CategorySlug,
} from "@/lib/site-data";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ExamTaza.in — Sarkari Jobs, Results, Admit Card & Syllabus" },
      { name: "description", content: "Latest Sarkari Jobs, Admit Cards, Results, Syllabus, Answer Keys and Admissions — updated daily on ExamTaza.in." },
      { property: "og:title", content: "ExamTaza.in — Sarkari Jobs Portal" },
      { property: "og:description", content: "Latest government job notifications, admit cards and results across India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const ICONS: Record<CategorySlug, React.ComponentType<{ className?: string }>> = {
  "latest-jobs": Briefcase,
  "admit-card": IdCard,
  results: Trophy,
  syllabus: BookOpen,
  "answer-key": KeyRound,
  admission: GraduationCap,
};

const FAQS = [
  {
    q: "What is ExamTaza.in?",
    a: "ExamTaza.in is a free portal that provides the latest information about Sarkari jobs, results, admit cards, syllabus, answer keys and admissions across India.",
  },
  {
    q: "Is ExamTaza.in a government website?",
    a: "No. ExamTaza.in is an independent informational portal and is not associated with any government organization. Always verify details on the official website.",
  },
  {
    q: "How often is content updated?",
    a: "Our team updates the website multiple times daily to ensure you never miss any important notification, result or admit card release.",
  },
  {
    q: "How can I get instant updates?",
    a: "Join our WhatsApp group and Telegram channel using the buttons available on every page to receive instant job and exam notifications.",
  },
];

function HomePage() {
  const latest = getLatestPosts(8);

  return (
    <div className="container-page py-6 sm:py-8 space-y-10 sm:space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-[oklch(0.45_0.19_260)] to-[oklch(0.4_0.2_265)] text-primary-foreground px-5 sm:px-10 py-10 sm:py-16 shadow-[var(--shadow-card-hover)]">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px, 60px 60px",
          }} />
        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5" /> Updated daily — Trusted by thousands
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Latest Sarkari Jobs, Results & <span className="text-warning">Admit Cards</span> at one place
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-white/85 max-w-2xl">
            Your fast, mobile-friendly destination for every government exam update — notifications, syllabus, answer keys and admissions.
          </p>

          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex items-stretch bg-white rounded-xl p-1.5 shadow-lg max-w-xl"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search SSC, UPSC, Railway, Banking..."
                className="w-full pl-9 pr-3 py-2.5 rounded-lg text-foreground text-sm outline-none bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-primary text-primary-foreground px-4 sm:px-5 text-sm font-semibold hover:bg-primary-hover transition"
            >
              Search
            </button>
          </form>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-whatsapp text-white text-sm font-semibold px-4 py-2.5 hover:opacity-90 transition shadow"
            >
              <MessageCircle className="h-4 w-4" /> Join WhatsApp
            </a>
            <a
              href={SOCIAL.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-telegram text-white text-sm font-semibold px-4 py-2.5 hover:opacity-90 transition shadow"
            >
              <Send className="h-4 w-4" /> Join Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section>
        <SectionHeading title="Browse by Category" subtitle="Explore all updates organised by what you need." />
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c.slug];
            return (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group rounded-xl bg-surface border border-border p-4 sm:p-5 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-3 text-sm font-semibold text-foreground">{c.title}</p>
                <p className="hidden sm:block mt-1 text-[11px] text-muted-foreground line-clamp-2">{c.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest Updates */}
      <section>
        <div className="flex items-end justify-between gap-4">
          <SectionHeading title="Latest Updates" subtitle="Freshly posted notifications and updates." inline />
          <Link to="/category/$slug" params={{ slug: "latest-jobs" }} className="text-sm font-semibold text-primary hover:underline shrink-0">
            View All →
          </Link>
        </div>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {latest.map((p) => (
            <li key={p.slug}>
              <Link
                to="/post/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-xl bg-surface border border-border p-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-primary/40 transition"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Bell className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-[11px] mb-1">
                      <CategoryBadge slug={p.category} />
                      <span className="text-muted-foreground">{formatDate(p.date)}</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary">
                      {p.title}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* How To Use */}
      <section className="rounded-2xl bg-surface-muted border border-border p-6 sm:p-10">
        <SectionHeading title="How To Use ExamTaza.in" subtitle="Three simple steps to never miss a Sarkari update." />
        <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-3">
          {[
            { n: "01", icon: Search, t: "Search or Browse", d: "Use the search bar or category cards to find the exact notification, admit card or result you need." },
            { n: "02", icon: MousePointerClick, t: "Read Full Details", d: "Open a post for clean, organised details — important dates, fee, eligibility, vacancies and official links." },
            { n: "03", icon: CheckCircle2, t: "Apply & Stay Updated", d: "Apply through the official link and join our WhatsApp / Telegram for instant notifications of every update." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-xl bg-surface border border-border p-5 shadow-[var(--shadow-card)]">
              <span className="absolute -top-3 left-5 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold px-2 py-1">
                STEP {s.n}
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-base font-bold text-foreground">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <SectionHeading title="Frequently Asked Questions" subtitle="Quick answers to common questions." />
        <div className="mt-5 max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] grid sm:grid-cols-2">
        <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer"
          className="bg-whatsapp text-white p-6 sm:p-8 flex items-center gap-4 hover:opacity-95 transition">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
            <MessageCircle className="h-6 w-6" />
          </span>
          <div>
            <p className="text-lg font-bold">Join WhatsApp Group</p>
            <p className="text-sm text-white/85">Get instant Sarkari Job alerts on WhatsApp</p>
          </div>
        </a>
        <a href={SOCIAL.telegram} target="_blank" rel="noopener noreferrer"
          className="bg-telegram text-white p-6 sm:p-8 flex items-center gap-4 hover:opacity-95 transition">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
            <Send className="h-6 w-6" />
          </span>
          <div>
            <p className="text-lg font-bold">Join Telegram Channel</p>
            <p className="text-sm text-white/85">Never miss results, admit cards & notifications</p>
          </div>
        </a>
      </section>

      <DisclaimerBox />
    </div>
  );
}

function SectionHeading({ title, subtitle, inline }: { title: string; subtitle?: string; inline?: boolean }) {
  return (
    <div className={inline ? "" : "text-center"}>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">{title}</h2>
      {subtitle && <p className="mt-1.5 text-sm sm:text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function CategoryBadge({ slug }: { slug: CategorySlug }) {
  const c = CATEGORIES.find((x) => x.slug === slug);
  return (
    <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
      {c?.short}
    </span>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-surface shadow-[var(--shadow-card)] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-4 text-left"
      >
        <span className="text-sm sm:text-base font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 -mt-1 text-sm text-muted-foreground leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}
