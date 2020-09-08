import React from 'react';
import Layout from 'patternfly_components/Layout';
import Footer from '../components/Footer'
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import PropTypes from 'prop-types';
import Text from 'patternfly_components/Markdown/Text';

const Default = ({ children }) => (
  <Layout>
    <PageSection variant={PageSectionVariants.light} isFilled={true}>
      <Text>
        {children}
      </Text>
    </PageSection>
    <Footer />
  </Layout>
);

Default.propTypes = {
  children: PropTypes.node
};

export default Default;
