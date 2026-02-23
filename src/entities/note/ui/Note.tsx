import { SquareButton, Typography } from "@/shared/ui";

type Props = {
  id: string;
  text: string;
  isChecked: boolean;
  isEven: boolean;
  isLast: boolean;
};

export const Note: React.FC<Props> = ({
  id,
  isChecked,
  text,
  isEven,
  isLast,
}) => {
  return (
    <li
      className={`
        p-5
        border border-(--black-surface) ${isLast ? `` : `border-b-0`}
        ${isEven ? `` : `bg-(--white-surface)`}
        w-full 
        flex items-center gap-2.5`}
    >
      <Typography size="lg" color="black-surface" className="w-full">
        {text}
      </Typography>
      <SquareButton
        buttonProps={{ className: `py-0` }}
        variant="red"
      >{`Delete`}</SquareButton>
    </li>
  );
};
