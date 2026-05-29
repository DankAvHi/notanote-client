'use client';

import { getUser, useUserStore } from '@/entities/user';
import { UserChangePictureDto } from '@/entities/user/types';
import { useState } from 'react';
import { toast } from 'sonner';
import { changePicture as changePictureApi } from '../api';

export const useChangePicture = () => {
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const changePicture = async (changePictureDto: UserChangePictureDto) => {
    setErrors(null);
    setLoading(true);

    const formData = new FormData();

    formData.append('picture', changePictureDto.picture);

    try {
      const response = await changePictureApi(formData);
      if (!response) {
        const message = 'User picture updating failed';
        toast.error(message);
        console.error(message);
        setErrors(message);
      } else if ((response as unknown as { error: string }).error) {
        const message =
          'User picture updating failed' +
          (response as unknown as { error: string }).error;
        toast.error(message);
        console.error(message);
        setErrors(message);
      } else {
        toast.success('User picture updated successful!');
        const user = await getUser();
        useUserStore.setState({ user: user });
      }
    } catch (error) {
      const message = 'User picture updating failed: ' + error;
      toast.error(message);
      console.error(message);
      setErrors(message);
    } finally {
      setLoading(false);
    }
  };

  return { errors, loading, changePicture };
};
