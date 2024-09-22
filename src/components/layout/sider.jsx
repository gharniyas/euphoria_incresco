import React from "react";
import Filter from "./filter";
import Price from "./price";
import Colors from "./colors";
import Size from "./size";
import DressStyle from "./dress_style";

const Sider = () => {
  return (
    <div className="w-[480px]">
      <Filter />
      <Price />
      <Colors />
      <Size />
      <DressStyle />
    </div>
  );
};

export default Sider;
