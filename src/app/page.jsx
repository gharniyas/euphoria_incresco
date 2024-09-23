"use client";
import ProductsTemplate from "@/components/products/productsTemplate";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/queries";
import useStore from "@/store/store";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function Home() {
  const { searchValue, categories, colors, sizes, dressStyles, priceRange } =
    useStore();

  const limit = 9;

  const { fetchNextPage, data, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [
        "GET_ALL_PRODUCTS",
        {
          searchValue,
          categories,
          colors,
          sizes,
          priceRange,
          dressStyles,
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
          offset: pageParam * limit,
        }),
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage?.length < limit) return undefined;
        return allPages.length;
      },
    });

  const handleOffsetChange = () => {
    fetchNextPage();
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <ProductsTemplate products={data?.pages?.flatMap((i) => i)} />
      <div className="w-full flex justify-center">
        <Button
          variant="outline"
          className="border-none text-[#807D7E] text-[22px] py-14 hover:bg-white w-fit"
          onClick={handleOffsetChange}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading..."
            : hasNextPage
            ? "See More"
            : "No More Products"}
        </Button>
      </div>
    </div>
  );
}
