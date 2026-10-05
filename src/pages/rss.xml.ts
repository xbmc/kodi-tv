import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import siteConfig from "../config/site";

function stripMarkdown(text: string): string {
  return text
    .replace(/!\[.*?\]\(.*?\)/g, "") // remove images
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1") // links -> text
    .replace(/#{1,6}\s+/g, "") // headings
    .replace(/(\*{1,3}|_{1,3})(.*?)\1/g, "$2") // bold/italic
    .replace(/`{1,3}[^`]*`{1,3}/g, "") // inline code
    .replace(/^[-*+]\s+/gm, "") // unordered lists
    .replace(/^\d+\.\s+/gm, "") // ordered lists
    .replace(/^>\s+/gm, "") // blockquotes
    .replace(/^---+$/gm, "") // horizontal rules
    .replace(/\n{2,}/g, " ") // collapse multiple newlines
    .replace(/\n/g, " ") // remaining newlines
    .replace(/\s{2,}/g, " ") // collapse whitespace
    .trim();
}

function buildContentHtml(
  post: {
    data: { featured_image?: { src?: string; title?: string; alt?: string } | null };
    rendered?: { html?: string };
  },
  siteUrl: string,
): string {
  const parts: string[] = [];

  if (post.data.featured_image?.src) {
    const imgSrc = post.data.featured_image.src.startsWith("http")
      ? post.data.featured_image.src
      : `${siteUrl}${post.data.featured_image.src}`;
    const title = post.data.featured_image.title || "";
    const alt = post.data.featured_image.alt || "";
    parts.push(
      `<figure>` +
        `<img title="${title}" alt="${alt}" src="${imgSrc}" />` +
        `</figure>`,
    );
  }

  if (post.rendered?.html) {
    parts.push(post.rendered.html);
  }

  return parts.join("\n");
}

export async function GET(context) {
  const blog = await getCollection("blog");
  const sorted = blog.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  const siteUrl = (context.site || siteConfig.siteMetadata.siteUrl)
    .toString()
    .replace(/\/$/, "");
  const items = sorted.slice(0, 20);

  return rss({
    title: "Kodi News",
    description: siteConfig.siteMetadata.description,
    site: context.site || siteConfig.siteMetadata.siteUrl,
    xmlns: {
      dc: "http://purl.org/dc/elements/1.1/",
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    items: items.map(post => {
      const plainText = stripMarkdown(post.body || "");
      const description =
        plainText.length > 160
          ? plainText.slice(0, 160).trimEnd() + "\u2026"
          : plainText;

      return {
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description,
        link: `/article/${post.id}`,
        categories: post.data.tags || [],
        content: buildContentHtml(post, siteUrl),
        customData: post.data.author
          ? `<dc:creator><![CDATA[${post.data.author}]]></dc:creator>`
          : undefined,
      };
    }),
  });
}
