"use client";

import { Input } from "@/components/ui/input";
import { Moto } from "@/types";
import { useCallback, useEffect, useState } from "react";
import * as MotorcycleCard from "@/components/MotorcycleCard";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";
import { MotoService } from "@/services/Moto";
import { PaginationComponent } from "@/components/PaginationComponent";
import LogoSchema from "@/utils/logoSchema";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [motos, setMotos] = useState<Moto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState({
    page: 1,
    pageCount: 1,
    pageSize: 1,
    total: 0,
  });

  const updateSearchParams = useCallback(
    ({ newPage, newSearch }: { newPage?: string; newSearch?: string }) => {
      const currentSearch = searchParams?.get("s");
      const currentPage = searchParams?.get("p");

      const newSearchParams = new URLSearchParams();
      if (currentSearch !== newSearch && newSearch)
        newSearchParams.set("s", newSearch || "");
      if (currentPage !== newPage) newSearchParams.set("p", newPage || "1");

      router.push(`/pesquisa?${newSearchParams.toString()}`);
    },
    [router, searchParams],
  );

  const handleSubmitForm = useCallback(
    async (e?: React.FormEvent<HTMLFormElement>) => {
      e?.preventDefault();
      const formData = new FormData(e?.currentTarget);
      const search = formData.get("search") as string;
      updateSearchParams({
        newSearch: search,
      });
    },
    [updateSearchParams],
  );

  const handleSearch = useCallback(async () => {
    setLoading(true);
    const search = searchParams?.get("s");
    const page = searchParams?.get("p") || "1";
    const { motos, pagination } = await MotoService.get({
      init: page,
      limit: "12",
      search: search || "",
    });
    setMotos(motos);
    setPagination(pagination);
    setLoading(false);
  }, [searchParams]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <>
      <LogoSchema />

      <main className="w-[calc(100vw - 8px)] container mt-40 flex flex-col items-center gap-14 overflow-hidden">
        <form className="w-full" onSubmit={handleSubmitForm}>
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

        {motos.length > 0 && (
          <PaginationComponent
            currentPage={pagination.page}
            onChangePage={(page) => {
              updateSearchParams({ newPage: page });
            }}
            pageCount={pagination.pageCount}
            pageSize={pagination.pageSize}
            totalItems={pagination.total}
          />
        )}
      </main>
    </>
  );
}
