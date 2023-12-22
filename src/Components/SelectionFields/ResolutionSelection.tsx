import React from "react";
import {
  PrompType,
  PrompValueType,
  AspectRatioValueType,
  aspectRatioOptions,
} from "../../Types/types";
import SingleSelectionContainer from "../SingleSelectionContainer";

type AspectRatioSelectionProps = {
  value: AspectRatioValueType;
  handleSetPrompField: (
    value: PrompValueType,
    section: keyof PrompType
  ) => void;
};

const AspectRatioSelection: React.FC<
  AspectRatioSelectionProps
> = ({ value, handleSetPrompField }) => {
  return (
    <SingleSelectionContainer
      heading="AspectRatio"
      value={value}
      handleSetPrompField={(event: any) =>
        handleSetPrompField(
          event.target.value as AspectRatioValueType,
          "aspectRatio"
        )
      }
      options={aspectRatioOptions}
    />
  );
};

export default AspectRatioSelection;
