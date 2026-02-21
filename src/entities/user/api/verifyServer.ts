import { cookies } from "next/headers";
import { cache } from "react";
import { UserPayload } from "../types";

export const verifyServer = cache(async () => {
    try {

        const cookieStore = await cookies();
        const allCookies = cookieStore.toString();
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/auth/verify`,
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