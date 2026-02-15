"use client";

import { ImageButton, SquareButton } from "@/shared/ui";
import { useUserContext } from "../model/UserContext";

export const UserButton: React.FC = () => {
  const { user } = useUserContext();
  if (user) {
    if (user.image) {
      return (
        <ImageButton
          buttonProps={{ elementType: "link", href: "/user" }}
          src={user.image}
          alt={user.name}
          width={55}
          height={55}
        />
      );
    }
    return (
      <SquareButton buttonProps={{ elementType: "link", href: "/user" }}>
        {user.name}
      </SquareButton>
    );
  }
  return (
    <SquareButton
      variant="white"
      buttonProps={{ elementType: "link", href: "/auth" }}
    >{`Log in`}</SquareButton>
  );
};
