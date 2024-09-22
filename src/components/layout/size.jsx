"use client";
import { size } from "@/common/constants";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordian";
import { Button } from "../ui/button";
import useStore from "@/store/store";

const Size = () => {
  const { setSizes, sizes } = useStore();
  const handleSizes = (value) => {
    setSizes(
      sizes.includes(value)
        ? sizes.filter((i) => i !== value)
        : [...sizes, value]
    );
  };
  return (
    <div className="text-[#807D7E] border ">
      <Accordion type="single" collapsible className="w-full text-[16px] ">
        <AccordionItem value="Size">
          <AccordionTrigger className="font-bold text-[22px] py-[26px] px-[30px] ">
            Size
          </AccordionTrigger>
          <AccordionContent className="px-[30px] py-[26px]  border-t">
            <div className="grid grid-cols-3 gap-6">
              {size.map((data, idx) => (
                <Button
                  variant="outline"
                  key={idx}
                  className={`my-2 px-[15px] text-[#3C4242] rounded-[8px] ${
                    sizes.includes(data?.value)
                      ? "bg-accent text-accent-foreground"
                      : ""
                  } `}
                  onClick={() => handleSizes(data?.value)}
                >
                  {data?.size}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Size;
