import React from 'react'
import Layout from 'patternfly_components/Layout'
import Releases from 'src/components/Releases'
import {
    Split, SplitItem,
    Text, TextVariants, TextContent,
} from '@patternfly/react-core'
import { graphql, Link } from "gatsby"

export default function Distribution({ data }) {
    const dist = data.distribution

    return (
        <Layout>
            <Split>
                <SplitItem><img width='150' height='150' alt="" src={dist.icon} /></SplitItem>
                <SplitItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SplitItem>
                <SplitItem isFilled>
                    <TextContent>
                        <Text component={TextVariants.h1}>{dist.name}</Text>
                        <Text>If you need extra help, checkout our <Link to={dist.howto}>"How To" Guide</Link> for {dist.name}.</Text>
                    </TextContent>
                    <p>&nbsp;</p>
                    <ReleasesTabs releases={dist.releases} />
                </SplitItem>
            </Split>
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
