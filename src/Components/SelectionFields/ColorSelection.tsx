import React from "react";
import {
  ColorValueType,
  PrompType,
  PrompValueType,
  colorOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type ColorSelectionProps = {
  value: ColorValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const ColorSelection: React.FC<ColorSelectionProps> = ({
  value,
  handleSetPrompField,
}) => {
  return (
    <SingleSelectionContainer
      heading="Color"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as ColorValueType,
          "color"
        )
      }
      options={colorOptions}
    />
  );
};

export default ColorSelection;
