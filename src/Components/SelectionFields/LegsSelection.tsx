import React from "react";
import {
  LegsValueType,
  PrompType,
  PrompValueType,
  legsOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type LegsSelectionProps = {
  value: LegsValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const LegsSelection: React.FC<LegsSelectionProps> = ({
  value,
  handleSetPrompField,
}) => {
  return (
    <SingleSelectionContainer
      heading="Legs"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as LegsValueType,
          "legs"
        )
      }
      options={legsOptions}
    />
  );
};

export default LegsSelection;
