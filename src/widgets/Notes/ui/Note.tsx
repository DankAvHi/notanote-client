import { DeleteNoteButton } from "@/features/note";
import { NoteCheckbox } from "@/features/note/updateNote/ui";
import { Typography } from "@/shared/ui";

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
      <NoteCheckbox noteToUpdate={{ id, isChecked }} />
      <Typography size="lg" color="black-surface" className="w-full">
        {text}
      </Typography>
      <DeleteNoteButton noteToDelete={{ id }} />
    </li>
  );
};
