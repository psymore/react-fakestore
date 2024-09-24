import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0c1a23",
    },
    primary: {
      main: "#579dff",
      light: "#152a3d",
      dark: "#2a3d4e",
    },
    secondary: {
      main: "#2a3d4e",
      light: "#71baf2",
      dark: "#152a3d",
    },
    text: {
      primary: "#fff",
      secondary: "#dadada",
      disabled: "#4b4b4b",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          background: "#152a3d",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.secondary.light}`,
          backgroundColor: theme.palette.primary.dark,

          color: "#fff",
          ":focus": {
            outline: "none",
          },
          ":hover": {
            boxShadow: `0 0 12px ${theme.palette.secondary.light}`,
            color: theme.palette.secondary.light,
            background: theme.palette.primary.dark,
          },
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          ":focus": {
            outline: "none",
          },
          background: theme.palette.primary.main,
          border: `1px solid ${theme.palette.secondary.dark}`,
          ":hover": {
            boxShadow: `0 0 8px ${theme.palette.secondary.light}`,
            background: theme.palette.primary.main,
          },
        }),
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#152a3d",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: "#152a3d",
          color: "#fff",
          ":hover": {
            color: "#579dff",
          },
          "&.Mui-selected": {
            color: "#ffa500",
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "#152a3d",
          border: "1px solid #2a3d4e",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          ".MuiSlider-thumb": {
            color: "#579dff",
          },
          ".MuiSlider-rail": {
            color: "#ffa500",
          },
          ".MuiSlider-track": {
            color: "#579dff",
          },
          ".MuiSlider-valueLabel": {
            fontSize: 14,
            fontWeight: "normal",
            top: -6,
            backgroundColor: "unset",

            "&::before": {
              display: "none",
            },
            "& *": {
              background: "transparent",
            },
          },
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#1976d2",
      light: "#c2dafe",
    },
    secondary: {
      main: "#deebfe",
      light: "#333",
      contrastText: "#f50057",
    },
    text: {
      primary: "#333 ",
      secondary: "#4e4e4e",
      disabled: "#dedede",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#deebfe",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: "#deebfe",

          color: "#000",
          ":focus": {
            outline: "none",
          },
          ":hover": {
            boxShadow: "0 0 12px #71baf2",
            color: "#1976d2",
            background: "#deebfe",
          },
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          ":focus": {
            outline: "none",
          },
          background: theme.palette.primary.light,
          border: `1px solid ${theme.palette.secondary.dark}`,
          ":hover": {
            boxShadow: "0 0 12px #71baf2",
            color: "#ffa500",
            background: "#deebfe",
          },
        }),
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          "&.Mui-selected": {
            color: "#c2dafe",
          },
          "&.MuiTab-textColorPrimary.Mui-selected": {
            color: theme.palette.primary.main,
          },
        }),
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "#deebfe",
          color: "#000",
          ":hover": {
            color: "#1976d2",
          },
          ".Mui-selected": {
            color: "#1976d2",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#deebfe",
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
