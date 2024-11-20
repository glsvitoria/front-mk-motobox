"use client";

import { Button } from "@/components/ui/button";
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
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="container">
      <div
        className={cn([
          "mt-32 flex flex-col gap-4 rounded-lg border border-foundation-black-10 p-5",
          "md:flex-row md:gap-12 md:border-none md:bg-foundation-black-12 md:p-8",
        ])}
      >
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/moto.png"
                width={952}
                height={714}
                alt="Imagem da Moto"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/moto.png"
                width={952}
                height={714}
                alt="Imagem da Moto"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/moto.png"
                width={952}
                height={714}
                alt="Imagem da Moto"
              />
            </CarouselItem>
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
              Honda <strong>CB 500F Abs</strong>
            </h1>
            <p className="font-medium text-foundation-black-5">2020 - 2021</p>
            <h2 className="text-[32px] font-semibold text-foundation-black-1">
              R$ 35.450
            </h2>
          </div>
          <MotoStatistic.Root>
            <MotoStatistic.Item
              icon={<Icons.Road className="h-4 w-4 text-foundation-black-7" />}
              title="Quilometragem"
              value="77,554 km"
            />

            <MotoStatistic.Item
              icon={
                <Icons.Transmission className="h-4 w-4 text-foundation-black-7" />
              }
              title="Marchas"
              value="6"
            />

            <MotoStatistic.Item
              icon={
                <Icons.Gradient className="h-4 w-4 text-foundation-black-7" />
              }
              title="Cor"
              value="Preta / Vermelha"
            />

            <MotoStatistic.Item
              icon={<Icons.Speed className="h-4 w-4 text-foundation-black-7" />}
              title="Cilindrada"
              value="500 cc"
            />

            <MotoStatistic.Item
              icon={
                <CircleMinus size={16} className="text-foundation-black-7" />
              }
              title="Freio dianteiro"
              value="Tambor"
            />

            <MotoStatistic.Item
              icon={
                <CircleMinus size={16} className="text-foundation-black-7" />
              }
              title="Freio traseiro"
              value="Disco"
            />
          </MotoStatistic.Root>
          <Button
            variant="primary"
            className="uppercase text-foundation-black-13"
            onClick={() => {
              window.open("https://wa.me/5521999243300");
            }}
          >
            Tenho interesse
          </Button>
        </div>
      </div>
    </div>
  );
}
