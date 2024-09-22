// @ts-nocheck

import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../../../store/productStore";
import { customTheme } from "../../utils/nonDesktopMediaQuery";
import TabMenuMobile from "./TabMenuMobile";
import ThemeToggle from "./ThemeToggle";
import { CATEGORY_TAB_PARAM_CONFIG } from "../../../config/categoryTabParamConfig";

const TabMenu = ({ categoryFromUrl, setCategoryFromUrl }) => {
  console.log("categoryFromUrl ", categoryFromUrl);

  const theme = useTheme();
  const themeFromLocalStorage = localStorage.getItem("themePreference");

  const [tabValue, setTabValue] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isBrandNameVisibleDown = useMediaQuery(
    customTheme?.breakpoints.down("brandFlagDown")
  );
  const isBrandNameVisibleUp = useMediaQuery(
    customTheme?.breakpoints.up("brandFlagUp")
  );

  const { categories, fetchCategories } = useProductStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Prepare categories by adding "All Products" as the first tab.
  const prepareCategories = () => ["", ...categories];

  // Update tabValue based on the current categoryFromUrl
  // This part is mainly for preventing the tabValue error for the non-existing category value.
  useEffect(() => {
    const preparedCategories = prepareCategories();

    // Find the index of the categoryFromUrl in the preparedCategories array
    const newTabValue = preparedCategories.findIndex(
      category => category === categoryFromUrl
    );

    // Apply the tab value based on the URL or set the default tab
    if (newTabValue !== -1) {
      // If the categoryFromUrl is found in preparedCategories, set the tabValue to the corresponding index
      setTabValue(newTabValue);
    } else if (categoryFromUrl === "") {
      // If no category is provided in the URL, set the default tab
      setTabValue(CATEGORY_TAB_PARAM_CONFIG.default); // Set to default tab (e.g., "All Products")
    } else {
      // If the categoryFromUrl does not match any category, fallback to the first tab or a specific behavior
      setTabValue(0); // Default fallback to the first tab
    }
  }, [categoryFromUrl, prepareCategories, setTabValue]);

  const handleTabChange = (event, newValue) => {
    const preparedCategories = prepareCategories();

    if (newValue === 0) {
      setCategoryFromUrl("");
    } else {
      const selectedCategory = preparedCategories[newValue];
      setCategoryFromUrl(selectedCategory);
    }
    setTabValue(newValue);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(prev => !prev);
  };

  return (
    <Grid container>
      {isBrandNameVisibleDown && (
        <TabMenuMobile
          categoryFromUrl={categoryFromUrl}
          setCategoryFromUrl={setCategoryFromUrl}
          categories={categories}
          handleDrawerToggle={handleDrawerToggle}
          isDrawerOpen={isDrawerOpen}
          tabValue={tabValue}
          setTabValue={setTabValue}
        />
      )}

      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {isBrandNameVisibleDown && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                width: "35px",
                height: "35px",
              }}>
              <img
                src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000"
                alt="menu"
                style={{ width: "20px", height: "20px" }}
              />
            </IconButton>
          )}
          {(isBrandNameVisibleDown || isBrandNameVisibleUp) && (
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontStyle: "oblique",
                  fontFamily: "cursive",
                  fontWeight: "700",
                }}>
                fakestoreapi.com
              </Typography>
            </Box>
          )}

          {!isBrandNameVisibleDown && (
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                border: "none",
                ml: 4,
              }}>
              {prepareCategories()?.map((category, i) => (
                <Tab
                  key={i}
                  sx={{
                    textTransform: "uppercase",
                    ml: i === 0 ? 2 : 0,
                    border: "none",
                    outline: "none",
                  }}
                  component={Link}
                  to={`/${category}`}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {i === 0 ? "All Products" : category}
                    </Box>
                  }
                />
              ))}
            </Tabs>
          )}

          <Box>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default TabMenu;
