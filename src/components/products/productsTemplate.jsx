import React from "react";
import { Button } from "../ui/button";
import Card from "../cards/card";
import { usePathname } from "next/navigation";

const ProductsTemplate = ({ products = [] }) => {
  const params = usePathname();

  const clothingType = params.split("/")[1] || "Shop Your";
  const capitalizeFirstLetter = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };

  return (
    <div className="w-full px-[36px] ">
      <div className=" flex justify-between py-[36px]  text-[#3F4646] text-[22px]">
        <div className="font-bold ">
          {capitalizeFirstLetter(clothingType)} Clothing
        </div>
        <div className="flex gap-2 ">
          <Button variant="destructive" className="text-[#8A33FD] text-[22px]">
            New
          </Button>
          <Button variant="destructive" className="text-[#3F4646] text-[22px]">
            Recommended
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 w-full gap-20">
        {products.map((data, idx) => (
          <div key={data?._id} className="flex justify-center">
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsTemplate;
