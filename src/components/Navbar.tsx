"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, Bell } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [session ] = useState(false);
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
        <Link href="/request-blood" className="hover:text-primary">
          Blood Request
        </Link>
      </li>
      <li>
        <Link href="/be-donor" className="hover:text-primary">
          Be a donor
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-primary">
          About
        </Link>
      </li>
      {session ? (
        <>
          <li>
            <Link href="/dashboard" className="hover:text-primary">
              Dashboard
            </Link>
          </li>
          <li>
            <Button variant="ghost">
              Sign Out
            </Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link href="/auth/signin" className="hover:text-primary">
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/auth/signup" className="hover:text-primary">
              Sign Up
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50 transition-all duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center mt-2">
        <Link
          href="/"
          className="text-2xl font-bold text-primary dark:text-primary-foreground"
        >
          Blood Donation
        </Link>
        {isMobile ? (
          <div className="flex items-center space-x-4">
            <Link
              href="/notifications"
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground"
            >
              <Bell size={24} />
            </Link>
            {!session ? (
              <>
                <Link
                  href="/auth/signin"
                  className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Button  variant="ghost" size="sm">
                Sign Out
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through our blood donation community
                  </SheetDescription>
                </SheetHeader>
                <nav className="mt-6">
                  <ul className="space-y-4">
                    <NavItems />
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <nav className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <NavItems />
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
