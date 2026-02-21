import { NotesForm } from "@/features/createNote/ui/NotesForm";
import globalStyles from "@/shared/styles/globalStyles.module.css";

export const HomePage: React.FC = () => {
  return (
    <main className={globalStyles.MainWrapper}>
      <NotesForm />
    </main>
  );
};
