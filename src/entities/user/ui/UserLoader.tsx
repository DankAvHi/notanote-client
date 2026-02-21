"use client";

import { useEffect } from "react";
import { getUser } from "../api";
import { useUserStore } from "../model";

export const UserLoader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    const initAuth = async () => {
      const user = await getUser();
      useUserStore.setState({ user: user });
    };
    initAuth();
  }, []);

  return <>{children}</>;
};
