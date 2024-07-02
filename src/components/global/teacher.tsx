import { teachers } from "@/shared/data/dummy/teachers";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Teacher() {
  return (
    <div className="space-y-6 pt-12">
      <h1 className="flex justify-center sm:font-bold font-medium text-2xl sm:text-3xl text-primary text-center">
        Teachers
      </h1>
      <div className="mx-10">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {teachers.map((teacher, index) => (
              <CarouselItem className="sm:basis-1/3 md:basis-1/4" key={index}>
                <div
                  key={teacher.id}
                  className="grid place-content-center bg-white rounded-md shadow-sm max-w-xs"
                >
                  <div className="flex py-2 justify-center w-full">
                    <img
                      src={teacher.imageSrc}
                      className=" h-28 w-28  rounded-full"
                      alt={teacher.name}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {teacher.name}
                    </h2>
                    <p className="text-gray-600">{teacher.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
