import React from "react";

export default function ButtonStripe(props: {
  button_text: string | undefined;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.onClick}
      className="flex items-center justify-center px-8 py-3 mt-2 mb-3 border border-transparent text-base font-medium font-display rounded-xl shadow-xs text-gray-50 bg-kodi-darker transition-all duration-500 ease-out select-none hover:bg-kodi hover:shadow-glow hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-kodi/30 disabled:bg-gray-500 disabled:hover:translate-y-0 disabled:hover:bg-gray-500 disabled:hover:shadow-none"
    >
      <span>{props.button_text}</span>
    </button>
  );
}
