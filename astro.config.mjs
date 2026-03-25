import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://printerpicks.vercel.app",
  build: { format: "directory" },
});
