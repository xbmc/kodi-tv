import React from "react";
import slugify from "slugify";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface PageContext {
  previousPagePath: string;
  nextPagePath: string;
  numberOfPages: number;
  pageNumber: number;
  humanPageNumber: number;
  tag?: string;
}

const Pager = ({ pageContext }: { pageContext: PageContext }) => {
  const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber } =
    pageContext;

  let urlbase = "/blog";
  if (pageContext.tag != undefined) {
    urlbase =
      urlbase +
      "/tag/" +
      slugify(pageContext.tag, {
        lower: true,
        remove: /[^\w\s$*_+~.()'"!\-@]+/g,
      });
  }

  type PageInfo = { url: string; pagenum: string; onpage: boolean };
  const paginationinfo: PageInfo[] = [];
  let hidepage = false;
  for (let i = 1; i <= numberOfPages; i++) {
    const url = i === 1 ? urlbase : urlbase + "/page/" + i.toString();
    const onpage = humanPageNumber === i;
    if (
      i === 1 ||
      i === numberOfPages ||
      i === humanPageNumber ||
      (i > humanPageNumber - 3 && i < humanPageNumber + 3)
    ) {
      paginationinfo.push({ url, pagenum: i.toString(), onpage });
      hidepage = true;
    } else if (hidepage) {
      paginationinfo.push({ url: "", pagenum: "...", onpage: false });
      hidepage = false;
    }
  }

  return (
    <>
      {/* Desktop pagination */}
      <div className="hidden md:grid grid-cols-1 pb-3 pt-9 place-items-center">
        <Pagination>
          <PaginationContent>
            <PaginationPrevious href={previousPagePath} />
            {paginationinfo.map((info, index) => {
              if (info.pagenum === "...") {
                return <PaginationEllipsis key={index} />;
              }
              return (
                <PaginationLink key={index} href={info.url} isActive={info.onpage}>
                  {info.pagenum}
                </PaginationLink>
              );
            })}
            <PaginationNext href={nextPagePath} />
          </PaginationContent>
        </Pagination>
      </div>
      {/* Mobile pagination */}
      <div className="grid md:hidden grid-cols-1 pb-3 pt-9 place-items-center">
        <Pagination>
          <div className="relative z-0 inline-flex space-x-32">
            <PaginationPrevious href={previousPagePath} className="rounded-xl" />
            <PaginationNext href={nextPagePath} className="rounded-xl" />
          </div>
        </Pagination>
      </div>
    </>
  );
};

export default Pager;
