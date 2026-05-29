'use client';

import { SquareButton } from '@/shared/ui';

type Props = {
  children: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any;
  disabled: boolean;
};

export const FilePicker: React.FC<Props> = ({
  children,
  onChange,
  disabled,
}) => {
  return (
    <SquareButton
      buttonProps={{ disabled }}
      variant="black-surface"
      ButtonElement={'label'}
    >
      {children}
      <input
        disabled={disabled}
        type="file"
        name="picture"
        id="picture"
        className="w-0 overflow-hidden"
        onChange={onChange}
      />
    </SquareButton>
  );
};
