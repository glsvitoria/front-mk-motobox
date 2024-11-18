export interface TitleProps extends React.ComponentProps<'p'> {}

export const Title = ({ ...props }: TitleProps) => {
  return <p className="font-medium text-white text-xs" {...props} />
}
