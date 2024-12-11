import ImageNext, { ImageProps as ImageNextProps } from "next/image";

export interface ImageProps extends ImageNextProps {
  alt: string;
}

export const Image = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-[#C85309] bg-equipmentCard">
      <ImageNext alt={alt} {...props}></ImageNext>
    </div>
  );
};
