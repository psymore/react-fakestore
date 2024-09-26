import { useMediaQuery, useTheme } from "@mui/material";

export const useNonDesktop = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("lg"));
};
