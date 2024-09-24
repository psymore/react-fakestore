import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toCamelCase } from "../../utils/toCamelCase";
import TabMenuLink from "../tabMenuLink";

export default function TabMenuMobile({
  categories,
  handleDrawerToggle,
  isDrawerOpen,
  tabValue,
  setTabValue,
  categoryFromUrl,
  setCategoryFromUrl,
}) {
  const drawerWidth = 240;

  // Prepare categories with "All Products" as the first option
  const prepareCategories = () => ["", ...categories];

  // Ensure the `tabValue` is updated when `categoryFromUrl` changes
  useEffect(() => {
    const preparedCategories = prepareCategories();
    const newTabValue = preparedCategories.findIndex(
      category => category === categoryFromUrl
    );

    if (newTabValue !== -1) {
      setTabValue(newTabValue);
    } else {
      setTabValue(0); // Default to All Products if not found
    }
  }, [categoryFromUrl]);

  const handleCategoryClick = newValue => {
    const preparedCategories = prepareCategories();

    if (newValue === 0) {
      setCategoryFromUrl("");
    } else {
      const selectedCategory = preparedCategories[newValue];
      setCategoryFromUrl(selectedCategory);
    }
    setTabValue(newValue);

    setTabValue(newValue);
    handleDrawerToggle();
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      <AppBar position="static" sx={{ background: "#152a3b" }}>
        <Toolbar>
          <IconButton onClick={handleDrawerToggle} sx={{ mr: 1 }}>
            <img
              src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000"
              style={{ width: "20px", height: "20px" }}
              alt="menu"
            />
          </IconButton>
          <TabMenuLink />
        </Toolbar>
      </AppBar>
      <List>
        <ListItemButton
          component={Link}
          to="/"
          selected={tabValue === 0}
          onClick={() => handleCategoryClick(0)}
          sx={{
            color: theme => theme.palette.text.primary,
            ":hover": {
              background: theme => theme.palette.primary.light,
            },
            "&.Mui-selected": {
              backgroundColor: theme => theme.palette.primary.light,
            },
          }}>
          <ListItemText primary="All Products" />
        </ListItemButton>

        {categories?.map((category, i) => (
          <ListItemButton
            key={i}
            component={Link}
            selected={tabValue === i + 1} // Adjust to match the correct index for each category
            to={`/${category}`}
            onClick={() => handleCategoryClick(i + 1)} // i + 1 because "All Products" is at index 0
            sx={{
              color: theme => theme.palette.text.primary,
              ":hover": {
                background: theme => theme.palette.primary.light,
              },
              "&.Mui-selected": {
                backgroundColor: theme => theme.palette.primary.light,
              },
            }}>
            <ListItemText primary={toCamelCase(category)} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: theme => theme.palette.background.default,
          },
        }}>
        {drawerContent}
      </Drawer>
    </Box>
  );
}
