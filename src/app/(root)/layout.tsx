import type { Metadata } from "next";
import Header from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FooterSection from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

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
    <div>
      <Header />
      <div>{children}</div>
      <BottomNavbar />
      <FooterSection />
      <Toaster />
    </div>
  );
}
