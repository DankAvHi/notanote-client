'use client';

import { UserChangePasswordDto } from '@/entities/user/types';

export const changePassword = async (body: UserChangePasswordDto) => {
  let response: Response | undefined = undefined;
  try {
    response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/user`, {
      body: JSON.stringify(body),
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);

    return true;
  } catch (e) {
    console.error(e);
    const json = await response!.json();
    return json;
  }
};
