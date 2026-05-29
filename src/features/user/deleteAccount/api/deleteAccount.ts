"use client"

import { UserPayload } from "@/entities/user";
import { cache } from "react";

export const deleteAccount = cache(async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/user`,
            { headers: { "Content-Type": "application/json" }, credentials: "include", method: "DELETE" }
        )

        if (!response.ok) return false

        const user: UserPayload = await response.json()

        return user

    } catch (e) {
        console.error(e)
        return false
    }
})