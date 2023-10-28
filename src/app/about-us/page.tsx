/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { FC } from "react";

interface WebVitalsProps {}

const WebVitalsPage: FC<WebVitalsProps> = ({}) => {
  return (
    <FadeIn>
      <MaxWidthWrapper>
        <div className="w-full min-h-[500px] h-fit pb-4 flex flex-col items-start p-8 ">
          <h1 className="text-3xl text-pink-500 font-bold text-start">
            Hi there to my project
          </h1>
          <p className="text-lg text-gray-700 text-start">
            A project build by abdellah chehri
          </p>

          <h2 className="text-2xl font-bold text-start my-4">Web Vitals</h2>
          <p className="text-lg text-gray-700 text-start">
            are a set of essential performance metrics that help website owners
            and developers assess the user experience of their websites. These
            metrics are crucial for understanding how well a web page performs,
            and they directly impact user satisfaction and search engine
            rankings
          </p>
          <h2 className="text-2xl font-bold text-start my-4">
            Largest Contentful Paint (LCP)
          </h2>
          <p className="text-lg text-gray-700 text-start">
            LCP measures the loading performance of a web page by assessing the
            time it takes for the largest and most significant piece of content
            (usually an image or text block) to become visible in the user's
            viewport
          </p>

          <h2 className="text-2xl font-bold text-start my-4">
            First Input Delay (FID)
          </h2>
          <p className="text-lg text-gray-700 text-start">
            FID quantifies the interactivity and responsiveness of a web page by
            measuring the delay between a user's first interaction (e.g.,
            clicking a button or a link) and the browser's response to that
            interaction.
          </p>

          <h2 className="text-2xl font-bold text-start my-4">
            Cumulative Layout Shift (CLS)
          </h2>
          <p className="text-lg text-gray-700 text-start">
            CLS evaluates the visual stability of a web page by measuring the
            extent to which page elements shift or move unexpectedly during page
            load. It can be frustrating for users when items on a page suddenly
            reposition, leading to accidental clicks or other unintended
            interactions.
          </p>

          <h2 className="text-3xl text-blue-500 font-bold text-start my-4">
            And this is our work
          </h2>
          <div className="w-full h-[150px]">
            <Image
              src={"/gtmatrix.PNG"}
              alt="gtmatix screen shot"
              width={1200}
              height={150}
              priority
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </FadeIn>
  );
};

export default WebVitalsPage;
