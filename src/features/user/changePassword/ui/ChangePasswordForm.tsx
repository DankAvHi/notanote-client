import { UserChangePasswordDto } from '@/entities/user';
import { Input, SquareButton, Typography } from '@/shared/ui';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useChangePassword } from '../lib';

const initialForm: UserChangePasswordDto = {
  oldPassword: '',
  newPassword: '',
};

type Props = {
  onSubmit: () => void;
};

export const ChangePasswordForm: React.FC<Props> = ({
  onSubmit: onSubmitProps,
}) => {
  const { changePassword, errors, loading } = useChangePassword();

  const [form, setForm] = useState<UserChangePasswordDto>(initialForm);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await changePassword(form);
    if (success) onSubmitProps();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));

  return (
    <form onSubmit={onSubmit} className="p-3 flex flex-col items-center gap-3">
      <Input
        name="oldPassword"
        placeholder="Enter old password"
        type="password"
        onChange={onChange}
      />

      <Input
        name="newPassword"
        placeholder="Enter new password"
        type="password"
        onChange={onChange}
      />

      <SquareButton
        buttonProps={{ disabled: loading }}
      >{`Change to new password`}</SquareButton>
      {errors ? <Typography color="red">{errors}</Typography> : <></>}
    </form>
  );
};
