import React from "react";
import "./Dropdown.css";

import { optionInterface } from "./types";

interface DropdownProps {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  options: optionInterface[];
}

const Dropdown = ({ onChange, value, options }: DropdownProps) => {
  return (
    <label>
      <select value={value} onChange={onChange} className="component-dropdown">
        {options.map((option: optionInterface, index: number) => {
          return (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Dropdown;
