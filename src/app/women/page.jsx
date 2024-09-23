"use client";
import ProductsTemplate from "@/components/products/productsTemplate";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/queries";
import useStore from "@/store/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React from "react";

const Women = () => {
  const pathname = usePathname();
  const gender = pathname.split("/")[1];
  const { searchValue, priceRange, categories, colors, sizes, dressStyles } =
    useStore();

  const limit = 9;

  const { fetchNextPage, isLoading, data, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [
        "GET_ALL_PRODUCTS_WOMEN",
        {
          searchValue,
          categories,
          colors,
          sizes,
          dressStyles,
          priceRange,
          gender,
        },
      ],
      queryFn: ({ pageParam = 0 }) =>
        fetchProducts({
          searchValue,
          categories,
          colors,
          sizes,
          dressStyles,
          priceRange,
          limit,
          offset: pageParam,
          gender,
        }),
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage?.length === limit) {
          return allPages.length * limit;
        } else {
          return undefined;
        }
      },
    });

  const handleOffsetChange = () => {
    fetchNextPage();
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col gap-4">
        <ProductsTemplate products={data?.pages?.flatMap((i) => i)} />
        <div className="w-full flex justify-center">
          <Button
            variant="outline"
            className="border-none text-[#807D7E] text-[22px] py-14 hover:bg-white w-fit"
            onClick={handleOffsetChange}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isLoading
              ? "Loading..."
              : isFetchingNextPage
              ? "Loading..."
              : hasNextPage
              ? "See More"
              : "No More Products"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Women;
