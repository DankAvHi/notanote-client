"use client"

import { NotesResponse } from "../types"

export const getNotes = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/note`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const notes: NotesResponse = await response.json()
        return notes
    } catch (e) {
        console.error(e)
        return null
    }
}