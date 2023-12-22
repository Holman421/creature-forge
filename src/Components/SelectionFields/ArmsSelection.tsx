import React from "react";
import {
  ArmsValueType,
  PrompType,
  PrompValueType,
  armsOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type ArmsSelectionProps = {
  value: ArmsValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const ArmsSelection: React.FC<ArmsSelectionProps> = ({
  value,
  handleSetPrompField,
}) => {
  return (
    <SingleSelectionContainer
      heading="Arms"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as ArmsValueType,
          "arms"
        )
      }
      options={armsOptions}
    />
  );
};

export default ArmsSelection;
