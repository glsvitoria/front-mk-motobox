import ImageNext, { ImageProps as ImageNextProps } from "next/image";

export interface ImageProps extends ImageNextProps {
  alt: string;
}

export const Image = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="w-fit rounded-lg border border-[#C85309] bg-equipmentCard">
      <ImageNext alt={alt} {...props}></ImageNext>
    </div>
  );
};
