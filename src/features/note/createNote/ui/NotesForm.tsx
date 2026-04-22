"use client";

import { Input, SquareButton, Typography } from "@/shared/ui";
import { useState } from "react";
import { useCreateNote } from "../lib/useCreateNote";

export const NotesForm: React.FC = () => {
  const { createNote, errors, loading } = useCreateNote();

  const [inputValue, setInputValue] = useState("");
  const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const formOnSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    await createNote({ text: inputValue });
    setInputValue("");
  };

  return (
    <form className="w-full" onSubmit={formOnSubmitHandler}>
      <div className="flex items-stretch">
        <Input
          enterKeyHint="send"
          placeholder="do not note a note!!!"
          value={inputValue}
          onChange={inputOnChangeHandler}
          disabled={loading}
        />
        <SquareButton variant="black-surface-no-border">{`Create`}</SquareButton>
      </div>
      {errors ? <Typography color="red">{errors}</Typography> : <></>}
    </form>
  );
};
