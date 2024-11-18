import { cn } from '@/lib/utils'
import * as MotorcycleCard from '@/components/MotorcycleCard'
import * as Icons from '@/assets/icons'
import { Button } from '@/components/ui/button'

export const MotorsSale = () => {
  return (
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
  )
}
