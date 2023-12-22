import React from "react";
import {
  NumberOfCreaturesValueType,
  PrompType,
  PrompValueType,
  numberOfCreaturesOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type NumberOfCreaturesSelectionProps = {
  value: NumberOfCreaturesValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const NumberOfCreaturesSelection: React.FC<
  NumberOfCreaturesSelectionProps
> = ({ value, handleSetPrompField }) => {
  return (
    <SingleSelectionContainer
      heading="Number of Creatures"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as NumberOfCreaturesValueType,
          "numberOfCreatures"
        )
      }
      options={numberOfCreaturesOptions}
    />
  );
};

export default NumberOfCreaturesSelection;
