import * as Icons from "@/assets/icons";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { masks } from "@/utils/masks";
import Link from "next/link";

export interface InfoProps extends React.ComponentProps<"div"> {
  id: string;
  km: number;
  mark: string;
  model: string;
  year: string;
  value: number;
}

export const Info = ({
  id,
  mark,
  model,
  km,
  value,
  year,
  ...props
}: InfoProps) => {
  return (
    <div
      className="flex flex-col gap-4 bg-foundation-black-12 p-3 text-white"
      {...props}
    >
      <div className="flex flex-col gap-1 text-xs">
        <h4 className="uppercase">
          {mark} <span className="font-semibold">{model}</span>
        </h4>
        <p className="font-medium text-foundation-black-5">{year}</p>
      </div>
      <div className="flex items-center gap-1">
        <Icons.Road className="text-foundation-orange-200" />
        <p className="text-xs font-medium text-foundation-black-5">
          {masks.km(km)}
        </p>
      </div>
      <p className="text-xl font-semibold">{masks.currency(value)}</p>
      <Link href={`/moto/${id}`} className="w-full">
        <Button variant="outline" size="sm" className="w-full uppercase">
          Saiba mais
          <ChevronRight className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
};
