/**
 * Shared utility functions for blog post preparation.
 */

const WPM = 265;

/**
 * Strip markdown artifacts from an excerpt string.
 * Removes frontmatter delimiters, markdown headings, image syntax,
 * link syntax, bold/italic markers, and excessive whitespace.
 */
export function cleanExcerpt(raw: string, maxLength = 300): string {
  let text = raw;
  // Remove frontmatter block (--- ... ---)
  text = text.replace(/^---[\s\S]*?---\s*/m, "");
  // Remove markdown image syntax ![alt](url)
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, "");
  // Remove markdown links but keep text [text](url) -> text
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, "");
  // Remove markdown headings (## etc)
  text = text.replace(/^#{1,6}\s+/gm, "");
  // Remove bold/italic markers
  text = text.replace(/(\*{1,3}|_{1,3})/g, "");
  // Remove horizontal rules
  text = text.replace(/^[-*_]{3,}\s*$/gm, "");
  // Remove blockquote markers
  text = text.replace(/^>\s*/gm, "");
  // Collapse multiple whitespace/newlines into single space
  text = text.replace(/\s+/g, " ").trim();
  // Truncate to maxLength and end at a word boundary
  if (text.length > maxLength) {
    text = text.slice(0, maxLength);
    const lastSpace = text.lastIndexOf(" ");
    if (lastSpace > maxLength * 0.8) {
      text = text.slice(0, lastSpace);
    }
    text += "\u2026";
  }
  return text;
}

/**
 * Calculate read time in minutes given raw markdown body text.
 */
export function calcReadTime(body: string | undefined): string {
  const wordCount = body?.split(/\s+/).length || 0;
  return Math.ceil(wordCount / WPM).toString();
}

/**
 * Prepare a blog collection entry into the shape expected by BlogPostCard.
 */
export function prepareBlogPost(entry: any) {
  return {
    excerpt: cleanExcerpt(entry.body || ""),
    timeToRead: calcReadTime(entry.body),
    fields: { slug: `/article/${entry.id}` },
    frontmatter: {
      author: entry.data.author || "",
      date: new Date(entry.data.date).toISOString(),
      tags: entry.data.tags || [],
      featured_image: entry.data.featured_image || undefined,
      title: entry.data.title,
    },
  };
}
