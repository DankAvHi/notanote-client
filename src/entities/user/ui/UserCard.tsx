"use client";

import { Typography } from "@/shared/ui";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUser } from "../api";
import { User } from "../types";

export const UserCard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const callGetUser = async () => {
      setUser(await getUser());
    };
    callGetUser();
  }, []);

  return (
    <section className="border border-(--black-surface) p-5 w-full flex flex-col items-center gap-2.5">
      {user ? (
        <>
          <Typography size="4.5xl" color="black-surface">
            {`Your account:`}
          </Typography>
          {user.image && (
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}/uploads/${user.image}`}
              alt="User profile picture"
              width={152}
              height={152}
              className="rounded-full"
              unoptimized={process.env.NEXT_PUBLIC_NODE_ENV === "development"}
            />
          )}
          <Typography color="black-surface">{user.name}</Typography>
        </>
      ) : (
        <Typography
          color="black-surface"
          size="4.5xl"
        >{`Failed loading user, check auth status`}</Typography>
      )}
    </section>
  );
};
