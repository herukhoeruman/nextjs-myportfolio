import Image from "next/image";
import React from "react";

interface ItemProps {
  icon?: string;
  value?: string;
  lable?: string;
}

const Item = ({ icon = "", value = "value", lable = "lable" }: ItemProps) => {
  return (
    <div className="inline-flex gap-[8px] text-sm">
      <Image
        alt="icon"
        src={icon}
        width={15}
        height={15}
        // className="rounded-full"
      />
      <span className="font-bold">{value}</span>
      <span>{lable}</span>
    </div>
  );
};

function CardBio() {
  return (
    <div className="inline-flex gap-[27px] justify-center items-center rounded-lg border border-zinc-200 w-[350px] h-[134px]">
      <Image
        alt="avatar"
        src={"/image/luffy.jpg"}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <Item icon="/image/rocket.svg" value="11" lable="projects finished" />
        <Item icon="/image/github.svg" value="140" lable="stars on my repo" />
        <Item icon="/image/statistics.svg" value="10" lable="client" />
      </div>
    </div>
  );
}

export default CardBio;
