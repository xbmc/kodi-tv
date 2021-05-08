import React from "react";
import { BlogPostCard } from "./Blog";
import Button from "./Button";
import SearchNewsNoResults from "./SearchNewsNoResults";

function nameSortAsc(a, b) {
  const bandA = a.frontmatter.title.toUpperCase();
  const bandB = b.frontmatter.title.toUpperCase();
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
      tagSelected: null,
      keyword: "",
      author: "",
      results: [],
      firstrun: true,
    };

    this.onClear = () => {
      this.setState({
        tagSelected: null,
        sortSelected: null,
        keyword: "",
        author: "",
        results: [],
        firstrun: true,
      });
      document.getElementById("news-search").reset();
    };

    this.onTagSelect = event => {
      this.setState({
        tagSelected: event.target.value === "null" ? null : event.target.value,
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
      let filtered_results = props.posts;
      if (this.state.tagSelected != null) {
        filtered_results = filtered_results.filter(post => {
          if (post.frontmatter.tags != undefined) {
            if (post.frontmatter.tags.includes(this.state.tagSelected)) {
              return post;
            }
          }
        });
      }
      if (this.state.author != "") {
        const regex = new RegExp("\\b" + this.state.author + "\\b", "i");
        filtered_results = filtered_results.filter(post => {
          if (post.frontmatter.author != undefined) {
            if (regex.test(post.frontmatter.author)) {
              return post;
            }
          }
        });
      }
      if (this.state.keyword != "") {
        const regex = new RegExp("\\b" + this.state.keyword + "\\b", "i");
        filtered_results = filtered_results.filter(post => {
          if (post.rawMarkdownBody != undefined) {
            if (regex.test(post.rawMarkdownBody)) {
              return post;
            }
          }
        });
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
      this.state.tagSelected
    );
    return (
      <>
        <form
          id="news-search"
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="pt-6 pb-10"
        >
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 items-startpt-5">
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

            <div>
              <label
                htmlFor="tag"
                className="block text-sm font-medium text-gray-700"
              >
                Tag
              </label>
              <select
                id="tag"
                aria-label="Select Tag"
                onChange={this.onTagSelect}
                value={this.state.tagSelected}
                name="category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-kodi focus:border-kodi sm:text-sm rounded-md"
              >
                <option value="null">Select a Tag</option>
                {this.props.tags.map((tag, index) => (
                  <option value={tag.name}>{tag.displayname}</option>
                ))}
              </select>
            </div>

            <div className="-mt-2">
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
          <SearchNewsNoResults firstrun={this.state.firstrun} />
        ) : (
          <>
            <div className="mt-12 max-w-lg mx-auto gap-5 grid grid-cols-1 lg:grid-cols-3 lg:max-w-none">
              {this.state.results.map((post, index) => (
                <BlogPostCard post={post} />
              ))}
            </div>
          </>
        )}
      </>
    );
  }
}
