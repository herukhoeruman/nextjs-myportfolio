import CardBio from "@/components/cardBio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-[36px]">
      <h1 className="font-bold text-[32px]">Heru Khoeruman</h1>
      <p>
        Saya Heru, seorang{" "}
        <span className="font-bold">Full Stack Developer di PT. XX</span>, dan
        saya senang dapat berbagi karya dan pengalaman saya dengan Anda di sini.
      </p>
      <CardBio />
      <p>
        Sebagai seorang full stack developer, saya telah mengembangkan berbagai
        aplikasi dan platform yang melibatkan teknologi seperti JavaScript,
        NodeJs, dan React. Saya selalu mencari cara untuk meningkatkan
        keterampilan saya dan mengeksplorasi teknologi baru yang dapat membantu
        saya menciptakan solusi yang lebih baik.
      </p>
      <div className="inline-flex gap-[11px] underline underline-offset-2">
        <Link href={"/"}>Github</Link>
        <Link href={"/"}>LinkedIn</Link>
      </div>
    </div>
  );
}
