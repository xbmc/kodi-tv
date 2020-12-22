import React from 'react';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { Button, Select, SelectOption, SelectVariant } from '@patternfly/react-core';
import { InputGroup, TextInput } from '@patternfly/react-core';
import IconList from './IconList'
import SearchAddonsNoResults from './SearchAddonsNoResults'


function nameSortAsc(a, b) {
  const bandA = a.name.toUpperCase()
  const bandB = b.name.toUpperCase()
  let comparison = 0
  if (bandA > bandB) {
    comparison = 1
  } else if (bandA < bandB) {
    comparison = -1
  }
  return comparison
}

function nameSortDesc(a, b) {
  const bandA = a.name.toUpperCase()
  const bandB = b.name.toUpperCase()
  let comparison = 0
  if (bandA < bandB) {
    comparison = 1
  } else if (bandA > bandB) {
    comparison = -1
  }
  return comparison
}

function dateSortAsc(a, b) {
  const bandA = a.lastupdate.toUpperCase()
  const bandB = b.lastupdate.toUpperCase()
  let comparison = 0
  if (bandA < bandB) {
    comparison = 1
  } else if (bandA > bandB) {
    comparison = -1
  }
  return comparison
}

function dateSortDesc(a, b) {
  const bandA = a.lastupdate.toUpperCase()
  const bandB = b.lastupdate.toUpperCase()
  let comparison = 0
  if (bandA > bandB) {
    comparison = 1
  } else if (bandA < bandB) {
    comparison = -1
  }
  return comparison
}

