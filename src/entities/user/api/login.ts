"use client"

import { UserAuthDto } from "../types";

export const login = async (userAuthDto: UserAuthDto) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userAuthDto),
            credentials: 'include'
        });

        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

        return { success: true }

    } catch (e) {
        console.error(e)
        return null
    }
}