import { Typography } from "@mui/material";

export default function TabMenuLink() {
  return (
    <Typography
      onClick={() => window.open("https://fakestoreapi.com/", "_blank")}
      noWrap
      component="div"
      sx={{
        fontSize: "16px",
        fontStyle: "oblique",
        fontFamily: "cursive",
        fontWeight: "700",
        whiteSpace: "nowrap",
        opacity: 1,

        "&:hover": {
          cursor: "pointer",
          textDecoration: "underline",
          opacity: 0.8,
        },
      }}>
      fakestoreapi.com
    </Typography>
  );
}
