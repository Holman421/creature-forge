import React from "react";
import {
  HabitatValueType,
  PrompType,
  PrompValueType,
  habitatOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type HabitatSelectionProps = {
  value: HabitatValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const HabitatSelection: React.FC<HabitatSelectionProps> = ({
  value,
  handleSetPrompField,
}) => {
  return (
    <SingleSelectionContainer
      heading="Habitat"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as HabitatValueType,
          "habitat"
        )
      }
      options={habitatOptions}
    />
  );
};

export default HabitatSelection;
