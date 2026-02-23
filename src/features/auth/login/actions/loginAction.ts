
"use server";

import { UserAuthDto } from "@/entities/user";
import { isProduction } from "@/shared/config";
import { cookies } from "next/headers";

export async function loginAction(user: UserAuthDto) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials: 'include'
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
            httpOnly: isProduction,
            secure: isProduction,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });
        return { success: true }
    }

    return {
        error:
        {
            status: response.status,
            message: "Cookies error"
        }
    };



}