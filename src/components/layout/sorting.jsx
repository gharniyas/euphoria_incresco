"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordian";
import useStore from "@/store/store";
import { ChevronDown } from "lucide-react";

const SortingProducts = () => {
  const { setSortingOrder, setSorting, sorting, sortingOrder } = useStore();
  console.log(sorting, sortingOrder, "help");

  const handleSorting = (sortingType, field) => {
    let newOrder =
      sortingType === "Min-Max" || sortingType === "Ascending" ? 1 : -1;

    if (sorting === field && sortingOrder === newOrder) {
      setSorting(null);
      setSortingOrder(null);
    } else {
      setSorting(field);
      setSortingOrder(newOrder);
    }
  };

  return (
    <div className="text-[#807D7E] border">
      <Accordion type="single" collapsible className="w-full text-[16px] ">
        <AccordionItem value="styles">
          <AccordionTrigger className="font-bold text-[22px] py-[26px] px-[30px] ">
            Sort By
          </AccordionTrigger>
          <AccordionContent className="px-[30px] py-[26px] border-t">
            <Accordion
              type="single"
              collapsible
              className="w-full text-[16px] "
            >
              <AccordionItem value="styles">
                <AccordionTrigger className="text-[22px] py-[26px] px-[30px] ">
                  Price
                </AccordionTrigger>
                <AccordionContent className="px-[30px] py-[26px]  border-t">
                  <div>
                    <div
                      className={`flex justify-between py-[16px] px-[30px] cursor-pointer ${
                        sorting === "price" && sortingOrder === 1
                          ? "text-blue-500"
                          : ""
                      }`}
                      onClick={() => handleSorting("Min-Max", "price")}
                    >
                      <div className="w-full text-[16px]">Min-Max</div>
                      <ChevronDown className="-rotate-90" />
                    </div>
                    <div
                      className={`flex justify-between py-[16px] px-[30px] cursor-pointer ${
                        sorting === "price" && sortingOrder === -1
                          ? "text-blue-500"
                          : ""
                      }`}
                      onClick={() => handleSorting("Max-Min", "price")}
                    >
                      <div className="w-full text-[16px]">Max-Min</div>
                      <ChevronDown className="-rotate-90" />
                    </div>
                  </div>
                </AccordionContent>

                <AccordionTrigger className="text-[22px] py-[26px] px-[30px] ">
                  Products
                </AccordionTrigger>
                <AccordionContent className="px-[30px] py-[26px]  border-t">
                  <div>
                    <div
                      className={`flex justify-between py-[16px] px-[30px] cursor-pointer ${
                        sorting === "item_name" && sortingOrder === 1
                          ? "text-blue-500"
                          : ""
                      }`}
                      onClick={() => handleSorting("Ascending", "item_name")}
                    >
                      <div className="w-full text-[16px]">Ascending</div>
                      <ChevronDown className="-rotate-90" />
                    </div>
                    <div
                      className={`flex justify-between py-[16px] px-[30px] cursor-pointer ${
                        sorting === "item_name" && sortingOrder === -1
                          ? "text-blue-500"
                          : ""
                      }`}
                      onClick={() => handleSorting("Descending", "item_name")}
                    >
                      <div className="w-full text-[16px]">Descending</div>
                      <ChevronDown className="-rotate-90" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SortingProducts;
