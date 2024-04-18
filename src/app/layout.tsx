import type { Metadata } from "next";

import "./globals.css";
import CompNavbar from "@/components/navbar/CompNavbar";

export const metadata: Metadata = {
  title: "BongCoder",
  description:
    "봉우리 코더 (봉우 리코더 - 봉우라는 사람의 리코더라는 뜻이  아닙니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="min-h-screen ">
        <nav>
          <CompNavbar />
        </nav>

        {children}
        <footer className="border-t-2 my-auto">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
