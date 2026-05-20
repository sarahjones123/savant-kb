import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Sparkles,
  Rocket,
  Layers,
  Plug,
  LayoutTemplate,
  BookOpen,
  Github,
  ShieldCheck,
  Zap,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { collections, docs } from "@/content/catalog";
import { SearchPalette, useSearchHotkey } from "@/components/docs/SearchPalette";

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  Layers,
  Sparkles,
  Plug,
  LayoutTemplate,
  BookOpen,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Savant Docs — Documentation for AI-native data automation" },
      {
        name: "description",
        content:
          "Build governed data workflows with Savant. Guides, agent references, connector docs, and ready-to-clone templates for finance, ops, and analytics teams.",
      },
      { property: "og:title", content: "Savant" },
      {
        property: "og:description",
        content:
          "Documentation for AI-native data automation. Workflows, agents, connectors, templates.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [searchOpen, setSearchOpen] = useState(false);
  useSearchHotkey(setSearchOpen);

  const popular = ["quickstart", "infer-agent", "snowflake-connector", "financial-reconciliation"]
    .map((s) => docs.find((d) => d.slug === s)!)
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNav onSearch={() => setSearchOpen(true)} />
      <Hero onSearch={() => setSearchOpen(true)} />
      <SearchBand onSearch={() => setSearchOpen(true)} />
      <CollectionsGrid />
      <PopularSection docs={popular} />
      <FeatureRow />
      <CTABand />
      <Footer />
      <SearchPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}

function LandingNav({ onSearch }: { onSearch: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-6 px-4 lg:px-6">
            <Link to="/" className="flex items-center">
              <img
                src="/savant-kb/images/savant-logo.png"
                alt="Savant"
                className="h-8 w-auto"
              />
            </Link>
        <nav className="ml-4 hidden items-center gap-1 text-sm md:flex">
          <Link
            to="/docs"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            Docs
          </Link>
          {/* <a
            href="https://savantlabs.io"
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            Product
          </a> */}
{/* 
  <a
    href="https://app.savantlabs.io"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
    Go to Savant app
  </a> */}

  <a
    href="https://community.savantlabs.io/courses"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
    Academy
  </a>

  <a
    href="https://community.savantlabs.io/c/savant-bootcamp"
    target="_blank"
    rel="noopener noreferrer"
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
            href="https://savantlabs.io/pricing/"
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
            onClick={onSearch}
            className="inline-flex h-9 min-w-[12rem] items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search docs…</span>
            <span className="ml-auto hidden items-center gap-1 sm:flex">
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[0.65rem]">⌘</kbd>
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[0.65rem]">K</kbd>
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
  );
}

