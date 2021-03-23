import React from "react";
import { BlogPostCard } from "./Blog";
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
      results: null,
      firstrun: true,
    };

    this.tagOptions = [
      { value: "Select tag", disabled: false, isPlaceholder: true },
    ];
    props.tags.forEach(tag => {
      this.tagOptions.push({ value: tag, disabled: false });
    });

    this.onClear = () => {
      this.setState({
        tagSelected: null,
        sortSelected: null,
        keyword: "",
        author: "",
        results: null,
        firstrun: true,
      });
      document.getElementById("news-search").reset();
    };

    this.onTagSelect = event => {
      this.setState({
        tagSelected:
          event.target.value === this.tagOptions[0].value
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
      props.posts.forEach(post => {
        let tag_match = false;
        let keyword_match = false;
        let author_match = false;
        if (this.state.tagSelected == null) {
          tag_match = true;
        } else {
          if (post.node.frontmatter.tags !== null) {
            if (post.node.frontmatter.tags.includes(this.state.tagSelected)) {
              tag_match = true;
            }
          }
        }
        if (this.state.author == "") {
          author_match = true;
        } else {
          const regex = new RegExp("\\b" + this.state.author + "\\b", "i");
          if (post.node.frontmatter.author !== null) {
            if (regex.test(post.node.frontmatter.author)) {
              author_match = true;
            }
          }
        }
        if (this.state.keyword == "") {
          keyword_match = true;
        } else {
          const regex = new RegExp("\\b" + this.state.keyword + "\\b", "i");
          if (post.node.rawMarkdownBody !== null) {
            if (regex.test(post.node.rawMarkdownBody)) {
              keyword_match = true;
            }
          }
          if (post.title !== null) {
            if (regex.test(post.node.frontmatter.title)) {
              keyword_match = true;
            }
          }
        }
        if (tag_match && keyword_match && author_match) {
          if (filtered_results == null) {
            filtered_results = [];
          }
          filtered_results.push(post);
        }
      });

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
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 xl:gap-4 items-startpt-5">
            <div>
              <label HtmlFor="tag" className="block text-sm font-medium text-gray-700">
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
                {this.tagOptions.map((item, index) => (
                  <option>{item.value}</option>
                ))}
              </select>
            </div>

            <div>
              <label
                HtmlFor="keyword"
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
                HtmlFor="author"
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


            <div className="pt-1">
              <label
                HtmlFor="nothing"
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
          <SearchNewsNoResults firstrun={this.state.firstrun} />
        ) : (
          <>
            <div className="mt-12 max-w-lg mx-auto gap-5 grid grid-cols-1 lg:grid-cols-3 lg:max-w-none">
              {this.state.results.map((post, index) => (
                <BlogPostCard post={post.node} />
              ))}
            </div>
          </>
        )}
      </>
    );
  }
}
