import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { centerItemSx } from "../../utils/centerItemSx";
import { PriceFilterMenu } from "./filterContent/PriceFilterMenu";
import { RatingFilterMenu } from "./filterContent/RatingFilterMenu";

export function FilterDesktopLeft({
  handleSwitchToTopMenuFilter,
  products,
  setFilteredProducts,
}) {
  const themeFromLocalStorage = localStorage.getItem("themePreference");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <IconButton
        aria-label="menu"
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          top: 10,
          left: 10,
        }}
        onClick={toggleDrawer(true)}>
        <img
          src="https://img.icons8.com/?size=100&id=12642&format=png&color=000000"
          style={{
            background:
              themeFromLocalStorage === "dark" ? "#579dff" : "#deebfe",
            height: 30,
          }}
        />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            padding: 2,
          },
        }}>
        <Stack direction="column">
          <Typography variant="body1" gutterBottom>
            Price
          </Typography>
          <PriceFilterMenu
            showPriceFilters={true}
            products={products}
            setFilteredProducts={setFilteredProducts}
            filterType={"leftMenu"}
          />

          <Divider sx={{ mt: 2, mb: 2 }} />

          <Typography variant="body1" gutterBottom>
            Rating
          </Typography>
          <RatingFilterMenu
            showRatingFilters={true}
            products={products}
            setFilteredProducts={setFilteredProducts}
            filterType={"leftMenu"}
          />
        </Stack>
      </Drawer>

      <Grid
        item
        xs={4}
        sm={3}
        md={3}
        lg={2}
        xl={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}>
        <Stack direction={"column"}>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Typography
              sx={{
                ...centerItemSx,
                alignSelf: "flex-end",
              }}
              variant="body1"
              component="div"
              gutterBottom>
              Price
            </Typography>

            <Tooltip title="Switch to top menu filter" placement="right-start">
              <IconButton
                aria-label="delete"
                sx={{ height: 50, width: 50, mb: 5 }}
                onClick={handleSwitchToTopMenuFilter}>
                <img
                  src="https://img.icons8.com/?size=100&id=12642&format=png&color=000000"
                  style={{
                    background:
                      themeFromLocalStorage === "dark" ? "#579dff" : "#deebfe",
                    height: 30,
                  }}
                />
              </IconButton>
            </Tooltip>
          </Stack>

          <PriceFilterMenu
            sx={{ mt: 2 }}
            showPriceFilters={true}
            products={products}
            setFilteredProducts={setFilteredProducts}
            filterType={"leftMenu"}
          />

          <Divider
            sx={{
              mt: 5,
              background: defaultTheme => defaultTheme.palette.secondary.dark,
            }}
          />

          <Typography
            sx={{
              display: "flex",
              mt: 5,
            }}
            variant="body1"
            component="div"
            gutterBottom>
            Rating
          </Typography>
          <RatingFilterMenu
            showRatingFilters={true}
            products={products}
            setFilteredProducts={setFilteredProducts}
            filterType={"leftMenu"}
          />
        </Stack>
      </Grid>
    </>
  );
}
