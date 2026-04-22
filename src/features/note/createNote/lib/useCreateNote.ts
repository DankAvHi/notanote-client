"use client"

import { NoteRaw, useNoteStore } from "@/entities/note";
import { useUserStore } from "@/entities/user";
import { useState } from "react";
import { toast } from "sonner";
import { createNote as createNoteApi } from "../api";

export const useCreateNote = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { user } = useUserStore()

    const { addNote, updateNote } = useNoteStore()

    const createNoteLocal = (noteDto: NoteRaw) => {
        const id = crypto.randomUUID();
        const note = { ...noteDto, id, isChecked: false }
        addNote(note)
        toast.success("Note local creating successful!");
        return note
    }

    const createNote = async (noteDto: NoteRaw) => {
        setErrors(null);
        setLoading(true);

        const note = createNoteLocal(noteDto)

        if (!user) {
            setLoading(false)
            return
        }

        try {
            const response = await createNoteApi(note)
            if (!response) {
                const message = "Note syncing failed"
                toast.error(message);
                console.error(message);
                setErrors(message)
            }
            else if ((response as unknown as { error: string }).error) {
                const message = "Note syncing failed" + (response as unknown as { error: string }).error
                toast.error(message);
                console.error(message);
                setErrors(message)
            }
            else {
                updateNote(note.id, response)
                toast.success("Note synced successful!");
            }
        } catch (error) {
            const message = "Note syncing failed: " + error
            toast.error(message);
            console.error(message);
            setErrors(message);
        } finally {
            setLoading(false);
        }
    }
    return { createNote, errors, loading, createNoteLocal }
}