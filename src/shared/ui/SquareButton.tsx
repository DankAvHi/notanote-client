import { FC } from 'react';
import { Button, CustomButtonProps } from './Button';
import { Typography, TypographyProps } from './Typography';

const variantStyles = {
  'black-surface': 'border border-white bg-(--black-surface)',
  'black-surface-no-border': 'bg-(--black-surface)',
  white: 'border border-(--black-surface) bg-white',
  red: 'bg-(--red)',
};
const textColors: Record<string, 'white' | 'black-surface'> = {
  'black-surface': 'white',
  'black-surface-no-border': 'white',
  white: 'black-surface',
  red: 'white',
};

type Props = {
  children?: React.ReactNode;
  variant?: keyof typeof variantStyles;
  onClick?: () => void;
  buttonProps?: CustomButtonProps;
  typographyProps?: TypographyProps;
  ButtonElement?: string | FC;
};

export const SquareButton: React.FC<Props> = (props) => {
  const {
    children,
    variant = 'black-surface',
    onClick,
    ButtonElement = Button,
  } = props;
  return (
    <ButtonElement
      {...props.buttonProps}
      onClick={onClick}
      className={`p-5 ${variantStyles[variant]} flex justify-center items-center cursor-pointer ${props.buttonProps?.className}`}
    >
      <Typography color={textColors[variant]} {...props.typographyProps}>
        {children}
      </Typography>
    </ButtonElement>
  );
};
