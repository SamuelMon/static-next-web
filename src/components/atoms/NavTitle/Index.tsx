import Link from "next/link";
import React from "react";

interface IndexProps {
  title: string;
  link: string;
}

const Index = ({ title, link }: IndexProps) => {
  return (
    <Link href={link}>
      <div className="h-16 flex items-center justify-center text-secondary text-2xl  lg:text-base lg:text-gray hover:text-secondary hover:cursor-pointer hover:border-b-2 border-primary">
        <h1 className="text-base font-normal">{title}</h1>
      </div>
    </Link>
  );
};

export default Index;
