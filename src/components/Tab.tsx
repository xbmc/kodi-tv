import React from "react";

interface Props {
  activeTab: string;
  label: string;
  onClick: (label: string) => void;
}

function Tab({ activeTab, label, onClick }: Props) {
  let className =
    "text-gray-600 pt-4 pb-2 px-6 block hover:text-blue-500 focus:outline-none";

  if (activeTab === label) {
    className += " text-blue-500 border-b-2 font-medium border-blue-500";
  }

  return (
    <button onClick={() => onClick(label)} className={className}>
      {label}
    </button>
  );
}

export default Tab;
