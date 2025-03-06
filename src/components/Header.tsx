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
import { formatWppLink } from "@/utils/formatWppLink";

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
      <div className="container mx-auto flex h-16 w-full items-center justify-between gap-x-20 pt-2 md:grid md:h-20 md:grid-cols-[1fr_auto_1fr] md:justify-center">
        <nav className={cn(["hidden md:block"])}>
          <ul className="flex justify-between">
            <NavLink href="/#motors-sale">Motos</NavLink>
            <NavLink href="/#categories">Categorias</NavLink>
            <NavLink href="/#equipment">Equipamentos</NavLink>
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
            <NavLink href="/#about-us">Sobre nós</NavLink>
            <NavLink href="/#brands">Marcas</NavLink>
            <NavLink href="/#motos">Onde estamos</NavLink>
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
                    <Link href="/#motors-sale">Motos</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="/#categories">Categorias</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="/#equipment">Equipamentos</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="/#about-us">Sobre nós</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="/#brands">Marcas</Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href="/#footer">Onde Estamos</Link>
                  </DrawerClose>
                </li>
              </ul>
            </div>
            <DrawerFooter>
              <Link
                target="_blank"
                href={formatWppLink({
                  message:
                    "Olá, acessei o site da MK Moto Box e gostaria de obter mais informações sobre a loja.",
                  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
                })}
                className="w-full"
              >
                <Button variant="primary" className="text-foundation-black-13">
                  Fale Conosco
                </Button>
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};
