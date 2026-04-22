"use client";

import { useLoadNotes, useNoteStore } from "@/entities/note";
import { DeleteAllNotesButton, NotesForm } from "@/features/note";
import { Loader, Typography } from "@/shared/ui";
import { NotesList } from "./ui";

export const Notes: React.FC = () => {
  const { loading, error } = useLoadNotes();
  const { notes } = useNoteStore();

  return (
    <section className="w-full flex flex-col gap-12">
      <NotesForm />

      {error ? (
        <Typography color="red">{error}</Typography>
      ) : typeof notes === "undefined" || !notes || loading ? (
        <Loader />
      ) : notes.length === 0 ? (
        <Typography color="black-surface">{`No notes yet`}</Typography>
      ) : (
        <div className="flex flex-col">
          <NotesList notes={notes} />
          <DeleteAllNotesButton />
        </div>
      )}
    </section>
  );
};
