import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: process.env.PUBLIC_SITEURL || "https://kodi.tv",
  publicDir: "static",
  trailingSlash: "always",
  adapter: netlify(),
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: page => !page.includes("/admin"),
    }),
  ],
  image: {
    domains: [],
  },
  vite: {
    envPrefix: ["PUBLIC_", "GATSBY_"],
  },
});
