import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <main className="min-h-[600px] w-full flex justify-center items-center  flex-col  pt-4 ">
        <p className="text-2xl font-bold text-center">
          this page is not implemented yet
        </p>
      </main>
    </MaxWidthWrapper>
  );
};

export default page;
