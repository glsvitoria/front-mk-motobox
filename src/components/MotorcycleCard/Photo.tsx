import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export interface PhotoProps extends ImageProps {
  alt: string;
}

export const Photo = ({ alt, className, ...props }: PhotoProps) => {
  return (
    <Image
      alt={alt}
      className={cn("h-[151px] w-[194px]", className)}
      width={194}
      height={151}
      {...props}
    />
  );
};
