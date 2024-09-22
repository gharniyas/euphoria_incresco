"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordian";
import { dress_styles } from "@/common/constants";
import useStore from "@/store/store";
import { ChevronDown } from "lucide-react";

const DressStyle = () => {
  const { setDressStyles, dressStyles } = useStore();
  const handleDressStyles = (value) => {
    setDressStyles(
      dressStyles.includes(value)
        ? dressStyles.filter((i) => i !== value)
        : [...dressStyles, value]
    );
  };
  return (
    <div className="text-[#807D7E] border">
      <Accordion
        type="single"
        collapsible
        className="w-full text-[16px] border-b"
      >
        <AccordionItem value="styles">
          <AccordionTrigger className="font-bold text-[22px] py-[26px] px-[30px] ">
            Dress Style
          </AccordionTrigger>
          <AccordionContent className="px-[30px] py-[26px]  border-t">
            <div>
              {dress_styles?.map((data, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between  py-[16px] px-[30px] cursor-pointer ${
                    dressStyles.includes(data?.value) && "text-blue-600 "
                  }`}
                  onClick={() => handleDressStyles(data?.value)}
                >
                  <div className="w-full text-[16px] ">{data?.title}</div>
                  <ChevronDown className="-rotate-90" />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DressStyle;
