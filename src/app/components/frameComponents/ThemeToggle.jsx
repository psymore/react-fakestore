import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import useThemeStore from "../../../store/themeStore";
import { darkTheme } from "../../../themes";

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useThemeStore();

  const handleToggle = () => {
    toggleTheme(themeMode);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      transition: "transform 0.3s ease",

      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='4' stroke-linejoin='round'/%3E%3Cpath stroke-linecap='round' d='M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707'/%3E%3C/g%3E%3C/svg%3E")`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: themeMode === darkTheme ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: themeMode === darkTheme ? "#f6f6f6" : "#001e3c",
      width: 32,
      height: 32,
      transition: "background-color 0.3s ease",

      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='0.2' d='M12 21a9 9 0 0 0 8.997-9.252a7 7 0 0 1-10.371-8.643A9 9 0 0 0 12 21'/%3E%3C/svg%3E")`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <FormControlLabel
      control={
        <MaterialUISwitch
          sx={{ m: 1 }}
          checked={themeMode === darkTheme}
          onChange={handleToggle}
        />
      }
      label={themeMode === darkTheme ? "Light Mode" : "Dark Mode"}
      componentsProps={{ typography: { variant: "subtitle2" } }}
    />
  );
};

export default ThemeToggle;
