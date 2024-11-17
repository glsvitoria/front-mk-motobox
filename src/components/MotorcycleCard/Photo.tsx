import Image, { ImageProps } from 'next/image'

export interface PhotoProps extends ImageProps {
  alt: string
}

export const Photo = ({ alt, ...props }: PhotoProps) => {
  return (
    <Image
      alt={alt}
      className="w-[194px] h-[151px]"
      width={194}
      height={151}
      {...props}
    />
  )
}
