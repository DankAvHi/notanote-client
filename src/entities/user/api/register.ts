"use client"

import { UserAuthDto, UserPayload } from "../types";

export const register = async (userAuthDto: UserAuthDto) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userAuthDto),
            credentials: 'include'
        });

        if (!response.ok) return false

        const user: UserPayload = await response.json()

        return user

    } catch (e) {
        console.error(e)
        return false
    }
}