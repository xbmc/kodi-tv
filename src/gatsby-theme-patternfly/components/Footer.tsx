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
    <PageSection variant={PageSectionVariants.dark}>
      <Split hasGutter>
        <SplitItem>
          <img alt="" src="/images/kodi-logo-only.png" />
        </SplitItem>
        <SplitItem isFilled>
          Kodi is a free and open source media player application developed by the Kodi Foundation, a non-profit technology consortium. Kodi is available for multiple operating-systems and hardware platforms, featuring a 10-foot user interface for use with televisions and remote controls. It allows users to play and view most videos, music, podcasts, and other digital media files from local and network storage media and the internet.
        </SplitItem>        
      </Split>
    </PageSection>
    <PageSection variant={PageSectionVariants.darker}>
      <div style={{ width: "80%", marginLeft: "15%", marginRight: "5%" }}>
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
            <Link to={'/about/foundation'}>Kodi Foundation</Link><br />
          </GalleryItem>
          <GalleryItem>
            <TextContent>
              <Text component={TextVariants.h3}>Sponsors</Text>
            </TextContent>
            <a target="_blank" rel="noopener" href={'https://www.bytemark.co.uk/r/xbmc'}>Bytemark</a><br />
            <a target="_blank" rel="noopener" href={'https://flirc.tv'}>FLIRC</a><br />
            <a target="_blank" rel="noopener" href={'https://www.macminivault.com'}>Mac Mini Vault</a><br />
          </GalleryItem>
          <GalleryItem>
            <TextContent>
              <Text component={TextVariants.h3}>Social</Text>
            </TextContent>
            <a target="_blank" rel="noopener" href={'https://www.facebook.com/KodiEntertainment'}>Facebook</a><br />
            <a target="_blank" rel="noopener" href={'https://twitter.com/KodiTV'}>Twitter</a><br />
            <a target="_blank" rel="noopener" href={'https://www.youtube.com/user/teamxbmc'}>YouTube</a><br />
            <a target="_blank" rel="noopener" href={'https://feeds.kodi.tv/xbmc'}>RSS</a><br />
          </GalleryItem>
          <GalleryItem>
            <TextContent>
              <Text component={TextVariants.h3}>Friends</Text>
            </TextContent>
            <a target="_blank" rel="noopener" href={'https://fanart.tv'}>Fanart.TV</a><br />
            <a target="_blank" rel="noopener" href={'https://libreelec.tv'}>LibreELEC</a><br />
            <a target="_blank" rel="noopener" href={'https://osmc.tv'}>OSMC</a><br />
            <a target="_blank" rel="noopener" href={'https://musicbrainz.org'}>MusicBrainz.org</a><br />
            <a target="_blank" rel="noopener" href={'https://www.theaudiodb.com'}>TheAudioDB.com</a><br />
            <a target="_blank" rel="noopener" href={'https://thegamesdb.net'}>TheGamesDB.net</a><br />
            <a target="_blank" rel="noopener" href={'https://www.themoviedb.org'}>TheMovieDB.org</a><br />
            <a target="_blank" rel="noopener" href={'https://www.thetvdb.com'}>TheTVDB.com</a><br />
          </GalleryItem>
        </Gallery>
        <p /><br /><p />
        This web site is powered by <a target="_blank" rel="noopener" href={'https://www.netlify.com'}>Netlify</a>.
      </div>
    </PageSection>
  </React.Fragment>
)

export default Footer
