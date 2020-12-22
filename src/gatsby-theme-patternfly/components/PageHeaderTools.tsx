// override for Patteryfly 4

import React from "react"
import { PageHeaderTools, PageHeaderToolsItem } from "@patternfly/react-core"
import { SocialIcon } from "react-social-icons"

const HeaderPageHeaderTools = () => (
  <PageHeaderTools>
    <PageHeaderToolsItem>
      <SocialIcon
        url="http://www.facebook.com/KodiEntertainment"
        target="_blank" 
        rel="noopener" 
        bgColor="#a2a2a2"
        style={{ height: 30, width: 30 }}
      />
    </PageHeaderToolsItem>
    <PageHeaderToolsItem>
      <div style={{ paddingLeft: "3px" }}>
        <SocialIcon
          url="https://twitter.com/koditv"
          target="_blank" 
          rel="noopener" 
          bgColor="#a2a2a2"
          style={{ height: 30, width: 30 }}
        />
      </div>
    </PageHeaderToolsItem>
    <PageHeaderToolsItem>
      <div style={{ paddingLeft: "3px" }}>
        <SocialIcon
          url="https://www.youtube.com/c/TeamKodiOfficial"
          target="_blank" 
          rel="noopener" 
          bgColor="#a2a2a2"
          style={{ height: 30, width: 30 }}
        />
      </div>
    </PageHeaderToolsItem>
    <PageHeaderToolsItem>
      <div style={{ paddingLeft: "3px" }}>
        <SocialIcon
          url="https://github.com/xbmc"
          target="_blank" 
          rel="noopener" 
          bgColor="#a2a2a2"
          style={{ height: 30, width: 30 }}
        />
      </div>
    </PageHeaderToolsItem>
    <PageHeaderToolsItem>
      <div style={{ paddingLeft: "3px" }}>
        <SocialIcon
          url="http://feeds.kodi.tv/xbmc"
          target="_blank" 
          rel="noopener" 
          network="rss"
          bgColor="#a2a2a2"
          style={{ height: 30, width: 30 }}
        />
      </div>
    </PageHeaderToolsItem>
  </PageHeaderTools>
)

export default HeaderPageHeaderTools
