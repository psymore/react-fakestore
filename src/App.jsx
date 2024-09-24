import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TabMenu from "./app/components/frameComponents/TabMenu";
import TopBar from "./app/components/frameComponents/TopBar";
import AllProducts from "./app/pages/AllProducts";
import CategoryPage from "./config/categoryRouteConfig";
import useThemeStore from "./store/themeStore";
import Error from "./app/components/fallbackPages/Error";

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
            <Route path="/about" element={<Error />} />
          </Routes>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
