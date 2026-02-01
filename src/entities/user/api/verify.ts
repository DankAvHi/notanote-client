import { cookies } from "next/headers";
import { UserPayload } from "../types";

export const verify = async () => {
    try {

        const cookieStore = await cookies();
        const allCookies = cookieStore.toString();
        const response = await fetch('https://localhost:8000/auth/verify',
            { headers: { "Content-Type": "application/json", "Cookie": allCookies }, credentials: "include", }
        )

        const user: UserPayload = await response.json()

        if (!response.ok) return false

        return user

    } catch (e) {
        console.error(e)
        return false
    }
}