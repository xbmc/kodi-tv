// override for Patteryfly 4

import React from 'react';
import {
    PageHeaderTools, PageHeaderToolsItem
} from '@patternfly/react-core';
import { SocialIcon } from 'node_modules/react-social-icons';

const HeaderPageHeaderTools = () => (
    <PageHeaderTools>
        <PageHeaderToolsItem>
            <SocialIcon url="http://www.facebook.com/KodiEntertainment" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
        </PageHeaderToolsItem>
        <PageHeaderToolsItem>
            <div style={{'padding-left': '3px'}}>
                <SocialIcon url="https://twitter.com/koditv" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
            </div>
        </PageHeaderToolsItem>
        <PageHeaderToolsItem>
            <div style={{'padding-left': '3px'}}>
                <SocialIcon url="https://www.youtube.com/c/TeamKodiOfficial" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
            </div>
        </PageHeaderToolsItem>
        <PageHeaderToolsItem>
            <div style={{'padding-left': '3px'}}>
                <SocialIcon url="https://github.com/xbmc" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
            </div>
        </PageHeaderToolsItem>
        <PageHeaderToolsItem>
            <div style={{'padding-left': '3px'}}>
                <SocialIcon url="http://feeds.kodi.tv/xbmc" network="rss" bgColor="#a2a2a2" style={{height: 30, width: 30}} />
            </div>
        </PageHeaderToolsItem>
    </PageHeaderTools>
);

export default HeaderPageHeaderTools;
