import React from "react"
import {
  Text,
  TextVariants,
  TextContent,
  TextList,
  TextListItem,
  List,
  ListItem,
  ListVariant,
  Split,
  SplitItem,
  Stack,
  StackItem,
} from "@patternfly/react-core"
import WarningTriangleIcon from "@patternfly/react-icons/dist/js/icons/warning-triangle-icon"
import ConditionalSlideshow from "src/components/ConditionalSlideshow"
import ConditionalTextListItem from "src/components/ConditionalTextListItem"
import ItemWithComma from "src/components/ItemWithComma"
import Layout from "src/gatsby-theme-patternfly/components/Layout"
import { IAddon } from "src/addon"
import MetadataHeader from "src/components/SiteMetadata"

export default function AddonLayout({
  data,
}: {
  data: {
    addon: IAddon
  }
}) {
  const addon = data.addon
  let slides: { source: string }[] = []
  let authorlabel = "Author"
  let categorylabel = "Category"
  if (addon.authors.length > 1) {
    authorlabel = "Authors"
  }
  if (addon.categories.length > 1) {
    categorylabel = "Categories"
  }
  if (addon.screenshots != null) {
    addon.screenshots.forEach((screenshot: { localpath: string }) => {
      slides.push({ source: screenshot.localpath })
    })
  }

  return (
    <Layout>
      <MetadataHeader title={addon.name + ' | Add-On'} />
      <Stack hasGutter>
        <StackItem>
          <Split hasGutter>
            <SplitItem>
              <img width="150" height="150" alt="" src={addon.icon} />
            </SplitItem>
            <SplitItem isFilled>
              <Stack hasGutter>
                <StackItem>
                  <TextContent>
                    <Text component={TextVariants.h1}><div dangerouslySetInnerHTML={{ __html: addon.name }} /></Text>
                    <Text><div dangerouslySetInnerHTML={{ __html: addon.summary }} /></Text>
                  </TextContent>
                </StackItem>
                <StackItem>
                  <List variant={ListVariant.inline}>
                    <ListItem>&#128194; {addon.version}</ListItem>
                    <ListItem>&#128339; {addon.lastupdate}</ListItem>
                    <ListItem>&#128100;&nbsp;
                      {addon.authors.map(
                        (
                          author: { name: string; slug: string },
                          index: any
                        ) => {
                          return (
                            <ItemWithComma
                              description={author.name}
                              url={"../author/" + author.slug}
                              index={index}
                              length={addon.authors.length - 1}
                              linkType="internal"
                            />
                          )
                        }
                      )}
                    </ListItem>
                  </List>
                  <List variant={ListVariant.inline}>
                    <ListItem>&#127991;&nbsp;
                      {addon.categories.map(
                        (category: { name: string; slug: string }, index: any) => {
                          return (
                            <ItemWithComma
                              description={category.name}
                              url={"../category/" + category.slug}
                              index={index}
                              length={addon.categories.length - 1}
                              linkType="internal"
                            />
                          )
                        }
                      )}
                    </ListItem>
                  </List>
                </StackItem>
              </Stack>
            </SplitItem>
          </Split>
        </StackItem>
        <StackItem>
          <Split hasGutter>
            <SplitItem>
              <WarningTriangleIcon />
            </SplitItem>
            <SplitItem isFilled>
              To download this Add-On, we highly recommend you do it via the
              user interface in Kodi. Simply look for the "Get More" button in
              the Add-Ons menu. If you want to install it manually, you can
              direct download from the platforms link that matches your platform
              then in Kodi look for the "Install via Zip" option.
            </SplitItem>
          </Split>
        </StackItem>
        <StackItem>
          <TextContent id="info" className="pf-u-py-xl">
            <TextList component="dl">
              <TextListItem component="dt">Description</TextListItem>
              <TextListItem component="dd"><div dangerouslySetInnerHTML={{ __html: addon.description }} /></TextListItem>
              <ConditionalTextListItem
                hide={addon.forum == null}
                title={"Forum"}
                description={addon.forum}
                url={addon.forum}
              />
              <ConditionalTextListItem
                hide={addon.website == null}
                title={"Website"}
                description={addon.website}
                url={addon.website}
              />
              <ConditionalTextListItem
                hide={addon.source == null}
                title={"Source"}
                description={addon.source}
                url={addon.source}
              />
              <TextListItem component="dt">License</TextListItem>
              <TextListItem component="dd">{addon.license}</TextListItem>
              <TextListItem component="dt">Platforms</TextListItem>
              <TextListItem component="dd">
                {addon.platforms.map(
                  (
                    platform: { platform: string; path: string },
                    index: any
                  ) => {
                    return (
                      <ItemWithComma
                        description={platform.platform}
                        url={platform.path}
                        index={index}
                        length={addon.platforms.length - 1}
                        linkType="external"
                      />
                    )
                  }
                )}
              </TextListItem>
              <TextListItem component="dt">Size</TextListItem>
              <TextListItem component="dd">{addon.size}</TextListItem>
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
