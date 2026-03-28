"use client";

import { NotesList, useLoadNotes, useNoteStore } from "@/entities/note";
import { NotesForm } from "@/features/note";
import { Loader, Typography } from "@/shared/ui";

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
        <NotesList notes={notes} />
      )}
    </section>
  );
};
