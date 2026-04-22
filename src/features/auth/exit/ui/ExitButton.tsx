"use client";

import { useNoteStore } from "@/entities/note";
import { useUserStore } from "@/entities/user";
import { SquareButton } from "@/shared/ui";
import { useRouter } from "next/navigation";
import { exit } from "../actions";

export const ExitButton: React.FC = () => {
  const router = useRouter();
  const { setNotes } = useNoteStore();

  const exitOnClick = async () => {
    setNotes(null);
    await exit();
    useUserStore.setState({ user: null });
    router.replace("/");
  };
  return (
    <SquareButton onClick={exitOnClick} variant="white">
      Log out
    </SquareButton>
  );
};
