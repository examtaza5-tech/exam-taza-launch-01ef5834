import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  Menu,
  X,
  GraduationCap,
  Instagram,
  Youtube,
  Send,
  MessageCircle,
} from "lucide-react";
import { NAV_ITEMS, SOCIAL } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80 border-b border-border shadow-[var(--shadow-header)]">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-page flex items-center justify-between py-1.5">
          <span className="hidden sm:inline opacity-90">
            India's trusted source for Sarkari Jobs, Results & Admit Cards
          </span>
          <div className="flex items-center gap-3 ml-auto">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80">
              <Youtube className="h-3.5 w-3.5" />
            </a>
            <a href={SOCIAL.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:opacity-80">
              <Send className="h-3.5 w-3.5" />
            </a>
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-80">
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-page flex items-center gap-4 py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              ExamTaza<span className="text-primary">.in</span>
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-muted-foreground">
              Jobs · Results · Admit Cards
            </span>
          </span>
        </Link>

        {/* Search */}
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="hidden md:flex flex-1 max-w-md mx-auto relative"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search jobs, results, admit cards..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-input bg-surface-muted text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          />
        </form>

        {/* Right actions desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={SOCIAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-whatsapp text-white text-xs font-semibold px-3 py-2 hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={SOCIAL.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-telegram text-white text-xs font-semibold px-3 py-2 hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" /> Telegram
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile search */}
      <div className="md:hidden container-page pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-input bg-surface-muted text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          />
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:block border-t border-border bg-surface">
        <div className="container-page flex items-center gap-1 overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              params={item.params as never}
              activeOptions={{ exact: item.to === "/" }}
              className="relative px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary transition data-[status=active]:text-primary"
            >
              <span>{item.label}</span>
              <span className="absolute left-3 right-3 -bottom-px h-0.5 bg-primary scale-x-0 origin-left transition-transform [[data-status=active]>&]:scale-x-100" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-surface">
          <div className="container-page py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="py-2.5 text-sm font-medium border-b border-border/60 text-foreground/90 data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-3">
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-whatsapp text-white text-sm font-semibold px-3 py-2"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={SOCIAL.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-telegram text-white text-sm font-semibold px-3 py-2"
              >
                <Send className="h-4 w-4" /> Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
