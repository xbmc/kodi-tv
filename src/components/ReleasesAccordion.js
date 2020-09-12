import React from 'react';
import {
    Accordion, AccordionItem, AccordionContent, AccordionToggle,
    Text, TextVariants, TextContent,
    Stack, StackItem,
} from '@patternfly/react-core'
import { Description, DownloadLinks } from './ReleasesContent'


class ReleasesAccordian extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.releases[0].name
        };
    }

    render() {
        const releases = this.props.releases
        const onToggle = id => {
            if (id === this.state.expanded) {
                this.setState({expanded: ''});
            } else {
                this.setState({expanded: id })
            }
        };
        return (
            <Accordion asDefinitionList>
                {releases.map((release, index) => {
                    return (
                        <AccordionItem>
                            <AccordionToggle
                                onClick={() => {onToggle(release.name)}}
                                isExpanded={this.state.expanded === release.id}
                                id={release.id}
                            >
                                <TextContent><Text component={TextVariants.h2}>{release.name}</Text></TextContent>
                            </AccordionToggle>
                            <AccordionContent
                                id={release.id}
                                isHidden={this.state.expanded !== release.name}
                            >
                                <Stack hasGutter>
                                    <StackItem>
                                        <Description description={release.description} release={release.id}/>
                                    </StackItem>
                                    <StackItem>
                                        <DownloadLinks downloads={release.downloads} />
                                    </StackItem>
                                </Stack>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        );
    }
}

export default ReleasesAccordian;