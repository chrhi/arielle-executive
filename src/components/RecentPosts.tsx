import { FC } from "react";

interface RecentPostsAbdullahProps {
  posts: BlogPost[];
}

const RecentPosts: FC<RecentPostsAbdullahProps> = ({ posts }) => {
  return (
    <div className="md:w-[300px] w-full  h-[700px]    flex flex-col items-start ">
      <p className=" text-2xl m-4 md:text-xl mb-4 font-bold  md:font-normal ">
        Top Picks
      </p>
      <div className="flex  md:p-0 p-6 overflow-y-auto w-full h-full flex-col gap-y-4">
        {posts?.map((item) => {
          if (!item.node.topPick) return;
          return (
            <div
              key={item.node.slug + "dommy"}
              className="w-full bg-gray-100 rounded-xl flex flex-col p-4 h-fit min-h-[150px]"
            >
              <h3 className="text-black font-semibold text-md">
                {item.node.title}
              </h3>
              <p className=" text-gray-700">{item?.node.excerpt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentPosts;
