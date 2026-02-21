"use client";

import Image, { ImageProps } from "next/image";
import { Button, CustomButtonProps } from "./Button";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick?: () => void;
  buttonProps?: CustomButtonProps;
  imageProps?: ImageProps;
};

export const ImageButton: React.FC<Props> = (props) => {
  const { src, alt, width, height, onClick } = props;
  return (
    <Button
      onClick={onClick}
      className={`rounded-full flex items-center justify-center`}
      {...props.buttonProps}
    >
      <Image
        className="object-cover"
        src={`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/uploads/${src}`}
        alt={alt}
        width={width}
        height={height}
        {...props.imageProps}
        unoptimized={process.env.NEXT_PUBLIC_NODE_ENV === "development"}
      />
    </Button>
  );
};
