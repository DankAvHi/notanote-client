"use client"

import { DeleteNoteDto, NoteResponse } from "@/entities/note"

export const deleteNote = async ({ id }: DeleteNoteDto) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/note/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })

        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

        const note: NoteResponse = await response.json()
        return note
    } catch (e) {
        console.error(e)
        return null
    }
}