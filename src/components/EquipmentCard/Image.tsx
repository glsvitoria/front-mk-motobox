import ImageNext, { ImageProps as ImageNextProps } from 'next/image'

export interface ImageProps extends ImageNextProps {
  alt: string
}

export const Image = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="border border-[#C85309] rounded-lg w-fit bg-equipmentCard">
      <ImageNext alt={alt} {...props}></ImageNext>
    </div>
  )
}
