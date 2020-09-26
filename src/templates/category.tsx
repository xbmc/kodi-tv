import React from 'react'
import Layout from 'patternfly_components/Layout'
import {
    Text, TextVariants, TextContent,
} from '@patternfly/react-core'
import { graphql } from "gatsby"
import IconList from 'src/components/IconList'

export default function Category({ data }) {
    const category = data.category

    return (
        <Layout>
            <TextContent>
                <Text component={TextVariants.h1}>{category.name}</Text>
                <Text>This category has {category.totaladdons} addons in it.</Text>
            </TextContent>
            <IconList items={category.addons} linkroot='/addons/' />
        </Layout>
    )
}


export const query = graphql`
    query($slug: String!) {
        category(slug: { eq: $slug }) {
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
