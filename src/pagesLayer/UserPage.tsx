import { UserCard } from "@/entities/user/ui/UserCard";
import globalStyles from "@/shared/styles/globalStyles.module.css";
import { UserActions } from "@/widgets/UserActions";

export const UserPage: React.FC = () => {
  return (
    <main className={globalStyles.MainWrapper}>
      <UserCard />
      <UserActions />
    </main>
  );
};
