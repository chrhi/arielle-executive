import { FC } from "react";

interface RecentPostsAbdullahProps {}

const RecentPosts: FC = ({}) => {
  return (
    <div className="md:w-[300px] w-full  h-[500px]   flex flex-col items-start ">
      <p className=" text-2xl m-4 md:text-xl mb-4 font-bold  md:font-normal ">
        Top Picks
      </p>
      <div className="flex  md:p-0 p-6 overflow-y-auto w-full h-full flex-col gap-y-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item + "dommy"}
            className="w-full bg-gray-100 rounded-xl flex flex-col p-4 h-[150px]"
          >
            <h3 className="text-green-500 font-semibold text-md">
              The Art of this
            </h3>
            <p className=" text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              magni voluptas fugit
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
