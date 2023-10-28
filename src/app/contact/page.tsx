import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper className="max-w-xl">
      <FadeIn>
        <div className="w-full h-[500px] flex flex-col gap-y-8 justify-center items-start ">
          <h1 className="text-3xl flex flex-col gap-y-8 font-bold text-start">
            Contact us
          </h1>
          <form className="w-full flex flex-col gap-y-4 h-fit ">
            <div>
              <Label>your email</Label>
              <Input />
            </div>
            <div>
              <Label>your name</Label>
              <Input />
            </div>
            <div>
              <Label>your message</Label>
              <Textarea />
            </div>
            <Button size="lg" className="w-full my-4  ">
              send my message
            </Button>
          </form>
        </div>
      </FadeIn>
    </MaxWidthWrapper>
  );
};

export default page;
