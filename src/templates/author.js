import React from 'react'
import Layout from 'patternfly_components/Layout'
import Footer from 'src/gatsby-theme-patternfly/components/Footer'
import {
  PageSection, PageSectionVariants,
} from '@patternfly/react-core'
import { H1, Text } from 'patternfly_components/Markdown'
import { graphql } from "gatsby"
import AddonsIconList from 'src/components/AddonsIconList'

export default function Category({ data }) {
    const author = data.author

    return (
        <Layout>
            <PageSection variant={PageSectionVariants.light} isFilled={true}>
                <H1>{author.name}</H1>
                <Text>
                    This is the page for {author.name}. They have {author.totaladdons} add-ons.
                </Text>
                <AddonsIconList addons={author.addons} />
            </PageSection>
            <Footer />
        </Layout>
    )
}


export const query = graphql`
    query($slug: String!) {
        author(slug: { eq: $slug }) {
            name
            totaladdons
            addons {
                authors {
                    name
                    slug
                }
                description
                disclaimer
                forum
                icons {
                    localpath
                }
                lastupdate(formatString: "MMMM DD, YYYY")
                license
                longname
                name
                news
                platforms {
                    platform
                    path
                }
                size
                source
                summary
                version
                website
            }
        }
    }
`
