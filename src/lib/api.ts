import { useSanityClient } from "@sanity/astro";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";

export const client = useSanityClient();

export async function getHomepageBanners(): Promise<SanityAsset> {
  const query = `*[_type == "images" && slug.current == 'homepage-banner'][0].images[]{
    asset
  }`;
  const images = await client.fetch<SanityAsset>(query);
  return images;
}

export async function getSyllabus(): Promise<any> {
  const query = `*[_type == "pdf" && slug.current == 'syllabus'][0].pdf[] {
		asset->{
			url,
			originalFilename
		}
	}`;
  const syllabus = await client.fetch<any>(query);
  return syllabus;
}

export async function getAcademicCalendarAndFeesStructure(): Promise<any> {
  const query = `*[_type == "pdf" && (slug.current == 'academic-calendar' || slug.current == 'fees-structure')][].pdf[] {
    "url": asset->url
  }`;
  const documents = await client.fetch<any>(query);
  const urls = documents.map((doc: any) => doc.url);
  return urls;
}
