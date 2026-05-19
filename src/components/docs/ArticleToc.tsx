import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/admonitions";

export function ArticleToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | undefined>(items[0]?.id);

  useEffect(() => {
    if (items.length === 0) return;
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();
    const ob = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            visible.set(e.target.id, e.intersectionRatio);
          } else {
            visible.delete(e.target.id);
          }
        }
        if (visible.size > 0) {
          // Pick the topmost visible heading.
          const inDoc = items.filter((i) => visible.has(i.id));
          if (inDoc.length > 0) setActiveId(inDoc[0].id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: [0, 1] },
    );
    for (const i of items) {
      const el = document.getElementById(i.id);
      if (el) ob.observe(el);
    }
    observers.push(ob);
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pl-6">
        <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
          On this page
        </div>
        <ul className="space-y-1.5 border-l border-border text-sm">
          {items.map((i) => (
            <li key={i.id} style={{ paddingLeft: (i.level - 2) * 12 + 12 }}>
              <a
                href={`#${i.id}`}
                className={cn(
                  "-ml-px block border-l-2 pl-3 transition",
                  activeId === i.id
                    ? "border-primary font-medium text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {i.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
