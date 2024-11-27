"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";
import { PanelLeftClose } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn([
        "fixed left-0 right-0 top-0 z-20 flex h-16 w-full font-medium text-[#E9E9E9] transition-all duration-300 md:h-20",
        isScrolled
          ? "bg-foundation-black-13"
          : "bg-foundation-black-13 md:bg-transparent",
      ])}
    >
      <div className="container mx-auto h-16 w-full items-center justify-between gap-x-20 pt-2 md:grid md:h-20 md:grid-cols-[1fr_auto_1fr] md:justify-center">
        <nav className={cn(["hidden md:block"])}>
          <ul className="flex justify-between">
            <NavLink href="">Motos</NavLink>
            <NavLink href="">Categorias</NavLink>
            <NavLink href="">Equipamentos</NavLink>
          </ul>
        </nav>
        <Image
          src="/logo.svg"
          alt="Logomarca da MK Moto Box"
          className="h-[39px] w-[94px] md:mx-auto md:h-[53px] md:w-[127px]"
          width={285}
          height={120}
        />
        <nav className={cn(["hidden md:block"])}>
          <ul className="flex justify-between">
            <NavLink href="">Sobre nós</NavLink>
            <NavLink href="">Marcas</NavLink>
            <NavLink href="">Onde estamos</NavLink>
          </ul>
        </nav>

        <Drawer>
          <DrawerTrigger>
            <PanelLeftClose className="block h-6 w-6 text-foundation-orange-300 md:hidden" />
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col gap-16">
              <DrawerHeader>
                <Image
                  src="/logo.svg"
                  alt="Logomarca da MK Motobox"
                  width={94}
                  height={40}
                />
              </DrawerHeader>
              <ul className="flex flex-col gap-6 font-medium text-white">
                <li>
                  <DrawerClose asChild>
                    <Link href="#motors-sale">Motos</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="#categories">Categorias</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="#equipment">Equipamentos</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="#about-us">Sobre nós</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="#brands">Marcas</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="#motos">Onde Estamos</Link>
                  </DrawerClose>
                </li>
              </ul>
            </div>
            <DrawerFooter>
              <Button variant="primary" className="text-foundation-black-13">
                Fale Conosco
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};
