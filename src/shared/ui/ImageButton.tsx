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
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...props.imageProps}
      />
    </Button>
  );
};
