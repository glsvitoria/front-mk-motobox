import { ComponentProps } from 'react'

export interface LabelProps extends ComponentProps<'p'> {}

export const Label = ({ ...props }: LabelProps) => {
  return (
    <p
      className="text-white body-md transition-all duration-300 group-hover:text-foundation-orange-300"
      {...props}
    />
  )
}
