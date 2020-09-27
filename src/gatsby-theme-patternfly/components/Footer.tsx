import React from "react"
import {
  PageSection,
  PageSectionVariants,
  Gallery,
  GalleryItem,
  Split,
  SplitItem,
  TextContent,
  Text,
  TextVariants,
} from "@patternfly/react-core"
import { Link } from "gatsby"
        
const Footer = () => (
  <React.Fragment>
    <PageSection variant={PageSectionVariants.darker}>
      <Split hasGutter>
        <SplitItem>
          <img alt="" src="/images/kodi-logo-only.png" />
        </SplitItem>
        <SplitItem isFilled>
          Kodi (formerly XBMC) is a free and open source media player application developed by the XBMC/Kodi Foundation, a non-profit technology consortium. Kodi is available for multiple operating-systems and hardware platforms, featuring a 10-foot user interface for use with televisions and remote controls. It allows users to play and view most videos, music, podcasts, and other digital media files from local and network storage media and the internet.
        </SplitItem>
      </Split>
      <div style={{ width: "80%", paddingTop: "20px", marginLeft: "15%", marginRight: "5%" }}>
        <Gallery hasGutter>
          <GalleryItem>
            <TextContent>
              <Text component={TextVariants.h3}>About</Text>
            </TextContent>
            <Link to={'/about/contact'}>Contact Us</Link><br />
            <Link to={'/contribute'}>Get Involved</Link><br />
            <Link to={'/about/gpl-violators'}>GPL Violators</Link><br />
            <Link to={'/about/software'}>Kodi Software</Link><br />
            <Link to={'/about/team'}>Kodi Team</Link><br />
            <Link to={'/privacy-policy'}>Privacy Policy</Link><br />
            <Link to={'/about/sponsors'}>Sponsorship</Link><br />
            <Link to={'/about/foundation'}>XBMC Foundation</Link><br />
          </GalleryItem>
          <GalleryItem>
            <TextContent>
              <Text component={TextVariants.h3}>Sponsors</Text>
            </TextContent>
            <Link to={'https://www.acquia.com'}>Aquia</Link><br />
            <Link to={'https://www.bytemark.co.uk/r/xbmc'}>Bytemark</Link><br />
            <Link to={'https://flirc.tv'}>FLIRC</Link><br />
            <Link to={'https://www.macminivault.com'}>Mac Mini Vault</Link><br />
          </GalleryItem>
          <GalleryItem>
            <TextContent>
              <Text component={TextVariants.h3}>Social</Text>
            </TextContent>
            <Link to={'https://www.facebook.com/KodiEntertainment'}>Facebook</Link><br />
            <Link to={'https://twitter.com/KodiTV'}>Twitter</Link><br />
            <Link to={'https://www.youtube.com/user/teamxbmc'}>YouTube</Link><br />
            <Link to={'https://feeds.kodi.tv/xbmc'}>RSS</Link><br />
          </GalleryItem>
          <GalleryItem>
            <TextContent>
              <Text component={TextVariants.h3}>Friends</Text>
            </TextContent>
            <Link to={'https://fanart.tv'}>Fanart.TV</Link><br />
            <Link to={'https://libreelec.tv'}>LibreELEC</Link><br />
            <Link to={'https://osmc.tv'}>OSMC</Link><br />
            <Link to={'https://musicbrainz.org'}>MusicBrainz.org</Link><br />
            <Link to={'https://www.theaudiodb.com'}>TheAudioDB.com</Link><br />
            <Link to={'https://thegamesdb.net'}>TheGamesDB.net</Link><br />
            <Link to={'https://www.themoviedb.org'}>TheMovieDB.org</Link><br />
            <Link to={'https://www.thetvdb.com'}>TheTVDB.com</Link><br />
          </GalleryItem>
        </Gallery>
      </div>
    </PageSection>
  </React.Fragment>
)

export default Footer
