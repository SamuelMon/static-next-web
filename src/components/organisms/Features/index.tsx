import React from "react";
import Card from "@/components/molecules/Card";

const features = [
  {
    title: "Online banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: "material-symbols:online-prediction",
  },
  {
    title: "Simple budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    icon: "material-symbols-light:attach-money",
  },
  {
    title: "Fast on-boarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: "material-symbols-light:money",
  },
  {
    title: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: "material-symbols-light:money-bag-outline-rounded",
  },
];

const Index = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-5">
      {features.map((feature, index) => (
        <Card
          key={index}
          title={feature.title}
          text={feature.text}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default Index;
