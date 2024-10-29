import { ComponentProps } from 'react'

export interface IconProps extends ComponentProps<'div'> {}

export const Icon = ({ ...props }: IconProps) => {
  return (
    <div
      className="text-white transition-all duration-300 group-hover:text-foundation-orange-300"
      {...props}
    />
  )
}
