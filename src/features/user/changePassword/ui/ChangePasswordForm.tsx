import { UserChangePasswordDto } from '@/entities/user';
import { useFetcher } from '@/shared/api/useFetcher';
import { Input, SquareButton, Typography } from '@/shared/ui';
import { ChangeEvent, FormEvent, useState } from 'react';
import { changePassword } from '../api';

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
  const { execute, errors, loading } = useFetcher(changePassword);

  const [form, setForm] = useState<UserChangePasswordDto>(initialForm);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await execute(form);

    if (!response.isError) {
      onSubmitProps();
    }
    setForm(initialForm);
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
        value={form['oldPassword']}
      />

      <Input
        name="newPassword"
        placeholder="Enter new password"
        type="password"
        onChange={onChange}
        value={form['newPassword']}
      />

      <SquareButton
        buttonProps={{ disabled: loading }}
      >{`Change to new password`}</SquareButton>
      {errors ? <Typography color="red">{errors}</Typography> : <></>}
    </form>
  );
};
