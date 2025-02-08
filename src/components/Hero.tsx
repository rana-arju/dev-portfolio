import Image from "next/image";
import Link from "next/link";
import Typewriter from "./TextWrite";
import { Facebook, Github, Linkedin } from "lucide-react";
import DownloadPDF from "./ResumeButton";
export default function Hero() {
  return (
    <section className="w-full mb-10 pt-16 pb-5  md:pt-20 md:mb-16  bg-[#ededed]">
      <div className="px-2 md:px-0 sm:container grid items-center justify-center gap-6  lg:grid-cols-2 lg:gap-10">
        <div className="space-y-6 order-2 lg:order-1">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-3xl lg:text-5xl  ">
            Mohammad Rana Arju
          </h1>
          <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed flex gap-4">
            <p>I&apos;m a </p>
            <span className="text-primary">{<Typewriter />}</span>
          </div>
          <div className="flex gap-5">
            <Link
              href="https://github.com/rana-arju"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github size={24} color="#f9004d" />
            </Link>{" "}
            <Link
              href="https://www.linkedin.com/in/rana-arju/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin size={24} color="#f9004d" />
            </Link>{" "}
            <Link
              href="https://www.facebook.com/ranaarju1/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook size={24} color="#f9004d" />
            </Link>
          </div>

          <div className="flex gap-5">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-10 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase hover:bg-transparent hover:text-primary border hover:border-primary"
              prefetch={false}
            >
              Projects
            </Link>
            <DownloadPDF />
          </div>
        </div>
        <Image
          src="/rana-arju.jpg"
          width="800"
          height="600"
          alt="mohammad rana arju"
          priority={true}
          className="mx-auto aspect-[4/3] overflow-hidden rounded-sm sm:rounded-xl object-cover md:w-full order-1 lg:order-2"
        />
      </div>
    </section>
  );
}
