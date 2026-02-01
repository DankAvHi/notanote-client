import { Button, CustomButtonProps } from "./Button";
import { Typography, TypographyProps } from "./Typography";

type Props = {
  children?: React.ReactNode;
  variant?: "black-surface" | "white";
  onClick?: () => void;
  buttonProps?: CustomButtonProps;
  typographyProps?: TypographyProps;
};

const variantStyles = {
  "black-surface": "border border-white bg-(--black-surface)",
  white: "border border-(--black-surface) bg-white",
};
const textColors: Record<string, "white" | "black-surface"> = {
  "black-surface": "white",
  white: "black-surface",
};

export const SquareButton: React.FC<Props> = (props) => {
  const { children, variant = "black-surface", onClick } = props;
  return (
    <Button
      onClick={onClick}
      className={`p-5 ${variantStyles[variant]} flex justify-center items-center`}
      {...props.buttonProps}
    >
      <Typography color={textColors[variant]} {...props.typographyProps}>
        {children}
      </Typography>
    </Button>
  );
};
