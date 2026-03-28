"use client"

import { useNoteStore } from "@/entities/note/model";
import { CreateNoteDto } from "@/entities/note/types";
import { useState } from "react";
import { toast } from "sonner";
import { createNote as createNoteApi } from "../api";

export const useCreateNote = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const { addNote } = useNoteStore()

    const createNoteLocal = (note: CreateNoteDto) => {
        const id = crypto.randomUUID();

        addNote({ ...note, id, isChecked: false })
        toast.success("Note local creating successful!");
    }

    const createNote = async (note: CreateNoteDto) => {
        setErrors(null);
        setLoading(true);

        createNoteLocal(note)

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