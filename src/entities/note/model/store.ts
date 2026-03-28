import { create } from "zustand";
import { Note, Notes } from "../types";

type NoteStore = {
    notes: Notes | null | undefined;
    setNotes: (notes: Notes | null) => void;
    addNote: (note: Note) => void
    deleteNote: (id: string) => void
    updateNote: (id: string, data: Note) => void
}

export const useNoteStore = create<NoteStore>((set) => ({
    notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes') as string) : undefined,
    setNotes: (notes) => set({ notes }),
    addNote: (note) => {
        localStorage.setItem('notes', JSON.stringify(note))
        set(state => ({
            notes: state.notes ? [...state.notes, note] : [note]
        }))
    },
    deleteNote: (id) => set(state => ({
        notes: state.notes ? state.notes.filter(note => note.id !== id) : []
    })),
    updateNote: (id, data) => set(state => ({
        notes: state.notes
            ? state.notes.map(note => note.id === id ? { ...note, ...data } : note)
            : []
    })),
}));
