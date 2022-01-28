import React from "react";
import "./Toggle.css";

import Dropdown from "../Dropdown";

interface ToggleDropdownOptions {
  name: string;
  value: number;
}

interface ToggleProps {
  label?: string;
  name?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler;
  listItems?: ToggleDropdownOptions[];
  leftIcon?: React.ReactNode;
}
const Toggle = ({
  name,
  label,
  checked,
  onChange,
  listItems,
  leftIcon,
}: ToggleProps) => {
  return (
    <div className="toggle-wrapper">
      <div>
        {leftIcon && <span className="icon-container">{leftIcon}</span>}
        <span className="toggle-label">{label}</span>
      </div>
      <div>
        {listItems && listItems.length > 0 && <Dropdown options={listItems} />}
        <label className="toggle">
          <input
            name={name}
            type="checkbox"
            onChange={onChange}
            checked={checked}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
