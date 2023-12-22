import React from "react";
import {
  DietValueType,
  PrompType,
  PrompValueType,
  dietOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type DietSelectionProps = {
  value: DietValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const DietSelection: React.FC<DietSelectionProps> = ({
  value,
  handleSetPrompField,
}) => {
  return (
    <SingleSelectionContainer
      heading="Diet"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as DietValueType,
          "diet"
        )
      }
      options={dietOptions}
    />
  );
};

export default DietSelection;
