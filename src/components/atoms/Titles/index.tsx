import React from "react";

const HeroTitle = () => {
  return (
    <h1 className="text-center lg:text-left text-[40px] lg:text-[56px] font-light text-secondary max-w-72 lg:max-w-96">
      Next generation digital banking
    </h1>
  );
};
const MediumTitle = () => {
  return (
    <h2 className="text-center lg:text-left text-[32px] lg:text-[40px] font-light text-secondary max-w-72 lg:max-w-max">
      Why choose Easybank?
    </h2>
  );
};
const SubTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-center lg:text-left text-xl lg:text-[24px] font-light text-secondary ">
      {title}
    </h3>
  );
};
const TextTitle = ({ text }: { text: string }) => {
  return (
    <h3 className="text-center lg:text-left text-xl lg:text-[16px] font-light text-secondary ">
      {text}
    </h3>
  );
};
const SubText = ({ text }: { text: string }) => {
  return (
    <div>
      <p className="text-base text-gray font-light text-center lg:text-left max-w-72 lg:max-w-72">
        {text ??
          "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."}
      </p>
    </div>
  );
};
export { HeroTitle, MediumTitle, SubTitle, TextTitle, SubText };
