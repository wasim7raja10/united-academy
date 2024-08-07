import { useSanityClient } from "@sanity/astro";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";
import sanityClient from "./sanity-react";

export const client = useSanityClient();

export async function getHomepageBanners(): Promise<SanityAsset> {
  const query = `*[_type == "images" && slug.current == 'homepage-banner'][0].images[]{
    asset
  }`;
  const images = await sanityClient.fetch<SanityAsset>(query);
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

export async function getSchoolTimingAndRulesRegulations(): Promise<any> {
  const query = `*[_type == "pdf" && (slug.current == 'school-timing' || slug.current == 'rules-and-regulations')][].pdf[] {
    "url": asset->url
  }`;
  const documents = await client.fetch<any>(query);
  const urls = documents.map((doc: any) => doc.url);
  return urls;
}

export async function getNotices(): Promise<any> {
  const query = `*[_type == "pdf" && slug.current == 'notice'][].pdf[] | order(date desc) {
    "fileName": asset->originalFilename,
    "url": asset->url
  }`;
  const notices = await client.fetch<any>(query);
  return notices;
}

export async function getPrincipalImage(): Promise<SanityAsset> {
  const query = `*[_type == "images" && slug.current == 'principal'][0].images[0]{
    asset
  }`;
  const images = await client.fetch<SanityAsset>(query);
  return images;
}

export async function getMissionVisionImages(): Promise<SanityAsset> {
  const query = `*[_type == "images" && slug.current == 'mission-vision'][0].images[]{
    asset
  }`;
  const images = await client.fetch<SanityAsset>(query);
  return images;
}
