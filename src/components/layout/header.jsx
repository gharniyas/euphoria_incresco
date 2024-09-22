"use client";
import React from "react";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import "../../app/globals.css";
import { Heart, ShoppingCart, User, UserRound } from "lucide-react";

import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menu_bar";
import { InputSearch } from "../ui/input";
import { Button } from "../ui/button";
import useStore from "@/store/store";
import Link from "next/link";

const Header = () => {
  const { setSearchValue, searchValue } = useStore();
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };
  return (
    <header className="h-[108px] flex w-full items-center px-[102px] justify-between border border-b-[#BEBCBD]">
      <Image src={Logo} className="h-[45px] w-fit" alt="Logo" />
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"/"}>Shop</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link href={"/men"}>Men</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link href={"/women"}>Women</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link href={"/combos"}>Combos</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link href={"/joggers"}>Joggers</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <InputSearch
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
      />
      <div className="flex gap-2">
        <Button variant="secondary">
          <Heart className="w-[20px] h-[20px] text-[#807D7E]" />
        </Button>
        <Button variant="secondary">
          <UserRound className="w-[20px] h-[20px] text-[#807D7E]" />
        </Button>
        <Button variant="secondary">
          <ShoppingCart className="w-[20px] h-[20px] text-[#807D7E]" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
