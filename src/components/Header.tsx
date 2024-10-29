'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { NavLink } from './NavLink'
import { PanelLeftClose } from 'lucide-react'

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
        'w-full flex justify-between items-center text-[#E9E9E9] h-16 lg:h-20 font-medium fixed top-0 left-0 right-0 px-4 transition-all duration-300 gap-20',
        'lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-center lg:px-20',
        isScrolled
          ? 'bg-foundation-black-13'
          : 'bg-foundation-black-13 lg:bg-transparent',
      ])}
    >
      <nav className={cn(['lg:block hidden'])}>
        <ul className="flex justify-between">
          <NavLink href="">Motos</NavLink>
          <NavLink href="">Categorias</NavLink>
          <NavLink href="">Equipamentos</NavLink>
        </ul>
      </nav>
      <Image
        src="/logo.svg"
        alt="Logomarca da MK Moto Box"
        className="w-[94px] h-[39px] lg:w-[127px] lg:h-[53px] lg:mx-auto"
        width={285}
        height={120}
      />
      <nav className={cn(['lg:block hidden'])}>
        <ul className="flex justify-between">
          <NavLink href="">Sobre nós</NavLink>
          <NavLink href="">Marcas</NavLink>
          <NavLink href="">Onde estamos</NavLink>
        </ul>
      </nav>
      <PanelLeftClose className="block h-6 w-6 lg:hidden text-foundation-orange-300" />
    </header>
  )
}
