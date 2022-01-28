import React from "react";
import "./dropdown.css";

import Toggle from "../Toggle";
import { NestedListItem, OnItemSelectionFn } from "./types";

interface TogglerProps {
  className?: string;
  items?: NestedListItem[];
  onItemSelection: OnItemSelectionFn;
}
const Toggler = ({ className, items, onItemSelection }: TogglerProps) => {
  const [toggle, setToggle] = React.useState(false);

  /**
   * Toggles the state on click of arrow down and up button
   */
  const toggleChildHandler = () => {
    setToggle(!toggle);
  };

  /**
   * Callback of Core Toggle Component.
   * it updates the toggle state which user is clicking the arrow button in each toggle.
   * @param e {Event}
   * @param selectedItem {NestedListItem}
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedItem: NestedListItem
  ) => {
    if (selectedItem.nestedItem && selectedItem.nestedItem !== null) {
      setToggle(e.target.checked);
    }

    if (onItemSelection) {
      onItemSelection(e, selectedItem);
    }
  };

  /**
   * renders the Toggler in a recursive way to display the <Toggle /> component for deeply nested schemas.
   * @param item NestedListItem
   * @returns JSX
   */
  const renderNested = (item: NestedListItem) => {
    if (item.selected && toggle) {
      return (
        <ul className="nested-list">
          {
            <Toggler
              items={item.nestedItem}
              onItemSelection={onItemSelection}
            />
          }
        </ul>
      );
    }
    return null;
  };

  return (
    <div className={`toggler ${className}`}>
      {items &&
        items.length > 0 &&
        items.map((item, index) => {
          const { label, selected, options } = item;
          return (
            <React.Fragment key={index}>
              <li>
                <div style={{ display: "flex" }}>
                  <Toggle
                    name={label}
                    label={label}
                    checked={selected}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(e, item)
                    }
                    listItems={options ? options : []}
                  />
                  {item.nestedItem && item.nestedItem.length > 0 && (
                    <button
                      className="toggle-button"
                      onClick={toggleChildHandler}
                    >
                      <span>
                        <i className={`arrow ${toggle ? "up" : "down"}`}></i>
                      </span>
                    </button>
                  )}
                </div>
                {item.nestedItem && renderNested(item)}
              </li>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Toggler;
