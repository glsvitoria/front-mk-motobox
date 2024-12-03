import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center text-white", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<typeof Button>;

const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps) => (
  <button
    className={cn(
      "h-10 w-10 rounded-lg border border-transparent transition-all duration-300 hover:bg-foundation-orange-300",
      isActive && "border-foundation-orange-300",
      props.disabled && "pointer-events-none cursor-not-allowed opacity-50",
      className,
    )}
    {...props}
  />
);

PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<"button">) => (
  <button
    aria-label="Voltar para a página anterior"
    className={cn(
      "group flex h-10 min-w-32 items-center justify-center gap-1 rounded-lg border border-transparent px-2.5 transition-all duration-300 hover:border-foundation-orange-300 hover:bg-foundation-orange-300 disabled:pointer-events-none disabled:text-zinc-500",
      className,
    )}
    {...props}
  >
    <ChevronLeft
      className="text-foundation-orange-300 group-hover:text-white group-disabled:text-zinc-500"
      size={24}
    />
    <span>Anterior</span>
  </button>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<"button">) => (
  <button
    aria-label="Avançar para a próxima página"
    className={cn(
      "group flex h-10 min-w-32 items-center justify-center gap-1 rounded-lg border border-transparent px-2.5 transition-all duration-300 hover:border-foundation-orange-300 hover:bg-foundation-orange-300 disabled:pointer-events-none disabled:text-zinc-500",
      className,
    )}
    {...props}
  >
    <span>Próximo</span>
    <ChevronRight
      className="text-foundation-orange-300 group-hover:text-white group-disabled:text-zinc-500"
      size={24}
    />
  </button>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Mais páginas</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
