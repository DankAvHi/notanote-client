import globalStyles from "@/shared/styles/globalStyles.module.css";
import { AuthForm } from "@/widgets/AuthForm";

export const AuthPage: React.FC = () => {
  return (
    <main className={globalStyles.MainWrapper}>
      <AuthForm />
    </main>
  );
};
