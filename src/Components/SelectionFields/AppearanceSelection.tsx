import React from "react";
import {
  AppearanceValueType,
  PrompType,
  PrompValueType,
  appearanceOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type AppearanceSelectionProps = {
  value: AppearanceValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const AppearanceSelection: React.FC<
  AppearanceSelectionProps
> = ({ value, handleSetPrompField }) => {
  return (
    <SingleSelectionContainer
      heading="Appearance"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as AppearanceValueType,
          "appearance"
        )
      }
      options={appearanceOptions}
    />
  );
};

export default AppearanceSelection;
