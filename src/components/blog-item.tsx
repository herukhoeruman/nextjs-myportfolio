import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = () => {
  return (
    <div className="flex flex-row">
      <Image
        src={"/image/photo.png"}
        width={80}
        height={80}
        className="rounded-lg"
        alt="Blog Image"
      />
      <div className="flex flex-col justify-between ml-[32px]">
        <Link href={"/"} className="text-lg font-bold hover:text-zinc-400">
          Blog Title
        </Link>
        <div className="inline-flex gap-[32px] text-sm">
          <span>1 day ago</span>
          <span>1x seen</span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
