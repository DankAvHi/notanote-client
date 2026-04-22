"use client"

import { NoteResponse } from "@/entities/note"

export const deleteAllNotes = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/note`, {
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