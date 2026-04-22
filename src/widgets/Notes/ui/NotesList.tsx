import { Notes } from "../../../entities/note/types";
import { Note } from "./Note";

type Props = {
  notes: Notes;
};

export const NotesList: React.FC<Props> = ({ notes }) => {
  const getIsEven = (index: number) => (index === 0 ? true : index % 2 === 0);
  const getIsLast = (length: number, index: number) => index === length - 1;

  return (
    <ul className={`flex flex-col`}>
      {notes.map((note, index) => (
        <Note
          {...note}
          key={note.id}
          isEven={getIsEven(index)}
          isLast={getIsLast(notes.length, index)}
        />
      ))}
    </ul>
  );
};
