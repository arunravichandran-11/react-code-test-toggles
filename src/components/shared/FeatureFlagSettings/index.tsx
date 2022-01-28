import React from "react";
import "./FeatureConfig.scss";

import NestedList from "../../core/NestedList";
import { ConfigItemsInterface } from "../../../types";

interface updateConfigFn {
  (data: ConfigItemsInterface[]): void;
}

interface FeatureFlagProps {
  config: ConfigItemsInterface[];
  label?: string;
  onConfigUpdate?: updateConfigFn;
}

const FeatureFlagSettings = ({
  config,
  label,
  onConfigUpdate,
}: FeatureFlagProps) => {
  const [schema, setSchema] = React.useState<ConfigItemsInterface[]>(config);

  /**
   * This is a parent of all the rendered schema items.
   * Updates the component state to give the updated result to every component in a controlled way.
   * @param data | ConfigItemsInterface[]
   */
  const handleSelection = (data: ConfigItemsInterface[]) => {
    setSchema(data);
    if (onConfigUpdate) {
      onConfigUpdate(data);
    }
  };

  return (
    <div className="feature-configuration">
      <h5 className="title">{label}</h5>
      <NestedList items={schema} onSelection={handleSelection} />
    </div>
  );
};

export default FeatureFlagSettings;
