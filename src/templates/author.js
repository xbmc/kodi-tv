import React from 'react'
import Layout from 'patternfly_components/Layout'
import {
    Text, TextVariants, TextContent,
} from '@patternfly/react-core'
import { graphql } from "gatsby"
import IconList from 'src/components/IconList'

export default function Category({ data }) {
    const author = data.author

    return (
        <Layout>
            <TextContent>
                <Text component={TextVariants.h1}>{author.name}</Text>
                <Text>This is the page for {author.name}. They have {author.totaladdons} add-ons.</Text>
            </TextContent>
            <IconList items={author.addons} linkroot='/addons/' />
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
