import Image from "next/image";
import React from "react";

interface ItemProps {
  src?: string;
}

const Item = ({}: ItemProps) => {
  return (
    <div className="inline-flex gap-[8px] text-sm">
      <Image
        alt="icon"
        src={"/image/rocket.svg"}
        width={14}
        height={14}
        className="rounded-full"
      />
      <span className="font-bold">140</span>
      <span>Project selesai</span>
    </div>
  );
};

function CardBio() {
  return (
    <div className="inline-flex gap-[27px] justify-center items-center rounded-lg border border-zinc-200 w-[314px] h-[134px]">
      <Image
        alt="avatar"
        src={"/image/luffy.jpg"}
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default CardBio;
