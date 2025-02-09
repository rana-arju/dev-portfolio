import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Mohammad Rana Arju",
  description: "Mohammad Rana Arju is full stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div>{children}</div>
      <BottomNavbar />
      </body>
    </html>
  );
}
