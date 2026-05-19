// Eagerly import every markdown file as raw text. Vite handles this at build time.
const files = import.meta.glob("./docs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export interface Frontmatter {
  title: string;
  collection: string;
  description: string;
  order: number;
  updated: string;
  icon?: string;
}

export interface Doc {
  slug: string;
  fm: Frontmatter;
  body: string;
}

export interface Collection {
  name: string;
  slug: string;
  description: string;
  icon: string;
  docs: Doc[];
}

// Tiny YAML-ish frontmatter parser. Each line is `key: value` where value
// is a JSON literal (string/number). Good enough for our controlled content.
function parseFrontmatter(raw: string): { fm: Frontmatter; body: string } {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  if (!match) {
    return {
      fm: {
        title: "Untitled",
        collection: "Misc",
        description: "",
        order: 999,
        updated: "",
      },
      body: raw,
    };
  }
  const [, head, body] = match;
  const fm: Record<string, unknown> = {};
  for (const line of head.split("\n")) {
    const m = /^([a-zA-Z_][\w-]*)\s*:\s*(.*)$/.exec(line);
    if (!m) continue;
    const [, k, v] = m;
    try {
      fm[k] = JSON.parse(v);
    } catch {
      fm[k] = v;
    }
  }
  return { fm: fm as unknown as Frontmatter, body };
}

const allDocs: Doc[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.replace(/^\.\/docs\//, "").replace(/\.md$/, "");
    const { fm, body } = parseFrontmatter(raw);
    return { slug, fm, body };
  })
  .sort((a, b) => a.fm.order - b.fm.order);

// Collection metadata (icon + description) keyed by collection name as it
// appears in frontmatter.
const COLLECTION_META: Record<string, { description: string; icon: string; order: number }> = {
  "Getting Started": {
    description:
      "Set up your workspace, build your first workflow, and get the right people invited.",
    icon: "Rocket",
    order: 1,
  },
  "Platform Concepts": {
    description:
      "Workflows, agents, and the governance model that makes Savant audit-ready by default.",
    icon: "Layers",
    order: 2,
  },
  Agents: {
    description:
      "AI-powered nodes for inference, transformation, matching, and document extraction.",
    icon: "Sparkles",
    order: 3,
  },
  "Connectors & Files": {
    description:
      "Read and write data across 70+ databases, warehouses, SaaS apps, and file systems.",
    icon: "Plug",
    order: 4,
  },
  "Templates & Solutions": {
    description:
      "Opinionated, production-ready workflows for finance, ops, and revenue teams.",
    icon: "LayoutTemplate",
    order: 5,
  },
  Reference: {
    description: "Function reference, keyboard shortcuts, and API access.",
    icon: "BookOpen",
    order: 6,
  },
};

export const collections: Collection[] = Object.entries(COLLECTION_META)
  .map(([name, meta]) => ({
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    description: meta.description,
    icon: meta.icon,
    docs: allDocs
      .filter((d) => d.fm.collection === name)
      .sort((a, b) => a.fm.order - b.fm.order),
    _order: meta.order,
  }))
  .sort((a, b) => a._order - b._order)
  .map(({ _order, ...rest }) => rest);

export const docs = allDocs;

export function getDoc(slug: string): Doc | undefined {
  return allDocs.find((d) => d.slug === slug);
}

// Linear ordering of all docs (for prev/next navigation) follows collection order then frontmatter order.
export const docOrder: Doc[] = collections.flatMap((c) => c.docs);

export function getPrevNext(slug: string): { prev?: Doc; next?: Doc } {
  const idx = docOrder.findIndex((d) => d.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? docOrder[idx - 1] : undefined,
    next: idx < docOrder.length - 1 ? docOrder[idx + 1] : undefined,
  };
}
