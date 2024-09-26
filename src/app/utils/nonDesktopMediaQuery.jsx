import { createTheme, useMediaQuery, useTheme } from "@mui/material";

export const useNonDesktop = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("lg"));
};

//custom theme breakpoints
const customBreakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1536,

  brandFlagDown: 1090,
  brandFlagUp: 1230,

  tablet: 768,
  desktop: 1120,
};
export const customTheme = createTheme({
  breakpoints: {
    values: customBreakpoints,
  },
});
