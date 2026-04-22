"use client"

import { useNoteStore } from "@/entities/note";
import { useUserStore } from "@/entities/user";
import { useState } from "react";
import { toast } from "sonner";
import { deleteAllNotes as deleteAllNotesApi } from "../api";

export const useDeleteAllNotes = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { user } = useUserStore()
    const { setNotes } = useNoteStore()

    const deleteAllNotesLocal = () => {
        setNotes([])
    }

    const deleteAllNotes = async () => {
        setErrors(null)
        setLoading(true)

        deleteAllNotesLocal()

        if (!user) {
            setLoading(false)
            return
        }

        try {
            const response = await deleteAllNotesApi()
            if (!response) {
                const message = "Notes deleting failed"
                toast.error(message);
                console.error(message);
                setErrors(message)
            }
            else if ((response as unknown as { error: string }).error) {
                const message = "Notes deleting failed" + (response as unknown as { error: string }).error
                toast.error(message);
                console.error(message);
                setErrors(message)
            }
            else {
                toast.success("Notes deleted successful!");
            }
        }
        catch (error) {
            const message = "Notes deleting failed: " + error
            toast.error(message);
            console.error(message);
            setErrors(message);
        } finally {
            setLoading(false);
        }
    }

    return { errors, loading, deleteAllNotes }
}