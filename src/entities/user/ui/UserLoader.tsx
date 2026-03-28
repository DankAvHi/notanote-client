"use client";

import { useEffect } from "react";
import { getUser } from "../api";
import { useUserStore } from "../model";

export const UserLoader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    const initAuth = async () => {
      const isAuth = document.cookie
        .split(";")
        .some((item) => item.trim().startsWith("is_auth" + "="));
      if (isAuth) {
        const user = await getUser();
        useUserStore.setState({ user: user });
      } else {
        useUserStore.setState({ user: null });
      }
    };
    initAuth();
  }, []);

  return <>{children}</>;
};
