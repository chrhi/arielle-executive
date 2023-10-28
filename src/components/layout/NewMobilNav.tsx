import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navs } from "@/config/Navigations";
import { Link, Menu } from "lucide-react";
import { FC } from "react";

interface NewMobilNavAbdullahProps {}

const NewMobilNav: FC = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className=" lg:hidden relative z-50 h-6 w-6 cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent>
        <ul className=" bg-white  grid w-full gap-3 px-10 pt-10 pb-8">
          {Navs.map((item, index) => {
            return (
              <>
                <li>
                  <Link
                    className="flex items-center w-full text-black font-semibold"
                    href={`/${item?.slug}`}
                  >
                    {item?.name}
                  </Link>
                </li>
                {index === Navs.length - 1 ? null : (
                  <li className="my-2 h-px w-full bg-gray-300" />
                )}
              </>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NewMobilNav;
