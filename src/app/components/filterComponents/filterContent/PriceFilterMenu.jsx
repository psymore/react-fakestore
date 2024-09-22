// @ts-nocheck
import Grow from "@mui/material/Grow";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { centerItemSx } from "../../../utils/centerItemSx";

export const PriceFilterMenu = ({
  showPriceFilters,
  products,
  setFilteredProducts,
  filterType,
  sx = {},
}) => {
  // Initialize priceRange from localStorage or use default
  const [priceRange, setPriceRange] = useState(() => {
    const savedRange = localStorage.getItem("priceRange");
    return savedRange ? JSON.parse(savedRange) : [0, 1000];
  });

  // Apply filters based on the saved price range when the component mounts
  useEffect(() => {
    const savedRange = localStorage.getItem("priceRange");
    if (savedRange) {
      const parsedRange = JSON.parse(savedRange);
      setPriceRange(parsedRange);

      const filtered = products.filter(
        product =>
          product.price >= parsedRange[0] && product.price <= parsedRange[1]
      );
      setFilteredProducts(filtered);
    }
  }, [products, setFilteredProducts]);

  // Function to handle price change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    localStorage.setItem("priceRange", JSON.stringify(newValue));

    // Filter products based on the price range
    const filtered = products.filter(
      product => product.price >= newValue[0] && product.price <= newValue[1]
    );
    setFilteredProducts(filtered);
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
