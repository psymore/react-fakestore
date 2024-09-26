// @ts-nocheck
import Grow from "@mui/material/Grow";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useCategoryFromUrl from "../../../../config/categoryFinder";
import {
  getFiltersFromSessionStorage,
  initialFilterState,
  saveFiltersToSessionStorage,
} from "../../../../config/initialFilterValues";
import { centerItemSx } from "../../../utils/centerItemSx";

export const PriceFilterMenu = ({
  showPriceFilters,
  products,
  setFilteredProducts,
  filterType,
  sx = {},
}) => {
  const category = useCategoryFromUrl();
  const [filterState, setFilterState] = useState(initialFilterState);
  const [priceRange, setPriceRange] = useState(
    getFiltersFromSessionStorage()?.priceRange || [0, 1000]
  );
  const selectedPriceRange = filterState[category]?.priceRange;

  useEffect(() => {
    if (JSON.stringify(selectedPriceRange) === JSON.stringify([0, 1000])) {
      setFilteredProducts(products);
    } else if (selectedPriceRange) {
      const filtered = products
        .filter(
          product =>
            product.price >= selectedPriceRange[0] &&
            product.price <= selectedPriceRange[1]
        )
        .sort((a, b) => a.price - b.price);
      setFilteredProducts(filtered);
    }
  }, [selectedPriceRange, products, setFilteredProducts]);

  useEffect(() => {
    const savedFilters = getFiltersFromSessionStorage(category);
    setFilterState(prev => ({
      ...prev,
      [category]: savedFilters,
    }));
  }, [category]);

  useEffect(() => {
    saveFiltersToSessionStorage(category, filterState[category]);
  }, [filterState, category]);

  const handlePriceChange = (event, newPriceRange) => {
    setPriceRange(newPriceRange);
    setFilterState(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        priceRange: newPriceRange,
      },
    }));
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
