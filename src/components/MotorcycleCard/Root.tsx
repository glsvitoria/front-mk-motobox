export interface RootProps extends React.ComponentProps<"div"> {}

export const Root = ({ ...props }: RootProps) => {
  return (
    <div className="w-[194px] overflow-hidden rounded-lg" {...props}></div>
  );
};
