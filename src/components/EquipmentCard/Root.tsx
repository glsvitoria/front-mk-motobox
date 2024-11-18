export interface RootProps extends React.ComponentProps<'div'> {}

export const Root = ({ ...props }: RootProps) => {
  return <div className="flex flex-col gap-1" {...props} />
}
