"use client";

import { Button } from "@/components/ui/button";

const error = ({ error, reset }: { error: string; reset: () => void }) => {
  return (
    <div>
      <h1>something went wrong </h1>
      <Button onClick={reset}>try again</Button>
    </div>
  );
};

export default error;
