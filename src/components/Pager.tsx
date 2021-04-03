import React from "react";
import { Link } from "gatsby";

const slugify = require("slugify");

const Pager = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    numberOfPages,
    pageNumber,
    humanPageNumber,
  } = pageContext;
  let paginationinfo = [];
  let url = "";
  let urlbase = "/blog";
  if (pageContext.tag != undefined) {
    urlbase = urlbase + "/tag/" + slugify(pageContext.tag, { lower: true });
  }
  let onpage = false;
  let hidepage = false;
  for (let i = 1; i <= numberOfPages; i++) {
    if (i == 1) {
      url = urlbase;
    } else {
      url = urlbase + "/page/" + i.toString();
    }
    onpage = humanPageNumber == i;
    if (
      i == 1 ||
      i == numberOfPages ||
      i == humanPageNumber ||
      (i > humanPageNumber - 3 && i < humanPageNumber + 3)
    ) {
      paginationinfo.push({ url: url, pagenum: i.toString(), onpage: onpage });
      hidepage = true;
    } else if (hidepage) {
      paginationinfo.push({ url: "", pagenum: "...", onpage: false });
      hidepage = false;
    }
  }
  return (
    <>
      <div className="hidden md:grid grid-cols-1 pb-3 pt-9 place-items-center">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <Link
            to={previousPagePath}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          {paginationinfo.map((info: any, index: any) => {
            return (
              <>
                <Link
                  style={{ display: info.onpage ? "none" : "block" }}
                  to={info.url}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {info.pagenum}
                </Link>
                <Link
                  style={{ display: info.onpage ? "block" : "none" }}
                  to={info.url}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-kodi text-sm font-medium text-white hover:bg-gray-50"
                >
                  {info.pagenum}
                </Link>
              </>
            );
          })}
          <Link
            to={nextPagePath}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </nav>
      </div>
      <div className="grid md:hidden grid-cols-1 pb-3 pt-9 place-items-center">
        <nav className="relative z-0 inline-flex space-x-32" aria-label="Pagination">
          <Link
            to={previousPagePath}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            to={nextPagePath}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Pager;
