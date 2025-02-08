"use client";

import Link from "next/link";
//import { useSession } from "next-auth/react";
import {
  Home,
  Info,
  LogIn,
  User,
  Code2,
  NotebookPen,
  Contact,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BottomNavbar() {
  //const { data: session } = useSession();
  const [session] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
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
        {session ? (
          <>
            <li>
              <Link
                href="/dashboard"
                className={`flex flex-col items-center ${
                  isActive("/dashboard") ? "text-primary" : "text-gray-500"
                }`}
              >
                <User size={24} />
                <span className="text-xs">Dashboard</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                href="/auth/signin"
                className={`flex flex-col items-center ${
                  isActive("/auth/signin") ? "text-primary" : "text-gray-500"
                }`}
              >
                <LogIn size={24} />
                <span className="text-xs">Sign In</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
