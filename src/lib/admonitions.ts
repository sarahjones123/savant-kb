// Convert MkDocs-style admonitions
//
//   !!! tip "Optional title"
//       indented body line
//       another body line
//
// into raw HTML that react-markdown can render via rehype-raw.
const TYPES = new Set(["note", "tip", "warning", "danger", "info"]);

const TITLES: Record<string, string> = {
  note: "Note",
  tip: "Tip",
  warning: "Warning",
  danger: "Danger",
  info: "Info",
};

export function preprocessAdmonitions(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const m = /^!!!\s+([a-z]+)(?:\s+"([^"]*)")?\s*$/.exec(line);
    if (m && TYPES.has(m[1])) {
      const type = m[1];
      const title = m[2] ?? TITLES[type];
      const body: string[] = [];
      i++;
      while (i < lines.length && (lines[i].startsWith("    ") || lines[i].trim() === "")) {
        if (lines[i].trim() === "") {
          body.push("");
        } else {
          body.push(lines[i].slice(4));
        }
        i++;
      }
      // Trim trailing blank lines from body.
      while (body.length && body[body.length - 1] === "") body.pop();
      out.push(
        `<div class="adm adm-${type}">`,
        `<div class="adm-title">${title}</div>`,
        `<div class="adm-body">`,
        "",
        ...body,
        "",
        `</div>`,
        `</div>`,
        "",
      );
      continue;
    }
    out.push(line);
    i++;
  }
  return out.join("\n");
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractToc(md: string): TocItem[] {
  const items: TocItem[] = [];
  const inFence = { v: false };
  for (const line of md.split("\n")) {
    if (/^```/.test(line)) {
      inFence.v = !inFence.v;
      continue;
    }
    if (inFence.v) continue;
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const level = m[1].length;
    const text = m[2].replace(/`/g, "");
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    items.push({ id, text, level });
  }
  return items;
}
