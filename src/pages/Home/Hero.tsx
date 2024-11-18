import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
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
              MK Motobox é a sua loja nacional de motos usadas com curadorias de
              qualidade
            </p>
          </div>
          <Button variant="primary" className="w-full text-foundation-black-13">
            Fale Conosco
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
