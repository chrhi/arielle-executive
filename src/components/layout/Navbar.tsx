import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button, buttonVariants } from "../ui/button";

import { ArrowRight } from "lucide-react";

import MobileNav from "./MobileNav";
import { blogCategories } from "@/config/data";
import { cn } from "@/lib/utils";
import { Navs } from "@/config/Navigations";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" h-24 inset-x-0 border-b  w-full  border-gray-200 bg-black backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-24 items-center justify-between border-zinc-200">
          <Link href="/" className="flex text-xl z-40 font-semibold">
            <Image
              src={"/logo.webp"}
              alt="logo image"
              width={250}
              height={40}
            />
          </Link>

          <MobileNav />

          <div className="hidden items-center justify-end gap-x-4 lg:flex">
            {Navs.map((item) => {
              return (
                <Link
                  href={item.slug}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-sm text-white"
                  )}
                  key={item + "itemkey"}
                >
                  {item?.name}
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
