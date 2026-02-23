import globalStyles from "@/shared/styles/globalStyles.module.css";
import { Notes } from "@/widgets/Notes";

export const HomePage: React.FC = () => {
  return (
    <main className={globalStyles.MainWrapper}>
      <Notes />
    </main>
  );
};
