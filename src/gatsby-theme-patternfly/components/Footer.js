import React from 'react';
import {
    PageSection, PageSectionVariants,
    Gallery, GalleryItem,
} from '@patternfly/react-core';
import { H3 } from 'patternfly_components/Markdown'

const Footer = () => (
    <React.Fragment>
        <PageSection variant={PageSectionVariants.darker}>
        <div style={{'width': '80%', 'margin-left': '15%', 'margin-right': '5%`'}}>
            <Gallery hasGutter>
                <GalleryItem>
                    <H3>About</H3>
                    Get Involved<br />
                    GPL Violators<br />
                    Kodi Software<br />
                    Kodi Team<br />
                    Privacy Policy<br />
                    Sponsorship<br />
                    XBMC Foundation<br />
                </GalleryItem>
                <GalleryItem>
                    <H3>Sponsors</H3>
                    Acquia<br />
                    Bytemark<br />
                </GalleryItem>
                <GalleryItem>
                    <H3>Friends</H3>
                    Fanart.TV<br />
                    LibreELEC<br />
                    OSMC<br />
                    MusicBrainz.org<br />
                    TheAudioDB.com<br />
                    TheGamesDB.net<br />
                    TheMovieDB.org<br />
                    TheTVDB.com<br />
                </GalleryItem>
                <GalleryItem>
                    <H3>Social</H3>
                    Facebook<br />
                    Twitter<br />
                    Youtube<br />
                    Paypal<br />
                    RSS<br />
                </GalleryItem>
            </Gallery>
        </div>
        </PageSection>
    </React.Fragment>
);

export default Footer;
