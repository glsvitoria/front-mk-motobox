import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatWppLink } from "@/utils/formatWppLink";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className={cn([
        "relative mt-16 flex h-[650px] w-full justify-center",
        "md:mt-0",
      ])}
      style={{
        backgroundImage: "url(/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-hero" />
      <div className="container z-10 flex w-full flex-col justify-center">
        <div
          className={cn([
            "flex w-full flex-col items-center gap-6",
            "md:w-[540px]",
          ])}
        >
          <div className="flex w-full flex-col gap-2">
            <h1
              className={cn([
                "text-2xl font-semibold leading-[150%] text-white",
                "md:text-[40px] md:leading-[120%]",
              ])}
            >
              Qualidade, segurança e velocidade por todo o Brasil
            </h1>
            <p className="heading-sm text-white">
              MK Motobox é a sua loja nacional de motos usadas com curadorias de
              qualidade
            </p>
          </div>
          <Link
            target="_blank"
            href={formatWppLink({
              message:
                "Olá, acessei o site da MK Moto Box e gostaria de obter mais informações sobre a loja.",
              phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
            })}
            className="w-full"
          >
            <Button
              variant="primary"
              className="w-full text-foundation-black-13"
            >
              Fale Conosco
              <ChevronRight className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
