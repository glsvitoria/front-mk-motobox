import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: string) => void;
}

export const PaginationComponent = ({
  currentPage,
  onChangePage,
  totalPages,
}: PaginationComponentProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage === 1}
            onClick={() => {
              onChangePage(String(currentPage - 1));
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            isActive={currentPage === 1}
            onClick={() => {
              onChangePage(String(1));
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>

        {totalPages > 3 && currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage > 2 && (
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

        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink isActive={true}>{currentPage}</PaginationLink>
          </PaginationItem>
        )}

        {currentPage < totalPages && (
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

        {totalPages > 4 && currentPage !== totalPages && (
          <PaginationItem>
            <PaginationLink
              isActive={currentPage === totalPages}
              onClick={() => {
                onChangePage(String(totalPages));
              }}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            disabled={currentPage === totalPages}
            onClick={() => {
              onChangePage(String(currentPage + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
