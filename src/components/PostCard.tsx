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
            src={"/image.png"}
            alt="image"
            layout="fill"
            className="object-cover rounded-t-xl"
          />
        </div>
        <div className="w-full h-fit flex flex-col  p-2">
          <div className="w-full h-[20px] flex items-center gap-x-16 justify-between ">
            <p className="text-zinc-600 text-sm">Abdellah Chehri</p>
            <p className="text-zinc-600 text-sm">09/12/2023</p>
          </div>
          <h2 className="md:text-lg text-xl font-semibold text-zinc-950 text-start">
            {title}
          </h2>
          <p className="truncate text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
