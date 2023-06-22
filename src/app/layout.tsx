import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Gothic_A1, Poppins } from "next/font/google";
import clsx from "clsx";

const gothic_a1 = Gothic_A1({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--poppins-default",
});

export const metadata = {
  title: "Simple Portfolio",
  description: "simple portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={clsx(
            "flex flex-row w-[1000px] mt-[130px] mx-auto",
            poppins.className
          )}
        >
          <Sidebar />
          <main className="flex flex-grow w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
