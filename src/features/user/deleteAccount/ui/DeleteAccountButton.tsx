"use client";

import { SquareButton, Typography } from "@/shared/ui";
import { useDeleteAccount } from "../lib/useDeleteAccount";

export const DeleteAccountButton: React.FC = () => {
  const { deleteAccount, errors, loading } = useDeleteAccount();
  return (
    <div className="flex flex-col">
      <SquareButton
        onClick={deleteAccount}
        buttonProps={{ disabled: loading }}
        variant="red"
      >
        Delete account
      </SquareButton>
      {errors ? <Typography color="red">{errors}</Typography> : <></>}
    </div>
  );
};
