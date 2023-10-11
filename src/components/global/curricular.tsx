"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Nursery_Lower,
  upperKg,
  classItoX,
  classXitoXii,
} from "@/shared/data/dummy/curricular";

export const Curricular = () => {
  return (
    <div className=" py-10 ">
      <Tabs defaultValue="nursery-kg" className="">
        <TabsList>
          <div className=" flex gap-x-1 gap-y-3 mb-10 sm:mb-0 flex-wrap justify-center ">
            <TabsTrigger value="nursery-kg" className=" bg-white p-2 hover:outline outline-blue-700 outline-2">
              Class: Nursery – Lower KG
            </TabsTrigger>
            <TabsTrigger value="upper-kg" className=" bg-white p-2 hover:outline outline-blue-700 outline-2 " >Class: Upper KG</TabsTrigger>
            <TabsTrigger value="class-i-x" className=" bg-white p-2 hover:outline outline-blue-700 outline-2 ">Class: I-X </TabsTrigger>
            <TabsTrigger value="class-xi-xii" className=" bg-white p-2 hover:outline outline-blue-700 outline-2 ">Class: XI-XII </TabsTrigger>
          </div>
        </TabsList>
        <div>
          <TabsContent
            value="nursery-kg"
            className=" my-5 px-10 py-5 bg-white rounded-md shadow-sm "
          >
            <ul className= "list-disc text-base sm:text-xl text-gray-600">
              {Nursery_Lower.map((item, index) => (
                <li key={index} className="">
                  {item}
                </li>
              ))}
            </ul>
          </TabsContent>
        </div>
        <TabsContent
          value="upper-kg"
          className=" my-5 px-10 py-5 bg-white rounded-md shadow-sm "
        >
          <ul className="list-disc text-base sm:text-xl text-gray-600">
            {upperKg.map((item, index) => (
              <li key={index} className="">
                {item}
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent
          value="class-i-x"
          className=" my-5 px-10 py-5 bg-white rounded-md shadow-sm "
        >
          <ul className="list-disc text-base sm:text-xl text-gray-600">
            {classItoX.map((item, index) => (
              <li key={index} className="">
                {item}
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent
          value="class-xi-xii"
          className=" my-5 px-10 py-5 bg-white rounded-md shadow-sm "
        >
          <ul className="list-disc text-base sm:text-xl text-gray-600 ">
            {classXitoXii.map((item, index) => (
              <li key={index} className="">
                {item}
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
};
