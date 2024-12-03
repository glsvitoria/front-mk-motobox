import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export interface PaginationComponentProps {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  totalItems: number;
  onChangePage: (page: string) => void;
}

export const PaginationComponent = ({
  currentPage,
  onChangePage,
  pageCount,
  pageSize,
  totalItems,
}: PaginationComponentProps) => {
  return (
    <Pagination className="flex items-center justify-between">
      <p className="font-medium">
        {pageSize} de {totalItems} itens
      </p>

      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage === 1}
            onClick={() => {
              onChangePage(String(currentPage - 1));
            }}
          />
        </PaginationItem>

        {pageCount > 1 && currentPage > 1 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                onChangePage(String(currentPage - 1));
              }}
            >
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink
            isActive
            onClick={() => {
              onChangePage(String(currentPage));
            }}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {pageCount > 1 && currentPage !== pageCount && (
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                onChangePage(String(currentPage + 1));
              }}
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            disabled={currentPage === pageCount}
            onClick={() => {
              onChangePage(String(currentPage + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>

      <button
        className="font-medium underline"
        onClick={() => {
          onChangePage(String(pageCount));
        }}
      >
        Ir para última página
      </button>
    </Pagination>
  );
};
