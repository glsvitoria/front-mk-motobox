import ImageNext, { ImageProps as ImageNextProps } from "next/image";

export interface ImageProps extends ImageNextProps {
  alt: string;
}

export const Image = ({ alt, ...props }: ImageProps) => {
  return <ImageNext alt={alt} {...props} />;
};
