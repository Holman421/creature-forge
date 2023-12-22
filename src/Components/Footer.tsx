import { Box, Typography } from "@mui/material";
import { mainGreen, textColor } from "../Config/colors";
import CustomLink from "./CustomLink";
import { useLocation } from "react-router";
import { ScrollToTop } from "../Utils/HelperFunctions/ScrollToTop";

const Footer = () => {
  const location = useLocation();

  const isHeroPage = location.pathname === "/";

  const isNotFoundPage =
    location.pathname !== "/" &&
    location.pathname !== "/creatureGenerator";

  if (isNotFoundPage) return null;

  return (
    <Box
      sx={{
        color: textColor,
        borderTop: `1px solid ${mainGreen}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        padding: "1.5rem",
        "@media (max-width: 450px)": {
          gap: "1rem",
          padding: "1.5rem 2rem",
          justifyContent: "space-between",
          "& > *": {
            fontSize: "0.8rem",
          },
        },
      }}
    >
      <Typography
        sx={{
          cursor: "pointer",
          position: "relative",

          "&::before": {
            content: '""',
            position: "absolute",
            left: "0",
            bottom: "-2px",
            width: "100%",
            height: "2px",
            background: textColor,
            transform: "scaleX(0)",
            transition: "transform 300ms ease",
          },
          "&:hover::before": {
            transform: "scaleX(1)",
          },
        }}
        onClick={ScrollToTop}
      >
        Go back to top
      </Typography>
      {isHeroPage && (
        <CustomLink
          label={"Generate Creature"}
          href={"creatureGenerator"}
        />
      )}
    </Box>
  );
};

export default Footer;
