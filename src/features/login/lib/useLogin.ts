"use client"

import { getUser, login as loginApi, UserAuthDto, useUserStore } from "@/entities/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const useLogin = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const login = async (user: UserAuthDto) => {
        try {
            setErrors(null);
            setLoading(true);
            const response = await loginApi(user)
            if (!response) {
                toast.error("Login failed");
                console.error("Login failed");
                setErrors("Login failed")
            }
            else {
                toast.success("Login successful!");
                const user = await getUser()
                useUserStore.setState({ user })
                router.push("/");
            }
        } catch (error) {
            toast.error("Login failed: " + error);
            console.error("Login failed:", error);
            setErrors("An error occurred during login. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return { login, errors, loading }
}