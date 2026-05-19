import { createFileRoute, Link } from "@tanstack/react-router";
import { collections, docs } from "@/content/catalog";
import {
  Rocket,
  Layers,
  Sparkles,
  Plug,
  LayoutTemplate,
  BookOpen,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  Layers,
  Sparkles,
  Plug,
  LayoutTemplate,
  BookOpen,
};

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Savant — Build governed data workflows" },
      {
        name: "description",
        content:
          "Guides, references, and templates for building AI-powered data automations with Savant Labs.",
      },
      { property: "og:title", content: "Savant" },
      {
        property: "og:description",
        content: "Everything you need to ship governed data workflows with Savant.",
      },
    ],
  }),
  component: DocsHome,
});

function DocsHome() {
  const popular = [
    "quickstart",
    "infer-agent",
    "snowflake-connector",
    "financial-reconciliation",
    "workflows-overview",
    "functions-reference",
  ]
    .map((s) => docs.find((d) => d.slug === s)!)
    .filter(Boolean);

  return (
    <div className="space-y-12">
      <header>
        <p className="text-sm font-medium text-primary">Documentation</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Everything you need to ship with Savant.
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Guides, references, and ready-to-clone templates — written for builders, finance
          ops, and the auditors who follow them.
        </p>
      </header>

      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Browse by topic
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {collections.map((c) => {
            const Icon = ICONS[c.icon] ?? BookOpen;
            const first = c.docs[0];
            return (
              <Link
                key={c.slug}
                to="/docs/$slug"
                params={{ slug: first?.slug ?? "" }}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_oklch(0.52_0.22_277_/_0.25)]"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/15 to-[var(--primary-glow)]/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold text-foreground">{c.name}</div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{c.description}</p>
                <div className="text-xs text-muted-foreground">
                  {c.docs.length} article{c.docs.length === 1 ? "" : "s"}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Popular articles
        </h2>
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {popular.map((d) => (
            <li key={d.slug}>
              <Link
                to="/docs/$slug"
                params={{ slug: d.slug }}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-muted/50"
              >
                <div className="min-w-0">
                  <div className="font-medium text-foreground group-hover:text-primary">
                    {d.fm.title}
                  </div>
                  <div className="truncate text-sm text-muted-foreground">
                    {d.fm.description}
                  </div>
                </div>
                <span className="hidden shrink-0 text-xs text-muted-foreground sm:inline">
                  {d.fm.collection}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
