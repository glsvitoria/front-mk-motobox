import { Button } from "@/components/ui/button";
import * as Icons from "@/assets/icons";
import Link from "next/link";
import { formatWppLink } from "@/utils/formatWppLink";

export default function CallToAction() {
  return (
    <section className="container relative flex flex-col items-center gap-6 pt-32">
      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:gap-8">
        <div className="flex w-full items-center gap-4 md:min-w-[480px]">
          <Icons.MKMotoBox.MK className="hidden min-w-12 md:block" />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-foundation-orange-300">
              Que tal vender através da MK?
            </h3>
            <p className="body body-md text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              repellendus non dicta pariatur
            </p>
          </div>
        </div>
        <div className="hidden h-px w-full bg-foundation-orange-300 md:block" />
        <Link
          target="_blank"
          href={formatWppLink({
            message:
              "Olá, acessei o site da MK Moto Box e gostaria de obter mais informações sobre como posso vender minha moto.",
            phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
          })}
        >
          <Button variant="primary" className="w-full text-black md:w-auto">
            Quero saber mais!
          </Button>
        </Link>
      </div>
    </section>
  );
}
