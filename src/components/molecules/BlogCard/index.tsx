import React from "react";
import Image from "@/components/atoms/Image";
import { TextTitle } from "@/components/atoms/Titles";

const Index = ({}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-[255px] h-[400px] bg-white rounded-lg  shadow-lg">
        <div className="h-1/2">
          <Image src="/blog1.png" alt="blog1" />
        </div>
        <div className="flex flex-col items-start justify-center w-full h-1/  p-4 gap-2">
          <h5 className="text-[10px] text-gris font-extralight">
            By Claire Robinson
          </h5>
          <TextTitle text="Receive money in any currency with no fees" />

          <p className="text-[13px] text-gris font-light h-[72px] text-ellipsis overflow-hidden">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Reprehenderit deserunt
            tenetur praesentium, libero nemo, possimus accusamus sequi, nobis
            alias aliquid quod vel totam numquam obcaecati distinctio velit
            magni omnis non!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
