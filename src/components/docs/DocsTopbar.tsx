import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, Sparkles, X } from "lucide-react";
import { SearchPalette, useSearchHotkey } from "./SearchPalette";
import { DocsSidebar } from "./DocsSidebar";
import { cn } from "@/lib/utils";

export function DocsTopbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useSearchHotkey(setSearchOpen);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6">
          <button
            type="button"
            onClick={() => setMobileNav(true)}
            className="-ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

            <Link to="/" className="flex items-center">
              <img
                src="/savant-kb/images/savant-logo.png"
                alt="Savant"
                className="h-8 w-auto"
              />
            </Link>

          <nav className="ml-6 hidden items-center gap-1 text-sm md:flex">
            <Link
              to="/docs"
              className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              Docs
            </Link>
            <a
              href="https://community.savantlabs.io/courses"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              Academy
            </a>
            <a
              href="https://community.savantlabs.io/c/savant-bootcamp"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              Bootcamp
            </a>
            <a
              href="https://savantlabs.io/blog/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              Blog
            </a>
            <a
              href="https://savantlabs.io/pricing"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              Pricing
            </a>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="group inline-flex h-9 min-w-[14rem] items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search docs…</span>
              <span className="ml-auto hidden items-center gap-1 sm:flex">
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[0.65rem] font-medium text-muted-foreground">⌘</kbd>
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[0.65rem] font-medium text-muted-foreground">K</kbd>
              </span>
            </button>

            <a
              href="https://savantlabs.io/book-a-demo/"
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 items-center rounded-lg bg-gradient-to-br from-primary to-[var(--primary-glow)] px-4 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-95 sm:inline-flex"
            >
              Book a demo
            </a>
            <a
              href="https://app.savantlabs.io"
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 items-center rounded-lg bg-gradient-to-br from-primary to-[var(--primary-glow)] px-4 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-95 sm:inline-flex"
            >
              Go to Savant app
            </a>
          </div>
        </div>
      </header>

      <SearchPalette open={searchOpen} onOpenChange={setSearchOpen} />

      {/* Mobile nav drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileNav ? "" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMobileNav(false)}
          className={cn(
            "absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity",
            mobileNav ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[85%] max-w-xs overflow-y-auto border-r border-border bg-background px-4 transition-transform",
            mobileNav ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-14 items-center justify-between">
            <span className="font-semibold">Navigation</span>
            <button
              type="button"
              onClick={() => setMobileNav(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <DocsSidebar onNavigate={() => setMobileNav(false)} />
        </aside>
      </div>
    </>
  );
}
