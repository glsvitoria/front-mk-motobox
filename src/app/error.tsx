"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="container mt-16 flex h-[calc(100vh-483px)] flex-col items-center justify-center gap-4 md:gap-8">
      <div className="flex flex-col items-center justify-center md:gap-10">
        <Image
          src="/errors/generic.png"
          className="h-[117px] w-[160px] md:h-[130px] md:w-[180px]"
          width={180}
          height={137}
          alt="Imagem de erro 404"
        />
        <h1 className="md:heading-lg body-lg-semibold text-[#737373]">
          Ops! Tente novamente.
        </h1>
      </div>
      <Link href="/">
        <Button variant="outline">
          <ChevronLeft className="h-5 w-5" />
          Voltar
        </Button>
      </Link>
    </div>
  );
}
