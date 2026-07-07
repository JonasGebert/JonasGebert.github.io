import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content");

/** Liest eine Markdown-Datei aus /content und rendert sie zu HTML (Build-Zeit). */
export function renderMarkdownFile(relativePath: string): string {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, relativePath), "utf-8");
  return marked.parse(raw, { async: false }) as string;
}

/** Listet alle Zeugnis-Markdown-Slugs für die statische Generierung. */
export function listZeugnisSlugs(): string[] {
  return fs
    .readdirSync(path.join(CONTENT_DIR, "zeugnisse"))
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
