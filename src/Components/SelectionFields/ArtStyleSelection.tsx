import React from "react";
import {
  ArtStyleValueType,
  PrompType,
  PrompValueType,
  artStyleOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type ArtStyleSelectionProps = {
  value: ArtStyleValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const ArtStyleSelection: React.FC<
  ArtStyleSelectionProps
> = ({ value, handleSetPrompField }) => {
  return (
    <SingleSelectionContainer
      heading="Art Style"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as ArtStyleValueType,
          "artStyle"
        )
      }
      options={artStyleOptions}
    />
  );
};

export default ArtStyleSelection;
