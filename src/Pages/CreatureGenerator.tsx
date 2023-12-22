import React, { useState, useEffect } from "react";
import { Typography, Box, Alert } from "@mui/material";
import {
  PrompType,
  PrompValueType,
  SpecialFeatureValueType,
} from "../Types/types";
import useGetLeonardoImage from "../Utils/CustomHooks/useGetLeonardoImage";
import { mainGreen, textColor } from "../Config/colors";
import useLocalStorage from "../Utils/CustomHooks/useLocalStorage";
import GeneratedImage from "../Components/GeneratedImage";
import { ScrollToBottom } from "../Utils/HelperFunctions/ScrollToBottom";
import StopwatchCounter from "../Components/StopwatchCounter";
import { ScrollToTop } from "../Utils/HelperFunctions/ScrollToTop";
import CreatureGeneratorForm from "../Components/CreatureGeneratorForm";
import LimitationsModal from "../Components/LimitationsModal";

const CreatureGenerator: React.FC = () => {
  const [promptFields, setPromptFields] =
    useState<PrompType>({
      numberOfCreatures: null,
      size: null,
      appearance: null,
      legs: null,
      arms: null,
      habitat: null,
      specialFeature: [],
      artStyle:
        "imbued with the dynamic and vibrant colors",
      color: null,
      diet: null,
      aspectRatio: "1/1",
    });

  const [errorMessage, setErrorMessage] = useState("");
  const [
    isLimitationsModalOpen,
    setIsLimitationsModalOpen,
  ] = useState(false);
  // const [
  //   isBuildingPromptModalOpen,
  //   setIsBuildingPromptModalOpen,
  // ] = useState(false);

  const { tokens, decreaseToken } = useLocalStorage();

  const [constructedPromp, setConstructedPromp] =
    useState<string>("");

  const {
    generatedImage: leonardoGeneratedImg,
    loading: leonardoLoading,
    generateImage: CreatureGenerator,
    resetImage: resetLeonardoImage,
  } = useGetLeonardoImage();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (leonardoLoading) {
      return;
    }

    if (tokens <= 0) {
      setErrorMessage("You don't have enough tokens");
    } else if (promptFields.size === null) {
      ScrollToTop();
      setErrorMessage(
        "Choose atleast one option in Size category"
      );
    } else {
      setErrorMessage("");
      resetLeonardoImage();
      CreatureGenerator(
        constructedPromp,
        promptFields.aspectRatio
      );
      decreaseToken();
      ScrollToBottom();
    }
  };

  const handleSetPrompField = (
    value: PrompValueType | SpecialFeatureValueType[],
    section: keyof PrompType
  ) => {
    if (section === "size") {
      setErrorMessage("");
    }

    setPromptFields((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const handleBuildPrompt = () => {
    const prompt: string[] = [];

    Object.entries(promptFields).forEach(([key, value]) => {
      if (key === "aspectRatio") {
        return;
      }
      if (key === "specialFeature") {
        const specialFeatureValue =
          value as SpecialFeatureValueType[];
        if (specialFeatureValue.length > 0) {
          prompt.push(`${specialFeatureValue.join()}, `);
        }
      } else if (value) {
        prompt.push(`${value} `);
      }
    });

    return prompt.join("");
  };

  useEffect(() => {
    setConstructedPromp(handleBuildPrompt());
  }, [promptFields]);

  return (
    <Box
      sx={{
        width: "clamp(15rem, 80%, 70rem)",
        margin: "3rem auto",
      }}
    >
      <Typography
        color={textColor}
        variant="h3"
        sx={{ marginBottom: "1rem" }}
      >
        Creature Generator
      </Typography>
      <Typography
        color={textColor}
        sx={{ marginBottom: "1rem" }}
      >
        You currently have{" "}
        <Box
          component={"span"}
          sx={{ color: mainGreen, fontSize: "1.5rem" }}
        >
          {tokens}
        </Box>{" "}
        tokens left
      </Typography>
      <Typography color={textColor}>
        Start by selecting one option in each section.
      </Typography>
      <Typography
        color={textColor}
        sx={{ marginBottom: "1.5rem" }}
      >
        It's not mandatory to select an option from every
        section, except for{" "}
        <Box component={"span"} sx={{ color: mainGreen }}>
          Size
        </Box>
        .
      </Typography>

      <Typography color={textColor}>
        Learn more about{" "}
        <Box
          component={"span"}
          sx={{
            color: mainGreen,
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => setIsLimitationsModalOpen(true)}
        >
          limitations
        </Box>{" "}
        of the generator.
      </Typography>
      {/* 
      <Typography color={textColor}>
        Learn more about{" "}
        <Box
          component={"span"}
          sx={{
            color: mainGreen,
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => setIsBuildingPromptModalOpen(true)}
        >
          building the prompt
        </Box>{" "}
        for AI generative model.
      </Typography> */}

      <LimitationsModal
        isOpen={isLimitationsModalOpen}
        handleClose={() => setIsLimitationsModalOpen(false)}
      />

      {/* <BuildingPromptModal
        isOpen={isBuildingPromptModalOpen}
        handleClose={() =>
          setIsBuildingPromptModalOpen(false)
        }
      /> */}

      {errorMessage && (
        <Alert
          severity="error"
          sx={{
            margin: "1rem  0 1.5rem 0",
            backgroundColor: textColor,
          }}
        >
          {errorMessage}
        </Alert>
      )}

      <CreatureGeneratorForm
        handleSubmit={handleSubmit}
        promptFields={promptFields}
        handleSetPrompField={handleSetPrompField}
      />

      <StopwatchCounter trigger={leonardoLoading} />

      <GeneratedImage
        isLoading={leonardoLoading}
        imgUrl={leonardoGeneratedImg}
        aspectRatio={promptFields.aspectRatio || "1/1"}
      />
    </Box>
  );
};

export default CreatureGenerator;
