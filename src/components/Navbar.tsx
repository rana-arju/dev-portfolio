"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  const NavItems = () => (
    <>
      <li>
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link href="/projects" className="hover:text-primary">
          Projects
        </Link>
      </li>
      <li>
        <Link href="/blog" className="hover:text-primary">
          Blogs
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-primary">
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-primary">
          Contact
        </Link>
      </li>      
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50 transition-all duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center mt-2">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-primary dark:text-primary-foreground"
        >
          Rana Arju
        </Link>
        {!isMobile && (
          <nav className="invisible md:visible flex items-center space-x-4">
            <ul className="flex space-x-4">
              <NavItems />
            </ul>
          </nav>
        )}

        <ul className="flex space-x-4">
          <li>
            <Link href="/auth/signin" className="hover:text-primary">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
