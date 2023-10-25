"use client";

import { Button } from "@/components/ui/button";

const error = ({ error, reset }: { error: string; reset: () => void }) => {
  return (
    <div className="w-full h-[550px] flex flex-col justify-center  items-center">
      <h1 className="text-5xl text-center font-bold">something went wrong </h1>
      <div className="flex items-center h-24 gap-x-4">
        <Button variant="ghost" className="my-4" onClick={reset}>
          Go Home
        </Button>
        <Button className="my-4" onClick={reset}>
          try again
        </Button>
      </div>
    </div>
  );
};

export default error;
