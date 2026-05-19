import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Doc } from "@/content/catalog";

export function PrevNext({ prev, next }: { prev?: Doc; next?: Doc }) {
  if (!prev && !next) return null;
  return (
    <nav className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
      {prev ? (
        <Link
          to="/docs/$slug"
          params={{ slug: prev.slug }}
          className="group flex flex-col rounded-xl border border-border p-4 transition hover:border-primary/40 hover:bg-muted/40"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> Previous
          </span>
          <span className="mt-1 font-medium text-foreground group-hover:text-primary">
            {prev.fm.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to="/docs/$slug"
          params={{ slug: next.slug }}
          className="group flex flex-col items-end rounded-xl border border-border p-4 text-right transition hover:border-primary/40 hover:bg-muted/40"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            Next <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <span className="mt-1 font-medium text-foreground group-hover:text-primary">
            {next.fm.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
