import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PostCard from "@/components/PostCard";
import PostCardLarg from "@/components/PostCardLarg";
import RecentPosts from "@/components/RecentPosts";
import { posts } from "@/config/data";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main>
        <div className="min-h-[600px] w-full flex md:flex-row flex-col  justify-center pt-4 ">
          <div className="md:w-[70%] mb-4 w-full   pt-4 h-fit min-h-[400px] ">
            <PostCardLarg
              auther="abdullah chehri"
              description=" Marketing Learn the strategies and techniques to excel in affiliate marketing."
              imageUrl="/image.png"
              publishedAr={new Date()}
              title="The Art of Affiliate"
              key={99}
            />
          </div>
          <div className="md:w-[30%] w-full  h-fit min-h-[400px] ">
            <RecentPosts />
          </div>
        </div>
        <div className="w-full min-h-[600px] grid md:p-0 p-4 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
          {posts?.map((item) => {
            return (
              <PostCard
                key={item.title}
                auther={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                publishedAr={item.publishedAt}
                title={item.title}
              />
            );
          })}
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
