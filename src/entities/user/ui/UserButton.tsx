import { ImageButton, SquareButton } from "@/shared/ui";
import { getUserServer } from "../api";

export const UserButton: React.FC = async () => {
  const user = await getUserServer();
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
