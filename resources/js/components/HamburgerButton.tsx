// https://tailwindcomponents.com/component/animated-hamburger-menu-icon
/* eslint-disable react/jsx-props-no-spreading */

import React, { type ButtonHTMLAttributes } from "react";

interface ButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onToggle?: (isOpen: boolean) => void;
  isOpen: boolean;
}

const HamburgerButton: React.FC<ButtonWrapperProps> = ({
  onToggle,
  isOpen,
  ...props
}) => {
  const toggleOpen = (): void => {
    if (typeof onToggle !== "undefined") {
      onToggle(!isOpen);
    }
  };

  return (
    <button
      type="button"
      {...props}
      className={`relative group ${props.className}`}
      onClick={toggleOpen}>
      <div
        className={`relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8  ring-opacity-30 duration-200 shadow-md ${
          isOpen ? "group-focus:ring-4" : ""
        }`}>
        <div
          className={`transform transition-all duration-150 overflow-hidden -translate-y-5 ${
            isOpen ? "translate-y-3" : ""
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6h-6 w-6 animate-bounce text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
          <div
            className={`bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isOpen ? "translate-y-6" : ""
            }`}
          />
          <div
            className={`bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300  ${
              isOpen ? "translate-y-6 delay-75" : ""
            }`}
          />
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isOpen ? "translate-y-6 delay-100" : ""
            }`}
          />
        </div>
      </div>
    </button>
  );
};

HamburgerButton.defaultProps = {
  onToggle: undefined,
};

export default HamburgerButton;
