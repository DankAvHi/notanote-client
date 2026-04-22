"use client"

import { UpdateNoteDto, useNoteStore } from "@/entities/note";
import { useUserStore } from "@/entities/user";
import { useState } from "react";
import { toast } from "sonner";
import { updateNote as updateNoteApi } from "../api";

export const useUpdateNote = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { user } = useUserStore()
    const { updateNote: updateNoteInStore } = useNoteStore()

    const updateNoteLocal = (noteToUpdate: UpdateNoteDto) => {
        console.log(noteToUpdate)
        updateNoteInStore(noteToUpdate.id, noteToUpdate)
    }

    const updateNote = async (noteToUpdate: UpdateNoteDto) => {
        setErrors(null)
        setLoading(true)

        updateNoteLocal(noteToUpdate)

        if (!user) {
            setLoading(false)
            return
        }

        try {
            const response = await updateNoteApi(noteToUpdate)
            if (!response) {
                const message = "Note updating failed"
                toast.error(message);
                console.error(message);
                setErrors(message)
            }
            else if ((response as unknown as { error: string }).error) {
                const message = "Note updating failed" + (response as unknown as { error: string }).error
                toast.error(message);
                console.error(message);
                setErrors(message)
            }
            else {
                toast.success("Note updated successful!");
            }
        }
        catch (error) {
            const message = "Note updating failed: " + error
            toast.error(message);
            console.error(message);
            setErrors(message);
        } finally {
            setLoading(false);
        }
    }

    return { errors, loading, updateNote }
}