import CardBio from "@/components/card-bio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-[36px]">
      <h1 className="font-bold text-[48px]">Hi!</h1>
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
      <CardBio />
      <p>
        As a full stack developer, I have developed various applications
        involving technologies such as JavaScript, TypeScript, Node.js, MongoDB,
        and Next.js/React.
      </p>
      <div className="inline-flex gap-[11px] underline underline-offset-2">
        <Link href={"https://www.github.com"}>Github</Link>
        <Link href={"https://www.linkedin.com"}>LinkedIn</Link>
      </div>
    </div>
  );
}
