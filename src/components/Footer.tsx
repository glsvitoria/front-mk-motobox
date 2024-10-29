import Image from 'next/image'
import { Button } from './ui/button'
import * as ExternalIcons from '@/assets/icons'
import * as SocialNetwork from '@/components/SocialNetwork'
import { cn } from '@/lib/utils'

export const Footer = () => {
  return (
    <footer className="bg-foundation-black-13 pt-16 pb-10 px-4 lg:px-24 flex flex-col gap-4 lg:gap-12">
      <div
        className={cn([
          'flex gap-4 flex-col items-center border-b-2 border-[#FFFFFF20] justify-between pt-12 w-full pb-6',
          'lg:flex-row lg:gap-0 lg:border-t-2 lg:border-b-0',
        ])}
      >
        <div className="flex flex-col gap-8">
          <Image
            src="/logo.svg"
            alt="Logomarca da MK Moto Box"
            className={cn([
              'w-[127px] h-[54px]',
              'lg:w-[167px] lg:h-[69px]',
              '2xl:w-[285px] 2xl:h-[120px]',
            ])}
            width={285}
            height={120}
          />
          <div
            className={cn(['hidden flex-col gap-4', 'lg:flex', '2xl:hidden'])}
          >
            <p className="body-md-semibold uppercase text-white">
              Deseja marcar hora?
            </p>
            <Button
              className="uppercase text-foundation-black-13"
              variant="primary"
            >
              Agendar Horário
            </Button>
          </div>
        </div>

        <div
          className={cn([
            'flex flex-col w-full items-center gap-6',
            'lg:flex-row lg:w-auto lg:items-start lg:gap-18',
          ])}
        >
          <div
            className={cn([
              'flex flex-col gap-4 w-full items-center',
              'lg:hidden',
              '2xl:flex',
            ])}
          >
            <p className="body-md-semibold uppercase text-white lg:block hidden">
              Deseja marcar hora?
            </p>
            <p
              className={cn([
                'body-md-semibold uppercase text-white block text-center px-4',
                'md:px-16',
                'lg:hidden',
              ])}
            >
              Sua loja nacional de motos usadas com curadoria de qualidade.
            </p>
            <Button
              className="uppercase text-foundation-black-13 w-full"
              variant="primary"
            >
              Agendar Horário
            </Button>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <p className="body-md-semibold uppercase text-white lg:text-left text-center">
              Horário de funcionamento
            </p>
            <ul className="text-white opacity-80 flex flex-col gap-2 lg:items-start items-center">
              <li>Segunda a Sexta: 12:00 às 20:00</li>
              <li>Sábado: 10:00 às 13:00</li>
              <li>Sob agendamento: qualquer horário</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p
              className={cn([
                'body-md-semibold uppercase text-white text-center',
                'lg:text-start',
              ])}
            >
              Contato
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <SocialNetwork.Root
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK || ''}
                >
                  <SocialNetwork.Icon>
                    <ExternalIcons.Instagram className="w-5 h-5" />
                  </SocialNetwork.Icon>
                  <SocialNetwork.Label>@mkmotobox</SocialNetwork.Label>
                </SocialNetwork.Root>
              </li>
              <li>
                <SocialNetwork.Root
                  href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || ''}
                >
                  <SocialNetwork.Icon>
                    <ExternalIcons.Whatsapp className="w-5 h-5" />
                  </SocialNetwork.Icon>
                  <SocialNetwork.Label>(21) 99924-3300</SocialNetwork.Label>
                </SocialNetwork.Root>
              </li>
              <li>
                <SocialNetwork.Root
                  href={process.env.NEXT_PUBLIC_MAIL_TO || ''}
                >
                  <SocialNetwork.Icon>
                    <ExternalIcons.Gmail className="w-5 h-5" />
                  </SocialNetwork.Icon>
                  <SocialNetwork.Label>motobox@gmail.com</SocialNetwork.Label>
                </SocialNetwork.Root>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <address className="text-white opacity-50 text-center text-sm">
        2024 MK MotoBox. Barra World - Av. Alfredo Balthazar da Silveira, 580 -
        1º SubSolo - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-710
      </address>
    </footer>
  )
}
