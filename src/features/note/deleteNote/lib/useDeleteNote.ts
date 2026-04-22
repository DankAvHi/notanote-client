"use client"

import { DeleteNoteDto, useNoteStore } from "@/entities/note";
import { useUserStore } from "@/entities/user";
import { useState } from "react";
import { toast } from "sonner";
import { deleteNote as deleteNoteApi } from "../api";

export const useDeleteNote = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { user } = useUserStore()
    const { deleteNote: deleteNoteInStore } = useNoteStore()

    const deleteNoteLocal = (noteToDelete: DeleteNoteDto) => {
        deleteNoteInStore(noteToDelete.id)
    }

    const deleteNote = async (noteToDelete: DeleteNoteDto) => {
        setErrors(null)
        setLoading(true)

        deleteNoteLocal(noteToDelete)

        if (!user) {
            setLoading(false)
            return
        }

        try {
            const response = await deleteNoteApi(noteToDelete)
            if (!response) {
                const message = "Note deleting failed"
                toast.error(message);
                console.error(message);
                setErrors(message)
            }
            else if ((response as unknown as { error: string }).error) {
                const message = "Note deleting failed" + (response as unknown as { error: string }).error
                toast.error(message);
                console.error(message);
                setErrors(message)
            }
            else {
                toast.success("Note deleted successful!");
            }
        }
        catch (error) {
            const message = "Note deleting failed: " + error
            toast.error(message);
            console.error(message);
            setErrors(message);
        } finally {
            setLoading(false);
        }
    }

    return { errors, loading, deleteNote }
}