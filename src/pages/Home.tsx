import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import * as Icons from '@/assets/icons'
import * as MotorcycleCard from '@/components/MotorcycleCard'
import * as BrandCard from '@/components/BrandCard'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <div>
      <section
        className={cn([
          'container relative h-[650px] mt-16 flex justify-center',
          'md:mt-0',
        ])}
        style={{
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute bg-hero top-0 bottom-0 right-0 left-0" />
        <div className="w-full flex flex-col justify-center z-10">
          <div
            className={cn([
              'w-full flex flex-col gap-6 items-center',
              'md:w-[540px]',
            ])}
          >
            <div className="flex flex-col gap-2 w-full">
              <h1
                className={cn([
                  'font-semibold text-2xl leading-[150%] text-white',
                  'md:text-[40px] md:leading-[120%]',
                ])}
              >
                Qualidade, segurança e velocidade por todo o Brasil
              </h1>
              <p className="heading-sm text-white">
                MK Motobox é a sua loja nacional de motos usadas com curadorias
                de qualidade
              </p>
            </div>
            <Button
              variant="primary"
              className="w-full text-foundation-black-13"
            >
              Fale Conosco
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>
      <section className="container items-center py-16 flex flex-col gap-6">
        <div
          className={cn([
            'grid grid-cols-1 sm:grid-cols-2 gap-8 w-fit',
            'md:gap-10 md:grid-cols-3',
            'lg:grid-cols-6',
          ])}
        >
          <div
            className={cn([
              'flex justify-between items-center col-span-1',
              'sm:col-span-2',
              'md:col-span-3',
            ])}
          >
            <h2 className="text-2xl font-semibold text-gray">Categorias</h2>
            <div className="hidden md:flex gap-2 items-end">
              <p className="text-white">
                Para todas as realidades, bolsos e sonhos
              </p>
              <Icons.MKMotoBox.K />
            </div>
          </div>
          <Image
            src="/categories/scooter.png"
            alt="Imagem da categoria de scooters"
            className={cn(['w-[186px] h-[208px]', 'md:w-[254px] md:h-[254px]'])}
            width={254}
            height={254}
          />
          <Image
            src="/categories/trail.png"
            alt="Imagem da categoria de trail"
            className={cn(['w-[186px] h-[208px]', 'md:w-[254px] md:h-[254px]'])}
            width={254}
            height={254}
          />
          <Image
            src="/categories/custom.png"
            alt="Imagem da categoria de custom"
            className={cn(['w-[186px] h-[208px]', 'md:w-[254px] md:h-[254px]'])}
            width={254}
            height={254}
          />
          <Image
            src="/categories/big-trail.png"
            alt="Imagem da categoria de big trail"
            className={cn(['w-[186px] h-[208px]', 'md:w-[254px] md:h-[254px]'])}
            width={254}
            height={254}
          />
          <Image
            src="/categories/street.png"
            alt="Imagem da categoria de street"
            className={cn(['w-[186px] h-[208px]', 'md:w-[254px] md:h-[254px]'])}
            width={254}
            height={254}
          />
          <Image
            src="/categories/sport.png"
            alt="Imagem da categoria de sport"
            className={cn(['w-[186px] h-[208px]', 'md:w-[254px] md:h-[254px]'])}
            width={254}
            height={254}
          />
        </div>
      </section>

      <section className="container items-center py-16 hidden md:flex flex-col gap-6 relative">
        <div
          className={cn([
            'flex justify-between items-center w-full',
            'sm:col-span-2',
            'md:col-span-3',
          ])}
        >
          <h2 className="text-2xl font-semibold text-gray">Motos a venda</h2>
          <div className="flex gap-2 items-center">
            <p className="text-white text-right">
              Adquira confiança e qualidade
              <br />
              para o armazenamento dos seus itens
            </p>
            <Icons.MKMotoBox.K />
          </div>
        </div>
        <div className="grid grid-cols-4 justify-between lg:grid-cols-6 w-full">
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
        <Button variant="outline">Ver mais</Button>
        <div className="elipse-one" />
      </section>

      <section className="container items-center py-16 flex flex-col gap-6 relative">
        <div className="flex md:flex-row flex-col items-center gap-4 md:gap-8 w-full">
          <div className="flex gap-4 items-center w-full md:min-w-[480px]">
            <Icons.MKMotoBox.MK className="min-w-12 md:block hidden" />
            <div className="flex flex-col gap-1">
              <h3 className="text-foundation-orange-300 text-2xl font-semibold">
                Que tal vender através da MK?
              </h3>
              <p className="text-white body body-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                repellendus non dicta pariatur
              </p>
            </div>
          </div>
          <div className="md:block hidden h-px bg-foundation-orange-300 w-full" />
          <Button variant="primary" className="text-black w-full md:w-auto">
            Quero saber mais!
          </Button>
        </div>
      </section>

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
    </div>
  )
}
