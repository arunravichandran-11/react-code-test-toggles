import React from "react";
import Toggler from "./Toggler";
import { SelectionFn, NestedListItem } from "./types";

interface NestedListProps {
  items: NestedListItem[];
  onSelection: SelectionFn;
}
const NestedList = ({ items, onSelection }: NestedListProps) => {
  /**
   * This method set all the nested toggled to be false during parent is set to false.
   * Method will be invoked only when parent is false.
   * @param item {NestedListItem[]}
   * @param parentSelectionStatus { boolean }
   */
  const setAllNestedOptionToFalse = (
    item: NestedListItem[],
    parentSelectionStatus: boolean
  ) => {
    if (item) {
      item.forEach((option: NestedListItem) => {
        option.selected = parentSelectionStatus;

        if (option.nestedItem) {
          setAllNestedOptionToFalse(option.nestedItem, parentSelectionStatus);
        }
      });
    }
  };

  /**
   * This updates the schema object with value selected in UI.
   * @param allItem {NestedListItem[]} Entire Schema of form
   * @param selectedItem {NestedListItem} Selected toggle item
   * @param value {boolean} selection status whether toggle is on or off
   */
  const updateSchema = (
    allItem: NestedListItem[],
    selectedItem: NestedListItem,
    value: boolean
  ) => {
    allItem.forEach((i: NestedListItem) => {
      if (i.label === selectedItem.label) {
        i.selected = value;
        if (i.nestedItem && !i.selected) {
          setAllNestedOptionToFalse(i.nestedItem, i.selected);
        }
      } else {
        if (i.nestedItem) {
          updateSchema(i.nestedItem, selectedItem, value);
        }
      }
    });
  };

  const getUpdatedCopy = (selectedItem: NestedListItem, value: boolean) => {
    const closedSchema = JSON.parse(JSON.stringify(items));
    updateSchema(closedSchema, selectedItem, value);
    return closedSchema;
  };

  /**
   * Passes the updated Schema object based on UI selection to it's parent component.
   * @param e {Event}
   * @param selectedItem {NestedListItem}
   */
  const handleSelection = (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedItem: NestedListItem
  ) => {
    const { checked } = e.target;
    if (items) {
      const updatedSchema = getUpdatedCopy(selectedItem, checked);
      onSelection(updatedSchema);
    }
  };

  return <Toggler items={items} onItemSelection={handleSelection} />;
};

export default NestedList;
