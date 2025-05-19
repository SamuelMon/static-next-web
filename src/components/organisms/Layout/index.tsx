import React from "react";
// import NavBar from "@/components/organisms/NavBar/";
import NavMobile from "@/components/molecules/NavMobile";

import { ReactNode } from "react";

const Index = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="hidden lg:block">{/* <NavBar /> */}</div>
      <div className="block lg:hidden">
        <NavMobile />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Index;
