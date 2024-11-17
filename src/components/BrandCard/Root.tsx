export interface RootProps extends React.ComponentProps<'div'> {}

export const Root = ({ ...props }: RootProps) => {
  return (
    <div
      className="border border-foundation-black-9 bg-foundation-black-11 rounded-2xl md:px-8 px-4 h-24 md:h-36 flex items-center justify-center"
      {...props}
    />
  )
}
