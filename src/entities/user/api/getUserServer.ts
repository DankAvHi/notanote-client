import { cookies } from "next/headers";
import { User, UserPayload } from "../types";

export const getUserServer = async (userPayload: UserPayload) => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("access_token")?.value;

        if (!token) return null;

        const response = await fetch(`https://localhost:8000/user/${userPayload.id}`, {
            headers: {
                "Content-Type": "application/json",
                Cookie: `access_token=${token}`
            }
        })
        const user: User = await response.json()
        return user
    } catch (e) {
        console.error(e)
        return null
    }
}