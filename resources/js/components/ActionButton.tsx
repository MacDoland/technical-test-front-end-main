/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */

import React, { type ButtonHTMLAttributes } from "react";

type ButtonWrapperProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton: React.FC<ButtonWrapperProps> = props => {
  return (
    <button
      type="button"
      {...props}
      className={`text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:ring-slate-600 font-medium rounded-lg text-sm px-3 py-1.5 focus:outline-none ${props.className} `}>
      {props.children}
    </button>
  );
};

export default ActionButton;
