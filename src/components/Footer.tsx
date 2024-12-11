import Image from "next/image";
import { Button } from "./ui/button";
import * as ExternalIcons from "@/assets/icons";
import * as SocialNetwork from "@/components/SocialNetwork";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { formatWppLink } from "@/utils/formatWppLink";

export const Footer = () => {
  return (
    <footer
      className={cn([
        "container flex flex-col gap-4 bg-foundation-black-13 pb-10 pt-16",
        "lg:gap-12",
      ])}
    >
      <div
        className={cn([
          "flex w-full flex-col items-center justify-between gap-4 border-b-2 border-[#FFFFFF20] pb-6 pt-12",
          "md:flex-row md:gap-0 md:border-b-0 md:border-t-2",
        ])}
      >
        <div className="flex flex-col gap-8">
          <Image
            src="/logo.svg"
            alt="Logomarca da MK Moto Box"
            className={cn([
              "h-[54px] w-[127px]",
              "md:h-[69px] md:w-[167px]",
              "lg:h-[120px] lg:w-[285px]",
            ])}
            width={285}
            height={120}
          />
          <div
            className={cn(["hidden flex-col gap-4", "md:flex", "lg:hidden"])}
          >
            <p className="body-md-semibold uppercase text-white">
              Deseja marcar hora?
            </p>
            <Link
              href={formatWppLink({
                message:
                  "Olá, acessei o site da MK Moto Box e gostaria de agendar um horário para visitar a loja. Como posso fazer isso?",
                phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
              })}
              target="_blank"
            >
              <Button
                className="uppercase text-foundation-black-13"
                variant="primary"
              >
                Agendar Horário
              </Button>
            </Link>
          </div>
        </div>

        <div
          className={cn([
            "flex w-full flex-col items-center gap-6",
            "md:w-auto md:flex-row md:items-start md:gap-18",
          ])}
        >
          <div
            className={cn([
              "flex w-full flex-col items-center gap-4",
              "md:hidden",
              "lg:flex",
            ])}
          >
            <p className="body-md-semibold hidden uppercase text-white lg:block">
              Deseja marcar hora?
            </p>
            <p
              className={cn([
                "body-md-semibold block px-4 text-center uppercase text-white",
                "md:hidden",
              ])}
            >
              Sua loja nacional de motos usadas com curadoria de qualidade.
            </p>
            <Link
              href={formatWppLink({
                message:
                  "Olá, acessei o site da MK Moto Box e gostaria de agendar um horário para visitar a loja. Como posso fazer isso?",
                phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || ``,
              })}
              target="_blank"
            >
              <Button
                className="w-full uppercase text-foundation-black-13"
                variant="primary"
              >
                Agendar Horário
              </Button>
            </Link>
          </div>
          <div className="flex w-full flex-col gap-6">
            <p className="body-md-semibold text-center uppercase text-white lg:text-left">
              Horário de funcionamento
            </p>
            <ul className="flex flex-col items-center gap-2 text-white opacity-80 lg:items-start">
              <li>Segunda a Sexta: 12:00 às 20:00</li>
              <li>Sábado: 10:00 às 13:00</li>
              <li>Sob agendamento: qualquer horário</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p
              className={cn([
                "body-md-semibold text-center uppercase text-white",
                "md:text-start",
              ])}
            >
              Contato
            </p>
            <ul className="flex flex-col gap-2">
              <SocialNetwork.Root
                href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK || ""}
              >
                <SocialNetwork.Icon>
                  <ExternalIcons.Instagram className="h-5 w-5" />
                </SocialNetwork.Icon>
                <SocialNetwork.Label>@mkmotobox</SocialNetwork.Label>
              </SocialNetwork.Root>
              <SocialNetwork.Root
                href={formatWppLink({
                  message:
                    "Olá, entrei no seu site e tenho interesse em conversar mais sobre os produtos da MK Moto Box. Como posso fazer isso?",
                  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
                })}
              >
                <SocialNetwork.Icon>
                  <ExternalIcons.Whatsapp className="h-5 w-5" />
                </SocialNetwork.Icon>
                <SocialNetwork.Label>(21) 99924-3300</SocialNetwork.Label>
              </SocialNetwork.Root>
              <SocialNetwork.Root href={process.env.NEXT_PUBLIC_MAIL_TO || ""}>
                <SocialNetwork.Icon>
                  <ExternalIcons.Gmail className="h-5 w-5" />
                </SocialNetwork.Icon>
                <SocialNetwork.Label>mkmotobox@gmail.com</SocialNetwork.Label>
              </SocialNetwork.Root>
            </ul>
          </div>
        </div>
      </div>
      <address className="text-center text-sm text-white opacity-50">
        2024 MK MotoBox. Barra World - Av. Alfredo Balthazar da Silveira, 580 -
        1º SubSolo - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-710
      </address>
    </footer>
  );
};
