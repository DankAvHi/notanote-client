"use client";

import { DeleteNoteDto } from "@/entities/note";
import { SquareButton, Typography } from "@/shared/ui";
import { useDeleteNote } from "../lib";

type Props = {
  noteToDelete: DeleteNoteDto;
};

export const DeleteNoteButton: React.FC<Props> = ({ noteToDelete }) => {
  const { deleteNote, errors, loading } = useDeleteNote();

  return (
    <div className="flex flex-col gap-3 ">
      <SquareButton
        buttonProps={{ disabled: loading, className: `py-0` }}
        variant="red"
        onClick={() => deleteNote(noteToDelete)}
      >{`Delete`}</SquareButton>
      {errors ? <Typography color="red">{errors}</Typography> : <></>}
    </div>
  );
};
