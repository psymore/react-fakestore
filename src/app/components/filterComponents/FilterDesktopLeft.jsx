import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { centerItemSx } from "../../utils/centerItemSx";
import { PriceFilterMenu } from "./filterContent/PriceFilterMenu";
import { RatingFilterMenu } from "./filterContent/RatingFilterMenu";

export function FilterDesktopLeft({
  handleSwitchToTopMenuFilter,
  products,
  setFilteredProducts,
}) {
  return (
    <>
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
                    backgroundColor: theme => theme.palette.primary.light,
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
            filterType="leftMenu"
          />
        </Stack>
      </Grid>
    </>
  );
}
