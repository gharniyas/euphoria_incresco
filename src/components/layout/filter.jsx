"use client";
import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { filters } from "@/common/constants";
import { ChevronDown } from "lucide-react";
import useStore from "@/store/store";

const Filter = () => {
  const { setCategories, categories } = useStore();
  const handleCategory = (value) => {
    setCategories(
      categories.includes(value)
        ? categories.filter((i) => i !== value)
        : [...categories, value]
    );
  };
  return (
    <div className="w-full text-[#807D7E]  border border-b ">
      <div className="w-full flex justify-between  items-center border-b  px-[30px] py-[26px]">
        <div className="font-bold text-[22px]">Filter</div>
        <SlidersHorizontal className="-rotate-90 " />
      </div>
      <div className="py-[26px]">
        {filters.map((data, idx) => (
          <div
            key={idx}
            className={`flex justify-between  py-[16px] px-[30px] cursor-pointer ${
              categories.includes(data?.value) && "text-blue-600 "
            }`}
            onClick={() => handleCategory(data?.value)}
          >
            <div className="w-full text-[16px] ">{data?.title}</div>
            <ChevronDown className="-rotate-90" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
