import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Send } from "lucide-react";
import { SOCIAL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ExamTaza.in" },
      { name: "description", content: "Get in touch with ExamTaza.in team for queries and corrections." },
      { property: "og:title", content: "Contact ExamTaza.in" },
      { property: "og:description", content: "Reach out for queries and corrections." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container-page py-8 max-w-3xl space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">
          We'd love to hear from you. For corrections, suggestions or business queries, reach out below.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        <a href="mailto:contact@examtaza.in"
          className="flex items-start gap-3 rounded-xl bg-surface border border-border shadow-[var(--shadow-card)] p-5 hover:border-primary transition">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <p className="font-semibold text-foreground">Email Us</p>
            <p className="text-sm text-muted-foreground">contact@examtaza.in</p>
          </div>
        </a>
        <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer"
          className="flex items-start gap-3 rounded-xl bg-surface border border-border shadow-[var(--shadow-card)] p-5 hover:border-primary transition">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-whatsapp/10 text-whatsapp">
            <MessageCircle className="h-5 w-5" />
          </span>
          <div>
            <p className="font-semibold text-foreground">WhatsApp</p>
            <p className="text-sm text-muted-foreground">Join our group for instant updates</p>
          </div>
        </a>
      </div>

      <form onSubmit={(e) => e.preventDefault()}
        className="rounded-xl bg-surface border border-border shadow-[var(--shadow-card)] p-5 sm:p-6 space-y-4">
        <h2 className="text-lg font-bold text-foreground">Send us a message</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="text-sm">
            <span className="font-medium text-foreground">Your Name</span>
            <input type="text" className="mt-1 w-full rounded-lg border border-input bg-surface-muted px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <label className="text-sm">
            <span className="font-medium text-foreground">Email</span>
            <input type="email" className="mt-1 w-full rounded-lg border border-input bg-surface-muted px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
        </div>
        <label className="text-sm block">
          <span className="font-medium text-foreground">Message</span>
          <textarea rows={5} className="mt-1 w-full rounded-lg border border-input bg-surface-muted px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </label>
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 hover:bg-primary-hover transition">
          <Send className="h-4 w-4" /> Send Message
        </button>
      </form>
    </div>
  );
}
