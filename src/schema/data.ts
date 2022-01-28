const options = Array.from(Array(10).keys(), (i) => {
  return { name: `${i + 1}`, value: i + 1 };
});

interface optionInterface {
  name: string;
  value: number;
}

interface ConfigItems {
  label?: string;
  selected?: boolean;
  options?: optionInterface[] | undefined;
  nestedItem?: ConfigItems[] | undefined;
}

interface config {
  [key: string]: ConfigItems[];
}

const configuration: config = {
  general: [
    {
      label: "case management",
      selected: true,
    },
    {
      label: "Map Timeline",
      selected: true,
    },
    {
      label: "Views and Briefing",
      selected: true,
      options: options,
    },
    {
      label: "Notifications",
      selected: false,
    },
    {
      label: "Mass Communication",
      selected: false,
    },
    {
      label: "Traffic Cameras",
      selected: false,
    },
  ],
  settings: [
    {
      label: "audit logs",
      selected: false,
    },
    {
      label: "users",
      selected: true,
      nestedItem: [
        {
          label: "Users Add",
          selected: true,
        },
        {
          label: "Users Delete",
          selected: true,
        },
        {
          label: "Users Edit",
          selected: true,
        },
        {
          label: "Max Users",
          selected: false,
          options: options,
        },
      ],
    },
  ],
  alerts: [
    {
      label: "Alert manager",
      selected: true,
      nestedItem: [
        {
          label: "Alert - 1",
          selected: true,
        },
      ],
    },
    {
      label: "Alert Rules",
      selected: false,
    },
  ],
};

export { configuration };
