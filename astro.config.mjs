import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: process.env.PUBLIC_SITEURL || "https://kodi.tv",
  publicDir: "static",
  adapter: netlify(),
  integrations: [
    react(),
    sitemap({
      filter: page => !page.includes("/admin"),
    }),
  ],
  image: {
    domains: [],
  },
  vite: {
    envPrefix: ["PUBLIC_", "GATSBY_"],
    plugins: [tailwindcss()],
  },
});
