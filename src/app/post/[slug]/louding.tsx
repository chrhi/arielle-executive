import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const louding: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-screen flex  flex-col ">
        <Skeleton className="w-[90%] ml-auto h-[10px] rounded-lg " />
        <Skeleton className="w-[70%] ml-auto h-[500px] my-8 rounded-lg " />
      </div>
    </MaxWidthWrapper>
  );
};

export default louding;
