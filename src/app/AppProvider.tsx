import { UserLoader } from "@/entities/user/ui";
import {} from "zustand";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserLoader>{children}</UserLoader>
    </>
  );
};
