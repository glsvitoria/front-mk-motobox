import { cn } from "@/lib/utils";
import Image from "next/image";
import * as Icons from "@/assets/icons";

export default function Categories() {
  return (
    <section className="container flex flex-col items-center gap-6 py-16">
      <div
        className={cn([
          "grid w-fit grid-cols-1 gap-8 sm:grid-cols-2",
          "md:grid-cols-3 md:gap-10",
          "lg:grid-cols-6",
        ])}
      >
        <div
          className={cn([
            "col-span-1 flex items-center justify-between",
            "sm:col-span-2",
            "md:col-span-3",
            "lg:col-span-6",
          ])}
        >
          <h2 className="text-2xl font-semibold text-gray">Categorias</h2>
          <div className="hidden items-end gap-2 md:flex">
            <p className="text-white">
              Para todas as realidades, bolsos e sonhos
            </p>
            <Icons.MKMotoBox.K />
          </div>
        </div>
        <Image
          src="/categories/scooter.png"
          alt="Imagem da categoria de scooters"
          className={cn(["h-[208px] w-[186px]", "md:h-[254px] md:w-[254px]"])}
          width={254}
          height={254}
        />
        <Image
          src="/categories/trail.png"
          alt="Imagem da categoria de trail"
          className={cn(["h-[208px] w-[186px]", "md:h-[254px] md:w-[254px]"])}
          width={254}
          height={254}
        />
        <Image
          src="/categories/custom.png"
          alt="Imagem da categoria de custom"
          className={cn(["h-[208px] w-[186px]", "md:h-[254px] md:w-[254px]"])}
          width={254}
          height={254}
        />
        <Image
          src="/categories/big-trail.png"
          alt="Imagem da categoria de big trail"
          className={cn(["h-[208px] w-[186px]", "md:h-[254px] md:w-[254px]"])}
          width={254}
          height={254}
        />
        <Image
          src="/categories/street.png"
          alt="Imagem da categoria de street"
          className={cn(["h-[208px] w-[186px]", "md:h-[254px] md:w-[254px]"])}
          width={254}
          height={254}
        />
        <Image
          src="/categories/sport.png"
          alt="Imagem da categoria de sport"
          className={cn(["h-[208px] w-[186px]", "md:h-[254px] md:w-[254px]"])}
          width={254}
          height={254}
        />
      </div>
    </section>
  );
}
