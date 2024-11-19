export interface RootProps extends React.ComponentProps<"div"> {}

export const Root = ({ ...props }: RootProps) => {
  return (
    <div
      className="flex h-24 items-center justify-center rounded-2xl border border-foundation-black-9 bg-foundation-black-11 px-4 md:h-36 md:px-8"
      {...props}
    />
  );
};
