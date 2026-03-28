export interface News {
  excerpt: string;
  timeToRead: string;
  fields: { slug: string };
  frontmatter: {
    author: string;
    date: string;
    tags: string[];
    featured_image: {
      alt: string;
      src: string;
      title: string;
    };
    title: string;
  };
}
