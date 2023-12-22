import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { textColor } from "../Config/colors";

type StopwatchCounterProps = {
  trigger: boolean;
};

const StopwatchCounter: React.FC<StopwatchCounterProps> = ({
  trigger,
}) => {
  const [time, setTime] = useState(0);
  const [isIntervalRunning, setIsIntervalRunning] =
    useState(false);

  useEffect(() => {
    if (trigger) {
      setIsIntervalRunning(true);
      setTime(0);
    } else {
      setIsIntervalRunning(false);
    }
  }, [trigger]);

  useEffect(() => {
    let interval: any = null;
    if (trigger) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!trigger) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [trigger]);

  const seconds = (
    "0" +
    (Math.floor(time / 1000) % 60)
  ).slice(-2);
  const milliseconds = ("0" + ((time / 10) % 100)).slice(
    -2
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: textColor,
          visibility: time ? "visible" : "hidden",
          opacity: time ? 1 : 0,
          fontSize: "1.1rem",
          margin: "1rem 0 .25rem 0",
        }}
      >
        {`${seconds}:${milliseconds} s`}
      </Typography>
      <Typography
        sx={{
          color: textColor,
          visibility: isIntervalRunning
            ? "visible"
            : "hidden",
          opacity: isIntervalRunning ? 1 : 0,
          fontSize: ".75rem",
          height: isIntervalRunning ? "1.5rem" : "0rem",
          transition: "all 300ms ease",
        }}
      >
        Usually takes 10-30 seconds
      </Typography>
    </Box>
  );
};

export default StopwatchCounter;
