import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

interface PostCardAbdullahProps {
  imageUrl: string;
  title: string;
  description: string;
  auther: string;
  publishedAr: Date;
}

const PostCard: FC<PostCardAbdullahProps> = ({
  auther,
  description,
  imageUrl,
  publishedAr,
  title,
}) => {
  return (
    <Link href={"/post/hhhh"}>
      <div className="w-[100%] mr-auto rounded-xl  bg-white hover:bg-gray-100 cursor-pointer   flex flex-col items-start">
        <div className="w-full  relative h-[250px]">
          <Image
            src={imageUrl}
            alt="image"
            layout="fill"
            className="object-cover "
          />
        </div>
        <div className="w-full h-fit flex flex-col  my-4 p-2">
          <h2 className="md:text-lg text-3xl font-semibold text-zinc-950 text-start">
            {title}
          </h2>
          <p className="truncate text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
