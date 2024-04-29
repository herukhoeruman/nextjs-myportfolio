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
        className="rounded-lg w-[80px] h-[80px]"
        alt="Blog Image"
      />
      <div className="flex flex-col justify-between ml-[32px]">
        <Link href={"/"} className="text-lg font-bold hover:text-zinc-400">
          Blog Title
        </Link>
        <div className="inline-flex gap-[32px] text-sm">
          <span>2 days ago</span>
          <span>1,234 views</span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
