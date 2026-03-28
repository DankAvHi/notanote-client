import { UserLoader } from "@/entities/user/ui";
import {} from "zustand";
import QueryProvider from "./QueryProvider";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryProvider>
      <UserLoader>{children}</UserLoader>
    </QueryProvider>
  );
};
