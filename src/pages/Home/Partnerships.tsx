"use client";

import * as Icons from "@/assets/icons";
import { CirclePlay } from "lucide-react";
import Image from "next/image";

export default function Partnerships() {
  return (
    <section className="container relative flex flex-col items-center gap-12 py-16">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray">Nossos parceiros</h2>
        <div className="hidden items-center gap-2 md:flex">
          <p className="text-right text-white">
            Parceiros que impulsionam nossa jornada
          </p>
          <Icons.MKMotoBox.K />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-0">
        <div className="grid h-min w-max grid-cols-2 gap-6 md:min-w-max">
          <div className="w-max rounded-xl border border-foundation-orange-300 bg-foundation-black-11 p-6">
            <Image
              src="/partnerships/amc.png"
              alt="Logomarca da Auto Moto Connection"
              className="h-[60px] w-[60px]"
              width={60}
              height={60}
            />
          </div>
          <div className="w-max rounded-xl border border-foundation-orange-300 bg-foundation-black-11 p-6">
            <Image
              src="/partnerships/ubt.png"
              alt="Logomarca da Universo Big Trail"
              className="h-[60px] w-[60px]"
              width={60}
              height={60}
            />
          </div>
          <div className="col-span-2 w-max rounded-xl border border-foundation-orange-300 bg-foundation-black-11 p-6">
            <Image
              src="/partnerships/exventure.png"
              alt="Logomarca da Ex Venture Baus e Bauletos em Alumínio"
              className="h-[45px] w-[190px]"
              width={190}
              height={45}
            />
          </div>
        </div>
        <div className="flex w-full justify-center md:justify-end">
          <div className="flex w-full max-w-lg flex-col gap-2">
            <div className="relative flex h-[265px] w-full items-center justify-center overflow-hidden bg-[#D9D9D9]">
              <Image
                src="/partner-video.png"
                width={472}
                height={265}
                alt="Imagem de referência para ir pro canal do Mário Linhares"
                className="h-full w-full object-cover"
              />
              <CirclePlay
                size={64}
                className="absolute cursor-pointer text-[#FF0000] transition-colors duration-300 hover:brightness-75"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@automotobymariolinhares",
                  )
                }
              />
            </div>
            <p className="body-md text-center text-white">
              Canal do Mário Linhares
              <span className="hidden md:inline-block">
                , nosso patrocinador oficial
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
