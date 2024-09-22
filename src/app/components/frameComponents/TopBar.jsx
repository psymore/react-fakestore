import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import { keyframes } from "@mui/system";
import ThemeToggle from "./ThemeToggle";

// Define the keyframes for the animation
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: "8vh" }}>
        <Toolbar sx={{ justifyContent: "space-between", overflow: "hidden" }}>
          <Typography
            sx={{
              p: 3,
              fontSize: "16px",
              fontStyle: "oblique",
              fontFamily: "cursive",
              fontWeight: "700",
              // whiteSpace: "nowrap", // Prevent text wrapping
              // animation: `${slideIn} 10s linear infinite`,
            }}>
            fakestoreapi.com
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
