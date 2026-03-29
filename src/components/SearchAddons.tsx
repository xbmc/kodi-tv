import React, { useState, useMemo, useCallback } from "react";
import Button from "./Button";
import { IconListFeatured } from "./IconList";
import SearchAddonsNoResults from "./SearchAddonsNoResults";

function nameSortAsc(a, b) {
  const bandA = a.name.toUpperCase();
  const bandB = b.name.toUpperCase();
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

function nameSortDesc(a, b) {
  const bandA = a.name.toUpperCase();
  const bandB = b.name.toUpperCase();
  let comparison = 0;
  if (bandA < bandB) {
    comparison = 1;
  } else if (bandA > bandB) {
    comparison = -1;
  }
  return comparison;
}

function dateSortAsc(a, b) {
  const bandA = a.lastupdate.toUpperCase();
  const bandB = b.lastupdate.toUpperCase();
  let comparison = 0;
  if (bandA < bandB) {
    comparison = 1;
  } else if (bandA > bandB) {
    comparison = -1;
  }
  return comparison;
}

function dateSortDesc(a, b) {
  const bandA = a.lastupdate.toUpperCase();
  const bandB = b.lastupdate.toUpperCase();
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

function downloadsSortDesc(a, b) {
  const bandA = a.downloads;
  const bandB = b.downloads;
  let comparison = 0;
  if (bandA < bandB) {
    comparison = 1;
  } else if (bandA > bandB) {
    comparison = -1;
  }
  return comparison;
}

function downloadsSortAsc(a, b) {
  const bandA = a.downloads;
  const bandB = b.downloads;
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

export default function SearchAddons({ categories, addons, linkroot }) {
  const [categorySelected, setCategorySelected] = useState(null);
  const [sortSelected, setSortSelected] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [author, setAuthor] = useState("");
  const [results, setResults] = useState([]);
  const [firstrun, setFirstrun] = useState(true);

  const categoryOptions = useMemo(() => {
    const opts = [
      { value: "Select category", disabled: false, isPlaceholder: true },
    ];
    categories.forEach(category => {
      opts.push({ value: category.name, disabled: false });
    });
    return opts;
  }, [categories]);

  const sortOptions = [
    { value: "Sort by", disabled: false, isPlaceholder: true },
    { value: "A to Z", disabled: false },
    { value: "Z to A", disabled: false },
    { value: "Latest Update", disabled: false },
    { value: "Oldest Update", disabled: false },
    { value: "Most Popular", disabled: false },
    { value: "Least Popular", disabled: false },
  ];

  const onClear = useCallback(() => {
    setCategorySelected(null);
    setSortSelected(null);
    setKeyword("");
    setAuthor("");
    setResults([]);
    setFirstrun(true);
    (document.getElementById("addon-search") as HTMLFormElement)?.reset();
  }, []);

  const onCategorySelect = useCallback(
    event => {
      setCategorySelected(
        event.target.value === categoryOptions[0].value ? null : event.target.value,
      );
    },
    [categoryOptions],
  );

  const onSortSelect = useCallback(event => {
    setSortSelected(
      event.target.value === sortOptions[0].value ? null : event.target.value,
    );
  }, []);

  const onAuthorChange = useCallback(event => {
    setAuthor(event.target.value);
  }, []);

  const onKeywordChange = useCallback(event => {
    setKeyword(event.target.value);
  }, []);

  const doSearch = useCallback(() => {
    setFirstrun(false);
    let filtered_results = addons;
    if (categorySelected != null) {
      filtered_results = filtered_results.filter(addon => {
        if (addon.categories.find(o => o.name == categorySelected) != undefined) {
          return addon;
        }
      });
    }
    if (author != "") {
      filtered_results = filtered_results.filter(addon => {
        if (
          addon.authors.find(o => o.name.toLowerCase() == author.toLowerCase()) !=
          undefined
        ) {
          return addon;
        }
      });
    }
    if (keyword != "") {
      const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp("\\b" + escaped + "\\b", "i");
      filtered_results = filtered_results.filter(addon => {
        if (
          regex.test(addon.description) ||
          regex.test(addon.summary) ||
          regex.test(addon.name) ||
          regex.test(addon.addonid)
        ) {
          return addon;
        }
      });
    }
    if (filtered_results.length > 0 && sortSelected != null) {
      switch (sortSelected.toLowerCase()) {
        case "a to z":
          filtered_results = filtered_results.sort(nameSortAsc);
          break;
        case "z to a":
          filtered_results = filtered_results.sort(nameSortDesc);
          break;
        case "latest update":
          filtered_results = filtered_results.sort(dateSortAsc);
          break;
        case "oldest update":
          filtered_results = filtered_results.sort(dateSortDesc);
          break;
        case "most popular":
          filtered_results = filtered_results.sort(downloadsSortDesc);
          break;
        case "least popular":
          filtered_results = filtered_results.sort(downloadsSortAsc);
          break;
      }
    }
    setResults(filtered_results);
  }, [addons, categorySelected, author, keyword, sortSelected]);

  const search_disabled = !(keyword || author || categorySelected);

  return (
    <>
      <form
        id="addon-search"
        onKeyPress={e => {
          if (e.key === "Enter") {
            doSearch();
          }
        }}
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="pt-6 pb-10"
      >
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-7 xl:gap-4 items-startpt-5">
          <div>
            <label
              htmlFor="keyword"
              className="block text-sm font-medium text-gray-700"
            >
              Keyword
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="keyword"
                aria-label="Input Keyword"
                onChange={onKeywordChange}
                value={keyword}
                id="keyword"
                className="shadow-xs focus:ring-3 focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-200 rounded-xl transition-shadow duration-300 focus:shadow-glow"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="author"
                aria-label="Input Author"
                onChange={onAuthorChange}
                value={author}
                id="author"
                className="shadow-xs focus:ring-3 focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-200 rounded-xl transition-shadow duration-300 focus:shadow-glow"
              />
            </div>
          </div>

          <div className="xl:col-span-2">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              aria-label="Select Category"
              onChange={onCategorySelect}
              value={categorySelected}
              name="category"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 focus:outline-hidden focus:ring-3 focus:ring-kodi focus:border-kodi sm:text-sm rounded-xl transition-shadow duration-300 focus:shadow-glow"
            >
              {categoryOptions.map((item, index) => (
                <option key={item.value}>{item.value}</option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="sort"
              className="block text-sm font-medium text-gray-700"
            >
              Sort
            </label>
            <select
              id="sort"
              aria-label="Select Sort Order"
              onChange={onSortSelect}
              value={sortSelected}
              name="sort"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 focus:outline-hidden focus:ring-3 focus:ring-kodi focus:border-kodi sm:text-sm rounded-xl transition-shadow duration-300 focus:shadow-glow"
            >
              {sortOptions.map((item, index) => (
                <option key={item.value}>{item.value}</option>
              ))}
            </select>
          </div>

          <div className="xl:col-span-2 xl:-mt-2">
            <label
              htmlFor="nothing"
              className="block text-sm font-medium text-gray-700"
            >
              &nbsp;
            </label>
            <Button
              disabled={search_disabled}
              onClick={doSearch}
              buttonType="button"
            >
              Search
            </Button>
          </div>
        </div>
      </form>

      {results.length === 0 ? (
        <SearchAddonsNoResults firstrun={firstrun} />
      ) : (
        <IconListFeatured items={results} linkroot={linkroot} />
      )}
    </>
  );
}
