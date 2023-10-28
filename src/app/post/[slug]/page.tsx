/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getContentFragment } from "@/lib/content-fragment";
import { getPostDetails, getPosts } from "@/lib/hygraph";
import Image from "next/image";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AddCommentForm from "@/components/forms/AddCommentForm";
import Comments from "@/components/Comments";
import RecomandedPosts from "@/components/RecomandedPosts";
import FadeIn from "@/components/animations/FadeIn";

interface PageProps {
  params: {
    slug: string;
  };
}

const page: FC<PageProps> = async ({ params }) => {
  const post: DetailedPost = await getPostDetails(params?.slug);
  const posts: BlogPost[] = await getPosts();

  return (
    <MaxWidthWrapper>
      <FadeIn>
        <main className="min-h-[600px] w-full flex  flex-col  pt-4 ">
          <h1 className="text-5xl font-bold text-start my-6">{post?.title}</h1>
          {/* image  */}
          <div className="w-full  relative rounded-xl h-[500px]">
            <Image
              src={post?.featuredImage?.url}
              alt="image"
              layout="fit"
              fill={true}
              className={`!object-cover`}
            />
          </div>
          <h1 className="text-3xl font-semibold  text-start my-6">
            {post?.title}
          </h1>
          <div className=" w-full p-2 md:p-0 md:w-[90%] mr-auto  h-fit mb-8 mt-4">
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                //@ts-ignore
                getContentFragment(itemindex, item.text, item)
              );
              //@ts-ignore
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
          <p className="text-2xl  my-4 font-semibold text-start">
            This article created by{" "}
          </p>
          <div className="w-full min-h-[100px]  h-fit gap-y-4 bg-gray-50 rounded-lg my-6 py-4 flex flex-col justify-center items-center">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src={
                  post?.author?.photo ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIO5Sf2NUn8gqj4CMxGUUkz_9w5njXAqHSRxg82A&s"
                }
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-xl">{post.author.name}</p>

            <p className="text-gray-700 text-lg">{post.author.bio}</p>
          </div>
          <p className="text-2xl  my-4 font-semibold text-start">
            Create a comment
          </p>
          <AddCommentForm slug={params?.slug} />

          <p className="text-2xl  my-4 font-semibold text-start">Comments</p>
          <Comments slug={params?.slug} />
          <RecomandedPosts posts={posts} />
        </main>
      </FadeIn>
    </MaxWidthWrapper>
  );
};

export default page;
