import { ChangePasswordButton } from "@/features/changePassword";
import { ChangePictureButton } from "@/features/changePicture";
import { DeleteAccountButton } from "@/features/deleteAccount";
import { ExitButton } from "@/features/exit";

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
