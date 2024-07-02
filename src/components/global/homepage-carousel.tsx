import { urlForImageClient } from "@/lib/utils";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useEffect, useState } from "react";
import { getHomepageBanners } from "@/lib/api";

export default function HomepageCarousel() {
  const [images, setImages] = useState<SanityAsset>([]);

  useEffect(() => {
    getHomepageBanners().then((images) => setImages(images));
  }, []);
  
  return (
    <div className=" max-w-[1800px] mx-auto">
      <section
        className="splide"
        id="carousel"
        aria-label="Homepage Image Carousel"
      >
        <Carousel>
          <CarouselContent>
            {images.map((it: any) => (
              <CarouselItem className="aspect-[343/90]">
                <img
                  src={urlForImageClient(it.asset).url()}
                  loading="lazy"
                  alt="Homepage Banner Image"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
