import React from 'react'
import Layout from 'patternfly_components/Layout'
import ReleasesTabs from 'src/components/ReleasesTabs'
// import ReleasesAccordion from 'src/components/ReleasesAccordion'

import {
  Grid, GridItem,
  Text, TextVariants, TextContent,
  Stack, StackItem,
} from '@patternfly/react-core'
import { graphql, Link } from "gatsby"

export default function Distribution({ data }) {
  const dist = data.distribution

  return (
    <Layout>
      <Grid hasGutter>
        <GridItem span={1}><img width='150' height='150' alt="" src={dist.icon} /></GridItem>
        <GridItem span={11}>
          <Stack hasGutter>
            <StackItem>
              <TextContent>
                <Text component={TextVariants.h1}>{dist.name}</Text>
                <Text>If you need extra help, checkout our <Link to={dist.howto}>"How To" Guide</Link> for {dist.name}.</Text>
              </TextContent>
            </StackItem>
            <StackItem>
              <ReleasesTabs releases={dist.releases} />
            </StackItem>
          </Stack>
        </GridItem>
      </Grid>
    </Layout>
  )
}




export const query = graphql`
  query($slug: String!) {
    distribution(slug: { eq: $slug }) {
      name
      icon
      howto
      releases {
        id
        name
        title
        description
        downloads {
          name
          url
        }
      }
    }
  }
`
