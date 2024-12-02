import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export interface SkeletonCardProps extends React.ComponentProps<"div"> {}

export const SkeletonCard = ({ className, ...props }: SkeletonCardProps) => {
  return (
    <div className={cn("w-[194px] overflow-hidden", className)} {...props}>
      <Skeleton className="h-[151px] w-full" />
      <div className="flex w-full flex-col gap-4 py-3">
        <Skeleton className="h-8 w-4/5 rounded-lg" />
        <Skeleton className="h-4 w-1/2 rounded-md" />
        <Skeleton className="h-6 w-3/4 rounded-lg" />
        <Skeleton className="h-10 rounded-lg" />
      </div>
    </div>
  );
};
