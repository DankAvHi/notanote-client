"use client"

import { CreateNoteDto, NoteResponse } from "@/entities/note"

export const createNote = async (body: CreateNoteDto) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/note`, {
            body: JSON.stringify(body),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const note: NoteResponse = await response.json()
        return note
    } catch (e) {
        console.error(e)
        return null
    }
}