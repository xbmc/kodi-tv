/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}", "plugins/**/*.test.{js,ts}"],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
