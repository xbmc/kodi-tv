import React from 'react';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { Button, Select, SelectOption, SelectVariant } from '@patternfly/react-core';
import { InputGroup, TextInput } from '@patternfly/react-core';
import IconList from './IconList'


export default class SearchAddons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryIsExpanded: false,
      categorySelected: null,
      sortIsExpanded: false,
      sortSelected: null,
      keyword: null,
      results: null
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
      this.setState({ keyword });
    };
    
    this.handleClick = (event) => {
      let filtered_results = null
      props.addons.forEach(addon => {
        // what the fuck do I do here
        let category_match = false
        let keyword_match = false
        if (this.state.categorySelected == null) {
          category_match = true
        } else {
          let categorycheck = addon.categories.find(o => o.name == this.state.categorySelected)
          if (categorycheck != undefined) {
            category_match = true
          }
        }
        if (this.state.keyword == null) {
          keyword_match = true
        } else {
          if (addon.description !== null) {
            if (addon.description.toLowerCase().includes(this.state.keyword.toLowerCase())) {
              keyword_match = true                
            }
          }
          if (addon.name.toLowerCase().includes(this.state.keyword.toLowerCase())) {
           keyword_match = true        
          }  
        }
        if (category_match && keyword_match) {
          if (filtered_results == null) {
            filtered_results = []
          }
          filtered_results.push(addon)
        }
      });
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
      results
    } = this.state;

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
            <TextInput name="author" id="author" type="search" aria-label="author to search" />
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
          <Button variant="primary" role="link" onClick={this.handleClick}>Search</Button>
        </ToolbarItem>
      </React.Fragment>
    );

    const items = (
      <React.Fragment>
        <ToolbarGroup variant="filter-group">{categoryGroupItems}</ToolbarGroup>
        <ToolbarGroup variant="filter-group">{keywordGroupItems}</ToolbarGroup>
        <ToolbarGroup variant="filter-group">{authorGroupItems}</ToolbarGroup>
        <ToolbarGroup variant="sort-group">{sortGroupItems}</ToolbarGroup>
        <ToolbarGroup variant="button-group">{buttonGroupItems}</ToolbarGroup>
      </React.Fragment>
    );


    return (
      <React.Fragment>
        <Toolbar id="toolbar-group-types">
          <ToolbarContent>{items}</ToolbarContent>
        </Toolbar>
        {
          results === null
          ? 'no results'
          : <IconList items={results} linkroot='/addons/' />
        }
      </React.Fragment>
    );
  }
}
