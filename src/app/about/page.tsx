import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-[48px]">About Me</h1>
      <p>
        I'm Heru, a <span className="font-bold">Software Engineer at </span>
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
        As a software engineer, I have a passion for building software that
        solves real-world problems. I have experience in developing web
        applications using modern technologies, such as React, Node.js, and
        TypeScript. I also have experience in building RESTful APIs and working
        with databases like PostgreSQL and MongoDB.
      </p>
      <p>
        I'm always eager to learn new things and improve my skills. I'm looking
        forward to sharing my knowledge and experiences with you. Feel free to
        reach out to me if you have any questions or want to collaborate on a
        project. I'm always open to new opportunities and challenges. Let's
        connect and build something amazing together!.
      </p>
    </div>
  );
};

export default page;
