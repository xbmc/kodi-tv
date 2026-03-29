import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="pagination-content"
      className={cn(
        "relative z-0 inline-flex rounded-xl shadow-glass -space-x-px overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

function PaginationLink({ className, isActive, ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      className={cn(
        "relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors duration-200",
        isActive
          ? "bg-kodi-darker border-kodi-darker text-white font-bold"
          : "text-gray-700 bg-white border-gray-200 hover:bg-gray-50",
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      aria-label="Go to previous page"
      data-slot="pagination-previous"
      className={cn(
        "relative inline-flex items-center px-2 py-2 border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200",
        className,
      )}
      {...props}
    >
      <span className="sr-only">Previous</span>
      <ChevronLeftIcon className="h-5 w-5" />
    </a>
  );
}

function PaginationNext({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      aria-label="Go to next page"
      data-slot="pagination-next"
      className={cn(
        "relative inline-flex items-center px-2 py-2 border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200",
        className,
      )}
      {...props}
    >
      <span className="sr-only">Next</span>
      <ChevronRightIcon className="h-5 w-5" />
    </a>
  );
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "relative inline-flex items-center px-4 py-2 border border-gray-200 bg-white text-sm font-medium text-gray-500",
        className,
      )}
      {...props}
    >
      <MoreHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
