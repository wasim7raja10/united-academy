import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useSanityClient } from "@sanity/astro";
import imageUrlBuilder from "@sanity/image-url";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export const imageBuilder = imageUrlBuilder(useSanityClient());

export function urlForImage(source: any) {
  return imageBuilder.image(source);
}

export function getTitleAndDateFromFilename(filename: string) {
  const [title, date] = filename.split("_");
  return {
    title,
    date: date.replace(".pdf", ""),
  };
}
