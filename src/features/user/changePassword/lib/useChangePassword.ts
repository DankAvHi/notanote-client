'use client';

import { getUser, useUserStore } from '@/entities/user';
import { UserChangePasswordDto } from '@/entities/user/types';
import { useState } from 'react';
import { toast } from 'sonner';
import { changePassword as changePasswordApi } from '../api';

export const useChangePassword = () => {
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const changePassword = async (changePasswordDto: UserChangePasswordDto) => {
    setErrors(null);
    setLoading(true);

    try {
      const response = await changePasswordApi(changePasswordDto);
      if (!response) {
        const message = 'User password updating failed';
        toast.error(message);
        console.error(message);
        setErrors(message);
        return false;
      } else if ((response as unknown as { error: string }).error) {
        const message = (response as unknown as { message: string }).message;
        toast.error(message);
        console.error(message);
        setErrors(message);
        return false;
      } else {
        toast.success('User password updated successful!');
        const user = await getUser();
        useUserStore.setState({ user: user });
        return true;
      }
    } catch (error) {
      const message = 'User password updating failed: ' + error;
      toast.error(message);
      console.error(message);
      setErrors(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { errors, loading, changePassword };
};
