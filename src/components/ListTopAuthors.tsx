import React from "react";
import { FeaturedCard } from "./Card";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function AuthorList(props: { authors: any[] }) {
  let authors = props.authors;
  let linkroot = props.linkroot + "author/";

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {authors.map((author, index) => (
          <div key={author.name}>
            <FeaturedCard
              title={author.name}
              icon={
                <UserCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-50" />
              }
              url={linkroot + author.slug}
            >
              {author.totaladdons + " addons"}
            </FeaturedCard>
          </div>
        ))}
      </div>
    </>
  );
}
