import { Box, Typography } from "@mui/material";
import LandingPageImg from "../assets/LandingpageImg.jpg";
import { useNavigate } from "react-router";
import CustomButton from "./CustomButton";
import { textColor } from "../Config/colors";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/creatureGenerator");
  };
  return (
    <Box
      sx={{
        minHeight: "70vh",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "2",
          margin: "11rem 0 0 10%",
          transition: "all 300ms ease",
          "@media (max-width: 1500px)": {
            margin: "11rem 0 0 2rem",
          },
          "@media (max-width: 800px)": {
            margin: "auto",
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: "10" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
              left: "1.5rem",
              color: textColor,
              maxWidth: "35rem",
              "@media (max-width: 800px)": {
                fontSize: "2.5rem",
                maxWidth: "30rem",
                padding: "0 1rem",
              },
              "@media (max-width: 500px)": {
                fontSize: "1.7rem",
                textAlign: "center",
              },
            }}
          >
            <Box
              component={"span"}
              sx={{ color: "#377475" }}
            >
              Forge
            </Box>{" "}
            illustrations of mystical{"  "}
            <Box
              component={"span"}
              sx={{ color: "#377475" }}
            >
              creatures
            </Box>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "1.2rem",
              marginTop: "1rem",
              color: "lightgray",
              fontWeight: "300",
              maxWidth: "40rem",
              "@media (max-width: 1500px)": {
                maxWidth: "27rem",
              },
              "@media (max-width: 500px)": {
                textAlign: "center",
                padding: "0 2rem",
              },
            }}
          >
            Generate AI images of animals for books,
            projects, or pure delight with unprecedented
            quality, speed, and style-consistency.
          </Typography>
        </Box>
        <CustomButton
          handleClick={handleClick}
          label={"Generate Creature"}
          margin={"2rem 0 0 0"}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            top: "-9rem",
            right: "6.5%",
            width: "clamp(25rem, 60%, 48rem)",
            aspectRatio: "1/1", // Set the aspect ratio
            backgroundImage: `url(${LandingPageImg})`,
            backgroundSize: "cover",
            backgroundColor: "transparent",
            boxShadow: "0 0 30px 30px black inset",
            transition: "all 300ms ease",
            "@media (max-width: 1500px)": {
              right: "2rem",
            },
            "@media (max-width: 1300px)": {
              right: "auto",
              top: "-6rem",
              left: "clamp(28rem, 20%, 12rem)",
            },
            "@media (max-width: 800px)": {
              position: "relative",
              left: "auto",
              top: "auto",
              margin: "2rem 0 5rem 0",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
