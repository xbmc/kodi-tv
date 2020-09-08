import React from 'react'
import Layout from 'patternfly_components/Layout'
import Footer from 'src/gatsby-theme-patternfly/components/Footer'
import {
  PageSection, PageSectionVariants,
  Gallery, GalleryItem,
} from '@patternfly/react-core'
import { H1, Text } from 'patternfly_components/Markdown'
import { graphql } from "gatsby"
import AddonModal from 'src/components/AddonModal'

export default function Category({ data }) {
    const category = data.category

    return (
        <Layout>
            <PageSection variant={PageSectionVariants.light} isFilled={true}>
                <H1>{category.name}</H1>
                <Text>
                    This is the page for the {category.name} category. This category has {category.totaladdons} addons in it.
                </Text>
                <Gallery>
                    {category.addons.map(addon =>
                        <GalleryItem>
                            <div align="center">
                                <p>&nbsp;</p>
                                <img width='150' height='150' alt="" src={addon.icons[0].localpath} />
                                <div><AddonModal addon={addon}/></div>
                            </div>
                        </GalleryItem>
                    )}
                </Gallery>
            </PageSection>
            <Footer />
        </Layout>
    )
}


export const query = graphql`
    query($slug: String!) {
        category(slug: { eq: $slug }) {
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
