import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { Check, Copy, Link2 } from "lucide-react";
import { preprocessAdmonitions } from "@/lib/admonitions";
import { cn } from "@/lib/utils";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card/80 text-muted-foreground opacity-0 backdrop-blur transition group-hover:opacity-100 hover:text-foreground"
      aria-label="Copy code"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

export function MarkdownRenderer({ source, className }: { source: string; className?: string }) {
  const processed = preprocessAdmonitions(source);
  return (
    <div className={cn("prose-doc", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          h1: ({ node, ...props }) => <h1 {...props} />,
          h2: ({ node, id, children, ...props }) => (
            <h2 id={id} {...props} className="group/heading scroll-mt-24">
              <a
                href={`#${id}`}
                className="absolute -ml-7 mt-1.5 text-muted-foreground opacity-0 transition group-hover/heading:opacity-100"
                aria-label="Anchor"
              >
                <Link2 className="h-4 w-4" />
              </a>
              {children}
            </h2>
          ),
          h3: ({ node, id, children, ...props }) => (
            <h3 id={id} {...props} className="group/heading scroll-mt-24">
              <a
                href={`#${id}`}
                className="absolute -ml-6 mt-1 text-muted-foreground opacity-0 transition group-hover/heading:opacity-100"
                aria-label="Anchor"
              >
                <Link2 className="h-3.5 w-3.5" />
              </a>
              {children}
            </h3>
          ),
          pre: ({ node, children, ...props }) => {
            // Extract raw text for copy button
            const codeEl: any = Array.isArray((node as any)?.children)
              ? (node as any).children[0]
              : null;
            const raw =
              codeEl?.children?.map((c: any) => c.value ?? "").join("") ?? "";
            return (
              <div className="group relative my-5">
                <pre {...props} className="overflow-x-auto rounded-lg border border-border bg-[var(--code-bg)] p-4 text-[0.85rem] leading-relaxed">
                  {children}
                </pre>
                {raw && <CopyButton text={raw} />}
              </div>
            );
          },
          code: ({ node, className, children, ...props }) => {
            const isBlock = (className ?? "").includes("language-");
            if (isBlock) {
              return (
                <code className={cn(className, "font-mono")} {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code
                className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
                {...props}
              >
                {children}
              </code>
            );
          },
          a: ({ node, href, children, ...props }) => {
            const external = href?.startsWith("http");
            return (
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                {...props}
              >
                {children}
              </a>
            );
          },
          table: ({ node, ...props }) => (
            <div className="my-5 overflow-x-auto rounded-lg border border-border">
              <table {...props} className="w-full text-sm" />
            </div>
          ),
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
}
