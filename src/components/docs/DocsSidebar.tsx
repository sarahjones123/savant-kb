import { Link, useRouterState } from "@tanstack/react-router";
import { collections } from "@/content/catalog";
import { cn } from "@/lib/utils";
import {
  Rocket,
  Layers,
  Sparkles,
  Plug,
  LayoutTemplate,
  BookOpen,
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

export function DocsSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="flex flex-col gap-7 py-6 pr-4 text-sm">
      <Link
        to="/docs"
        onClick={onNavigate}
        className={cn(
          "rounded-md px-3 py-1.5 font-medium transition",
          pathname === "/docs"
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        Docs home
      </Link>

      {collections.map((c) => {
        const Icon = ICONS[c.icon] ?? BookOpen;
        return (
          <div key={c.slug}>
            <div className="mb-2 flex items-center gap-2 px-3 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
              <Icon className="h-3.5 w-3.5 text-primary/80" />
              {c.name}
            </div>
            <ul className="flex flex-col gap-0.5">
              {c.docs.map((d) => {
                const href = `/docs/${d.slug}`;
                const active = pathname === href;
                return (
                  <li key={d.slug}>
                    <Link
                      to="/docs/$slug"
                      params={{ slug: d.slug }}
                      onClick={onNavigate}
                      className={cn(
                        "block rounded-md border-l-2 px-3 py-1.5 transition",
                        active
                          ? "border-primary bg-primary/10 font-medium text-primary"
                          : "border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {d.fm.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
