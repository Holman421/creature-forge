import React, { useEffect } from "react";
import {
  PrompType,
  PrompValueType,
  SpecialFeatureValueType,
  specialFeatureOptions,
} from "../../Types/types";
import {
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import {
  darkerGreen,
  mainGreen,
  textColor,
} from "../../Config/colors";
import CheckIcon from "@mui/icons-material/Check";

type SpecialFeatureSelectionProps = {
  value: SpecialFeatureValueType[];
  handleSetPrompField: (
    value: PrompValueType | SpecialFeatureValueType[],
    section: keyof PrompType
  ) => void;
};

const SpecialFeatureSelection: React.FC<
  SpecialFeatureSelectionProps
> = ({ value, handleSetPrompField }) => {
  const [showError, setShowError] = React.useState(false);

  useEffect(() => {
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  }, [showError]);

  return (
    <Card
      sx={{
        padding: "1rem 2rem",
        marginTop: "1rem",
        backgroundColor: darkerGreen,
        border: `1px solid ${mainGreen}`,
        position: "relative",
        "@media (max-width: 600px)": {
          paddingTop: "2rem",
        },
      }}
    >
      {showError ? (
        <Typography
          sx={{
            display: "block",
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: "#ff3333",
            fontSize: ".8rem",
            animation: `${
              showError
                ? "shake 0.42s cubic-bezier(.36,.07,.19,.97) both"
                : ""
            }`,
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            perspective: "1000px",
            "@keyframes shake": {
              "0%": {
                transform:
                  "translate(1px, 1px) rotate(0deg)",
              },
              "10%": {
                transform:
                  "translate(-1px, -2px) rotate(-1deg)",
              },
              "20%": {
                transform:
                  "translate(-3px, 0px) rotate(1deg)",
              },
              "30%": {
                transform:
                  "translate(3px, 2px) rotate(0deg)",
              },
              "40%": {
                transform:
                  "translate(1px, -1px) rotate(1deg)",
              },
              "50%": {
                transform:
                  "translate(-1px, 2px) rotate(-1deg)",
              },
              "60%": {
                transform:
                  "translate(-3px, 1px) rotate(0deg)",
              },
              "70%": {
                transform:
                  "translate(3px, 1px) rotate(-1deg)",
              },
              "80%": {
                transform:
                  "translate(-1px, -1px) rotate(1deg)",
              },
              "90%": {
                transform:
                  "translate(1px, 2px) rotate(0deg)",
              },
              "100%": {
                transform:
                  "translate(1px, -2px) rotate(-1deg)",
              },
            },
          }}
        >
          Max 2 options allowed
        </Typography>
      ) : value.length > 0 ? (
        <CheckIcon
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: textColor,
          }}
        />
      ) : (
        <Typography
          sx={{
            display: "block",
            position: "absolute",
            top: ".5rem",
            right: "1rem",
            color: textColor,
            fontSize: ".8rem",
          }}
        >
          Multiple options allowed
        </Typography>
      )}
      <FormControl fullWidth>
        <Typography
          variant="h5"
          sx={{
            color: textColor,
            marginBottom: ".5rem",
          }}
        >
          Special features
        </Typography>

        <Grid container>
          {Object.entries(specialFeatureOptions).map(
            ([key, optionValue]) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                lg={3}
                key={key}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value?.includes(optionValue)}
                      onChange={(event) => {
                        if (event.target.checked) {
                          if (value.length >= 2) {
                            setShowError(true);
                            return;
                          }
                          handleSetPrompField(
                            [
                              ...value,
                              optionValue,
                            ] as SpecialFeatureValueType[],
                            "specialFeature"
                          );
                        } else {
                          setShowError(false);
                          handleSetPrompField(
                            value?.filter(
                              (item) => item !== optionValue
                            ),
                            "specialFeature"
                          );
                        }
                      }}
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
            )
          )}
        </Grid>
      </FormControl>
    </Card>
  );
};

export default SpecialFeatureSelection;
