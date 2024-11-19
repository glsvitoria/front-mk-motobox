import * as Icons from "@/assets/icons";
import { Compass } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="container relative flex flex-col items-center gap-12 py-16">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray">Sobre nós</h2>
        <div className="hidden items-center gap-2 md:flex">
          <p className="text-right text-white">
            Conheça nossa missão, nossos valores e
            <br />
            nossos parceiros.
          </p>
          <Icons.MKMotoBox.K />
        </div>
      </div>

      <Image
        src="/physical-store.png"
        alt="Loja física da MK Motobox"
        width={1440}
        height={810}
        className="w-full"
      />

      <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-20">
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center rounded-2xl border border-white bg-foundation-black-11 p-3">
              <Compass size={32} className="text-foundation-orange-200" />
            </div>
            <h4 className="heading-md text-white">Nossa história</h4>
          </div>
          <p className="body-md text-white">
            A MK MotoBox foi fundada por Henrique Costa, que, desde 2014, atua
            no setor de motos seminovas ao lado de Camillo Bortolotto,
            proprietário da MotorKraft. Após anos de experiência e com o
            crescimento da demanda, Henrique abriu a MK MotoBox no Espaço Car
            Center do Barra World Shopping, oferecendo motos de procedência
            garantida, sempre focando na confiança e qualidade para seus
            clientes.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center rounded-2xl border border-white bg-foundation-black-11 p-3">
              <Compass size={32} className="text-foundation-orange-200" />
            </div>
            <h4 className="heading-md text-white">Nossa missão</h4>
          </div>
          <p className="body-md text-white">
            Na MK MotoBox, nossa principal missão é oferecer motos de
            procedência comprovada e em excelente estado de conservação.
            Buscamos garantir produtos confiáveis e de qualidade, facilitando o
            acesso a motocicletas usadas com total confiança. Nosso foco está na
            satisfação e fidelização de cada cliente, sempre comprometidos com a
            excelência.
          </p>
        </div>
      </div>
    </section>
  );
}
