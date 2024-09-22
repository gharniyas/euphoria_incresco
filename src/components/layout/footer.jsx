import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import "../../app/globals.css";

import AndroidLogo from "../../../public/Android.svg";
import AppleLogo from "../../../public/Apple.svg";
import { Button } from "../ui/button";
import { Accordion, AccordionItem, AccordionTrigger } from "../ui/accordian";
import { Separator } from "../ui/separator";

const Footer = () => {
  const footer = [
    {
      id: 1,
      title: "Need Help",
      contents: [
        "Contact Us",
        "Track Order",
        "Returns & Refunds",
        "FAQ's",
        "Career",
      ],
    },
    {
      id: 2,
      title: "Company",
      contents: [
        "About Us",
        "euphoria Blog",
        "euphoriastan",
        "Collaburation",
        "Media",
      ],
    },
    {
      id: 3,
      title: "More Info",
      contents: [
        "Terms and Conditions",
        "Privacy Policy",
        "Shipping Policy",
        "Sitemap",
      ],
    },
    {
      id: 4,
      title: "Location",
      contents: [
        "support@euphoria.in",
        "Eklingpura Chouraha,Ahmedabad Main Road",
        "(NH 8-Near Mahadev Hotel) Udaipur,India-313002",
      ],
    },
  ];

  const social_media = [
    { id: 1, icons: <Facebook /> },
    { id: 2, icons: <Instagram /> },
    { id: 3, icons: <Twitter /> },
    { id: 4, icons: <Linkedin /> },
  ];
  return (
    <footer className="bg-[#3C4242] text-[#F6F6F6] px-[110px] py-[59px]">
      <div className="grid grid-cols-4 ">
        {footer.map((data, idx) => (
          <>
            <div key={idx} className="flex flex-col gap-3">
              <div className="font-bold text-[29px] w-full">{data?.title}</div>
              <div className="flex flex-col gap-2">
                {data?.contents?.map((d, index) => (
                  <div key={index} className="text-[18px]">
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-between py-8 px-2 pr-10 ">
        <div className="flex gap-[10px] pt-16">
          {social_media.map((d, idx) => (
            <Button key={idx} variant="secondary">
              {d?.icons}
            </Button>
          ))}
        </div>
        <div>
          <h2 className="w-full mb-4 font-bold text-[29px]">
            Download The App
          </h2>
          <div className="flex gap-4">
            <Image
              src={AndroidLogo}
              width={153.76}
              height={51.24}
              alt="Android Logo"
            />

            <Image
              src={AppleLogo}
              width={153.76}
              height={51.24}
              alt="Apple Logo"
            />
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <Accordion type="single" collapsible className="py-8 px-[78px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Popular Categories</AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>
      <Separator />
      <div className="flex justify-center py-8">
        Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
