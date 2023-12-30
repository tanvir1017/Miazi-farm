"use client";
import { Button } from "@/components/shadcn/ui/button";
import BrandLogo from "@/components/shared/brandlogo/brandlogo";
import {
  BarChart,
  BellRing,
  Brush,
  LogOut,
  Newspaper,
  Paperclip,
  PlusCircle,
  Ruler,
  Wrench,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function DashboardSidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-4 py-8 sticky top-0">
      <div className="bg-white p-2 rounded-md">
        <BrandLogo />
      </div>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="space-y-6">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              analytics
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="/dashboard"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="/dashboard/add-new-product"
            >
              <PlusCircle className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Add Product</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="/dashboard/working"
            >
              <Ruler className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Update Product</span>
            </Link>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              content
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Blogs</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Notifications</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Checklists</span>
            </a>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              Customization
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Brush className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Themes</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Setting</span>
            </a>
          </div>
        </nav>
      </div>
      <div className="mt-8 flex justify-end">
        <Button
          className="w-full rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
          onClick={() => signOut()}
        >
          <LogOut className="h-5 w-5" aria-hidden="true" />
          <span className="mx-2 text-sm font-medium">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
