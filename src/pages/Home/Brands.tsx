import * as BrandCard from '@/components/BrandCard'
import * as Icons from '@/assets/icons'
import { cn } from '@/lib/utils'

export default function Brands() {
  return (
    <section className="container items-center py-16 flex flex-col gap-12 relative">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray">
          Trabalhamos com as marcas
        </h2>
        <div className="hidden md:flex gap-2 items-center">
          <p className="text-white text-right">
            Modelos das marcas mais famosas e
            <br />
            credibilizadas mundialmente.
          </p>
          <Icons.MKMotoBox.K />
        </div>
      </div>
      <div className="flex gap-8 flex-wrap items-center justify-center">
        <BrandCard.Root>
          <BrandCard.Image
            src="/brands/honda.svg"
            alt="Logo da Honda"
            className={cn([
              'w-[65px] h-[49px]',
              'md:w-[97px] md:h-[73px]',
              'lg:w-[114px] lg:h-[85px]',
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
              'w-[65px] h-[49px]',
              'md:w-[97px] md:h-[73px]',
              'lg:w-[116px] lg:h-[87px]',
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
              'w-[155px] h-[24px]',
              'md:w-[203px] md:h-[31px]',
              'lg:w-[244px] lg:h-[36px]',
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
              'w-[66px] h-[66px]',
              'md:w-[82px] md:h-[82px]',
              'lg:w-[98px] lg:h-[98px]',
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
              'w-[66px] h-[50px]',
              'md:w-[97px] md:h-[75px]',
              'lg:w-[117px] lg:h-[90px]',
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
              'w-[154px] h-[34px]',
              'md:w-[190px] md:h-[42px]',
              'lg:w-[228px] lg:h-[51px]',
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
              'w-[153px] h-[34px]',
              'md:w-[190px] md:h-[42px]',
              'lg:w-[228px] lg:h-[51px]',
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
              'w-[155px] h-[16px]',
              'md:w-[203px] md:h-[22px]',
              'lg:w-[244px] lg:h-[26px]',
            ])}
            width={244}
            height={26}
          />
        </BrandCard.Root>
      </div>
      <div className="elipse-two" />
    </section>
  )
}
