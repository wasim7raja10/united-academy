import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "wc1zl37u",
  dataset: "production",
  apiVersion: "2023-09-23",
  useCdn: true,
});

export default sanityClient;
