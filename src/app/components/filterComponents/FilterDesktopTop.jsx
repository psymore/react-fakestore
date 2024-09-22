import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { PriceFilterMenu } from "./filterContent/PriceFilterMenu";
import { RatingFilterMenu } from "./filterContent/RatingFilterMenu";

export function FilterDesktopTop({
  products,
  setFilteredProducts,
  handleSwitchToLeftMenuFilter,
  FILTER_ALIGN,
}) {
  const themeFromLocalStorage = localStorage.getItem("themePreference");

  const [showPriceFilters, setShowPriceFilter] = useState(false);
  const [showRatingFilters, setShowRatingFilter] = useState(false);
  const handleTogglePriceFilter = () => {
    setShowPriceFilter(prev => !prev);
  };

  const handleToggleRatingFilter = () => {
    setShowRatingFilter(prev => !prev);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Stack
        spacing={2}
        // @ts-ignore
        direction={FILTER_ALIGN}>
        <Button sx={{ maxWidth: 2 }} onClick={handleTogglePriceFilter}>
          Price
        </Button>
        <PriceFilterMenu
          showPriceFilters={showPriceFilters}
          products={products}
          setFilteredProducts={setFilteredProducts}
          filterType={"topMenu"}
        />

        <Button sx={{ maxWidth: 2 }} onClick={handleToggleRatingFilter}>
          Rating
        </Button>
        <RatingFilterMenu
          showRatingFilters={showRatingFilters}
          products={products}
          setFilteredProducts={setFilteredProducts}
          filterType={"topMenu"}
        />
      </Stack>

      <Tooltip title="Switch to left menu filter" placement="top">
        <IconButton
          aria-label="delete"
          sx={{ height: 50, width: 50, mb: 5 }}
          onClick={handleSwitchToLeftMenuFilter}>
          <img
            src="https://img.icons8.com/?size=100&id=45407&format=png&color=000000"
            style={{
              background:
                themeFromLocalStorage === "dark" ? "#579dff" : "#deebfe",
              height: 30,
            }}
          />
        </IconButton>
      </Tooltip>

      {/* <Typography variant="body1" component="div" gutterBottom>
            {filteredProducts.length + " " + "items listed."}
          </Typography> */}
    </Stack>
  );
}
