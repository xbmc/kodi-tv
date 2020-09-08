import React from 'react'
import {
    TextContent, TextList, TextListItem,
    List, ListItem, ListVariant,
    Split, SplitItem,
    Modal,
    Button
} from '@patternfly/react-core'
import WarningTriangleIcon from '@patternfly/react-icons/dist/js/icons/warning-triangle-icon'
import { H1 } from 'patternfly_components/Markdown'
import { Link } from "gatsby"


function ConditionalTextListItem(props) {
    if (!props.hide) {
        return null
    }
    return (
        <React.Fragment>
            <TextListItem component="dt">{props.title}</TextListItem>
            <TextListItem component="dd"><Link to={props.link}>{props.link}</Link></TextListItem>
        </React.Fragment>
    )
}

function ItemNameWithLink(props) {
    if (props.index === props.length) {
        return (
            <React.Fragment><Link to={props.url}>{props.description}</Link></React.Fragment>
        )
    } else {
        return (
            <React.Fragment><Link to={props.url}>{props.description}</Link>, </React.Fragment>
        )
    }
}


class AddonModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.handleModalToggle = () => {
            this.setState(({ isModalOpen }) => ({
                isModalOpen: !isModalOpen
            }))
        }
    }

    render() {
        const { isModalOpen } = this.state;
        var addon = this.props.addon
        var authorlabel = 'Author'
        if (addon.icons == null) {
            addon.logo = '/images/kodi-logo.png'
        } else {
            addon.logo = addon.icons[0].localpath
        }
        if (addon.authors.length > 1){
            authorlabel = 'Authors'
        }

        const header = (
            <React.Fragment>
                <Split>
                    <SplitItem><img width='100' height='100' alt="" src={addon.icons[0].localpath} /></SplitItem>
                    <SplitItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SplitItem>
                    <SplitItem isFilled>
                        <H1 id="custom-header-label">{addon.longname}</H1>
                        <List variant={ListVariant.inline}>
                            <ListItem>{addon.version}</ListItem>
                            <ListItem>&bull;</ListItem>
                            <ListItem>Last updated: {addon.lastupdate}</ListItem>                            
                        </List>
                        <TextContent id="authors" className="pf-u-py-xl">
                            <TextList component="dl">
                                <TextListItem component="dt">{authorlabel}</TextListItem>
                                <TextListItem component="dd">
                                    {addon.authors.map((author, index) => {
                                        return (<ItemNameWithLink description={author.name}
                                                                  url = {'/addons/author/' + author.slug}
                                                                  index={index}
                                                                  length={addon.authors.length - 1}
                                                />)
                                    })}
                                </TextListItem>
                            </TextList>
                        </TextContent>
                    </SplitItem>
                </Split>
            </React.Fragment>
        );
        
        const footer = (
            <Split hasGutter>
                <SplitItem><WarningTriangleIcon /></SplitItem>
                <SplitItem>&nbsp;&nbsp;&nbsp;&nbsp;</SplitItem>
                <SplitItem isFilled>
                    <span className="pf-u-pl-sm">To download this Add-On, we highly recommend you do it via the user interface in Kodi. Simply look for the "Get More" button in the Add-Ons menu. If you want to install it manually, you can direct download from the platforms link that matches your platform then in Kodi look for the "Install via Zip" option.</span>
                </SplitItem>
            </Split>
        );
               
        return (
            <React.Fragment>
                <Button variant="link" isInline onClick={this.handleModalToggle}>
                    {addon.longname}
                </Button>
                <Modal
                    isOpen={isModalOpen}
                    header={header}
                    aria-label="My dialog"
                    aria-labelledby="custom-header-label"
                    aria-describedby="custom-header-description"
                    onClose={this.handleModalToggle}
                    footer={footer}
                >
                    <TextContent id="info" className="pf-u-py-xl">
                        <TextList component="dl">
                            <TextListItem component="dt">Description</TextListItem>
                            <TextListItem component="dd">{addon.description}</TextListItem>
                            <ConditionalTextListItem hide={addon.forum != null} title={'Forum'} link={addon.forum} />
                            <ConditionalTextListItem hide={addon.website != null} title={'Website'} link={addon.website} />
                            <ConditionalTextListItem hide={addon.source != null} title={'Source'} link={addon.source} />
                            <TextListItem component="dt">License</TextListItem>
                            <TextListItem component="dd">{addon.license}</TextListItem>
                            <TextListItem component="dt">Platforms</TextListItem>
                            <TextListItem component="dd">
                                {addon.platforms.map((platform, index) => {
                                    return (<ItemNameWithLink description={platform.platform}
                                                              url = {platform.path}
                                                              index={index}
                                                              length={addon.platforms.length - 1}
                                            />)
                                })}
                            </TextListItem>
                        </TextList>
                    </TextContent>
                </Modal>
            </React.Fragment>
        )
    }
}


export default AddonModal;