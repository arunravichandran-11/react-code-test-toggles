import React from "react";
import ReactJson from "react-json-view";

import "./SiteConfiguration.scss";
import FeatureFlagSettings from "../../components/shared/FeatureFlagSettings";
import { configuration } from "../../schema/data";
import { SiteConfigurationInterface, ConfigItemsInterface } from "../../types";

/**
 * A component to load Site Configuration page where feature flag can be set.
 * @returns JSX
 */
const SiteConfiguration = () => {
  const [featureConfig, setFeatureConfig] =
    React.useState<SiteConfigurationInterface>(configuration);

  /**
   * Updates the form Schema with the toggle modified in UI.
   * @param config ConfigItemsInterface[]
   * @param field string
   */
  const handleConfigChange = (
    config: ConfigItemsInterface[],
    field: string
  ) => {
    setFeatureConfig({
      ...featureConfig,
      [field]: config,
    });
  };

  /**
   * It renders the feature flag wrapper components for each and every category of settings in the given schema
   * @param config | ConfigItemsInterface[] - value of each item in schema
   * @param type | string - Category of feature (ie., Key of each item in schema)
   * @returns
   */
  const renderFeatureFlagCategories = (
    config: ConfigItemsInterface[],
    type: string
  ) => {
    return (
      <div style={{ marginTop: 20 }}>
        <FeatureFlagSettings
          config={config}
          label={type}
          onConfigUpdate={(updatedConfig: ConfigItemsInterface[]) =>
            handleConfigChange(updatedConfig, type)
          }
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      <h2 className="heading">Feature Flag Configuration Panel</h2>
      <div className="site-configuration">
        <div>
          {featureConfig &&
            Object.keys(featureConfig).map((featureType: string) => {
              const type = featureType;
              const config = featureConfig[type];
              return (
                <React.Fragment key={type}>
                  {renderFeatureFlagCategories(config, type)}
                </React.Fragment>
              );
            })}
        </div>
        <div className="data-preview-container">
          <ReactJson
            name="schema"
            src={featureConfig}
            theme="solarized"
            iconStyle="square"
            // displayObjectSize={false}
            // displayDataTypes={false}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SiteConfiguration;
