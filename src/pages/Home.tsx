import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import * as Icons from '@/assets/icons'
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
              <Icons.MKMotoBox />
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
    </div>
  )
}
