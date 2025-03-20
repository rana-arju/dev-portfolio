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
  description:
    "I'm Mohammad Rana Arju. I'm a Jr Full Stack web developer. I love being in this line of work Because I'm passionate about technology, design, and innovation. I'm a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I'm skilled at Next js, React js, JavaScript, Prisma, Node js, Express js, MongoDB, firebase, Github, JWT, CSS3, HTML5 and more. I am available for any kind of job opportunity that suits my skills and interests.",
};

export default async function RootLayout({
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
