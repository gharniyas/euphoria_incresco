import React from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MessageSquareText, ShoppingCart } from "lucide-react";
import Image from "next/image";
import {
  available_colors,
  available_sizes,
  payments,
} from "@/common/constants";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const Banner = ({ data }) => {
  const capitalizeFirstLetter = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };
  return (
    <div className="flex gap-10">
      <div className="flex">
        <div className="bg-[#F6F6F6] px-[108px] flex items-center">
          <Carousel orientation="vertical | horizontal">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={
                    "https://assets.ajio.com/medias/sys_master/root/20230609/LsJG/6483127cd55b7d0c635cdc79/-473Wx593H-466230217-offwhite-MODEL.jpg"
                  }
                  alt=""
                  width={68}
                  height={68}
                  className="bg-[#F6F6F6] "
                />
              </CarouselItem>
              <CarouselItem>
                <Image alt="" src={data?.image_url} width={68} height={68} />
              </CarouselItem>
              <CarouselItem>
                <Image
                  alt=""
                  src={
                    "https://assets.ajio.com/medias/sys_master/root/20230802/xGDB/64c9af86a9b42d15c9849e27/-1117Wx1400H-466410521-green-MODEL.jpg"
                  }
                  width={68}
                  height={68}
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Image
          src={data?.image_url}
          width={520}
          height={785}
          alt="details image"
        />
      </div>
      <div className="py-[16px] px-[60px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-[18px]">
                Shop
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${
                  data?.category === "joggers" ? "joggers" : data?.gender
                }`}
                className="text-[18px]"
              >
                {data?.category === "joggers"
                  ? "Joggers"
                  : capitalizeFirstLetter(data?.gender)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[18px]">Tpo</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="text-[35px] text-[#3C4242] font-bold py-[16px]">
          {data?.item_name}
        </div>
        <div className="flex justify-between py-[16px]">
          <div className="flex gap-4">
            <Rating
              style={{ maxWidth: 150 }}
              value={5}
              itemStyles={myStyles}
              className="flex gap-3"
            />

            <div className="text-[#807D7E]">{data?.rating}</div>
          </div>
          <div className="flex gap-2 text-[#807D7E]">
            {" "}
            <MessageSquareText />
            {data?.number_of_comments} comment
          </div>
        </div>
        <div className="flex gap-4 text-[18px]  py-[16px] items-center">
          <div className="font-bold text-[#3F4646]">Select Size</div>
          <div className="flex gap-2 text-[#807D7E] items-center">
            Select Guide <ArrowRight />
          </div>
        </div>
        <div className="flex gap-4 py-[16px]">
          {available_sizes.map((data, idx) => (
            <Button
              variant="outline"
              key={idx}
              className="hover:bg-black hover:text-[#F6F6F6] rounded-[12px] "
            >
              {data.size}
            </Button>
          ))}
        </div>
        <div className="text-[#3F4646] font-semibold py-[16px]">
          Colours Available
        </div>
        <div className="flex gap-4 py-[16px]">
          {available_colors.map((data, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: data?.color }}
              className={`rounded-full w-6 h-6 border border-[#F4F1F1]  hover:border-black p-2 `}
            ></div>
          ))}
        </div>
        <div className="flex justify-between py-[26px] text-[18px]">
          <Button variant="ghost" className="px-[40px] flex gap-2">
            <ShoppingCart /> Add to cart
          </Button>
          <Button variant="outline" className="px-[40px]">
            $63.00
          </Button>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4 py-[26px]">
          {payments?.map((data, idx) => (
            <div key={idx} className="flex gap-2 items-center ">
              <div className="bg-[#F6F6F6]  text-[#3F4646] p-2 rounded-full">
                {data?.icon}
              </div>
              <div className="text-[#3F4646] font-semibold">{data?.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
