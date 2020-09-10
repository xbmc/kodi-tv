import React from 'react'
import Layout from 'patternfly_components/Layout'
import Footer from 'src/gatsby-theme-patternfly/components/Footer'
import {
    PageSection, PageSectionVariants,
    Text, TextVariants, TextContent,
} from '@patternfly/react-core'
import { graphql } from "gatsby"
import IconList from 'src/components/IconList'

export default function Category({ data }) {
    const author = data.author

    return (
        <Layout>
            <PageSection variant={PageSectionVariants.light} isFilled={true}>
                <TextContent>
                    <Text component={TextVariants.h1}>{author.name}</Text>
                    <Text>This is the page for {author.name}. They have {author.totaladdons} add-ons.</Text>
                </TextContent>
                <IconList items={author.addons} linkroot='/addons/' />
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
                name
                slug
                icon
            }
        }
    }
`
