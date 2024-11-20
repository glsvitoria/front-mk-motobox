import { cn } from "@/lib/utils";
import * as MotorcycleCard from "@/components/MotorcycleCard";
import * as Icons from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function MotorsSale() {
  return (
    <section
      className="container relative hidden flex-col items-center gap-6 py-16 md:flex"
      id="motors-sale"
    >
      <div
        className={cn([
          "flex w-full items-center justify-between",
          "sm:col-span-2",
          "md:col-span-3",
        ])}
      >
        <h2 className="text-2xl font-semibold text-gray">Motos a venda</h2>
        <div className="flex items-center gap-2">
          <p className="text-right text-white">
            Adquira confiança e qualidade
            <br />
            para o armazenamento dos seus itens
          </p>
          <Icons.MKMotoBox.K />
        </div>
      </div>
      <div className="grid w-full grid-cols-4 justify-between lg:grid-cols-6">
        <MotorcycleCard.Root>
          <MotorcycleCard.Photo src="/moto.png" alt="Moto" />
          <MotorcycleCard.Info
            km={24054}
            title="Honda CB 500F Abs"
            value={3545000}
            year="2020 - 2021"
          />
        </MotorcycleCard.Root>
        <MotorcycleCard.Root>
          <MotorcycleCard.Photo src="/moto.png" alt="Moto" />
          <MotorcycleCard.Info
            km={24054}
            title="Honda CB 500F Abs"
            value={3545000}
            year="2020 - 2021"
          />
        </MotorcycleCard.Root>
        <MotorcycleCard.Root>
          <MotorcycleCard.Photo src="/moto.png" alt="Moto" />
          <MotorcycleCard.Info
            km={24054}
            title="Honda CB 500F Abs"
            value={3545000}
            year="2020 - 2021"
          />
        </MotorcycleCard.Root>
        <MotorcycleCard.Root>
          <MotorcycleCard.Photo src="/moto.png" alt="Moto" />
          <MotorcycleCard.Info
            km={24054}
            title="Honda CB 500F Abs"
            value={3545000}
            year="2020 - 2021"
          />
        </MotorcycleCard.Root>
        <MotorcycleCard.Root>
          <MotorcycleCard.Photo src="/moto.png" alt="Moto" />
          <MotorcycleCard.Info
            km={24054}
            title="Honda CB 500F Abs"
            value={3545000}
            year="2020 - 2021"
          />
        </MotorcycleCard.Root>
        <MotorcycleCard.Root>
          <MotorcycleCard.Photo src="/moto.png" alt="Moto" />
          <MotorcycleCard.Info
            km={24054}
            title="Honda CB 500F Abs"
            value={3545000}
            year="2020 - 2021"
          />
        </MotorcycleCard.Root>
      </div>
      <Button variant="tertiary">
        Ver mais <ChevronRight size={24} />
      </Button>
      <div className="elipse-one" />
    </section>
  );
}
