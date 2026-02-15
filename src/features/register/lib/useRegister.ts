"use client"

import { UserAuthDto } from "@/entities/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { registerAction } from "../actions";

export const useRegister = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const register = async (user: UserAuthDto) => {
        try {
            setErrors(null);
            setLoading(true);
            const response = await registerAction(user)
            if (response.error) {
                toast.error("Registration failed: " + response.error.message);
                console.error("Registration failed:", response.error);
                setErrors(response.error.message)
            } else {
                toast.success("Registration successful!");
                router.push("/");
            }

        } catch (error) {
            console.log(error + `sdfasdfasdfasdfasdfasdf`)
            toast.error("Registration failed: " + error);
            console.error("Registration failed:", error);
            setErrors("An error occurred during registration. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return { register, errors, loading }
}