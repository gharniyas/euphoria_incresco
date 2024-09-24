import React from "react";
import Filter from "./filter";
import Price from "./price";
import Colors from "./colors";
import Size from "./size";
import DressStyle from "./dress_style";
import SortingProducts from "./sorting";

const Sider = () => {
  return (
    <div className="w-[480px]">
      <Filter />
      <Price />
      <Colors />
      <Size />
      <DressStyle />
      <SortingProducts />
    </div>
  );
};

export default Sider;
