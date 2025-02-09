import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
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
        <div>{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
