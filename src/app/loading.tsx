import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FadeIn from "@/components/animations/FadeIn";
import { Skeleton } from "@/components/ui/skeleton";

export default function Louding() {
  return (
    <MaxWidthWrapper>
      <main>
        <FadeIn>
          <section className="min-h-[600px]  w-full flex md:flex-row flex-col  justify-center pt-4 ">
            <div className="md:w-[70%] mb-4 w-full   pt-4 h-fit min-h-[400px] ">
              <Skeleton className="w-full h-[500px] rounded-lg" />
            </div>
            <div className="md:w-[30%] w-full  h-fit min-h-[400px] ">
              <Skeleton className="w-[90%] h-[200px] rounded-lg" />
              <Skeleton className="w-[90%] h-[200px] rounded-lg" />
            </div>
          </section>
        </FadeIn>
      </main>
    </MaxWidthWrapper>
  );
}
