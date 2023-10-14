import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button, buttonVariants } from "../ui/button";

import { ArrowRight } from "lucide-react";

import MobileNav from "./MobileNav";
import { blogCategories } from "@/config/data";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 border-b top-0 z-30 w-full  border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-zinc-200">
          <Link href="/" className="flex text-xl z-40 font-semibold">
            <span>
              Experteasy
              <span className="text-green-500">Arille.</span>
            </span>
          </Link>

          <MobileNav />

          <div className="hidden items-center justify-end gap-x-4 lg:flex">
            {blogCategories.map((item) => {
              return (
                <Link
                  href={"/category/yes"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-sm"
                  )}
                  key={item + "itemkey"}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
