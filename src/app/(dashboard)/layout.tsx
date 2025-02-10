"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Laptop,
  PenSquare,
  FolderPlus,
  MessageSquare,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Laptop, label: "Dashboard", href: "/dashboard" },
    { icon: PenSquare, label: "New Blog", href: "/dashboard/addBlog" },
    { icon: PenSquare, label: "All Blogs", href: "/dashboard/blogs" },
    { icon: FolderPlus, label: "Add Project", href: "/dashboard/add-project" },
    { icon: FolderPlus, label: "All Projects", href: "/dashboard/projects" },
    { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 w-full ">
        {/* Sidebar */}
        <Sidebar
          className={`transition-all duration-300  ${
            isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
          }`}
        >
          <SidebarHeader className="flex items-center justify-between px-4 py-2">
            <SidebarTrigger
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="cursor-pointer"
            />
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                      >
                        <Link href={item.href} className="flex items-center">
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          {/* Logout Button */}
          <div className="mt-auto p-4">
            <Button variant="outline" className="w-full cursor-pointer" asChild>
              <p>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </p>
            </Button>
          </div>
        </Sidebar>

        {/* Main Content Area */}

        <div className={`flex-1 flex flex-col transition-all duration-300 `}>
          <div>
            <SidebarTrigger
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="absolute top-4 left-4 cursor-pointer"
            />
          </div>

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
