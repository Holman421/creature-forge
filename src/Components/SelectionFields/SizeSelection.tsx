import React from "react";
import {
  PrompType,
  PrompValueType,
  SizeValueType,
  sizeOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type SizeSelectionProps = {
  value: SizeValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const SizeSelection: React.FC<SizeSelectionProps> = ({
  value,
  handleSetPrompField,
}) => {
  return (
    <SingleSelectionContainer
      heading="Size"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as SizeValueType,
          "size"
        )
      }
      options={sizeOptions}
    />
  );
};

export default SizeSelection;
