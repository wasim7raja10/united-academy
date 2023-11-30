import { useSanityClient } from "@sanity/astro";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";

export async function getHomepageBanners(): Promise<any> {
	const query = `*[_type == "images" && slug.current == 'homepage-banner'][0].images[]{
    asset
  }`;
	const images = await useSanityClient().fetch(query);
	return images;
}