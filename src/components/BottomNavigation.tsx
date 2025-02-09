"use client";

import Link from "next/link";
//import { useSession } from "next-auth/react";
import { Home, Info, Code2, NotebookPen, Contact } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNavbar() {
  //const { data: session } = useSession();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
      <ul className="flex justify-around items-center h-16">
        <li>
          <Link
            href="/"
            className={`flex flex-col items-center ${
              isActive("/") ? "text-primary" : "text-gray-500"
            }`}
          >
            <Home size={24} />
            <span className="text-xs">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`flex flex-col items-center ${
              isActive("/projects") ? "text-primary" : "text-gray-500"
            }`}
          >
            <Code2 size={24} />
            <span className="text-xs">Project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`flex flex-col items-center ${
              isActive("/blog") ? "text-primary" : "text-gray-500"
            }`}
          >
            <NotebookPen size={24} />
            <span className="text-xs">Blog</span>
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/about"
            className={`flex flex-col items-center ${
              isActive("/about") ? "text-primary" : "text-gray-500"
            }`}
          >
            <Info size={24} />
            <span className="text-xs">About</span>
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/contact"
            className={`flex flex-col items-center ${
              isActive("/contact") ? "text-primary" : "text-gray-500"
            }`}
          >
            <Contact size={24} />
            <span className="text-xs">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
