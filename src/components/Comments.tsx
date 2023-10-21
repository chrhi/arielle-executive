import { getComments } from "@/lib/hygraph";
import { FC } from "react";

interface CommentsAbdullahProps {
  slug: string;
}

const Comments: FC<CommentsAbdullahProps> = async ({ slug }) => {
  const comments: CommentType[] = await getComments(slug);

  console.log(comments);

  return (
    <div className="w-full min-h-[200px] bg-gray-50 p-4 rounded-lg h-fit flex flex-col">
      {comments.map((item) => {
        return (
          <div
            key={item.email + 123 + item.comment}
            className="w-full h-fit flex flex-col"
          >
            <div className="w-full flex items-center gap-x-4 justify-start">
              <p className="text-lg text-gray-700 ">{item.name}</p>
            </div>
            <p className="text-xl font-bold text-start ">{item.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
