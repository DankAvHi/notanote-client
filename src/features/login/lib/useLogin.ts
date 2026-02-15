"use client"

import { UserAuthDto } from "@/entities/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { loginAction } from "../actions";

export const useLogin = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const login = async (user: UserAuthDto) => {
        try {
            setErrors(null);
            setLoading(true);
            const response = await loginAction(user)
            if (response.error) {
                toast.error("Login failed: " + response.error.message);
                console.error("Login failed:", response.error);
                setErrors(response.error.message)
            }
            else {
                toast.success("Login successful!");
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