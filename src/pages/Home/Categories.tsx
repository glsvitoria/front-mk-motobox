import { cn } from '@/lib/utils'
import Image from 'next/image'
import * as Icons from '@/assets/icons'

export default function Categories() {
  return (
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
  )
}
