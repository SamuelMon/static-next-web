import React from "react";
import HeroTitle from "@/components/molecules/HeroMolecule";
import HeroImage from "@/components/molecules/HeroImage";
const Index = () => {
  return (
    <div className=" block lg:flex lg:flex-row-reverse justify-between items-center w-full">
      <div className="lg:w-1/2 flex flex-col gap-5 justify-end items-end">
        <HeroImage />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-5 items-center justify-center">
        <HeroTitle />
      </div>
    </div>
  );
};

export default Index;
