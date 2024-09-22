import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
const Card = ({ data }) => {
  const { push } = useRouter();

  return (
    <div
      className="w-[281px] h-[400px] relative "
      onClick={() => push(`product/${data?._id}`)}
    >
      {data?.image_url && (
        <Image
          src={data?.image_url}
          alt=""
          width={282}
          height={370}
          className="border rounded-[12px] w-[270px] h-[320px] relative"
        />
      )}
      <Button
        variant="secondary"
        className="bg-[#F6F6F6] p-2 rounded-full absolute top-4 right-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Heart className="w-[20px] h-[20px] text-[#807D7E]" />
      </Button>
      <div className="flex justify-between pt-4">
        <div className="w-[80%]">
          <div className="truncate font-bold text-[#807D7E]">
            {data?.item_name}
          </div>
          <div className="text-[#807D7E]">{data?.brand}</div>
        </div>
        <Button variant="secondary" className="text-[#3C4242]">
          ${data?.price}
        </Button>
      </div>
    </div>
  );
};
export default Card;
