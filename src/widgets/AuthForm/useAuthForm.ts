import { UserAuthDto } from "@/entities/user";
import { useLogin, useRegister } from "@/features/auth";

import { useState } from "react";

export const useAuthForm = () => {
    const { login, errors: loginErrors, loading: loginLoading } = useLogin();
    const {
        register,
        errors: registerErrors,
        loading: registerLoading,
    } = useRegister();

    const errors = loginErrors || registerErrors;
    const loading = loginLoading || registerLoading;

    const [form, setForm] = useState<UserAuthDto>({ name: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, [event.target.name]: event.target.value });

    const handlePasswordToggle = () => setShowPassword(!showPassword);
    const passwordInputType = showPassword ? "text" : "password";

    return {
        form,
        showPassword,
        passwordInputType,
        handleInputChange,
        handlePasswordToggle,
        login: () => login(form),
        register: () => register(form),
        errors,
        loading,
    }
}