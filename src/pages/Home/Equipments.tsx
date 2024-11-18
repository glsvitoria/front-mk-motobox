import * as EquipmentCard from '@/components/EquipmentCard'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Equipments() {
  return (
    <section className="container items-center py-16">
      <div
        className={cn([
          'border border-foundation-orange-200 w-full rounded-lg bg-foundation-black-12 flex px-4 py-4 justify-center',
          'md:px-12 md:py-16',
        ])}
      >
        <div
          className={cn([
            'flex md:flex-row flex-col gap-4 items-center -mt-16',
            'md:items-end md:-mt-24',
          ])}
        >
          <div
            className={cn(['flex flex-col sm:items-end gap-2', 'sm:flex-row'])}
          >
            <Image
              src="/helmet.png"
              alt="Capacete de Moto"
              className={cn([
                'w-[148px] h-[148px]',
                'md:w-[250px] md:h-[250px]',
              ])}
              width={250}
              height={250}
            />
            <h2
              className={cn([
                'block md:hidden uppercase text-white font-semibold text-2xl',
                'sm:pb-12',
              ])}
            >
              Equipamentos
            </h2>
          </div>
          <div className="flex flex-col gap-3 pb-8">
            <h2
              className={cn([
                'hidden uppercase text-white font-semibold text-4xl',
                'md:block',
              ])}
            >
              MK Equipamentos
            </h2>
            <div className="flex gap-4">
              <EquipmentCard.Root>
                <EquipmentCard.Title>Luvas</EquipmentCard.Title>
                <EquipmentCard.Image
                  src="/equipment/gloves.png"
                  alt="Luva de moto"
                  width={70}
                  height={70}
                />
              </EquipmentCard.Root>
              <EquipmentCard.Root>
                <EquipmentCard.Title>Capacetes</EquipmentCard.Title>
                <EquipmentCard.Image
                  src="/equipment/gloves.png"
                  alt="Luva de moto"
                  width={70}
                  height={70}
                />
              </EquipmentCard.Root>
              <EquipmentCard.Root>
                <EquipmentCard.Title>Baús</EquipmentCard.Title>
                <EquipmentCard.Image
                  src="/equipment/gloves.png"
                  alt="Luva de moto"
                  width={70}
                  height={70}
                />
              </EquipmentCard.Root>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
