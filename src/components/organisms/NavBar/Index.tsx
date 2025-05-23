import React from "react";
import NavTitle from "../../atoms/NavTitle/index";
import Button from "@/components/atoms/Button";
import Image from "@/components/atoms/Image";

const Index = () => {
  return (
    <nav className="flex flex-row items-center justify-around bg-white shadow-md h-20 w-full">
      <div>
        <Image src="/logo.png" alt="logo" />
      </div>
      <div className="flex flex-row items-center justify-between w-1/3">
        <NavTitle title="Home" link="/home" />
        <NavTitle title="About" link="#" />
        <NavTitle title="Contact" link="#" />
        <NavTitle title="Blog" link="#" />
        <NavTitle title="Carrers" link="#" />
      </div>
      <div>
        <Button text="Request Invite" />
      </div>
    </nav>
  );
};

export default Index;
