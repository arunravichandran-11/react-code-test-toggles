export interface optionInterface {
  name: string;
  value: number;
}

export interface ConfigItemsInterface {
  label?: string;
  selected?: boolean;
  options?: optionInterface[];
  nestedItem?: ConfigItemsInterface[] | undefined;
}

export interface SiteConfigurationInterface {
  [key: string]: ConfigItemsInterface[];
}
