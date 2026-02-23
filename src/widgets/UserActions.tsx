import { ExitButton } from "@/features/auth";
import {
  ChangePasswordButton,
  ChangePictureButton,
  DeleteAccountButton,
} from "@/features/user";

export const UserActions: React.FC = () => {
  return (
    <section className="flex gap-12 items-center">
      <ExitButton />
      <ChangePictureButton />
      <ChangePasswordButton />
      <DeleteAccountButton />
    </section>
  );
};
