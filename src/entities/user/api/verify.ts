import { cookies } from "next/headers";
import { cache } from "react";
import { UserPayload } from "../types";

export const verify = cache(async () => {
    try {

        const cookieStore = await cookies();
        const allCookies = cookieStore.toString();
        const response = await fetch('https://localhost:8000/auth/verify',
            { headers: { "Content-Type": "application/json", "Cookie": allCookies }, credentials: "include", }
        )

        if (!response.ok) return false

        const user: UserPayload = await response.json()

        return user

    } catch (e) {
        console.error(e)
        return false
    }
})