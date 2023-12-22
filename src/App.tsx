import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
import { Box } from "@mui/material";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default App;
