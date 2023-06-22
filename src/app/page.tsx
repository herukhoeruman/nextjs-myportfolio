import CardBio from "@/components/card-bio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-[36px]">
      <h1 className="font-bold text-[32px]">Heru Khoeruman</h1>
      <p>
        Hi! I'm Heru, a{" "}
        <span className="font-bold">Full Stack Developer at PT. XX</span>, and
        I'm delighted to be able to share my work and experiences with you here.
      </p>
      <CardBio />
      <p>
        As a full stack developer, I have developed various applications
        involving technologies such as JavaScript, TypeScript, Node.js, MongoDB,
        and Next.js/React.
      </p>
      <div className="inline-flex gap-[11px] underline underline-offset-2">
        <Link href={"/"}>Github</Link>
        <Link href={"/"}>LinkedIn</Link>
      </div>
    </div>
  );
}
