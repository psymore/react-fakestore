// @ts-nocheck
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNonDesktop } from "../../../utils/nonDesktopMediaQuery";

export const RatingFilterMenu = ({
  showRatingFilters,
  products,
  setFilteredProducts,
  filterType,
}) => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = rating => {
    if (selectedRating === rating) {
      setSelectedRating(null);
      setFilteredProducts(products);
    } else {
      setSelectedRating(rating);
      const filtered = products
        .filter(product => product.rating.rate <= rating)
        .sort((a, b) => b.rating.rate - a.rating.rate);
      setFilteredProducts(filtered);
    }
  };

  const isNonDesktop = useNonDesktop();
  let DIRECTION = "column";

  if (filterType === "leftMenu") {
    DIRECTION = "column";
  }
  if (filterType === "topMenu") {
    isNonDesktop ? (DIRECTION = "column") : (DIRECTION = "row");
  }

  const selectedRatingCondition = star =>
    selectedRating === star && selectedRating !== null;

  return (
    <>
      {showRatingFilters && (
        <Stack direction={DIRECTION} spacing={2} sx={{ ml: 2 }}>
          {[5, 4, 3, 2, 1].map(star => (
            <Grow
              key={star}
              in={showRatingFilters}
              style={{ transformOrigin: "0 0 0" }}>
              <Button
                onClick={() => handleRatingClick(star)}
                sx={{
                  maxWidth: "100%",
                  overflow: "visible",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  color: theme => theme.palette.text.primary,

                  background: selectedRatingCondition(star)
                    ? defaultTheme => defaultTheme.palette.primary.light
                    : defaultTheme => defaultTheme.palette.secondary.main,

                  border: selectedRatingCondition(star)
                    ? defaultTheme =>
                        `1px solid ${defaultTheme.palette.primary.main}`
                    : defaultTheme =>
                        `1px solid ${defaultTheme.palette.secondary.main}`,

                  ":hover": {
                    boxShadow: "0 0 12px #71baf2",
                    background: selectedRatingCondition(star)
                      ? defaultTheme => defaultTheme.palette.secondary.main
                      : defaultTheme => defaultTheme.palette.primary.light,
                  },

                  ":focus:hover": {
                    background: selectedRatingCondition(star)
                      ? defaultTheme => defaultTheme.palette.text.disabled
                      : defaultTheme => defaultTheme.palette.primary.light,
                  },
                }}>
                <Rating
                  name={`rating-${star}`}
                  value={star}
                  readOnly
                  size="small"
                />
                <Typography
                  variant="body2"
                  sx={{ ml: 1, whiteSpace: "nowrap" }}>
                  and Below
                </Typography>
              </Button>
            </Grow>
          ))}
        </Stack>
      )}
    </>
  );
};
