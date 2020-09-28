import React from 'react';
import {
  Title,
  EmptyState,
  EmptyStateVariant,
  EmptyStateBody,
  EmptyStatePrimary,
  EmptyStateIcon
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';


export default function SeachAddonsNoResult(props) {
  let title = 'No results found'
  let body = 'No results match the filter criteria. Remove all filters or clear all filters to show results.'
  if (props.firstrun){
    title = 'Ready to search'
    body = 'Select at least one option and click search to see results.'
  }
  return (
    <React.Fragment>
      <EmptyState variant={EmptyStateVariant.small}>
        <EmptyStateIcon icon={SearchIcon} />
        <Title headingLevel="h2" size="lg">
          {title}
        </Title>
        <EmptyStateBody>
          {body}
        </EmptyStateBody>
      </EmptyState>
    </React.Fragment>
  );
}
