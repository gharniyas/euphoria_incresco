"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import React from "react";

const Combos = () => {
  const params = usePathname();
  const clothingType = params.split("/")[1];
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="w-full ">
      <div className="flex justify-between  py-[36px] text-[#3F4646] text-[22px]">
        <div className="font-bold">{capitalizeFirstLetter(clothingType)}</div>
        <div className="flex gap-2">
          <Button variant="destructive" className="text-[#3F4646] text-[22px]">
            New
          </Button>
          <Button variant="destructive" className="text-[#3F4646] text-[22px]">
            Recommended
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          variant="outline"
          className="border-none text-[#807D7E] text-[22px] py-14 hover:bg-white w-fit"
          disabled={true}
        >
          No More Products
        </Button>
      </div>
    </div>
  );
};

export default Combos;
