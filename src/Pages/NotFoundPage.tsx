import { Box, Typography } from "@mui/material";
import { textColor } from "../Config/colors";
import NotFoundCreature from "../Assets/NotFoundCreature.jpg";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      <Typography
        sx={{ color: textColor, fontSize: "2rem" }}
      >
        404
      </Typography>
      <Typography
        sx={{ color: textColor, fontSize: "1.5rem" }}
      >
        Page not found
      </Typography>
      <Box
        sx={{
          width: "clamp(10rem, 70%, 30rem)",
          aspectRatio: "1/1",
          backgroundImage: `url(${NotFoundCreature})`,
          backgroundSize: "cover",
          backgroundColor: "transparent",
          boxShadow: "0 0 10px 10px black inset",
          margin: "1rem",
        }}
      ></Box>
    </Box>
  );
};

export default NotFoundPage;
