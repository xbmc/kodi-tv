import React from 'react'
import { SocialIcon } from "react-social-icons"
  
function Social (props) {
  return (
      <>
      <div class="w-8">
        <SocialIcon
          url="http://www.facebook.com/KodiEntertainment"
          target="_blank" 
          rel="noopener" 
          bgColor="#a2a2a2"
          style={{ height: 30, width: 30 }}
        />
      </div>
      <div class="w-8">
        <SocialIcon
          url="https://twitter.com/koditv"
          target="_blank" 
          rel="noopener" 
          bgColor="#a2a2a2"
          style={{ height: 30, width: 30 }}
        />
      </div>
      <div class="w-8">
        <SocialIcon
          url="https://www.youtube.com/c/TeamKodiOfficial"
          target="_blank" 
          rel="noopener" 
          bgColor="#a2a2a2"
          style={{ height: 30, width: 30 }}
        />
      </div>
      <div class="w-8">
        <SocialIcon
          url="https://github.com/xbmc"
          target="_blank" 
          rel="noopener" 
          bgColor="#a2a2a2"
          style={{ height: 30, width: 30 }}
        />
      </div>
      <div class="w-8">
        <SocialIcon
          url="/rss.xml"
          target="_blank" 
          rel="noopener" 
          network="rss"
          bgColor="#a2a2a2"
          style={{ height: 30, width: 30 }}
        />
      </div>
    </>
  )
}
  
export default Social
  