import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import Fuse from "fuse.js";
import { docs } from "@/content/catalog";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FileText } from "lucide-react";

interface SearchEntry {
  slug: string;
  title: string;
  collection: string;
  description: string;
  body: string;
}

const entries: SearchEntry[] = docs.map((d) => ({
  slug: d.slug,
  title: d.fm.title,
  collection: d.fm.collection,
  description: d.fm.description,
  body: d.body.slice(0, 4000),
}));

const fuse = new Fuse(entries, {
  keys: [
    { name: "title", weight: 3 },
    { name: "description", weight: 2 },
    { name: "collection", weight: 1.5 },
    { name: "body", weight: 1 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  includeMatches: false,
});

export function SearchPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return entries.slice(0, 8);
    return fuse.search(query).slice(0, 20).map((r) => r.item);
  }, [query]);

  const grouped = useMemo(() => {
    const g: Record<string, SearchEntry[]> = {};
    for (const r of results) {
      (g[r.collection] ??= []).push(r);
    }
    return g;
  }, [results]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Search the docs…"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {Object.entries(grouped).map(([collection, items]) => (
          <CommandGroup key={collection} heading={collection}>
            {items.map((r) => (
              <CommandItem
                key={r.slug}
                value={r.slug + " " + r.title + " " + r.description}
                onSelect={() => {
                  onOpenChange(false);
                  navigate({ to: "/docs/$slug", params: { slug: r.slug } });
                }}
              >
                <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="font-medium">{r.title}</span>
                  <span className="text-xs text-muted-foreground line-clamp-1">
                    {r.description}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}

export function useSearchHotkey(setOpen: (v: boolean) => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setOpen]);
}
