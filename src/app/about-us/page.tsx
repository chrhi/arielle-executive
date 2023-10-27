import { FC } from "react";

interface WebVitalsProps {}

const WebVitalsPage: FC<WebVitalsProps> = ({}) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-pink-100">
      <h1 className="text-5xl font-bold text-pink-600 text-center mb-4">
        Web Vitals and Our Blog
      </h1>
      <p className="text-xl text-center max-w-2xl mt-4">
        Web Vitals are a set of metrics that measure the user experience on a
        website. They are important for ensuring that your website performs well
        and provides a good user experience.
      </p>
      <p className="text-xl text-center max-w-2xl mt-4">
        Our blog has implemented the following Web Vitals features:
      </p>
      <ul className="text-xl max-w-2xl ml-8">
        <li>
          1. **First Contentful Paint (FCP)**: This measures how quickly the
          first content is painted on the screen. We optimize our blog to load
          content as fast as possible.
        </li>
        <li>
          2. **Largest Contentful Paint (LCP)**: We ensure that the largest
          content element on the page loads quickly, so users can see and
          interact with it without delay.
        </li>
        <li>
          3. **Cumulative Layout Shift (CLS)**: To prevent unexpected layout
          shifts that can be frustrating for users, we carefully manage the
          layout of our blog.
        </li>
      </ul>
      <p className="text-xl mt-4 max-w-2xl">
        We continuously monitor and improve these metrics to provide the best
        possible user experience on our blog.
      </p>
      <p className="text-xl mt-4 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
        elit eu malesuada efficitur. Nam ut tortor id libero tincidunt
        hendrerit. Vestibulum ultrices euismod massa, nec auctor odio volutpat
        nec. Curabitur nec vestibulum purus. Sed at elit eu nisl dictum varius.
        Fusce a ligula sed nunc semper tincidunt. Aenean efficitur a arcu eu
        tristique. Aenean at leo non mi fermentum tincidunt. Nam euismod
        vehicula justo, non convallis velit tempor a.
      </p>
      <p className="text-xl mt-4 max-w-2xl">
        Nullam lacinia ipsum a dui scelerisque vehicula. Proin dignissim, libero
        eget viverra ullamcorper, urna elit efficitur lectus, non viverra ligula
        nisl id ante. Etiam in hendrerit elit. Integer ac fermentum libero.
        Integer sagittis massa a dolor bibendum tincidunt. Morbi viverra lectus
        eget sem lacinia, non finibus augue euismod. Integer eget quam eget
        justo pharetra cursus. Aenean eget velit eget odio aliquam facilisis.
      </p>
    </div>
  );
};

export default WebVitalsPage;
