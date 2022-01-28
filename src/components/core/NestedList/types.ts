export interface nestedOptionInterface {
  name: string;
  value: number;
}

export interface NestedListItem {
  label?: string;
  selected?: boolean;
  options?: nestedOptionInterface[];
  nestedItem?: NestedListItem[] | undefined;
}

export interface SelectionFn {
  (data: NestedListItem[]): void;
}

export interface OnItemSelectionFn {
  (e: React.ChangeEvent<HTMLInputElement>, selectedItem: NestedListItem): void;
}
