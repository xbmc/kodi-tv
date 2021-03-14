import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

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
      "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none";

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
