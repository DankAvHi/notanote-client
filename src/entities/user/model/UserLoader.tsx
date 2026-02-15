import { getUserServer } from "../api";
import { UserContextProvider } from "./UserContext";

export const UserLoader: React.FC<{
  children: React.ReactNode;
}> = async ({ children }) => {
  const user = await getUserServer();

  return (
    <UserContextProvider initialUser={user}>{children}</UserContextProvider>
  );
};
