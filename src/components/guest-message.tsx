import Image from "next/image";
import React from "react";

interface MessageProps {
  name?: string;
  image?: string;
  message?: string;
}

const GuestMessage = ({
  name = "Name",
  image = "/image/luffy.jpg",
  message = "Message",
}: MessageProps) => {
  return (
    <div className="inline-flex gap-[10px] items-center">
      <Image
        src={image || ""}
        alt="guest image"
        width={100}
        height={100}
        className="rounded-full w-[40px] h-[40px]"
      />
      <span className="font-bold">{name} : </span>
      <span>{message}</span>
    </div>
  );
};

export default GuestMessage;
