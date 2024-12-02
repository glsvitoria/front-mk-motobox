"use client";

import { Input } from "@/components/ui/input";
import { MotoService } from "@/services/Moto";
import { Moto } from "@/types";
import { useCallback, useEffect, useState } from "react";
import * as MotorcycleCard from "@/components/MotorcycleCard";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function SearchPage() {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const handleSearch = useCallback(
    async (e?: React.FormEvent<HTMLFormElement>) => {
      setLoading(true);
      e?.preventDefault();
      const formData = new FormData(e?.currentTarget);
      const search = formData.get("search") as string;

      const { motos } = await MotoService.get({
        init: page.toString(),
        limit: "8",
        search: search ?? "",
      });
      setMotos(motos);
      setLoading(false);
    },
    [page],
  );

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <main className="w-[calc(100vw - 8px)] container mt-40 flex flex-col items-center gap-14 overflow-hidden">
      <form className="w-full" onSubmit={handleSearch}>
        <Input placeholder="Pesquisa por marca ou modelo" name="search" />
      </form>

      <div className="w-full">
        {loading ? (
          <div className="grid w-full grid-cols-4 justify-between gap-6 lg:grid-cols-6">
            <MotorcycleCard.SkeletonCard className="w-full" />
            <MotorcycleCard.SkeletonCard className="w-full" />
          </div>
        ) : motos.length ? (
          <div className="grid w-full grid-cols-4 justify-between gap-6 lg:grid-cols-6">
            {motos.map((moto) => (
              <MotorcycleCard.Root key={moto.documentId} className="w-full">
                <MotorcycleCard.Photo
                  src={process.env.NEXT_PUBLIC_PHOTO_URL + moto.imagem[0].url}
                  alt="Moto"
                  className="w-full"
                />
                <MotorcycleCard.Info
                  id={moto.documentId}
                  km={moto.quilometragem}
                  mark={moto.marca}
                  model={moto.modelo}
                  value={moto.valor}
                  year={moto.ano}
                />
              </MotorcycleCard.Root>
            ))}
          </div>
        ) : (
          <div className="container mt-16 flex flex-col items-center justify-center gap-5">
            <Image
              src="/speedometer.png"
              className="h-[116px] w-[116px]"
              width={116}
              height={116}
              alt="Imagem de um velocímetro"
            />
            <h1 className="text-2xl font-semibold text-[#737373]">
              Não foram encontrados resultados
            </h1>
            <Link href="/">
              <Button variant="outline">
                <ChevronLeft className="h-5 w-5" />
                Voltar
              </Button>
            </Link>
          </div>
        )}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
