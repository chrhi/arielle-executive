import { Articles } from "@/components/Articles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PostCard from "@/components/PostCard";
import PostCardLarg from "@/components/PostCardLarg";
import RecentPosts from "@/components/RecentPosts";
import RecomandedPosts from "@/components/RecomandedPosts";
import { posts } from "@/config/data";
import { getPosts } from "@/lib/hygraph";

export default async function Home() {
  const posts: BlogPost[] = await getPosts();

  return (
    <MaxWidthWrapper>
      <main>
        <div className="min-h-[600px]  w-full flex md:flex-row flex-col  justify-center pt-4 ">
          <div className="md:w-[70%] mb-4 w-full   pt-4 h-fit min-h-[400px] ">
            <PostCardLarg
              slug={posts[0]?.node?.slug}
              auther="abdullah chehri"
              description={posts[0]?.node?.excerpt}
              imageUrl={posts[0]?.node?.featuredImage?.url}
              publishedAr={new Date()}
              title={posts[0]?.node?.title}
              key={99}
            />
          </div>
          <div className="md:w-[30%] w-full  h-fit min-h-[400px] ">
            <RecentPosts posts={posts} />
          </div>
        </div>
        <RecomandedPosts posts={posts} />
        <Articles posts={posts} />
      </main>
    </MaxWidthWrapper>
  );
}
