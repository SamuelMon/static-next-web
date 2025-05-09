import React from "react";
import Icon from "@/components/atoms/Icon";
import { SubTitle, SubText } from "@/components/atoms/Titles";

const Index = ({
  title = "",
  text = "",
  icon = "material-symbols:add-card-outline",
}: {
  title: string;
  text: string;
  icon: string;
}) => {
  return (
    <div>
      <div className="flex flex-col items-start justify-center w-full gap-6">
        <Icon icon={icon} />
        <SubTitle title={title} />
        <SubText text={text} />
      </div>
    </div>
  );
};

export default Index;
