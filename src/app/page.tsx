import CardBio from "@/components/card-bio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-[36px] pb-8">
      <h1 className="font-bold text-[48px]">Hi, I am Heru!</h1>
      <p>
        A <span className="font-bold">Software Engineer at</span>
        <Link
          href={"https://gsp.co.id"}
          className="underline underline-offset-2 font-bold"
        >
          {" "}
          PT. Gerbang Sinergi Prima
        </Link>{" "}
        , and I'm very excited to share my work experiences with you here.
      </p>
      <CardBio />
      <p>
        As a software engineer, I have a passion for building software that
        solves real-world problems. I have experience in developing web
        applications using modern technologies, such as React, Next.js, Svelte,
        Node.js, Express.js, Hono.js and TypeScript.
      </p>
      <p className="font-bold">Web ini masih dalam pengembangan ya gess!!!</p>
      <div className="inline-flex gap-[11px] underline underline-offset-2">
        <Link href={"https://www.github.com"}>Github</Link>
        <Link href={"https://www.linkedin.com"}>LinkedIn</Link>
      </div>
    </div>
  );
}
