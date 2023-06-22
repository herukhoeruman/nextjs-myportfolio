import Image from "next/image";
import React from "react";

const GuestMessage = () => {
  return (
    <div className="inline-flex gap-[10px] items-center">
      <Image
        src={"/image/luffy.jpg"}
        alt="guest image"
        width={100}
        height={100}
        className="rounded-full w-[40px] h-[40px]"
      />
      <span className="font-bold">Name : </span>
      <span>Message</span>
    </div>
  );
};

export default GuestMessage;
