import { urlForImageClient } from "@/lib/utils";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useEffect, useRef, useState } from "react";
import { getHomepageBanners } from "@/lib/api";
import Autoplay from "embla-carousel-autoplay";

export default function HomepageCarousel() {
  const [images, setImages] = useState<SanityAsset>([]);

  const plugin = useRef(Autoplay({ delay: 2000 }));

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
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {images.map((it: any) => (
              <CarouselItem className="aspect-[343/90]">
                <img
                  src={urlForImageClient(it.asset).url()}
                  loading="lazy"
                  alt="Homepage Banner Image"
                  height={600}
                  width={2000}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
