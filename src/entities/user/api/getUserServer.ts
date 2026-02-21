import { cookies } from "next/headers";
import { cache } from "react";
import { User } from "../types";
import { verifyServer } from "./verifyServer";

export const getUserServer = cache(async () => {
    try {
        const payload = await verifyServer();
        if (!payload) return null;
        const cookieStore = await cookies();
        const token = cookieStore.get("access_token")?.value;

        if (!token) return null;

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/user/${payload.id}`, {
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