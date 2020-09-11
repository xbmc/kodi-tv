import React from 'react'
import Layout from 'patternfly_components/Layout'
import ItemWithComma from 'src/components/ItemWithComma'
import ConditionalTextListItem from 'src/components/ConditionalTextListItem'
import ConditionalSlideshow from 'src/components/ConditionalSlideshow'
import {
    Text, TextVariants, TextContent, TextList, TextListItem,
    List, ListItem, ListVariant,
    Split, SplitItem,
    Stack, StackItem
} from '@patternfly/react-core'
import WarningTriangleIcon from '@patternfly/react-icons/dist/js/icons/warning-triangle-icon'
import { graphql } from "gatsby"


export default function Addon({ data }) {
    const addon = data.addon
    var slides = []
    var authorlabel = 'Author'
    var categorylabel = 'Category'
    if (addon.authors.length > 1){
        authorlabel = 'Authors'
    }
    if (addon.categories.length > 1){
        categorylabel = 'Categories'
    }
    if (addon.screenshots != null) {
        addon.screenshots.forEach((screenshot) => {
            slides.push({'source': screenshot.localpath})
        })
    }

    return (
        <Layout>
            <Stack hasGutter>
                <StackItem>
                    <Split hasGutter>
                        <SplitItem><img width='150' height='150' alt="" src={addon.icon} /></SplitItem>
                        <SplitItem isFilled>
                            <Stack hasGutter>
                                <StackItem>
                                    <TextContent>
                                        <Text component={TextVariants.h1}>{addon.name}</Text>
                                        <Text>{addon.summary}</Text>
                                    </TextContent>
                                </StackItem>
                                <StackItem>
                                    <List variant={ListVariant.inline}>
                                        <ListItem>{addon.version}</ListItem>
                                        <ListItem>&bull;</ListItem>
                                        <ListItem>Last updated: {addon.lastupdate}</ListItem>                            
                                    </List>
                                    <TextContent id="authors">
                                        <TextList component="dl">
                                            <TextListItem component="dt">{authorlabel}</TextListItem>
                                            <TextListItem component="dd">
                                                {addon.authors.map((author, index) => {
                                                    return (<ItemWithComma description={author.name}
                                                                           url = {'/addons/author/' + author.slug}
                                                                           index={index}
                                                                           length={addon.authors.length - 1}
                                                            />)
                                                })}
                                            </TextListItem>
                                        </TextList>
                                    </TextContent>
                                </StackItem>
                            </Stack>
                        </SplitItem>
                    </Split>
                </StackItem>
                <StackItem>
                    <Split hasGutter>
                        <SplitItem><WarningTriangleIcon /></SplitItem>
                        <SplitItem isFilled>
                            To download this Add-On, we highly recommend you do it via the user interface in Kodi. Simply look for the "Get More" button in the Add-Ons menu. If you want to install it manually, you can direct download from the platforms link that matches your platform then in Kodi look for the "Install via Zip" option.
                        </SplitItem>
                    </Split>
                </StackItem>
                <StackItem>
                    <TextContent id="info" className="pf-u-py-xl">
                        <TextList component="dl">
                            <TextListItem component="dt">Description</TextListItem>
                            <TextListItem component="dd">{addon.description}</TextListItem>
                            <ConditionalTextListItem hide={addon.forum == null}
                                                     title={'Forum'}
                                                     description={addon.forum}
                                                     url={addon.forum} />
                            <ConditionalTextListItem hide={addon.website == null}
                                                     title={'Website'}
                                                     description={addon.website}
                                                     url={addon.website} />
                            <ConditionalTextListItem hide={addon.source == null}
                                                     title={'Source'}
                                                     description={addon.source}
                                                     url={addon.source} />
                            <TextListItem component="dt">License</TextListItem>
                            <TextListItem component="dd">{addon.license}</TextListItem>
                            <TextListItem component="dt">Platforms</TextListItem>
                            <TextListItem component="dd">
                                {addon.platforms.map((platform, index) => {
                                    return (<ItemWithComma description={platform.platform}
                                                           url = {platform.path}
                                                           index={index}
                                                           length={addon.platforms.length - 1}
                                            />)
                                })}
                            </TextListItem>
                            <TextListItem component="dt">Size</TextListItem>
                            <TextListItem component="dd">{addon.size}</TextListItem>
                            <TextListItem component="dt">{categorylabel}</TextListItem>
                            <TextListItem component="dd">
                                {addon.categories.map((category, index) => {
                                    return (<ItemWithComma description={category.name}
                                                           url = {'/addons/category/' + category.slug}
                                                           index={index}
                                                           length={addon.categories.length - 1}
                                            />)
                                })}
                            </TextListItem>
                        </TextList>
                    </TextContent>
                </StackItem>
                <StackItem>
                    <ConditionalSlideshow slides={slides} />
                </StackItem>
            </Stack>
        </Layout>
    )
}

export const query = graphql`
    query ($slug: String!) {
        addon(slug: { eq: $slug }) {
            addonid
            authors {
                icon
                name
                slug
            }
            banners {
                localpath
            }
            categories {
                icon
                name
                slug
            }
            clearlogos {
                localpath
            }
            description
            disclaimer
            fanarts {
                localpath
                remotepath
            }
            featured
            firstseen(formatString: "MMMM DD, YYYY")
            forum
            icon
            lastupdate(formatString: "MMMM DD, YYYY")
            license
            name
            news
            platforms {
                path
                platform
            }
            screenshots {
                localpath
            }
            size
            source
            summary
            version
            website
        }
    }
`
