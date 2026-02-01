import { UserButton } from "@/entities/user";
import { Button } from "@/shared/ui";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";

export const Navigation: React.FC = () => {
  return (
    <nav
      className={`sticky top-0 left-0 w-full 
        p-4
        bg-(--black-surface)
        flex items-center justify-center
        `}
    >
      <div className={`max-w-5xl w-full flex justify-between`}>
        <Button
          elementType="link"
          href={"/"}
          className={`flex items-center gap-2.5`}
        >
          <Image src={"/logo.svg"} alt="Notanote Logo" width={55} height={55} />
          <Typography size="5xl">Notanote</Typography>
        </Button>
        <UserButton />
      </div>
    </nav>
  );
};
