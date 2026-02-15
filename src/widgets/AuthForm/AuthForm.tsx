"use client";

import { Input, SquareButton } from "@/shared/ui";
import { useAuthForm } from "./useAuthForm";

export const AuthForm: React.FC = () => {
  const {
    login,
    register,
    errors,
    loading,
    form,
    showPassword,
    passwordInputType,
    handleInputChange,
    handlePasswordToggle,
  } = useAuthForm();

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
        value={form.name}
        disabled={loading}
      />
      <div className={`w-full flex gap-3 items-center`}>
        <Input
          type={passwordInputType}
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={form.password}
          disabled={loading}
        />
        <SquareButton onClick={handlePasswordToggle}>
          {showPassword ? "Hide" : "Peek"}
        </SquareButton>
      </div>
      <div className={`flex gap-12 items-center`}>
        <SquareButton
          onClick={login}
          variant="white"
          buttonProps={{ disabled: loading }}
        >
          {"Login"}
        </SquareButton>
        <SquareButton onClick={register} buttonProps={{ disabled: loading }}>
          {"Sign Up"}
        </SquareButton>
      </div>
      {errors && <p className={`text-(--red)`}>{errors}</p>}
    </form>
  );
};
