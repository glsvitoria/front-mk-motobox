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
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";

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
        "container fixed left-0 right-0 top-0 z-20 flex h-16 w-full items-center justify-between gap-20 font-medium text-[#E9E9E9] transition-all duration-300",
        "pt-2 md:grid md:h-20 md:grid-cols-[1fr_auto_1fr] md:justify-center",
        isScrolled
          ? "bg-foundation-black-13"
          : "bg-foundation-black-13 md:bg-transparent",
      ])}
    >
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
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="primary">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
