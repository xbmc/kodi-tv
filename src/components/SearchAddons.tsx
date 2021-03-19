import React from "react";
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

export default class SearchAddons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorySelected: null,
      sortSelected: null,
      keyword: "",
      author: "",
      results: null,
      firstrun: true,
    };

    this.categoryOptions = [
      { value: "Select category", disabled: false, isPlaceholder: true },
    ];
    props.categories.forEach(category => {
      this.categoryOptions.push({ value: category.node.name, disabled: false });
    });

    this.sortOptions = [
      { value: "Sort by", disabled: false, isPlaceholder: true },
      { value: "A to Z", disabled: false },
      { value: "Z to A", disabled: false },
      { value: "Latest Update", disabled: false },
      { value: "Oldest Update", disabled: false },
      { value: "Most Popular", disabled: false },
      { value: "Least Popular", disabled: false },
    ];

    this.onClear = () => {
      this.setState({
        categorySelected: null,
        sortSelected: null,
        keyword: "",
        author: "",
        results: null,
        firstrun: true,
      });
      document.getElementById("addon-search").reset();
    };

    this.onCategorySelect = event => {
      this.setState({
        categorySelected:
          event.target.value === this.categoryOptions[0].value
            ? null
            : event.target.value,
      });
    };

    this.onSortSelect = event => {
      this.setState({
        sortSelected:
          event.target.value === this.sortOptions[0].value
            ? null
            : event.target.value,
      });
    };

    this.onAuthorChange = event => {
      this.setState({
        author: event.target.value,
      });
    };

    this.onKeywordChange = event => {
      this.setState({
        keyword: event.target.value,
      });
    };

    this.doSearch = event => {
      this.state.firstrun = false;
      let filtered_results = null;
      props.addons.forEach(addon => {
        let category_match = false;
        let keyword_match = false;
        let author_match = false;
        if (this.state.categorySelected == null) {
          category_match = true;
        } else {
          let categorycheck = addon.categories.find(
            o => o.name == this.state.categorySelected
          );
          if (categorycheck != undefined) {
            category_match = true;
          }
        }
        if (this.state.author == "") {
          author_match = true;
        } else {
          let authorcheck = addon.authors.find(
            o => o.name.toLowerCase() == this.state.author.toLowerCase()
          );
          if (authorcheck != undefined) {
            author_match = true;
          }
        }
        if (this.state.keyword == "") {
          keyword_match = true;
        } else {
          const regex = new RegExp("\\b" + this.state.keyword + "\\b", "i");
          if (addon.description !== null) {
            if (regex.test(addon.description)) {
              keyword_match = true;
            }
          }
          if (addon.summary !== null) {
            if (regex.test(addon.summary)) {
              keyword_match = true;
            }
          }
          if (regex.test(addon.name)) {
            keyword_match = true;
          }
          if (regex.test(addon.addonid)) {
            keyword_match = true;
          }
        }
        if (category_match && keyword_match && author_match) {
          if (filtered_results == null) {
            filtered_results = [];
          }
          filtered_results.push(addon);
        }
      });
      if (filtered_results != null && this.state.sortSelected != null) {
        switch (this.state.sortSelected.toLowerCase()) {
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
      this.setState({
        results: filtered_results,
      });
    };
  }

  render() {
    let search_disabled = !(
      this.state.keyword ||
      this.state.author ||
      this.state.categorySelected
    );
    return (
      <>
        <form
          id="addon-search"
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="pt-6 pb-10"
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-4 items-startpt-5">
            <div>
              <label
                for="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                aria-label="Select Category"
                onChange={this.onCategorySelect}
                value={this.state.categorySelected}
                name="category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-kodi focus:border-kodi sm:text-sm rounded-md"
              >
                {this.categoryOptions.map((item, index) => (
                  <option>{item.value}</option>
                ))}
              </select>
            </div>

            <div>
              <label
                for="keyword"
                className="block text-sm font-medium text-gray-700"
              >
                Keyword
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="keyword"
                  aria-label="Input Keyword"
                  onChange={this.onKeywordChange}
                  value={this.state.keyword}
                  id="keyword"
                  className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                for="author"
                className="block text-sm font-medium text-gray-700"
              >
                Author
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="author"
                  aria-label="Input Author"
                  onChange={this.onAuthorChange}
                  value={this.state.author}
                  id="author"
                  className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label for="sort" className="block text-sm font-medium text-gray-700">
                Sort
              </label>
              <select
                id="sort"
                aria-label="Select Sort Order"
                onChange={this.onSortSelect}
                value={this.state.sortSelected}
                name="sort"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-kodi focus:border-kodi sm:text-sm rounded-md"
              >
                {this.sortOptions.map((item, index) => (
                  <option>{item.value}</option>
                ))}
              </select>
            </div>

            <div className="pt-1">
              <label
                for="nothing"
                className="block text-sm font-medium text-gray-700"
              >
                &nbsp;
              </label>
              <button
                style={{ display: search_disabled ? "none" : "inline-flex" }}
                onClick={this.doSearch}
                className="mt-3 w-full items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-kodi hover:bg-kodi-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kodi-lighter sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Search
              </button>
              <button
                style={{ display: search_disabled ? "inline-flex" : "none" }}
                disabled="true"
                className="mt-3 w-full items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Search
              </button>
              <button
                onClick={this.onClear}
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-kodi hover:bg-kodi-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kodi-lighter sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Reset
              </button>
            </div>
          </div>
        </form>

        {this.state.results === null ? (
          <SearchAddonsNoResults firstrun={this.state.firstrun} />
        ) : (
          <IconListFeatured items={this.state.results} linkroot="../" />
        )}
      </>
    );
  }
}
