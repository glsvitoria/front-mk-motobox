import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mt-16 flex h-[calc(100vh-483px)] flex-col items-center justify-center gap-5">
      <Image
        src="/speedometer.png"
        className="h-[116px] w-[116px]"
        width={116}
        height={116}
        alt="Imagem de um velocímetro"
      />
      <h1 className="text-2xl font-semibold text-[#737373]">
        A página buscada não foi encontrada
      </h1>
      <Link href="/">
        <Button variant="outline">
          <ChevronLeft className="h-5 w-5" />
          Voltar
        </Button>
      </Link>
    </div>
  );
}
