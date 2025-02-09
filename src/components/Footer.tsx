
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Component() {
  return (
    <footer className="bg-[#ededed] pb-20 sm:pb-0">
      <div className="container max-w-7xl pt-6  pb-0 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="grid gap-2">
              <Link
                href="/"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm hover:underline"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>My Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Cox&apos;s Bazar, Bangladesh</p>
                <p>Phone: +8801881-220413</p>
                <p>Email: arjurana20@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-sm text-muted-foreground">
          <p>&copy; Rana Arju. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
