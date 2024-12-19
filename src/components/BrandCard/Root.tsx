export interface RootProps extends React.ComponentProps<"div"> {}

export const Root = ({ children, ...props }: RootProps) => {
  return (
    <div
      className="group relative flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-foundation-black-9 bg-foundation-black-11 px-4 md:h-36 md:px-8"
      {...props}
    >
      <div className="absolute left-1/2 h-full w-full -translate-x-1/2 rounded-full bg-transparent transition-all duration-300 group-hover:bg-white/50 group-hover:opacity-25 group-hover:blur-[17.51px]" />

      {children}
    </div>
  );
};
