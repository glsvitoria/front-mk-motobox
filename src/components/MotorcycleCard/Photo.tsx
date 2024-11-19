import Image, { ImageProps } from "next/image";

export interface PhotoProps extends ImageProps {
  alt: string;
}

export const Photo = ({ alt, ...props }: PhotoProps) => {
  return (
    <Image
      alt={alt}
      className="h-[151px] w-[194px]"
      width={194}
      height={151}
      {...props}
    />
  );
};
