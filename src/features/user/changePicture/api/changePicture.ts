'use client';

export const changePicture = async (body: FormData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/user/picture`,
      {
        body,
        method: 'PATCH',
      },
    );

    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);

    return true;
  } catch (e) {
    console.error(e);
    return null;
  }
};
