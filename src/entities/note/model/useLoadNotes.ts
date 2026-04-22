"use client"

import { useUserStore } from "@/entities/user";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getNotes as getNotesApi } from "../api";
import { useNoteStore } from "../model";
import { Notes } from "../types";

const getNotesFromLocalStorage = () => {
    const stored = localStorage.getItem('notes-storage')
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            if (parsed.state?.notes) {
                return parsed.state.notes as Notes
            }
        } catch {
            console.error('Failed to parse notes from localStorage');
            return null
        }
    }
    return null
}

export const useLoadNotes = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { user } = useUserStore()

    const setNotes = useNoteStore((state) => state.setNotes);

    useEffect(() => {
        const loadFromCloud = async () => {
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

        const loadFromLocalStorage = () => {
            const localNotes = getNotesFromLocalStorage()
            if (localNotes) {
                setNotes(localNotes);
            } else {
                setNotes([])
            }
            setLoading(false)
        };

        if (user) {
            loadFromCloud();
        } else {
            loadFromLocalStorage();
        }

    }, [setNotes, user]);

    return { loading, error };
};