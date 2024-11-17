export interface RootProps extends React.ComponentProps<'div'> {}

export const Root = ({ ...props }: RootProps) => {
  return <div className="w-[194px] rounded-lg overflow-hidden" {...props}></div>
}
