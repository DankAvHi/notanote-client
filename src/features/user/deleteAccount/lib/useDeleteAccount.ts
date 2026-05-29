"use client"

import { useNoteStore } from "@/entities/note";
import { useUserStore } from "@/entities/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { deleteAccount as deleteAccountApi } from "../api";

export const useDeleteAccount = () => {
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { setUser } = useUserStore()
    const { setNotes } = useNoteStore()

    const router = useRouter();

    const deleteAccount = async () => {
        try {
            setErrors(null);
            setLoading(true);
            const response = await deleteAccountApi()
            if (!response) {
                toast.error("Deleting account failed");
                console.error("Deleting account failed");
                setErrors("Deleting account failed")
            }
            else {
                toast.success("Deleting account successful!");
                setUser(null)
                setNotes(null)
                router.push("/");
            }
        } catch (error) {
            toast.error("Deleting account failed: " + error);
            console.error("Deleting account failed:", error);
            setErrors("An error occurred during deleting account. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return { deleteAccount, errors, loading }
}