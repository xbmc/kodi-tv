import React from 'react';
import {
  List,
  ListItem,
  ListVariant,
} from "@patternfly/react-core"
import { Link } from 'gatsby';

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <React.Fragment>
        <List variant={ListVariant.inline}>
          { previousPagePath
            ? <React.Fragment><ListItem><Link to={previousPagePath}>← Newer Posts</Link></ListItem></React.Fragment>
            : ""
          }
          { nextPagePath
            ? <React.Fragment><ListItem><Link to={nextPagePath}>Older Posts →</Link></ListItem></React.Fragment>
            : ""
          }
        </List>
    </React.Fragment>
  );
};

export default Pager;
