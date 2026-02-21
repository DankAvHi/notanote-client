"use client";

import { Input } from "@/shared/ui";
import { useState } from "react";

export const NotesForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const formOnSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form className="w-full" onSubmit={formOnSubmitHandler}>
      <Input
        enterKeyHint="send"
        placeholder="do not note a note!!!"
        value={inputValue}
        onChange={inputOnChangeHandler}
      />
    </form>
  );
};
