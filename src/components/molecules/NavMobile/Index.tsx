import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import NavTitle from "../../atoms/NavTitle";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  //baseline-close
  return (
    <div className="flex flexrow justify-between items-center bg-white shadow-md h-16 w-full px-5 relative">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <button
        className="hover:cursor-pointer hover:bg-gray-200 rounded-full p-2 text-secondary hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          icon={`${isOpen ? "ic:baseline-close" : "ic:outline-menu"}`}
          width="24"
          height="24"
          color="black"
        />
      </button>
      {isOpen && (
        <div className="flex flex-col items-center bg-white shadow-md h- w-5/6 absolute top-20 right-8 rounded-2xl">
          <NavTitle title="Home" link="/home" />
          <NavTitle title="About" link="#" />
          <NavTitle title="Contact" link="#" />
          <NavTitle title="Blog" link="#" />
          <NavTitle title="Carrers" link="#" />
        </div>
      )}
    </div>
  );
};

export default Index;
