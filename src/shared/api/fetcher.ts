import { FetchError } from '@/shared/api/types';

export const fetcher = async <T>(
  input: string | URL | Request,
  init?: RequestInit,
  format: 'json' | 'formdata' | 'text' | 'boolean' = 'json',
) => {
  let response: Response | undefined = undefined;
  try {
    response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}${input}`,
      init,
    );

    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);

    switch (format) {
      case 'json': {
        return { result: (await response.json()) as T, isError: false };
      }
      case 'formdata': {
        return { result: (await response.formData()) as T, isError: false };
      }
      case 'boolean': {
        return { result: response.ok as T, isError: false };
      }
      case 'text': {
        return { result: (await response.text()) as T, isError: false };
      }
    }
  } catch (e) {
    console.error(e);
    const json = {
      result: (await response!.json()) as FetchError,
      isError: true,
    };
    return json;
  }
};