export default class SearchAddons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryIsExpanded: false,
      categorySelected: null,
      sortIsExpanded: false,
      sortSelected: null,
      keyword: '',
      author: '',
      results: null,
      firstrun: true
    };

    this.categoryOptions = [{ value: 'Select category', disabled: false, isPlaceholder: true }]
    props.categories.forEach(category => {
        this.categoryOptions.push({value: category.node.name, disabled: false})
    });

    this.sortOptions = [
      { value: 'Sort by', disabled: false, isPlaceholder: true },
      { value: 'A to Z', disabled: false },
      { value: 'Z to A', disabled: false },
      { value: 'Latest Update', disabled: false },
      { value: 'Oldest Update', disabled: false }
    ];
    
    this.onClear = () => {
      this.setState({
        categoryIsExpanded: false,
        categorySelected: null,
        sortIsExpanded: false,
        sortSelected: null,
        keyword: '',
        author: '',
        results: null,
        firstrun: true
      })
    }

    this.onCategoryToggle = isExpanded => {
      this.setState({
        categoryIsExpanded: isExpanded
      });
    };

    this.onCategorySelect = (event, selection) => {
      this.setState({
        categorySelected: selection === 'Select category' ? null : selection,
        categoryIsExpanded: false
      });
    };

    this.onSortToggle = isExpanded => {
      this.setState({
        sortIsExpanded: isExpanded
      });
    };

    this.onSortSelect = (event, selection) => {
      this.setState({
        sortSelected: selection,
        sortIsExpanded: false
      });
    };

    this.onKeywordChange = keyword => {
      if (keyword === ''){
        keyword = null
      }
      this.setState({ keyword });
    };

    this.onAuthorChange = author => {
      if (author === ''){
        author = null
      }
      this.setState({ author });
    };
    
    this.doSearch = (event) => {
      this.state.firstrun = false
      let filtered_results = null
      props.addons.forEach(addon => {
        let category_match = false
        let keyword_match = false
        let author_match = false
        if (this.state.categorySelected == null) {
          category_match = true
        } else {
          let categorycheck = addon.categories.find(o => o.name == this.state.categorySelected)
          if (categorycheck != undefined) {
            category_match = true
          }
        }
        if (this.state.author == '') {
          author_match = true
        } else {
          let authorcheck = addon.authors.find(o => o.name.toLowerCase() == this.state.author.toLowerCase())
          if (authorcheck != undefined) {
            author_match = true
          }
        }
        if (this.state.keyword == '') {
          keyword_match = true
        } else {
          const regex = new RegExp('\\b' + this.state.keyword + '\\b', 'i');
          if (addon.description !== null) {
            if (regex.test(addon.description)) {
              keyword_match = true                
            }
          }
          if (regex.test(addon.name)) {
            keyword_match = true                
          }
          if (regex.test(addon.addonid)) {
            keyword_match = true                
          }
        }
        if (category_match && keyword_match && author_match) {
          if (filtered_results == null) {
            filtered_results = []
          }
          filtered_results.push(addon)
        }
      });
      if (filtered_results != null && this.state.sortSelected != null) {
        switch(this.state.sortSelected.toLowerCase()) {
          case "a to z":
            filtered_results = filtered_results.sort(nameSortAsc)
            break
          case "z to a":
            filtered_results = filtered_results.sort(nameSortDesc)
            break
          case "latest update":
            filtered_results = filtered_results.sort(dateSortAsc)
            break
          case "oldest update":
            filtered_results = filtered_results.sort(dateSortDesc)
            break
        }
      }
      this.setState({
        results: filtered_results
      });
    };
  }

  render() {
    const {
      categoryIsExpanded,
      categorySelected,
      sortIsExpanded,
      sortSelected,
      keyword,
      author,
      results,
      firstrun
    } = this.state;
    let search_disabled = !(keyword || author || categorySelected)

    const categoryGroupItems = (
      <React.Fragment>
        <ToolbarItem>
          <Select
            variant={SelectVariant.single}
            maxHeight={400}
            aria-label="Select Category"
            onToggle={this.onCategoryToggle}
            onSelect={this.onCategorySelect}
            selections={categorySelected}
            isOpen={categoryIsExpanded}
          >
            {this.categoryOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
            ))}
          </Select>
        </ToolbarItem>
      </React.Fragment>
    );

    const keywordGroupItems = (
      <React.Fragment>
        <ToolbarItem variant="label" id="keyword-label">
          Keyword
        </ToolbarItem>
        <ToolbarItem>
          <InputGroup>
            <TextInput
              name="keyword"
              id="keyword"
              type="search"
              value={keyword}
              aria-label="keyword to search"
              onChange={this.onKeywordChange}
            />
          </InputGroup>
        </ToolbarItem>
      </React.Fragment>
    );

    const authorGroupItems = (
      <React.Fragment>
        <ToolbarItem variant="label" id="author-label">
          Add-On Author
        </ToolbarItem>
        <ToolbarItem>
          <InputGroup>
            <TextInput
              name="author"
              id="author"
              type="search"
              value={author}
              aria-label="author to search"
              onChange={this.onAuthorChange}
            />
          </InputGroup>
        </ToolbarItem>
      </React.Fragment>
    );

    const sortGroupItems = (
      <React.Fragment>
        <ToolbarItem>
          <Select
            variant={SelectVariant.single}
            aria-label="Select Sort by"
            onToggle={this.onSortToggle}
            onSelect={this.onSortSelect}
            selections={sortSelected}
            isOpen={sortIsExpanded}
          >
            {this.sortOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
            ))}
          </Select>
        </ToolbarItem>
      </React.Fragment>
    );

    const buttonGroupItems = (
      <React.Fragment>
        <ToolbarItem>
          <Button isDisabled={search_disabled} variant="primary" role="link" onClick={this.doSearch}>Search</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary" role="link" onClick={this.onClear}>Reset</Button>
        </ToolbarItem>
      </React.Fragment>
    );

    const items = (
      <React.Fragment>
        <ToolbarGroup variant="filter-group">{categoryGroupItems}</ToolbarGroup>
        <ToolbarGroup variant="filter-group">{keywordGroupItems}</ToolbarGroup>
        <ToolbarGroup variant="filter-group">{authorGroupItems}</ToolbarGroup>
        <ToolbarGroup variant="filter-group">{sortGroupItems}</ToolbarGroup>
        <ToolbarGroup variant="button-group">{buttonGroupItems}</ToolbarGroup>
      </React.Fragment>
    );


    return (
      <React.Fragment>
        <Toolbar id="addon-search-toolbar">
          <ToolbarContent>{items}</ToolbarContent>
        </Toolbar>
        {
          results === null
          ? <SearchAddonsNoResults firstrun={firstrun} />
          : <IconList items={results} linkroot='/addons/' />
        }
      </React.Fragment>
    );
  }
}
