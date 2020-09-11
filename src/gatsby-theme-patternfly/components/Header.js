import React from 'react';
import { Link } from 'gatsby';
import {
  PageHeader
} from '@patternfly/react-core';
import PageHeaderTools from './PageHeaderTools';
import TopNav from 'patternfly_components/TopNav';
import Logo from 'patternfly_components/Logo';
import PropTypes from 'prop-types';

const Header = ({ useTopNav, topNav, showNavToggle = false }) => {
  return (
    <PageHeader
      topNav={useTopNav ? <TopNav topNav={topNav} /> : null}
      logo={<Link to="/"><Logo /></Link>}
      logoComponent='div'
      // override for Patterfly 4
      headerTools={<PageHeaderTools />}
//      avatar={<Avatar />}
      showNavToggle={showNavToggle}
    />
  );
};

Header.propTypes = {
  useTopNav: PropTypes.bool,
  topNav: PropTypes.any,
  showNavToggle: PropTypes.bool
};

export default Header;
