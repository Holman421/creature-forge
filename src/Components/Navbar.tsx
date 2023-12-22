import { Box, Typography } from "@mui/material";
import CustomLink from "./CustomLink";
import { mainGreen, textColor } from "../Config/colors";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box
      sx={{
        height: "5rem",
        width: "100%",
        "@media (max-width: 800px)": {
          height: "4rem",
        },
        "@media (max-width: 500px)": {
          height: isExpanded ? "8rem" : "4rem",
        },
        borderBottom: `2px solid ${mainGreen}`,
        boxSizing: "content-box",
        transition: "height 300ms ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "5rem",
          backgroundColor: "black",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 10% 0 0",
          width: "100%",
          transition: "height 300ms ease",
          "@media (max-width: 1500px)": {
            padding: "0 3rem 0 0",
          },
          "@media (max-width: 800px)": {
            height: "4rem",
          },
          "@media (max-width: 500px)": {
            flexDirection: "column",
            justifyContent: "normal",
            padding: "0",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            position: "absolute",
            color: textColor,
            fontWeight: "bold",
            left: "10%",
            transition: "all 300ms ease",
            "@media (max-width: 1500px)": {
              left: "2rem",
            },
            "@media (max-width: 800px)": {
              fontSize: "1.25rem",
            },
            "@media (max-width: 500px)": {
              top: "1.25rem",
              left: "50%",
              transform: "translateX(-50%)",
            },
            cursor: isLandingPage ? "auto" : "pointer",
          }}
          onClick={() => isLandingPage || navigate("/")}
        >
          Creature Forge
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            transition: "all 300ms ease",
            "@media (max-width: 500px)": {
              opacity: isExpanded ? "1" : "0",
              visibility: isExpanded ? "visible" : "hidden",
              flexDirection: "column",
              marginTop: "3.5rem",
              gap: ".5rem",
              alignItems: "center",
            },
          }}
        >
          <CustomLink label={"Home"} href={"/"} />
          <CustomLink
            label={"Creature generator"}
            href={"/creatureGenerator"}
          />
        </Box>
      </Box>
      <Box
        onClick={() => setIsExpanded(!isExpanded)}
        sx={{
          display: "none",
          "@media (max-width: 500px)": {
            display: "flex",
            position: "absolute",
            top: "1.25rem",
            right: "1.5rem",
            cursor: "pointer",
            width: "2rem",
            height: "1.25rem",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              "& > div": {
                backgroundColor: mainGreen,
              },
            },
          },
        }}
      >
        <Box
          sx={{
            width: isExpanded ? "80%" : "100%",
            borderRadius: ".25rem",
            height: "0.15rem",
            backgroundColor: "white",
            transformOrigin: "left",
            transform: isExpanded
              ? "rotate(45deg)"
              : "rotate(0)",
            msTransformOrigin: "left",
            transition: "all 0.3s ease-in-out",
          }}
        />
        <Box
          sx={{
            width: isExpanded ? "80%" : "100%",
            borderRadius: ".25rem",
            height: "0.15rem",
            backgroundColor: "white",
            opacity: isExpanded ? 0 : 1,
            transition: "all 0.3s ease-in-out",
          }}
        />
        <Box
          sx={{
            width: isExpanded ? "80%" : "100%",
            borderRadius: ".25rem",
            height: "0.15rem",
            backgroundColor: "white",
            transform: isExpanded
              ? "rotate(-45deg)"
              : "rotate(0)",
            transformOrigin: "left",
            transition: "all 0.3s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
