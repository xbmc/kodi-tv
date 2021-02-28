import React from "react"
import {
  Text,
  TextContent,
  TextVariants,
  Stack,
  StackItem,
  Button,
} from "@patternfly/react-core"
import { Link } from "gatsby"

export function DownloadLinks(props: {
  downloads: { url: string | undefined; name: React.ReactNode }[] | null
}) {
  if (props.downloads === null) {
    return null
  }
  return (
    <React.Fragment>
      <TextContent>
        <Text component={TextVariants.h3}>Downloads</Text>
      </TextContent>
      <Stack hasGutter>
        {props.downloads.map(
          (
            download: { url: string | undefined; name: React.ReactNode },
            index: any
          ) => {
            return (
              <StackItem>
                <Button
                  component="a"
                  href={download.url}
                  target="_blank"
                  variant="primary"
                >
                  {download.name}
                </Button>
              </StackItem>
            )
          }
        )}
      </Stack>
    </React.Fragment>
  )
}
