
"use server";

import { UserAuthDto } from "@/entities/user";
import { cookies } from "next/headers";

export async function registerAction(user: UserAuthDto) {
    const response = await fetch(`https://localhost:8000/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        const errorData = await response.json();
        return {
            error:
            {
                status: response.status,
                message: errorData.message || "Authentication failed"
            }
        };
    }

    const cookieStore = await cookies();

    const setCookieHeader = response.headers.get("set-cookie");

    if (setCookieHeader) {
        const parts = setCookieHeader.split(';');
        const [nameValue] = parts;
        const [name, value] = nameValue.split('=');

        cookieStore.set(name.trim(), value.trim(), {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });
    }

    return { success: true }
}