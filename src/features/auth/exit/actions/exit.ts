"use server";

import { cookies } from "next/headers";

export async function exit() {
    const cookieStore = await cookies();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/auth`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Cookie": cookieStore.toString()
        },
    });

    if (!res.ok) return { error: "Failed to log out" };

    cookieStore.delete("access_token");
}