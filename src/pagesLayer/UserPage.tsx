import { ExitButton } from "@/features/exit";
import globalStyles from "@/shared/styles/globalStyles.module.css";

export const UserPage: React.FC = () => {
  return (
    <main className={globalStyles.MainWrapper}>
      <section>
        <ExitButton />
      </section>
    </main>
  );
};
