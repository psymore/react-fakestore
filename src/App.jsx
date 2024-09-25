import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TabMenu from "./app/components/frameComponents/TabMenu";
import AllProducts from "./app/pages/AllProducts";
import References from "./app/pages/References";
import CategoryPage from "./config/categoryRouteConfig";
import useThemeStore from "./store/themeStore";

function App() {
  const { themeMode } = useThemeStore();

  const [categoryFromUrl, setCategoryFromUrl] = useState(null);

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Router>
        <Grid container sx={{ height: "100%" }}>
          {/* <Grid item xs={12}>
            <TopBar />
          </Grid> */}

          <Grid item xs={12}>
            <TabMenu
              categoryFromUrl={categoryFromUrl}
              setCategoryFromUrl={setCategoryFromUrl}
            />
          </Grid>

          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route
              path="/:category"
              element={
                <CategoryPage
                  categoryFromUrl={categoryFromUrl}
                  setCategoryFromUrl={setCategoryFromUrl}
                />
              }
            />
            <Route path="/about" element={<References />} />
          </Routes>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
