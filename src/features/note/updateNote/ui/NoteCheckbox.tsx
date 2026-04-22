"use client";

import { UpdateNoteDto } from "@/entities/note";
import { Typography } from "@/shared/ui";
import { Checkbox } from "@/shared/ui/Checkbox";
import { useUpdateNote } from "../lib";

type Props = {
  noteToUpdate: UpdateNoteDto;
};

export const NoteCheckbox: React.FC<Props> = ({ noteToUpdate }) => {
  const { updateNote, errors, loading } = useUpdateNote();

  const checkNote = async () =>
    await updateNote({ ...noteToUpdate, isChecked: !!!noteToUpdate.isChecked });

  return (
    <div className="flex flex-col gap-3 ">
      <Checkbox
        disabled={loading}
        onChange={checkNote}
        value={!!noteToUpdate.isChecked}
      />
      {errors ? <Typography color="red">{errors}</Typography> : <></>}
    </div>
  );
};
