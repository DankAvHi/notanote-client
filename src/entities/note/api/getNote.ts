"use client"

import { GetNoteDto, NoteResponse } from "../types"

export const getNote = async ({ id }: GetNoteDto) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/note/${id}`, {
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