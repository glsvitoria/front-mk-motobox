import * as EquipmentCard from "@/components/EquipmentCard";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Equipments() {
  return (
    <section className="container items-center pt-32" id="equipment">
      <div
        className={cn([
          "flex w-full justify-center rounded-lg border border-foundation-orange-200 bg-foundation-black-12 px-4 py-4",
          "md:px-12 md:py-16",
        ])}
      >
        <div
          className={cn([
            "-mt-16 flex flex-col items-center gap-4 md:flex-row",
            "md:-mt-24 md:items-end",
          ])}
        >
          <div
            className={cn(["flex flex-col gap-2 sm:items-end", "sm:flex-row"])}
          >
            <Image
              src="/helmet.png"
              alt="Capacete de Moto"
              className={cn([
                "h-[148px] w-[148px]",
                "md:h-[250px] md:w-[250px]",
              ])}
              width={250}
              height={250}
            />
            <h2
              className={cn([
                "block text-2xl font-semibold uppercase text-white md:hidden",
                "sm:pb-12",
              ])}
            >
              Equipamentos
            </h2>
          </div>
          <div className="flex flex-col gap-3 pb-8">
            <h2
              className={cn([
                "hidden text-4xl font-semibold uppercase text-white",
                "md:block",
              ])}
            >
              MK Equipamentos
            </h2>
            <div className="flex gap-4">
              <EquipmentCard.Root>
                <EquipmentCard.Title>Luvas</EquipmentCard.Title>
                <EquipmentCard.Image
                  src="/equipment/gloves.png"
                  alt="Luva de moto"
                  width={70}
                  height={70}
                />
              </EquipmentCard.Root>
              <EquipmentCard.Root>
                <EquipmentCard.Title>Capacetes</EquipmentCard.Title>
                <EquipmentCard.Image
                  src="/equipment/gloves.png"
                  alt="Luva de moto"
                  width={70}
                  height={70}
                />
              </EquipmentCard.Root>
              <EquipmentCard.Root>
                <EquipmentCard.Title>Baús</EquipmentCard.Title>
                <EquipmentCard.Image
                  src="/equipment/gloves.png"
                  alt="Luva de moto"
                  width={70}
                  height={70}
                />
              </EquipmentCard.Root>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
