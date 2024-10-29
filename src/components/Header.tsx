'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { NavLink } from './NavLink'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn([
        'w-[100%-160px] grid grid-cols-3 items-center justify-center text-[#E9E9E9] h-20 font-medium fixed top-0 left-0 right-0 px-20 transition-all duration-300',
        isScrolled ? 'bg-foundation-black-13' : '',
      ])}
    >
      <nav>
        <ul className="flex justify-between">
          <NavLink href="">Motos</NavLink>
          <NavLink href="">Categorias</NavLink>
          <NavLink href="">Equipamentos</NavLink>
        </ul>
      </nav>
      <Image
        src="/logo.svg"
        alt="Logomarca da MK Moto Box"
        className="w-[127px] h-[53px] mx-auto"
        width={285}
        height={120}
      />
      <nav>
        <ul className="flex justify-between">
          <NavLink href="">Sobre nós</NavLink>
          <NavLink href="">Marcas</NavLink>
          <NavLink href="">Onde estamos</NavLink>
        </ul>
      </nav>
    </header>
  )
}
