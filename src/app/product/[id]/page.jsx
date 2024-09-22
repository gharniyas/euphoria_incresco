"use client";
import Banner from "@/components/cards/banner";
import Card from "@/components/cards/card";
import { fetchProducts, getProductById } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export default function Index() {
  const pathname = usePathname();

  const id = pathname.split("/")?.[2];
  const limit = 8;
  const offset = 0;

  const { data } = useQuery({
    queryKey: ["GET_PRODUCT_BY_ID", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  console.log(data, ":data");
  const { data: SM_products } = useQuery({
    queryKey: ["GET_SIMILAR_PRODUCTS"],
    queryFn: () => fetchProducts({ limit, offset }),
    enabled: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="pb-10">
      <Banner data={data} />
      <div className="px-[100px]">
        <div className="flex gap-2 items-center py-[26px] ">
          <div className="bg-[#8A33FD] w-2 h-9 rounded-xl"></div>
          <div className="text-[#3C4242] text-[28px] font-bold py-[16px]">
            Similar Products
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10 px-[60px]">
          {SM_products?.map((data, idx) => (
            <Card key={data?._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
