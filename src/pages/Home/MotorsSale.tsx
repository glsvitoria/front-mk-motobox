import { cn } from "@/lib/utils";
// import * as MotorcycleCard from "@/components/MotorcycleCard";
import * as Icons from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
// import { MotoService } from "@/services/Moto";

export default function MotorsSale() {
  //   const { motos } = await MotoService.get({
  //     init: "1",
  //     limit: "4",
  //   });

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
      {/* <div className="grid w-full grid-cols-4 justify-between lg:grid-cols-6">
        {!!motos && motos.length > 0 ? (
          motos.map((moto) => {
            return (
              <MotorcycleCard.Root key={moto.documentId}>
                <MotorcycleCard.Photo
                  src={process.env.NEXT_PUBLIC_PHOTO_URL + moto.imagem[0].url}
                  alt="Moto"
                />
                <MotorcycleCard.Info
                  id={moto.documentId}
                  km={moto.quilometragem}
                  mark={moto.marca}
                  model={moto.modelo}
                  value={moto.valor}
                  year={moto.ano}
                />
              </MotorcycleCard.Root>
            );
          })
        ) : (
          <MotorcycleCard.SkeletonCard />
        )}
      </div> */}
      <Link href="/pesquisa">
        <Button variant="tertiary">
          Ver mais <ChevronRight size={24} />
        </Button>
      </Link>
      <div className="elipse-one" />
    </section>
  );
}
