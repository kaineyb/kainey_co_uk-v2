import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import vue from "@astrojs/vue";

// Code Hike

// https://astro.build/config
export default defineConfig({
  site: "https://kainey.pages.dev/",
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
    // syntaxHighlight: "shiki",
  },
  integrations: [react(), mdx(), vue()],
  output: "server",
});
