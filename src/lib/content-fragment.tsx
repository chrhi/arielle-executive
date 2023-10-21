/* eslint-disable */

import React, { ReactNode } from "react";

type TextStyle = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

type ObjectType = {
  title: string;
  height: number;
  width: number;
  src: string;
};

type ElementType = "heading-three" | "paragraph" | "heading-four" | "image";

export const getContentFragment = (
  index: number,
  text: string | ReactNode,
  obj: TextStyle | ObjectType | undefined,
  type?: ElementType
): ReactNode => {
  let modifiedText: ReactNode = text;

  if (obj) {
    //@ts-ignore
    if (obj?.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }

    //@ts-ignore
    if (obj?.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    //@ts-ignore
    if (obj?.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }

  switch (type) {
    case "heading-three":
      return (
        <h3 key={index} className="text-xl font-semibold mb-4">
          {React.Children.map(modifiedText, (item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="mb-8">
          {React.Children.map(modifiedText, (item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      );
    case "heading-four":
      return (
        <h4 key={index} className="text-md font-semibold mb-4">
          {React.Children.map(modifiedText, (item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h4>
      );
    case "image":
      if (typeof modifiedText === "string") {
        // This handles the case when 'modifiedText' is a string (text content)
        //@ts-ignore
        return (
          <img
            key={index}
            //@ts-ignore
            alt={obj?.title}
            //@ts-ignore
            height={obj?.height}
            //@ts-ignore
            width={obj?.width}
            //@ts-ignore
            src={obj.src}
          />
        );
      }
      // If 'modifiedText' is not a string, just return it as is
      return modifiedText;
    default:
      return modifiedText;
  }
};
