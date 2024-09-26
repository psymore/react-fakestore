// @ts-nocheck
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import { cubicBezier, motion } from "framer-motion";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import ControlledZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import useProductStore from "../../../store/productStore";
import { centerItemSx } from "../../utils/centerItemSx";
import { customTheme } from "../../utils/nonDesktopMediaQuery";
import Error from "../fallbackPages/Error";
import Loading from "../fallbackPages/Loading";
import { FilterDesktopLeft } from "../filterComponents/FilterDesktopLeft";
import { FilterDesktopTop } from "../filterComponents/FilterDesktopTop";
import MobileFilter from "../filterComponents/filterContent/MobileFilter";
import DetailDialog from "./DetailDialog";

const ProductsList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [leftMenuFilter, setLeftMenuFilter] = useState(false);
  const [topMenuFilter, setTopMenuFilter] = useState(true);
  const [openDialogProductId, setOpenDialogProductId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();
  const nonDesktop = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let FILTER_ALIGN = "row";
  if (nonDesktop) {
    FILTER_ALIGN = "column";
  } else {
    FILTER_ALIGN = "row";
  }

  useEffect(() => {
    if (loading === false) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleSwitchToLeftMenuFilter = () => {
    setLeftMenuFilter(true);
    setTopMenuFilter(false);
  };

  const handleSwitchToTopMenuFilter = () => {
    setLeftMenuFilter(false);
    setTopMenuFilter(true);
  };

  const { loading } = useProductStore();
  const { error } = useProductStore();

  const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);
  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        type: "spring",
        ease: easing,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.15, // Delay the fade-in of each item
        duration: 0.6, // Total duration of the animation
      },
    }),
  };

  const handleDetailDialogOpen = productId => {
    setOpenDialogProductId(productId);
  };

  const handleDetailDialogClose = () => {
    setOpenDialogProductId(null);
  };

  const handleDrawerToggle = useCallback(
    debounce(() => {
      setIsDrawerOpen(prevState => !prevState);
    }, 0),
    []
  );

  const isBrandNameVisibleDown = useMediaQuery(
    customTheme?.breakpoints.down("brandFlagDown")
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Grid container sx={{ pl: 2 }}>
      {isBrandNameVisibleDown && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              width: "35px",
              height: "35px",
            }}>
            <img
              src="https://img.icons8.com/?size=100&id=C65Ijuh6Ctvc&format=png&color=000000"
              alt="menu"
              style={{ width: "25px", height: "25px" }}
            />
          </IconButton>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={handleDrawerToggle}>
            <Typography
              sx={{
                cursor: "pointer",
                alignContent: "center",
                ml: 0.5,
                color: "#579dff",
                zIndex: 1500,
              }}>
              Filters
            </Typography>
          </Box>
        </Box>
      )}

      {topMenuFilter && !isBrandNameVisibleDown && (
        <FilterDesktopTop
          FILTER_ALIGN={FILTER_ALIGN}
          handleSwitchToLeftMenuFilter={handleSwitchToLeftMenuFilter}
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
      )}
      {leftMenuFilter && !isBrandNameVisibleDown && (
        <FilterDesktopLeft
          handleSwitchToTopMenuFilter={handleSwitchToTopMenuFilter}
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
      )}

      <MobileFilter
        isDrawerOpen={isDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        products={products}
        setFilteredProducts={setFilteredProducts}
        handleSwitchToTopMenuFilter={handleSwitchToTopMenuFilter}
      />

      <Grid
        item
        xs={leftMenuFilter ? 8 : 12}
        sm={leftMenuFilter ? 9 : 12}
        md={leftMenuFilter ? 9 : 12}
        lg={leftMenuFilter ? 10 : 12}
        xl={leftMenuFilter ? 10 : 12}
        sx={{ display: "flex" }}>
        <Grid container spacing={6} mb={6} padding={4}>
          {filteredProducts.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={4}
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                whileHover="hover"
                style={{ display: "flex", flex: 1 }}>
                <Paper
                  sx={{
                    background: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    border: "1px solid #71baf2",
                    padding: 5,
                    borderRadius: "16px",
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    ":hover": {
                      boxShadow: "0 0 12px #71baf2",
                    },
                  }}>
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}>
                    <ControlledZoom
                      // @ts-ignore
                      transitionDuration={0}>
                      <img
                        src={product.image}
                        className="logo"
                        alt={product.title}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "25vh",
                          objectFit: "cover",
                          borderRadius: "6px",
                          ...centerItemSx,
                        }}
                      />
                    </ControlledZoom>

                    <Stack sx={{ mt: 4 }}>
                      <Typography variant="h6" component="div" gutterBottom>
                        {product.title}
                      </Typography>
                      <Typography variant="body1" component="div" gutterBottom>
                        Price: ${product.price}
                      </Typography>
                      <Box mt={2} display={"flex"} alignItems={"center"}>
                        <Typography
                          mr={1}
                          variant="body2"
                          component="div"
                          display={"flex"}
                          alignItems={"center"}>
                          Rating:
                        </Typography>
                        <Rating
                          sx={{ display: "flex", alignItems: "center" }}
                          value={product.rating.rate}
                          readOnly
                          precision={0.1}
                        />
                        <Typography ml={1}>
                          ({product.rating.rate.toFixed(1)})
                        </Typography>
                      </Box>
                      <Typography variant="body2" component="div" mt={1}>
                        Stock: {product.rating.count}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Box
                    mt={2}
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "flex-end",
                    }}>
                    <Button
                      sx={{ textTransform: "none", fontSize: "1rem" }}
                      onClick={() => {
                        handleDetailDialogOpen(product.id);
                      }}>
                      Details
                    </Button>

                    {openDialogProductId === product.id && (
                      <DetailDialog
                        product={product}
                        detailDialogOpen={true}
                        setDetailDialogOpen={handleDetailDialogClose}
                      />
                    )}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsList;
