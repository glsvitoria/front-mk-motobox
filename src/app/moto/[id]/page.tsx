import * as Icons from "@/assets/icons";
import * as MotoStatistic from "@/components/MotoStatistic";
import { CircleMinus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Moto } from "@/types";
import { notFound } from "next/navigation";
import { masks } from "@/utils/masks";
import { InterestedButton } from "@/components/InterestedButton";
import Image from "next/image";
import LogoSchema from "@/utils/logoSchema";

async function getMoto(id: string): Promise<Moto> {
  const res = await fetch(`http://localhost:1337/api/motos/${id}?populate=*`, {
    cache: "no-cache",
  });
  const data = await res.json();
  const moto = data.data;

  if (!moto) notFound();

  return moto;
}

export async function generateStaticParams() {
  const motos = await fetch(
    "http://localhost:1337/api/motos?pagination[pageSize]=1000",
    {
      //   cache: "force-cache",
    },
  ).then((res) => res.json());

  return motos.data.map((post: Moto) => ({
    id: post.documentId,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const moto = await getMoto(params.id);

  return {
    title: moto.modelo,
  };
}

export default async function MotoPage({ params }: { params: { id: string } }) {
  const moto = await getMoto(params.id);

  return (
    <>
      <LogoSchema />

      <div className="container">
        <div
          className={cn([
            "mt-32 flex flex-col gap-4 rounded-lg border border-foundation-black-10 p-5",
            "md:flex-row md:gap-12 md:border-none md:bg-foundation-black-12 md:p-8",
          ])}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {moto.imagem.map((imagem, index) => {
                return (
                  <CarouselItem key={imagem.id}>
                    <Image
                      src={process.env.NEXT_PUBLIC_PHOTO_URL + imagem.url}
                      width={imagem.width}
                      height={imagem.height}
                      className="h-full max-h-[714px] w-full max-w-[952px] object-cover"
                      alt={`Imagem ${index} da moto ${moto.modelo} de marca ${moto.marca}`}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div
            className={cn([
              "flex h-max w-full flex-col gap-8 rounded-lg border-foundation-black-10",
              "md:w-max md:border md:p-6",
            ])}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl uppercase text-foundation-black-1">
                {moto.marca} <strong>{moto.modelo}</strong>
              </h1>
              <p className="font-medium text-foundation-black-5">{moto.ano}</p>
              <h2 className="text-[32px] font-semibold text-foundation-black-1">
                {masks.currency(moto.valor)}
              </h2>
            </div>
            <MotoStatistic.Root>
              <MotoStatistic.Item
                icon={
                  <Icons.Road className="h-4 w-4 text-foundation-black-7" />
                }
                title="Quilometragem"
                value={masks.km(moto.quilometragem)}
              />

              <MotoStatistic.Item
                icon={
                  <Icons.Transmission className="h-4 w-4 text-foundation-black-7" />
                }
                title="Marchas"
                value={moto.marchas.toString()}
              />

              <MotoStatistic.Item
                icon={
                  <Icons.Gradient className="h-4 w-4 text-foundation-black-7" />
                }
                title="Cor"
                value={moto.cor}
              />

              <MotoStatistic.Item
                icon={
                  <Icons.Speed className="h-4 w-4 text-foundation-black-7" />
                }
                title="Cilindrada"
                value={moto.cilindrada.toString()}
              />

              <MotoStatistic.Item
                icon={
                  <CircleMinus size={16} className="text-foundation-black-7" />
                }
                title="Freio dianteiro"
                value={moto.freioDianteiro}
              />

              <MotoStatistic.Item
                icon={
                  <CircleMinus size={16} className="text-foundation-black-7" />
                }
                title="Freio traseiro"
                value={moto.freioTraseiro}
              />
            </MotoStatistic.Root>
            <InterestedButton
              message={`Olá, acessei o site da MK Moto Box e me interessei pela moto ${moto.marca} ${moto.modelo}. Gostaria de obter mais informações sobre ela.`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
