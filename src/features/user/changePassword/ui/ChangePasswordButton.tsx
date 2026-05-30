'use client';

import { SquareButton } from '@/shared/ui';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useState } from 'react';
import { ChangePasswordForm } from './ChangePasswordForm';

export const ChangePasswordButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <SquareButton onClick={onClick} variant="black-surface">
        Change password
      </SquareButton>
      <Modal onClose={onClose} open={open}>
        <ChangePasswordForm onSubmit={onClose} />
      </Modal>
    </>
  );
};
