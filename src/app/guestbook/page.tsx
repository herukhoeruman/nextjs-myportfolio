import GuestMessage from "@/components/guest-message";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-[32px]">Blog</h1>
      <div className="flex flex-col gap-4 mt-8 ">
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
          <GuestMessage key={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
