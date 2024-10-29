import Image from 'next/image'
import { Button } from './ui/button'
import * as ExternalIcons from '@/assets/icons'
import * as SocialNetwork from '@/components/SocialNetwork'

export const Footer = () => {
  return (
    <footer className="bg-foundation-black-13 pt-16 pb-10 px-24 flex flex-col gap-12">
      <div className="flex border-t-2 border-[#FFFFFF20]  justify-between pt-12">
        <Image
          src="/logo.svg"
          alt="Logomarca da MK Moto Box"
          className="w-[285px] h-[120px]"
          width={285}
          height={120}
        />

        <div className="flex gap-18">
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-6">
            <p className="body-md-semibold uppercase text-white">
              Horário de funcionamento
            </p>
            <ul className="text-white opacity-80 flex flex-col gap-2">
              <li>Segunda a Sexta: 12:00 às 20:00</li>
              <li>Sábado: 10:00 às 13:00</li>
              <li>Sob agendamento: qualquer horário</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="body-md-semibold uppercase text-white">Contato</p>
            <ul className="flex flex-col gap-2">
              <li>
                <SocialNetwork.Root href="https://www.instagram.com/mkmotobox/">
                  <SocialNetwork.Icon>
                    <ExternalIcons.Instagram className="w-5 h-5" />
                  </SocialNetwork.Icon>
                  <SocialNetwork.Label>@mkmotobox</SocialNetwork.Label>
                </SocialNetwork.Root>
              </li>
              <li>
                <SocialNetwork.Root href="https://wa.me/5521999243300?text=Ol%C3%A1%2C%20entrei%20no%20seu%20site%20e%20tenho%20interesse%20em%20conversar%20mais%20sobre%20a%20loja">
                  <SocialNetwork.Icon>
                    <ExternalIcons.Whatsapp className="w-5 h-5" />
                  </SocialNetwork.Icon>
                  <SocialNetwork.Label>(21) 99924-3300</SocialNetwork.Label>
                </SocialNetwork.Root>
              </li>
              <li>
                <SocialNetwork.Root href="mailto:motobox@gmail.com">
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
      <p className="text-white opacity-50 text-center text-sm">
        2024 MK MotoBox. Barra World - Av. Alfredo Balthazar da Silveira, 580 -
        1º SubSolo - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-710
      </p>
    </footer>
  )
}
