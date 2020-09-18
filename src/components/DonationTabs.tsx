import React from 'react';
import {
  Button,
  Stack,
  StackItem,
  Tabs,
  Tab,
  TabTitleText,
  TextContent,
  Text,
  TextVariants,
} from '@patternfly/react-core'
import FormBitcoin from 'src/components/FormBitcoin'

class DonationTabs extends React.Component {
  constructor(private props: {releases: {name: string, id: string, downloads: {
    url: string | undefined;
    name: React.ReactNode;
  }[], description: string}[]}) {
    super(props);
    this.state = {
      activeTabKey: "1",
      isBox: false
    }
    // Toggle currently active tab
    this.handleTabClick = (event: any, tabIndex: any) => {
      this.setState({
        activeTabKey: tabIndex,
        isBox: false
      })
    }
  }

  render() {
    const releases = this.props.releases
    const {activeTabKey, isBox} = this.state;
    return (
      <div>
        <Tabs activeKey={activeTabKey} onSelect={this.handleTabClick} isBox={isBox}>
          <Tab eventKey="1" title=<TabTitleText>Patreon</TabTitleText>>
            <div style={{'paddingTop': '15px'}}>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.p}>
                    You can now <a href="https://patreon.com/teamkodi">support Team Kodi on Patreon</a>.
                  </Text>
                  <Text component={TextVariants.p}>
                    Patreon is a crowdfunding membership platform that provides tools for creators to run a subscription content service.
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem>
                <Button component="a" href="https://www.patreon.com/join/teamkodi/checkout?rid=3395480" target="_blank" variant="primary">
                  Join $10 Tier!
                </Button>
              </StackItem>
              <StackItem>
                <Button component="a" href="https://www.patreon.com/join/teamkodi/checkout?rid=3395485" target="_blank" variant="primary">
                  Join $25 Tier!
                </Button>
              </StackItem>
              <StackItem>
                <Button component="a" href="https://www.patreon.com/join/teamkodi/checkout?rid=3395486" target="_blank" variant="primary">
                  Join $50 Tier!
                </Button>
              </StackItem>
            </Stack>
            </div>
          </Tab>
          <Tab eventKey="liberapay" title=<TabTitleText>Liberapay</TabTitleText>>
            <div style={{'paddingTop': '15px'}}>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.p}>
                    You can now <a target="_blank" href="https://liberapay.com/teamkodi">support Team Kodi on Liberapay</a>.
                  </Text>
                  <Text component={TextVariants.p}>
                    Liberapay is a non-profit organization providing a platform to donate money to teams, organizations and individuals.
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem>
                <Button component="a" href="https://liberapay.com/teamkodi" target="_blank" variant="primary">
                  Donate via Liberapay
                </Button>
              </StackItem>
            </Stack>
            </div>
          </Tab>
          <Tab eventKey="bitcoin" title=<TabTitleText>Bitcoin</TabTitleText>>
            <div style={{'paddingTop': '15px'}}>
            <Stack hasGutter>
              <StackItem>
                <FormBitcoin />
              </StackItem>
            </Stack>
            </div>
          </Tab>
          <Tab eventKey="wiretransfer" title=<TabTitleText>Wire Transfer/IBAN</TabTitleText>>
            <div style={{'paddingTop': '15px'}}>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.p}>
                    <b>Wire transfers are available only in countries which is part of SEPA (Single Euro Payments Area).</b>
                  </Text>
                  <Text component={TextVariants.p}>
                    Wire transfer or credit transfer is a method of <a target="_blank" href="http://en.wikipedia.org/wiki/Electronic_funds_transfer">electronic funds transfer</a> from one person or institution (entity) to another. A wire transfer can be made from one bank account to another bank account or through a transfer of cash at a cash office.
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem>
                <Button component="a" href="/donate/by-wire-transfer" variant="primary">
                  Donate via Wire Transfer
                </Button>
              </StackItem>
            </Stack>
            </div>
          </Tab>
          <Tab eventKey="amazonsmile" title=<TabTitleText>Amazon Smile</TabTitleText>>
            <div style={{'paddingTop': '15px'}}>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.p}>
                    <b>Amazon Smile is available in the US only.</b>
                  </Text>
                  <Text component={TextVariants.p}>
                    Help donate to Team Kodi when shopping on Amazon by using our Amazon Smile link. For every purchase you make we receive a .5% donation to the our cause.
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem>
                <Button component="a" href="https://smile.amazon.com/ch/47-4565769" target="_blank" variant="primary">
                  Shop with Amazon Smile
                </Button>
              </StackItem>
            </Stack>
            </div>
          </Tab>
          <Tab eventKey="buymerch" title=<TabTitleText>Buy Kodi Merch</TabTitleText>>
            <div style={{'paddingTop': '15px'}}>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.p}>
                    Purchasing Kodi gear helps just as much as a donation, and you get something in return! Checkout our store for Kodi branded gear. We are regularly adding new products so check back often.
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem>
                <Button component="a" href="/contribute/store" variant="primary">
                  Buy Kodi Merch
                </Button>
              </StackItem>
            </Stack>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default DonationTabs;