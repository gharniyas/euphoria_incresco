"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordian";

import { color } from "@/common/constants";
import useStore from "@/store/store";
const Colors = () => {
  const { setColors, colors } = useStore();
  const handleColors = (value) => {
    setColors(
      colors.includes(value)
        ? colors.filter((i) => i !== value)
        : [...colors, value]
    );
  };
  return (
    <div className="text-[#807D7E] border ">
      <Accordion type="single" collapsible className="w-full text-[16px] ">
        <AccordionItem value="Colors">
          <AccordionTrigger className="font-bold text-[22px] py-[26px] px-[30px] ">
            Colors
          </AccordionTrigger>
          <AccordionContent className="px-[30px] py-[26px]  border-t">
            <div className="grid grid-cols-4 items-center gap-2 ">
              {color.map((data, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-4 pt-2"
                  onClick={() => handleColors(data?.value)}
                >
                  <div
                    style={{ backgroundColor: data?.color }}
                    className={`rounded-[12px] w-9 h-9 border  ${
                      colors.includes(data?.value)
                        ? "border-black"
                        : "border-[#F4F1F1]"
                    }`}
                  ></div>
                  <div className="px-1"> {data?.name}</div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Colors;
