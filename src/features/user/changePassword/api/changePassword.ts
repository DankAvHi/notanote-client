'use client';

import {
  UserChangePasswordDto,
  UserChangePasswordResponse,
} from '@/entities/user/types';
import { fetcher } from '@/shared/api/fetcher';

export const changePassword = async (body: UserChangePasswordDto) =>
  await fetcher<UserChangePasswordResponse>('/user', {
    body: JSON.stringify(body),
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
  });
