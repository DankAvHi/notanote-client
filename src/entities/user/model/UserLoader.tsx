import { getUserServer, verify } from "../api";
import { UserContextProvider } from "./UserContext";

export const UserLoader: React.FC<{
  children: React.ReactNode;
}> = async ({ children }) => {
  const payload = await verify();
  const user = payload ? await getUserServer(payload) : null;

  return (
    <UserContextProvider initialUser={user}>{children}</UserContextProvider>
  );
};
