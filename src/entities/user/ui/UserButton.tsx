"use client";

import { ImageButton, Loader, SquareButton } from "@/shared/ui";
import { useUserStore } from "../model";

export const UserButton: React.FC = () => {
  const { user } = useUserStore();

  if (typeof user === "undefined") {
    return <Loader />;
  }

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
      <SquareButton
        buttonProps={{
          elementType: "link",
          href: "/user",
          className: "h-[3.4375rem]",
        }}
      >
        {user.name}
      </SquareButton>
    );
  }
  return (
    <SquareButton
      variant="white"
      buttonProps={{
        elementType: "link",
        href: "/auth",
        className: "h-[3.4375rem]",
      }}
    >{`Log in`}</SquareButton>
  );
};
