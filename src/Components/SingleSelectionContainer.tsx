import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
  Card,
  Typography,
} from "@mui/material";
import {
  darkerGreen,
  mainGreen,
  textColor,
} from "../Config/colors";
import CheckIcon from "@mui/icons-material/Check";

type SingleSelectionContainerProps = {
  heading: string;
  value: any;
  handleSetPrompField: any;
  options: any;
};

const SingleSelectionContainer: React.FC<
  SingleSelectionContainerProps
> = ({ heading, value, handleSetPrompField, options }) => {
  const displayInfoRightTopCorner = () => {
    if (value) {
      return (
        <CheckIcon
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: textColor,
          }}
        />
      );
    } else if (heading === "Size") {
      return (
        <Typography
          sx={{
            display: value ? "none" : "block",
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: textColor,
            fontSize: ".8rem",
          }}
        >
          *Reguired
        </Typography>
      );
    } else if (heading === "Special Feature") {
      return (
        <Typography
          sx={{
            display: value ? "none" : "block",
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: textColor,
            fontSize: ".8rem",
          }}
        >
          Multiple options allowed
        </Typography>
      );
    }
  };

  return (
    <Card
      sx={{
        padding: "1rem 2rem",
        marginTop: "1rem",
        backgroundColor: darkerGreen,
        border: `1px solid ${mainGreen}`,
        position: "relative",
      }}
    >
      {displayInfoRightTopCorner()}
      <FormControl fullWidth>
        <Typography
          variant="h5"
          sx={{
            color: textColor,
            marginBottom: ".5rem",
          }}
        >
          {heading}
        </Typography>

        <RadioGroup
          row
          value={value}
          onChange={handleSetPrompField}
        >
          <Grid container spacing={2}>
            {Object.entries(options).map(([key, value]) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                lg={3}
                key={key}
              >
                <FormControlLabel
                  value={value}
                  control={
                    <Radio
                      sx={{
                        "&, &.Mui-checked": {
                          color: mainGreen,
                        },
                      }}
                    />
                  }
                  label={key}
                  sx={{
                    "& > span": {
                      color: textColor,
                      // whiteSpace: "nowrap",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>
    </Card>
  );
};

export default SingleSelectionContainer;
