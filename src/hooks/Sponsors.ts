export interface Sponsor {
  name: string;
  slug: string;
  sponsor_type: "Financial" | "Infrastructure";
  image: { alt: string; src: string; title: string };
  body: string;
}
