"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordian";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import useStore from "@/store/store";

const Price = () => {
  const { priceRange, setPriceRange } = useStore();

  const handlePrice = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="text-[#807D7E] border ">
      <Accordion type="single" collapsible className="w-full text-[16px] ">
        <AccordionItem value="Price">
          <AccordionTrigger className="font-bold text-[22px] py-[26px] px-[30px] ">
            Price
          </AccordionTrigger>
          <AccordionContent className="px-[30px] py-[26px]  border-t">
            <Slider
              value={priceRange}
              min={0}
              max={1000}
              step={1}
              className="my-[40px]"
              onValueChange={handlePrice}
            />

            <div className="flex justify-between items-center">
              <Button variant="outline" className="my-2 px-[39px]">
                ${priceRange[0]}
              </Button>
              <Button variant="outline" className="my-2 px-[39px]">
                ${priceRange[1]}
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Price;
