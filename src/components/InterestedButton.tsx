import Link from "next/link";
import { Button } from "./ui/button";
import { formatWppLink } from "@/utils/formatWppLink";

export const InterestedButton = () => {
  return (
    <Link
      target="_blank"
      href={formatWppLink({
        phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
        message:
          "Olá, acessei o site da MK Moto Box e gostaria de obter mais informações sobre a loja.",
      })}
    >
      <Button variant="primary" className="uppercase text-foundation-black-13">
        Tenho interesse
      </Button>
    </Link>
  );
};
