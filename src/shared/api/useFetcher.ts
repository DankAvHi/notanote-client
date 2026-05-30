import { useState } from 'react';
import { toast } from 'sonner';
import { FetchError } from './types';

type Fetcher<Args, ResponseType> = (
  args: Args,
) => Promise<
  | { result: FetchError; isError: boolean }
  | { result: ResponseType; isError: boolean }
>;

export const useFetcher = <Args, ResponseType>(
  fetcher: Fetcher<Args, ResponseType>,
  messages?: {
    success?: string;
    error?: string;
  },
) => {
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const execute = async (args: Args) => {
    setErrors(null);
    setLoading(true);

    try {
      const response = await fetcher(args);
      if (response.isError) {
        const responseError = response.result as FetchError;
        const message =
          typeof responseError.message === 'string'
            ? responseError.message
            : String(responseError.message);
        toast.error(message);
        console.error(message);
        setErrors(message);
        return { result: response.result, isError: true };
      } else {
        toast.success('User password updated successful!');
        return { result: response.result, isError: false };
      }
    } catch (error) {
      const message = 'User password updating failed: ' + error;
      toast.error(message);
      console.error(message);
      setErrors(message);
      return { result: null, isError: true };
    } finally {
      setLoading(false);
    }
  };

  return { loading, errors, execute };
};
