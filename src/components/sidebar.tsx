"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface ItemProps {
  href?: string;
  text?: string;
}

const Item = ({ href = "/", text = "Link" }: ItemProps) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={clsx(
          "text-sm px-4 py-2 text-zinc-900 hover:bg-zinc-100 rounded-md font-bold",
          pathName === href && "bg-zinc-100"
        )}
      >
        {text}
      </Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[231px] gap-[11px]">
      <Image
        alt="logo"
        width={54}
        height={54}
        src={"/image/farmer-hat.png"}
        className="mx-4 mb-4"
      />
      <Item href={"/"} text="Home" />
      <Item href={"/about"} text="About" />
      <Item href={"/blog"} text="Blog" />
      <Item href={"/guestbook"} text="Guest Book" />
    </div>
  );
};

export default Sidebar;
