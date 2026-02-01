import { UserLoader } from "@/entities/user/model/UserLoader";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserLoader>{children}</UserLoader>
    </>
  );
};
