import React from "react";
import { Icon } from "@iconify/react";

const Index = () => {
  return (
    <div className="flex flexrow justify-between items-center bg-white shadow-md h-16 w-full px-5">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <button className="hover:cursor-pointer hover:bg-gray-200 rounded-full p-2 text-secondary hover:text-primary">
        <Icon icon="ic:outline-menu" width="24" height="24" color="black" />
      </button>
      <button className="hover:cursor-pointer hover:bg-gray-200 rounded-full p-2 text-secondary hover:text-primary">
        <Icon icon="ic:baseline-close" width="24" height="24" color="black" />
      </button>
    </div>
  );
};

export default Index;
