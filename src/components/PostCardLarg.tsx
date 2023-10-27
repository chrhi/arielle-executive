import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

interface PostCardAbdullahProps {
  imageUrl: string;
  title: string;
  description: string;
  auther: string;
  publishedAr: Date;
  slug: string;
}

const PostCardLarg: FC<PostCardAbdullahProps> = ({
  auther,
  description,
  imageUrl,
  publishedAr,
  title,
  slug,
}) => {
  return (
    <Link href={`/post/${slug}`}>
      <div className="md:w-[90%] w-full mr-auto rounded-xl  bg-white  flex flex-col items-start">
        <div className="w-full h-[150px] md:h-[100px] flex items-center justify-start">
          <h1 className="text-start  text-4xl font-bold text-black">{title}</h1>
        </div>

        <div className="w-full h-fit flex flex-col  mb-4">
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
