"use client";

import { UserAuthDto } from "@/entities/user";
import { login } from "@/features/login";
import { Input, SquareButton } from "@/shared/ui";
import { useState } from "react";

export const AuthForm: React.FC = () => {
  const [form, setForm] = useState<UserAuthDto>({ name: "", password: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`w-full flex flex-col gap-12 items-center`}
    >
      <Input
        type="text"
        placeholder="Login"
        name="name"
        onChange={handleInputChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleInputChange}
      />
      <div className={`flex gap-12 items-center`}>
        <SquareButton onClick={() => login(form)} variant="white">
          {"Login"}
        </SquareButton>
        <SquareButton>{"Sign Up"}</SquareButton>
      </div>
    </form>
  );
};
