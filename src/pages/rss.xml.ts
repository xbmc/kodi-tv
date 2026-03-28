import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import siteConfig from "../config/site";

export async function GET(context) {
  const blog = await getCollection("blog");
  const sorted = blog.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return rss({
    title: siteConfig.siteMetadata.title,
    description: siteConfig.siteMetadata.description,
    site: context.site || siteConfig.siteMetadata.siteUrl,
    items: sorted.slice(0, 20).map(post => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: (post.body || "").slice(0, 300),
      link: `/article/${post.id}`,
    })),
  });
}
