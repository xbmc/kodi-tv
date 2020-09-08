import React from 'react';
import {
    Toolbar, ToolbarItem
} from '@patternfly/react-core';
import { SocialIcon } from 'node_modules/react-social-icons';

const HeaderToolbar = () => (
    <Toolbar>
        <ToolbarItem>
            <SocialIcon url="http://www.facebook.com/KodiEntertainment" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
        </ToolbarItem>
        <ToolbarItem>
            &nbsp;<SocialIcon url="https://twitter.com/koditv" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
        </ToolbarItem>
        <ToolbarItem>
            &nbsp;<SocialIcon url="https://www.youtube.com/c/TeamKodiOfficial" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
        </ToolbarItem>
        <ToolbarItem>
            &nbsp;<SocialIcon url="https://github.com/xbmc" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
        </ToolbarItem>
        <ToolbarItem>
            &nbsp;<SocialIcon url="http://feeds.kodi.tv/xbmc" network="rss" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
        </ToolbarItem>
    </Toolbar>
);

export default HeaderToolbar;
