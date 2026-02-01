
"use server";

import { UserAuthDto } from "@/entities/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(user: UserAuthDto) {
    const response = await fetch(`https://localhost:8000/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    if (!response.ok) return { error: "Invalid credentials" };

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


    redirect("/");
}