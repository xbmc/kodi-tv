import React from 'react'
import Layout from 'patternfly_components/Layout'
import Footer from 'src/gatsby-theme-patternfly/components/Footer'
import {
  PageSection, PageSectionVariants,
    TextContent, TextList, TextListItem,
    List, ListItem, ListVariant,
    Split, SplitItem,
} from '@patternfly/react-core'
import WarningTriangleIcon from '@patternfly/react-icons/dist/js/icons/warning-triangle-icon'
import { H1 } from 'patternfly_components/Markdown'
import { graphql, Link } from "gatsby"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function ConditionalItemWithLink(props) {
    if (!props.hide) {
        return null
    }
    return (
        <React.Fragment>
            <TextListItem component="dt">{props.title}</TextListItem>
            <TextListItem component="dd"><Link to={props.link}>{props.link}</Link></TextListItem>
        </React.Fragment>
    )
}

function ItemNameWithLink(props) {
    if (props.index === props.length) {
        return (
            <React.Fragment><Link to={props.url}>{props.description}</Link></React.Fragment>
        )
    } else {
        return (
            <React.Fragment><Link to={props.url}>{props.description}</Link>, </React.Fragment>
        )
    }
}

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
            <PageSection variant={PageSectionVariants.light} isFilled={true}>
                <Split>
                    <SplitItem><img width='150' height='150' alt="" src={addon.icon} /></SplitItem>
                    <SplitItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SplitItem>
                    <SplitItem isFilled>
                        <H1>{addon.name}</H1>
                        {addon.summary}
                        <p>&nbsp;</p>
                        <List variant={ListVariant.inline}>
                            <ListItem>{addon.version}</ListItem>
                            <ListItem>&bull;</ListItem>
                            <ListItem>Last updated: {addon.lastupdate}</ListItem>                            
                        </List>
                        <TextContent id="authors" className="pf-u-py-xl">
                            <TextList component="dl">
                                <TextListItem component="dt">{authorlabel}</TextListItem>
                                <TextListItem component="dd">
                                    {addon.authors.map((author, index) => {
                                        return (<ItemNameWithLink description={author.name}
                                                                  url = {'/addons/author/' + author.slug}
                                                                  index={index}
                                                                  length={addon.authors.length - 1}
                                                />)
                                    })}
                                </TextListItem>
                            </TextList>
                        </TextContent>
                        <p>&nbsp;</p>
                    </SplitItem>
                </Split>
                <p>&nbsp;</p>
                <Split>
                    <SplitItem><WarningTriangleIcon /></SplitItem>
                    <SplitItem>&nbsp;&nbsp;&nbsp;&nbsp;</SplitItem>
                    <SplitItem isFilled>
                        To download this Add-On, we highly recommend you do it via the user interface in Kodi. Simply look for the "Get More" button in the Add-Ons menu. If you want to install it manually, you can direct download from the platforms link that matches your platform then in Kodi look for the "Install via Zip" option.
                    </SplitItem>
                </Split>
                <p>&nbsp;</p>
                    <TextContent id="info" className="pf-u-py-xl">
                        <TextList component="dl">
                            <TextListItem component="dt">Description</TextListItem>
                            <TextListItem component="dd">{addon.description}</TextListItem>
                            <ConditionalItemWithLink hide={addon.forum != null} title={'Forum'} link={addon.forum} />
                            <ConditionalItemWithLink hide={addon.website != null} title={'Website'} link={addon.website} />
                            <ConditionalItemWithLink hide={addon.source != null} title={'Source'} link={addon.source} />
                            <TextListItem component="dt">License</TextListItem>
                            <TextListItem component="dd">{addon.license}</TextListItem>
                            <TextListItem component="dt">Platforms</TextListItem>
                            <TextListItem component="dd">
                                {addon.platforms.map((platform, index) => {
                                    return (<ItemNameWithLink description={platform.platform}
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
                                    return (<ItemNameWithLink description={category.name}
                                                              url = {'/addons/category/' + category.slug}
                                                              index={index}
                                                              length={addon.categories.length - 1}
                                            />)
                                })}
                            </TextListItem>
                        </TextList>
                    </TextContent>
                <p>&nbsp;</p>
                <div style={{'max-width': '800px'}}>
                    <AwesomeSlider media={slides} />
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </PageSection>
            <Footer />
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
