// CreatureForm.tsx
import React from "react";
import ColorSelection from "./SelectionFields/ColorSelection";
import SpecialFeatureSelection from "./SelectionFields/SpecialFeature";
import {
  PrompType,
  PrompValueType,
  SpecialFeatureValueType,
} from "../Types/types";
import SizeSelection from "./SelectionFields/SizeSelection";
import NumberOfCreaturesSelection from "./SelectionFields/NumberOfCreaturesSelection";
import LegsSelection from "./SelectionFields/LegsSelection";
import ArmsSelection from "./SelectionFields/ArmsSelection";
import DietSelection from "./SelectionFields/DietSelection";
import AppearanceSelection from "./SelectionFields/AppearanceSelection";
import HabitatSelection from "./SelectionFields/HabitatSelection";
import ArtStyleSelection from "./SelectionFields/ArtStyleSelection";
import AspectRatioSelection from "./SelectionFields/ResolutionSelection";
import CustomButton from "./CustomButton";

type CreatureGeneratorFormProps = {
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>
  ) => void;
  promptFields: PrompType;
  handleSetPrompField: (
    value: PrompValueType | SpecialFeatureValueType[],
    section: keyof PrompType
  ) => void;
};

const CreatureGeneratorForm: React.FC<
  CreatureGeneratorFormProps
> = ({
  handleSubmit,
  promptFields,
  handleSetPrompField,
}) => {
  // move all form-related state and functions here

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <SizeSelection
        value={promptFields.size}
        handleSetPrompField={handleSetPrompField}
      />
      <NumberOfCreaturesSelection
        value={promptFields.numberOfCreatures}
        handleSetPrompField={handleSetPrompField}
      />
      <LegsSelection
        value={promptFields.legs}
        handleSetPrompField={handleSetPrompField}
      />
      <ArmsSelection
        value={promptFields.arms}
        handleSetPrompField={handleSetPrompField}
      />
      <DietSelection
        value={promptFields.diet}
        handleSetPrompField={handleSetPrompField}
      />
      <HabitatSelection
        value={promptFields.habitat}
        handleSetPrompField={handleSetPrompField}
      />
      <AppearanceSelection
        value={promptFields.appearance}
        handleSetPrompField={handleSetPrompField}
      />
      <SpecialFeatureSelection
        value={promptFields.specialFeature}
        handleSetPrompField={handleSetPrompField}
      />
      <ColorSelection
        value={promptFields.color}
        handleSetPrompField={handleSetPrompField}
      />
      <ArtStyleSelection
        value={promptFields.artStyle}
        handleSetPrompField={handleSetPrompField}
      />
      <AspectRatioSelection
        value={promptFields.aspectRatio}
        handleSetPrompField={handleSetPrompField}
      />
      <CustomButton
        label="Generate Image"
        handleClick={() => {}}
        type="submit"
        margin="1.5rem auto 0 auto"
      />
    </form>
  );
};

export default CreatureGeneratorForm;
