import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanityIntegration from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sanityIntegration({
      projectId: "wc1zl37u",
      dataset: "production",
      apiVersion: "2023-09-23",
      useCdn: true,
    }),
  ],
});
