import { Skeleton } from "@/components/ui/skeleton";

import { FC } from "react";

interface ImageLouderAbdullahProps {
  className: string;
}

const ImageLouder: FC<ImageLouderAbdullahProps> = ({ className }) => {
  return (
    <div>
      <Skeleton className={className} />
    </div>
  );
};

export default ImageLouder;
