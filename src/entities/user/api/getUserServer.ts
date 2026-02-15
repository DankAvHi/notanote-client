import { cookies } from "next/headers";
import { cache } from "react";
import { User } from "../types";
import { verify } from "./verify";

export const getUserServer = cache(async () => {
    try {
        const payload = await verify();
        if (!payload) return null;
        const cookieStore = await cookies();
        const token = cookieStore.get("access_token")?.value;

        if (!token) return null;

        const response = await fetch(`https://localhost:8000/user/${payload.id}`, {
            headers: {
                "Content-Type": "application/json",
                Cookie: `access_token=${token}`
            }
        })
        if (!response.ok) return null

        const user: User = await response.json()
        return user
    } catch (e) {
        console.error(e)
        return null
    }
})