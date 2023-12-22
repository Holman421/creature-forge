import React, { useEffect, useState } from "react";
import {
  Box,
  LinearProgress,
  IconButton,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import { mainGreen } from "../Config/colors";
import PlaceholderImage from "../Assets/PlaceholderImage.png";
import { AspectRatioValueType } from "../Types/types";
import GeneratedImageMessages from "./GeneratedImageMessages";

type GeneratedImageProps = {
  isLoading: boolean;
  imgUrl: string;
  aspectRatio: AspectRatioValueType;
};

const GeneratedImage: React.FC<GeneratedImageProps> = ({
  isLoading,
  imgUrl,
  aspectRatio,
}) => {
  const [currentAspectRatio, setCurrentAspectRatio] =
    useState<null | string>("1/1");

  const handleWidth = () => {
    if (currentAspectRatio === "9/16") {
      return "clamp(10rem, 80%, 25rem)";
    } else if (currentAspectRatio === "4/3") {
      return "clamp(10rem, 100%, 50rem)";
    } else if (currentAspectRatio === "16/9") {
      return "100%";
    } else if (currentAspectRatio === "1/1") {
      return "clamp(10rem, 100%, 40rem)";
    }
  };

  useEffect(() => {
    if (imgUrl || isLoading) {
      return;
    }
    setCurrentAspectRatio(aspectRatio);
  }, [imgUrl, aspectRatio]);

  useEffect(() => {
    if (isLoading) {
      setCurrentAspectRatio(aspectRatio);
    }
  }, [isLoading]);

  const downloadImg = () => {
    fetch(imgUrl, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(
            new Blob([buffer])
          );
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "creature.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        width: handleWidth(),
        aspectRatio: currentAspectRatio,
        border: `1px solid ${mainGreen}`,
        borderRadius: "5px",
        transition: imgUrl ? "" : "all 300ms ease",
        position: "relative",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      {!isLoading && (
        <img
          src={imgUrl || PlaceholderImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: imgUrl ? "cover" : "contain",
          }}
        />
      )}
      <GeneratedImageMessages active={isLoading} />
      <IconButton
        onClick={downloadImg}
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: imgUrl ? "block" : "none",
          color: "white",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.2)",
            backgroundColor: mainGreen,
          },
          backgroundColor: mainGreen,
          borderRadius: "5px",
          paddingBottom: "0",
        }}
      >
        <GetAppIcon />
      </IconButton>
      {isLoading && (
        <LinearProgress
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "10px",
            borderRadius: "0 0 5px 5px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: mainGreen,
            },
          }}
        />
      )}
    </Box>
  );
};

export default GeneratedImage;
