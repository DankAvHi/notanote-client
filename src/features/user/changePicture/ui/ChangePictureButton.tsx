'use client';

import { Typography } from '@/shared/ui';
import { FilePicker } from '@/shared/ui/FilePicker';
import { ChangeEvent } from 'react';
import { useChangePicture } from '../lib';

export const ChangePictureButton: React.FC = () => {
  const { changePicture, errors, loading } = useChangePicture();

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      await changePicture({ picture: event.target.files[0] });
    }
  };

  return (
    <div className="flex flex-col">
      <FilePicker disabled={loading} onChange={onChange}>
        Change picture
      </FilePicker>
      {errors ? <Typography color="red">{errors}</Typography> : <></>}
    </div>
  );
};
