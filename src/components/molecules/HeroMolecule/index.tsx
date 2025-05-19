import React from "react";
import { HeroTitle, SubText } from "@/components/atoms/Titles";
import Button from "@/components/atoms/Button";

const Index = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <HeroTitle />
      <SubText text="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more." />
      <Button text="Request Invite." />
    </div>
  );
};

export default Index;
