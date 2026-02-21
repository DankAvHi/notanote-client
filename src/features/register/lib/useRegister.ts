"use client"

import { getUser, register as registerApi, UserAuthDto, useUserStore } from "@/entities/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const useRegister = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const register = async (user: UserAuthDto) => {
        try {
            setErrors(null);
            setLoading(true);
            const response = await registerApi(user)
            if (!response) {
                toast.error("Login failed");
                console.error("Login failed");
                setErrors("Login failed")
            } else {
                toast.success("Registration successful!");
                const user = await getUser()
                useUserStore.setState({ user })
                router.push("/");
            }

        } catch (error) {
            toast.error("Registration failed: " + error);
            console.error("Registration failed:", error);
            setErrors("An error occurred during registration. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return { register, errors, loading }
}