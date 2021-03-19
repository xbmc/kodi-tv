import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

interface Props {
  tabs: { name: string }[];
}

interface State {
  activeTab: any;
}

class Tabs extends React.Component<Props, State> {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab: any) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <nav className="tab-list flex flex-col sm:flex-row pb-4">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </nav>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
