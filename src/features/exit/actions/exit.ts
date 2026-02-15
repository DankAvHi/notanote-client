"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function exit() {
    const cookieStore = await cookies();

    const res = await fetch(`https://localhost:8000/auth`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Cookie": cookieStore.toString()
        },
    });

    if (!res.ok) return { error: "Failed to log out" };

    cookieStore.delete("access_token");

    redirect("/");
}