"use client";

import { FC, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { commentValidator } from "@/lib/validators";
import { Loader2 } from "lucide-react";

interface AddCommentFormAbdullahProps {
  slug: string;
}

const AddCommentForm: FC<AddCommentFormAbdullahProps> = ({ slug }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
    slug,
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitComment = async () => {
    setIsLoading(true);
    try {
      const payload = commentValidator.parse(data);
      await axios.post("/api", payload);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      throw new Error("failed to submit an error");
    }
  };
  return (
    <div className="w-full h-[300px] flex flex-col ">
      <Textarea
        onChange={(e) => setData({ ...data, comment: e.target.value })}
        className="w-full h-[100px] rounded-lg bg-white"
        placeholder="write your comment here..."
      />
      <div className="w-full h-[100px] gap-x-4 flex items-center justify-between">
        <Input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
          placeholder="your email"
          required
        />
        <Input
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder="your name"
          required
        />
        <Button disabled={isLoading} onClick={handleSubmitComment} size={"lg"}>
          {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddCommentForm;
