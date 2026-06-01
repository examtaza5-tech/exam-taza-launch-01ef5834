import { Link } from "@tanstack/react-router";
import { GraduationCap, Instagram, Youtube, Send, MessageCircle } from "lucide-react";
import { CATEGORIES, SOCIAL, DISCLAIMER_TEXT } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-[oklch(0.18_0.03_255)] text-[oklch(0.92_0.01_240)]">
      <div className="container-page py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold text-white">
              ExamTaza<span className="text-primary">.in</span>
            </span>
          </Link>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            ExamTaza.in brings you the latest Sarkari Jobs, Results, Admit Cards,
            Syllabus, Answer Keys and Admission updates — fast, mobile friendly
            and free for every aspirant.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-whatsapp text-white hover:opacity-90">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={SOCIAL.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-telegram text-white hover:opacity-90">
              <Send className="h-4 w-4" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-instagram text-white hover:opacity-90">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-youtube text-white hover:opacity-90">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-white/70 hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-white">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="text-white/70 hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="text-white/70 hover:text-white">Disclaimer</Link></li>
            <li><Link to="/terms" className="text-white/70 hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Categories</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to="/category/$slug" params={{ slug: c.slug }} className="text-white/70 hover:text-white">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Disclaimer</h3>
          <p className="mt-4 text-xs text-white/60 leading-relaxed">
            {DISCLAIMER_TEXT}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {year} ExamTaza.in — All Rights Reserved.</p>
          <p>Made with care for Indian aspirants.</p>
        </div>
      </div>
    </footer>
  );
}
