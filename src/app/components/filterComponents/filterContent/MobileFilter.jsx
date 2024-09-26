import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FilterDesktopLeft } from "../FilterDesktopLeft";
import { PriceFilterMenu } from "./PriceFilterMenu";
import { RatingFilterMenu } from "./RatingFilterMenu";

export default function MobileFilter({
  isDrawerOpen,
  handleDrawerToggle,
  products,
  setFilteredProducts,
  handleSwitchToTopMenuFilter,
}) {
  const drawerContent = (
    <FilterDesktopLeft
      handleSwitchToTopMenuFilter={handleSwitchToTopMenuFilter}
      setFilteredProducts={setFilteredProducts}
      products={products}
    />
  );

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={handleDrawerToggle}
      content={drawerContent}
      sx={{
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
  );
}
