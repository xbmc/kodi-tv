import React from "react";
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

export default class SearchAddons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorySelected: null,
      sortSelected: null,
      keyword: "",
      author: "",
      results: [],
      firstrun: true,
    };

    this.categoryOptions = [
      { value: "Select category", disabled: false, isPlaceholder: true },
    ];
    props.categories.forEach(category => {
      this.categoryOptions.push({ value: category.name, disabled: false });
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
        results: [],
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
      let filtered_results = props.addons;
      if (this.state.categorySelected != null) {
        filtered_results = filtered_results.filter(addon => {
          if (
            addon.categories.find(o => o.name == this.state.categorySelected) !=
            undefined
          ) {
            return addon;
          }
        });
      }
      if (this.state.author != "") {
        filtered_results = filtered_results.filter(addon => {
          if (
            addon.authors.find(
              o => o.name.toLowerCase() == this.state.author.toLowerCase()
            ) != undefined
          ) {
            return addon;
          }
        });
      }
      if (this.state.keyword != "") {
        const regex = new RegExp("\\b" + this.state.keyword + "\\b", "i");
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
      if (filtered_results.length > 0 && this.state.sortSelected != null) {
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
          onKeyPress={e => {
            if (e.key === "Enter") {
              this.doSearch();
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
                  onChange={this.onKeywordChange}
                  value={this.state.keyword}
                  id="keyword"
                  className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
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
                  onChange={this.onAuthorChange}
                  value={this.state.author}
                  id="author"
                  className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
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
                htmlFor="sort"
                className="block text-sm font-medium text-gray-700"
              >
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

            <div className="xl:col-span-2 xl:-mt-2">
              <label
                htmlFor="nothing"
                className="block text-sm font-medium text-gray-700"
              >
                &nbsp;
              </label>
              <Button
                disabled={search_disabled}
                onClick={this.doSearch}
                buttonType="button"
              >
                Search
              </Button>
            </div>
          </div>
        </form>

        {this.state.results.length === 0 ? (
          <SearchAddonsNoResults firstrun={this.state.firstrun} />
        ) : (
          <IconListFeatured
            items={this.state.results}
            linkroot={this.props.linkroot}
          />
        )}
      </>
    );
  }
}
