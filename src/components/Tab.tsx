import React from "react";

interface Props {
  activeTab: string;
  label: string;
  onClick: (label: string) => void;
}

function Tab({ activeTab, label, onClick }: Props) {
  let className =
    "text-gray-500 pt-4 pb-2 px-6 block hover:text-kodi focus:outline-none transition-all duration-300 font-medium text-sm";

  if (activeTab === label) {
    className += " text-kodi-darker border-b-2 border-kodi-darker";
  }

  return (
    <button onClick={() => onClick(label)} className={className}>
      {label}
    </button>
  );
}

export default Tab;
