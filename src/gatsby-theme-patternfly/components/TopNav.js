import React from 'react';
import { Link } from 'gatsby';
import {
  Nav,
  NavList,
  NavItem,
  NavVariants
} from '@patternfly/react-core';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';

const TopNav = ({ topNav }) => (
  <Location>
    {({ location }) => {
      const currentPath = location.pathname;
      const navItems = topNav;

      const isActiveTest = path => {
        return currentPath.indexOf(path) > -1;
      };

      const renderTopNav = () =>
        navItems.map(item => (
          <NavItem key={item.rootPath} itemId={item.rootPath} isActive={isActiveTest(item.rootPath)}>
            <Link to={item.path}>{item.title}</Link>
          </NavItem>
        ));

      // override for PatternFly 4
      const nav = (
        <Nav aria-label="Top Nav" variant="horizontal">
          <NavList>
            {renderTopNav()}
          </NavList>
        </Nav>
      );

      return nav;
    }}
  </Location>
);

TopNav.propTypes = {
  topNav: PropTypes.any
};

export default TopNav;