import React from "react";
import Cute from "../assets/Cute.jpg";
import Scary from "../assets/Scary.jpg";
import Weird from "../assets/Weird.jpg";
import Mechanical from "../assets/Mechanical.jpg";
import Tiny from "../assets/Tiny.jpg";
import Gigantic from "../assets/Gigantic.jpg";
import { Box } from "@mui/material";

type CarouselImageProps = {
  predefinedImage: number;
  currentImage: number;
  direction: 1 | -1;
};

const CarouselImage: React.FC<CarouselImageProps> = ({
  predefinedImage,
  currentImage,
  direction,
}) => {
  const shouldRender = predefinedImage === currentImage;

  const handleRenderImage = () => {
    switch (predefinedImage) {
      case 1:
        return Cute;
      case 2:
        return Scary;
      case 3:
        return Weird;
      case 4:
        return Mechanical;
      case 5:
        return Tiny;
      case 6:
        return Gigantic;
      default:
        return Cute;
    }
  };

  const renderBox = (
    animationName: string,
    delay: string
  ) => (
    <Box
      sx={{
        position: "absolute",
        display: shouldRender ? "block" : "none",
        width: "100%",
        aspectRatio: "1/1",
        backgroundImage: `url(${handleRenderImage()})`,
        backgroundSize: "cover",
        backgroundColor: "transparent",
        transform: "translateZ(-10px)",
        borderRadius: ".5rem",
        "@keyframes fade-left": {
          "0%": {
            scale: "1",
            translate: "0%",
            opacity: "1",
          },
          "100%": {
            scale: ".8",
            translate: "30%",
            opacity: "0",
          },
        },
        "@keyframes fade-right": {
          "0%": {
            scale: "1",
            translate: "0%",
            opacity: "1",
          },
          "100%": {
            scale: ".8",
            translate: "-30%",
            opacity: "0",
          },
        },
        animation: `${animationName} 3s linear infinite ${delay}`,
      }}
    ></Box>
  );

  return (
    <Box
      sx={{
        display: shouldRender ? "block" : "none",
        marginTop: "1rem",
        width: "clamp(15rem, 70%, 35rem)",
        aspectRatio: "1/1",
        backgroundImage: `url(${handleRenderImage()})`,
        backgroundSize: "cover",
        backgroundColor: "transparent",
        transformStyle: "preserve-3d",
        position: "relative",
        borderRadius: ".5rem",
        "@keyframes appearLeft": {
          "0%": {
            transform: "translateX(-100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: 1,
          },
        },
        "@keyframes appearRight": {
          "0%": {
            transform: "translateX(100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: 1,
          },
        },
        animation: `${
          direction !== 1 ? "appearLeft" : "appearRight"
        } 1s ease`,
      }}
    >
      {["0ms", "750ms", "1500ms", "2250ms"].map((delay) =>
        renderBox("fade-left", delay)
      )}
      {["0ms", "750ms", "1500ms", "2250ms"].map((delay) =>
        renderBox("fade-right", delay)
      )}
    </Box>
  );
};

export default CarouselImage;
