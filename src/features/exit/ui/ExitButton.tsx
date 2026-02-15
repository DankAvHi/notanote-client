"use client";

import { SquareButton } from "@/shared/ui";
import { exit } from "../actions";

export const ExitButton: React.FC = () => {
  return (
    <SquareButton onClick={exit} variant="white">
      Log out
    </SquareButton>
  );
};
