import React from 'react';
import {
    Tabs, Tab, TabTitleText,
    Stack, StackItem,
} from '@patternfly/react-core'
import { Description, DownloadLinks } from './ReleasesContent'

class ReleasesTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabKey: 0,
            isBox: true
        }
        // Toggle currently active tab
        this.handleTabClick = (event, tabIndex) => {
            this.setState({
                activeTabKey: tabIndex,
                isBox: true
            })
        }
    }

    render() {
        const releases = this.props.releases
        const {activeTabKey, isBox} = this.state;
        return (
            <div>
                <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} isBox={isBox}>
                    {releases.map((release, index) => {
                        return (
                            <Tab eventKey={index} title=<TabTitleText>{release.name}</TabTitleText>>
                                <Stack hasGutter>
                                    <StackItem>
                                        <div style={{'padding-top': '15px'}}>
                                        <Description description={release.description} release={release.id}/>
                                        </div>
                                    </StackItem>
                                    <StackItem>
                                        <DownloadLinks downloads={release.downloads} />
                                    </StackItem>
                                </Stack>
                            </Tab>
                         )
                    })}
                </Tabs>
            </div>
        );
    }
}

export default ReleasesTabs;