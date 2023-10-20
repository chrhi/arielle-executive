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

const PostCardLarg: FC<PostCardAbdullahProps> = ({
  auther,
  description,
  imageUrl,
  publishedAr,
  title,
}) => {
  return (
    <Link href={"/post/hhhh"}>
      <div className="md:w-[90%] w-full mr-auto rounded-xl  bg-white  flex flex-col items-start">
        <div className="w-full h-[100px] flex items-center justify-start">
          <h1 className="text-start text-4xl font-bold text-black">
            The Ultimate Home Office Setup Guide For 2023
          </h1>
        </div>

        <div className="w-full h-fit flex flex-col  mb-4">
          <h2 className="text-2xl font-bold text-zinc-950 text-start">
            {title}
          </h2>
          <p className="truncate">{description}</p>
        </div>
        <div className="w-full relative h-[400px]">
          <Image
            src={imageUrl}
            alt="image"
            layout="fill"
            className="object-cover  "
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCardLarg;
