"use client"

import { useUserStore } from "@/entities/user";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getNotes as getNotesApi } from "../api";
import { useNoteStore } from "../model";

export const useLoadNotes = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { user } = useUserStore()

    const setNotes = useNoteStore((state) => state.setNotes);

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);
                const notes = await getNotesApi();
                if (!notes) {
                    setError("Notes loading failed");
                    toast.error("Notes loading failed");
                } else {
                    setNotes(notes);
                }
            } catch {
                setError("Notes loading failed");
                toast.error("Notes loading failed");
            } finally {
                setLoading(false);
            }
        };
        if (user) {
            load();
        } else {
            setNotes([])
        }

    }, [setNotes, user]);

    return { loading, error };
};