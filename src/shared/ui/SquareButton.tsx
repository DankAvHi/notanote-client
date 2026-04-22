import { Button, CustomButtonProps } from "./Button";
import { Typography, TypographyProps } from "./Typography";

const variantStyles = {
  "black-surface": "border border-white bg-(--black-surface)",
  "black-surface-no-border": "bg-(--black-surface)",
  white: "border border-(--black-surface) bg-white",
  red: "bg-(--red)",
};
const textColors: Record<string, "white" | "black-surface"> = {
  "black-surface": "white",
  "black-surface-no-border": "white",
  white: "black-surface",
  red: "white",
};

type Props = {
  children?: React.ReactNode;
  variant?: keyof typeof variantStyles;
  onClick?: () => void;
  buttonProps?: CustomButtonProps;
  typographyProps?: TypographyProps;
};

export const SquareButton: React.FC<Props> = (props) => {
  const { children, variant = "black-surface", onClick } = props;
  return (
    <Button
      {...props.buttonProps}
      onClick={onClick}
      className={`p-5 ${variantStyles[variant]} flex justify-center items-center ${props.buttonProps?.className}`}
    >
      <Typography color={textColors[variant]} {...props.typographyProps}>
        {children}
      </Typography>
    </Button>
  );
};
