import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export const HomePage = () => {
  return (
    <div
      className="h-[650px] flex justify-center"
      style={{
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-hero w-full px-20 flex flex-col justify-center">
        <div className="w-1/2 flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[40px] leading-[120%] text-white">
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
    </div>
  )
}
