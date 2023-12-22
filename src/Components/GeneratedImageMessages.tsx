import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { mainGreen, textColor } from "../Config/colors";

const messages = [
  "Summoning the creativity spirits...",
  "Teaching pixels how to dance...",
  "Convincing the pixels to strike a pose...",
  "Assembling a dream team of colors...",
  "Whispering sweet nothings to the color palette...",
  "Encouraging the pixels to hold hands and form a masterpiece...",
  "Negotiating with the algorithm for that perfect shade of awesome...",
  "Apologizing to the pixels for any inconvenience during their rearrangement...",
  "Coaching the image to be more photogenic...",
  "In a heated debate with the color wheel about fashion trends...",
  "Checking if the pixels are camera-ready...",
  "Encouraging the bits and bytes to play nice with each other...",
  "Applying a virtual coat of inspiration paint...",
  "Sending the pixels to boot camp for discipline training...",
  "Inventing new shades of fabulousness...",
  "Conducting a symphony of colors and shapes...",
  "Negotiating with the background for its cooperation...",
  "Consulting with the digital muses for artistic guidance...",
  "Whipping up a potion for pixel perfection...",
  "Downloading the secrets of aesthetic appeal from the internet...",
  "Negotiating with shadows for their dramatic entrance...",
];

type GeneratedImageMessagesProps = {
  active: boolean;
};

const getRandomNumberInRange = (
  min: number,
  max: number
) => {
  return Math.random() * (max - min) + min;
};

const GeneratedImageMessages: React.FC<
  GeneratedImageMessagesProps
> = ({ active }) => {
  const [message, setMessage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (active) {
      const generateRandomMessage = () => {
        const randomIndex = Math.floor(
          Math.random() * messages.length
        );
        setMessage(messages[randomIndex]);

        const randomDuration = getRandomNumberInRange(
          2000,
          5000
        );
        const interval = 100;
        const steps = randomDuration / interval;

        setProgress(0);

        const id = setInterval(() => {
          setProgress((currentProgress) => {
            const newProgress =
              currentProgress + 100 / steps;

            if (newProgress >= 100) {
              clearInterval(id);
              generateRandomMessage(); // Generate a new message when progress reaches 100
            }

            return newProgress;
          });
        }, interval);

        intervalId.current = id;
      };

      generateRandomMessage();
    } else {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    };
  }, [active]);

  if (!active) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "10",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: textColor,
          textAlign: "center",
        }}
      >
        {message}
      </Typography>
      <Box
        sx={{
          width: `${progress}%`,
          height: ".5rem",
          background: mainGreen,
          transition: "width 100ms ease",
        }}
      />
    </Box>
  );
};

export default GeneratedImageMessages;
