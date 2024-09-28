import Grow from "@mui/material/Grow";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useCategoryFromUrl from "../../../../config/categoryFinder";
import useFilterStore from "../../../../store/filterStore";
import { centerItemSx } from "../../../utils/centerItemSx";

export const PriceFilterMenu = ({ showPriceFilters, filterType, sx = {} }) => {
  const category = useCategoryFromUrl();

  const { filters, setPriceRange } = useFilterStore();

  const priceRange = filters[category]?.priceRange;

  const handlePriceChange = (event, newPriceRange) => {
    setPriceRange(category, newPriceRange);
  };

  let DIRECTION;
  if (filterType === "leftMenu") {
    DIRECTION = "column";
  }
  if (filterType === "topMenu") {
    DIRECTION = "row";
  }

  return (
    <Stack direction={DIRECTION} spacing={2} sx={{ ...sx }}>
      {(filterType === "leftMenu" || showPriceFilters) && (
        <Typography variant="body2" sx={{ mb: 10, ...centerItemSx }}>
          {priceRange[0] + " $" + " - " + priceRange[1] + " $"}
        </Typography>
      )}
      {showPriceFilters && (
        <Grow in={showPriceFilters} style={{ transformOrigin: "0 0 0" }}>
          <Slider
            size="medium"
            value={priceRange}
            onChange={handlePriceChange}
            step={50}
            min={0}
            max={1000}
            sx={{
              width: 200,
              marginLeft: 2,
            }}
          />
        </Grow>
      )}
    </Stack>
  );
};
