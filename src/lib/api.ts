import { useSanityClient } from "@sanity/astro";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";

export async function getHomepageBanners(): Promise<SanityAsset> {
  const query = `*[_type == "images" && slug.current == 'homepage-banner'][0].images[]{
    asset
  }`;
  const images = await useSanityClient().fetch<SanityAsset>(query);
  return images;
}

export async function getSyllabus(): Promise<any> {
  const query = `*[_type == "pdf" && slug.current == 'syllabus'][0].pdf[] {
		asset->{
			url,
			originalFilename
		}
	}`;
  const syllabus = await useSanityClient().fetch<any>(query);
  return syllabus;
}
