import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-[48px]">About Me</h1>
      <p>
        I'm Heru, a <span className="font-bold">Full Stack Developer at </span>
        <Link
          href={"https://gsp.co.id"}
          className="underline underline-offset-2 font-bold"
        >
          {" "}
          PT. Gerbang Sinergi Prima
        </Link>{" "}
        , and I'm very excited to share my work experiences with you here.
      </p>
      <div className="border my-4"></div>
      <p>
        As a full stack developer, I have developed various applications
        involving technologies such as JavaScript, TypeScript, Node.js, MongoDB,
        and Next.js/React.
      </p>
      <p>
        I believe that software development is not just about writing code, but
        also about understanding user needs and ensuring an optimal user
        experience. With that in mind, I always strive to understand the
        business context that supports the products I create and optimize
        solutions that can have a positive impact on both the business and
        users. I am enthusiastic about sharing my experience in software
        development and providing innovative technological solutions.
      </p>
      <p>
        Please explore my portfolio and feel free to contact me if you're
        interested in collaborating or discussing further about your projects.
        Thank you for visiting my page!
      </p>
    </div>
  );
};

export default page;
