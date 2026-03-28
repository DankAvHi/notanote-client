"use client"

import { NoteResponse, UpdateNoteDto } from "../types"

export const updateNote = async (body: UpdateNoteDto) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/note`, {
            body: JSON.stringify(body),
            method: "PATCH",
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