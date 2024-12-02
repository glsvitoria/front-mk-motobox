import { cn } from "@/lib/utils";

export interface RootProps extends React.ComponentProps<"div"> {}

export const Root = ({ className, ...props }: RootProps) => {
  return (
    <div
      className={cn("w-[194px] overflow-hidden rounded-lg", className)}
      {...props}
    ></div>
  );
};
