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

    const createNote = async (note: CreateNoteDto) => {
        try {
            setErrors(null);
            setLoading(true);
            const response = await createNoteApi(note)
            if (!response) {
                toast.error("Note creating failed");
                console.error("Note creating failed");
                setErrors("Note creating failed")
            } else {
                toast.success("Note creating successful!");
                addNote(response)
            }

        } catch (error) {
            toast.error("Note creating failed: " + error);
            console.error("Note creating failed:", error);
            setErrors("An error occurred during creating Note. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return { createNote, errors, loading }
}