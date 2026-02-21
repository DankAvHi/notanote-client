"use client"

import { User } from "../types";
import { verify } from "./verify";

export const getUser = async () => {
    try {
        const payload = await verify()
        if (!payload) return null;

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/user/${payload.id}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const user: User = await response.json()
        return user
    } catch (e) {
        console.error(e)
        return null
    }
}