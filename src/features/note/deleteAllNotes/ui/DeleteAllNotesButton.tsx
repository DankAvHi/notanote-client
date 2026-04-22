"use client";

import { SquareButton, Typography } from "@/shared/ui";
import { useDeleteAllNotes } from "../lib";

export const DeleteAllNotesButton: React.FC = () => {
  const { deleteAllNotes, errors, loading } = useDeleteAllNotes();
  return (
    <div className="flex flex-col gap-3 w-full">
      <SquareButton
        buttonProps={{ disabled: loading }}
        onClick={deleteAllNotes}
        variant="black-surface-no-border"
      >{`Clean all`}</SquareButton>
      {errors ? <Typography color="red">{errors}</Typography> : <></>}
    </div>
  );
};
