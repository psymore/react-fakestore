import { createTheme } from "@mui/material";

//custom theme breakpoints
const customBreakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1536,

  brandFlagDown: 1100,
  brandFlagUp: 1230,

  tablet: 768,
  desktop: 1120,
};
export const customTheme = createTheme({
  breakpoints: {
    values: customBreakpoints,
  },
});
