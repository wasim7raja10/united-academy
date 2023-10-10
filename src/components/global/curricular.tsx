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
          <div className=" flex gap-x-1 flex-wrap justify-center ">
            <TabsTrigger value="nursery-kg">
              Class: Nursery – Lower KG
            </TabsTrigger>
            <TabsTrigger value="upper-kg">Class: Upper KG</TabsTrigger>
            <TabsTrigger value="class-i-x">Class: I-X </TabsTrigger>
            <TabsTrigger value="class-xi-xii">Class: XI-XII </TabsTrigger>
          </div>
        </TabsList>
        <div>
          <TabsContent
            value="nursery-kg"
            className=" my-5 px-10 py-5 bg-white rounded-md shadow-sm "
          >
            <ul class="list-disc">
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
          <ul class="list-disc">
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
          <ul class="list-disc">
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
          <ul class="list-disc">
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
