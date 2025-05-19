import React from "react";

interface IndexProps {
  text?: string;
}
const Index = ({ text }: IndexProps) => {
  return (
    <button className="w-40 h-11 gradient font-extrabold text-white text-sm rounded-full shadow hover:scale-105 cursor-pointer  transition-all duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Index;
