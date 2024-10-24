import Image from 'next/image'

export default function Home() {
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
      <div className="bg-hero w-full px-20">
        <header className="container w-full grid grid-cols-3 items-center justify-center text-[#E9E9E9] h-20 font-medium">
          <nav>
            <ul className="flex gap-12">
              <li>Motos</li>
              <li>Equipamentos</li>
              <li>Baús</li>
            </ul>
          </nav>
          <Image
            src="/logo.svg"
            alt="Logomarca da MK Moto Box"
            className="w-[127px] h-[53px] mx-auto"
            width={127}
            height={53}
          />
          <nav>
            <ul className="flex gap-12">
              <li>Sobre nós</li>
              <li>Marcas</li>
              <li>Onde estamos</li>
            </ul>
          </nav>
        </header>

        <div className="w-1/2">
          <h1 className="font-semibold text-[40px] leading-[120%] text-white">
            Qualidade, segurança e velocidade por todo o Brasil
          </h1>
          <p className="heading-sm text-white">
            MK Motobox é a sua loja nacional de motos usadas com curadorias de
            qualidade
          </p>
        </div>
      </div>
    </div>
  )
}
