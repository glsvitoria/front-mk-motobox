export interface RootProps extends React.ComponentProps<"ul"> {}

export const Root = ({ ...props }: RootProps) => {
  return <ul className="grid w-full grid-cols-2 gap-8 md:w-max" {...props} />;
};
