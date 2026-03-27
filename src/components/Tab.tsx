import React, { Component } from "react";

interface Props {
  activeTab: string;
  label: string;
  onClick: (label: string) => void;
}

class Tab extends Component<Props> {

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className =
      "text-gray-600 pt-4 pb-2 px-6 block hover:text-blue-500 focus:outline-none";

    if (activeTab === label) {
      className += " text-blue-500 border-b-2 font-medium border-blue-500";
    }

    return (
      <button onClick={onClick} className={className}>
        {label}
      </button>
    );
  }
}

export default Tab;
