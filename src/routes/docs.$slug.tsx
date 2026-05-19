import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getDoc, getPrevNext } from "@/content/catalog";
import { extractToc } from "@/lib/admonitions";
import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";
import { ArticleToc } from "@/components/docs/ArticleToc";
import { PrevNext } from "@/components/docs/PrevNext";
import { CalendarDays, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/docs/$slug")({
  loader: ({ params }) => {
    const doc = getDoc(params.slug);
    if (!doc) throw notFound();
    return doc;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { fm } = loaderData;
    const title = `${fm.title} — Savant Docs`;
    return {
      meta: [
        { title },
        { name: "description", content: fm.description },
        { property: "og:title", content: title },
        { property: "og:description", content: fm.description },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: fm.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="py-24 text-center">
      <h1 className="text-2xl font-semibold">Article not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        That doc doesn't exist (yet).{" "}
        <Link to="/docs" className="text-primary underline-offset-4 hover:underline">
          Back to docs
        </Link>
      </p>
    </div>
  ),
  component: DocArticle,
});

function DocArticle() {
  const doc = Route.useLoaderData();
  const toc = extractToc(doc.body);
  const { prev, next } = getPrevNext(doc.slug);

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-8">
      <article className="min-w-0">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <Link to="/docs" className="hover:text-foreground">Docs</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{doc.fm.collection}</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{doc.fm.title}</span>
        </nav>

        <header className="mt-4 mb-8 border-b border-border pb-6">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            {doc.fm.collection}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {doc.fm.title}
          </h1>
          {doc.fm.description && (
            <p className="mt-3 text-base text-muted-foreground">{doc.fm.description}</p>
          )}
          {doc.fm.updated && (
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" /> Updated {doc.fm.updated}
            </p>
          )}
        </header>

        <MarkdownRenderer source={doc.body} />

        <PrevNext prev={prev} next={next} />
      </article>

      <ArticleToc items={toc} />
    </div>
  );
}
