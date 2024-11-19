import * as BrandCard from "@/components/BrandCard";
import * as Icons from "@/assets/icons";
import { cn } from "@/lib/utils";

export default function Brands() {
  return (
    <section className="container relative flex flex-col items-center gap-12 py-16">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray">
          Trabalhamos com as marcas
        </h2>
        <div className="hidden items-center gap-2 md:flex">
          <p className="text-right text-white">
            Modelos das marcas mais famosas e
            <br />
            credibilizadas mundialmente.
          </p>
          <Icons.MKMotoBox.K />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <BrandCard.Root>
          <BrandCard.Image
            src="/brands/honda.svg"
            alt="Logo da Honda"
            className={cn([
              "h-[49px] w-[65px]",
              "md:h-[73px] md:w-[97px]",
              "lg:h-[85px] lg:w-[114px]",
            ])}
            width={114}
            height={85}
          />
        </BrandCard.Root>
        <BrandCard.Root>
          <BrandCard.Image
            src="/brands/harley-davidson.svg"
            alt="Logo da Harley Davidson"
            className={cn([
              "h-[49px] w-[65px]",
              "md:h-[73px] md:w-[97px]",
              "lg:h-[87px] lg:w-[116px]",
            ])}
            width={116}
            height={87}
          />
        </BrandCard.Root>
        <BrandCard.Root>
          <BrandCard.Image
            src="/brands/royal-enfield.svg"
            alt="Logo da Royald Enfield"
            className={cn([
              "h-[24px] w-[155px]",
              "md:h-[31px] md:w-[203px]",
              "lg:h-[36px] lg:w-[244px]",
            ])}
            width={244}
            height={36}
          />
        </BrandCard.Root>
        <BrandCard.Root>
          <BrandCard.Image
            src="/brands/bmw.svg"
            alt="Logo da BMW"
            className={cn([
              "h-[66px] w-[66px]",
              "md:h-[82px] md:w-[82px]",
              "lg:h-[98px] lg:w-[98px]",
            ])}
            width={98}
            height={98}
          />
        </BrandCard.Root>
        <BrandCard.Root>
          <BrandCard.Image
            src="/brands/triumph.svg"
            alt="Logo da Triumph"
            className={cn([
              "h-[50px] w-[66px]",
              "md:h-[75px] md:w-[97px]",
              "lg:h-[90px] lg:w-[117px]",
            ])}
            width={117}
            height={90}
          />
        </BrandCard.Root>
        <BrandCard.Root>
          <BrandCard.Image
            src="/brands/suzuki.svg"
            alt="Logo da Suzuki"
            className={cn([
              "h-[34px] w-[154px]",
              "md:h-[42px] md:w-[190px]",
              "lg:h-[51px] lg:w-[228px]",
            ])}
            width={228}
            height={51}
          />
        </BrandCard.Root>
        <BrandCard.Root>
          <BrandCard.Image
            src="/brands/yamaha.svg"
            alt="Logo da Yamaha"
            className={cn([
              "h-[34px] w-[153px]",
              "md:h-[42px] md:w-[190px]",
              "lg:h-[51px] lg:w-[228px]",
            ])}
            width={228}
            height={51}
          />
        </BrandCard.Root>
        <BrandCard.Root>
          <BrandCard.Image
            src="/brands/kawasaki.svg"
            alt="Logo da Kawasaki"
            className={cn([
              "h-[16px] w-[155px]",
              "md:h-[22px] md:w-[203px]",
              "lg:h-[26px] lg:w-[244px]",
            ])}
            width={244}
            height={26}
          />
        </BrandCard.Root>
      </div>
      <div className="elipse-two" />
    </section>
  );
}
