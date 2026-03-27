import React, { useState } from "react";
import Tab from "./Tab";

interface Props {
  tabs: { name: string }[];
  children: any[];
}

function Tabs({ children }: Props) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

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
              onClick={setActiveTab}
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

export default Tabs;
