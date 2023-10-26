import { FC } from "react";
import PostCard from "./PostCard";
import FadeIn from "./animations/FadeIn";

interface RecomandedPostsAbdullahProps {
  posts: BlogPost[];
}

export const Articles: FC<RecomandedPostsAbdullahProps> = ({ posts }) => {
  return (
    <FadeIn>
      <section className="w-full min-h-[250px] my-8 flex flex-col justify-start gap-y-4 items-start ">
        <h2 className="text-4xl font-bold text-start">Latests Updates</h2>
        <div className="w-full min-h-[250px] grid md:p-0 p-4 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
          {posts?.map((item) => {
            return (
              <PostCard
                slug={item?.node?.slug}
                key={item?.node?.slug + "anythinginhere"}
                auther={item?.node?.author?.name}
                description={item.node?.excerpt}
                imageUrl={item?.node.featuredImage.url}
                publishedAr={new Date()}
                title={item.node.title}
              />
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
};