function Hero({ onSearch }: { onSearch: () => void }) {
  return (
    <section className="relative overflow-hidden">
      {/* gradient mesh */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.72 0.18 277 / 0.18) 0%, transparent 60%), radial-gradient(40% 40% at 80% 20%, oklch(0.7 0.18 320 / 0.12) 0%, transparent 70%), radial-gradient(40% 40% at 10% 40%, oklch(0.78 0.12 240 / 0.10) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[600px] opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-4 pb-20 pt-20 lg:px-6 lg:pb-28 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Documentation v2 · Updated May 2026
          </span> */}

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Everything you need to master{" "}
            <span className="bg-gradient-to-r from-primary to-[var(--primary-glow)] bg-clip-text text-transparent">
              Savant.
            </span>
          </h1>

          <p className="mt-5 text-pretty text-base text-muted-foreground sm:text-lg">
            Guides, agent references, connector docs, and step-by-step walkthroughs — so you can build smarter analytics, faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/docs"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-[var(--primary-glow)] px-5 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.52_0.22_277_/_0.55)] transition hover:opacity-95"
            >
              Browse docs
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/docs/$slug"
              params={{ slug: "quickstart" }}
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-muted"
            >
              <Rocket className="h-4 w-4 text-primary" />
              Quickstart
            </Link>
            <button
              type="button"
              onClick={onSearch}
              className="inline-flex h-11 items-center gap-2 rounded-xl px-3 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <Search className="h-4 w-4" />
              <span>or press</span>
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[0.7rem]">⌘</kbd>
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[0.7rem]">K</kbd>
            </button>
          </div>
        </motion.div>

        {/* trust strip */}
        <div className="mt-16 grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { k: "100+", v: "Articles" },
            { k: "26", v: "Topics" },
            { k: "200+", v: "Connectors" },
            { k: "AI-native", v: "Analytics automation" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-border/70 bg-card/50 px-4 py-5 backdrop-blur">
              <div className="text-2xl font-semibold tracking-tight text-foreground">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchBand({ onSearch }: { onSearch: () => void }) {
  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-4 py-10 lg:px-6">
        <button
          type="button"
          onClick={onSearch}
          className="group flex w-full items-center gap-4 rounded-2xl border border-border bg-background p-5 text-left shadow-sm transition hover:border-primary/40 hover:shadow-md"
        >
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-[var(--primary-glow)]/15 text-primary">
            <Search className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-foreground">
              Search 24 articles instantly
            </div>
            <div className="truncate text-sm text-muted-foreground">
              Try "infer agent", "snowflake", "reconciliation"…
            </div>
          </div>
          <div className="hidden items-center gap-1 sm:flex">
            <kbd className="rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium">⌘</kbd>
            <kbd className="rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium">K</kbd>
          </div>
        </button>
      </div>
    </section>
  );
}

function CollectionsGrid() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 lg:px-6">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Documentation
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Find what you need, fast.
          </h2>
        </div>
        <Link
          to="/docs"
          className="hidden text-sm font-medium text-primary hover:underline sm:inline"
        >
          All sections →
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c, i) => {
          const Icon = ICONS[c.icon] ?? BookOpen;
          const first = c.docs[0];
          return (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Link
                to="/docs/$slug"
                params={{ slug: first?.slug ?? "" }}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_12px_40px_-16px_oklch(0.52_0.22_277_/_0.35)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-[var(--primary-glow)]/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary">
                    {c.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    {c.docs.length} article{c.docs.length === 1 ? "" : "s"}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-primary opacity-0 transition group-hover:opacity-100">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function PopularSection({ docs }: { docs: { slug: string; fm: { title: string; description: string; collection: string } }[] }) {
  return (
    <section className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-4 py-20 lg:px-6">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Most read
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Popular this month.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {docs.map((d) => (
            <Link
              key={d.slug}
              to="/docs/$slug"
              params={{ slug: d.slug }}
              className="group flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition hover:border-primary/40"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">
                {d.fm.title.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
                  {d.fm.collection}
                </div>
                <div className="mt-1 truncate font-semibold text-foreground group-hover:text-primary">
                  {d.fm.title}
                </div>
                <div className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {d.fm.description}
                </div>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow() {
  const items = [
    {
      icon: Workflow,
      title: "Workflows as a graph",
      body: "Typed streams, schema-locked seams, and observable edges — no surprises at 3 a.m.",
    },
    {
      icon: Sparkles,
      title: "AI where it earns its keep",
      body: "Agents handle the fuzzy parts. Functions handle the crisp ones. Every decision is logged.",
    },
    {
      icon: ShieldCheck,
      title: "Audit-ready by default",
      body: "Cell-level lineage, signed evidence packs, and approvals built into the deploy flow.",
    },
    {
      icon: Zap,
      title: "Built to be fast",
      body: "⌘K everywhere. Keyboard-first canvas. Instant search across the docs.",
    },
  ];
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 lg:px-6">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title}>
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">{it.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {it.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-20 lg:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-[var(--primary-glow)] p-10 text-primary-foreground sm:p-14">
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Still have questions? Talk to a human.
          </h2>
          <p className="mt-3 text-base text-primary-foreground/85">
            Our solutions engineers help finance, ops, and analytics teams design
            production workflows. We respond within one business day.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://savantlabs.io/book-a-demo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-background px-5 text-sm font-medium text-foreground shadow-sm transition hover:opacity-95"
            >
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/docs/$slug"
              params={{ slug: "quickstart" }}
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/30 px-5 text-sm font-medium text-primary-foreground transition hover:bg-white/10"
            >
              Read the quickstart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center lg:px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <img
              src="/savant-kb/images/savant-logo.png"
              alt="Savant"
              className="h-7 w-auto"
            />
          <span>© {new Date().getFullYear()} Savant Labs. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          {/* <Link to="/docs" className="hover:text-foreground">Docs</Link>
          <a href="https://savantlabs.io" target="_blank" rel="noreferrer" className="hover:text-foreground">Product</a> */}
          <a href="https://savantlabs.io/pricing" target="_blank" rel="noreferrer" className="hover:text-foreground">Pricing</a>
          <a href="https://savantlabs.io/contact" target="_blank" rel="noreferrer" className="hover:text-foreground">Contact</a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
