import React from 'react';
import {
    PageSection, PageSectionVariants,
    Level, LevelItem,
} from '@patternfly/react-core';
import { H3 } from 'patternfly_components/Markdown'

const Footer = () => (
    <React.Fragment>
        <PageSection variant={PageSectionVariants.dark}>
            <Level>
                <LevelItem>&nbsp;&nbsp;&nbsp;&nbsp;</LevelItem>
                <LevelItem>
                    <H3>About</H3>
                    Get Involved<br />
                    GPL Violators<br />
                    Kodi Software<br />
                    Kodi Team<br />
                    Privacy Policy<br />
                    Sponsorship<br />
                    XBMC Foundation<br />
                    &nbsp;<br />
                </LevelItem>
                <LevelItem>
                    <H3>Sponsors</H3>
                    Acquia<br />
                    Bytemark<br />
                    &nbsp;<br />
                    &nbsp;<br />
                    &nbsp;<br />
                    &nbsp;<br />
                    &nbsp;<br />
                    &nbsp;<br />
                </LevelItem>
                <LevelItem>
                    <H3>Friends</H3>
                    Fanart.TV<br />
                    LibreELEC<br />
                    OSMC<br />
                    MusicBrainz.org<br />
                    TheAudioDB.com<br />
                    TheGamesDB.net<br />
                    TheMovieDB.org<br />
                    TheTVDB.com<br />
                </LevelItem>
                <LevelItem>
                    <H3>Social</H3>
                    Facebook<br />
                    Twitter<br />
                    Youtube<br />
                    Paypal<br />
                    RSS<br />
                    &nbsp;<br />
                    &nbsp;<br />
                    &nbsp;<br />
                </LevelItem>
                <LevelItem>&nbsp;&nbsp;&nbsp;&nbsp;</LevelItem>
            </Level>
        </PageSection>
    </React.Fragment>
);

export default Footer;
