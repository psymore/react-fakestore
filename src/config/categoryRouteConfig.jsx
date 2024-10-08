import { useEffect } from "react";
import AllProducts from "../app/pages/AllProducts";
import Electronics from "../app/pages/Electronics";
import Jewelry from "../app/pages/Jewelry";
import MenClothing from "../app/pages/MenClothing";
import WomenClothing from "../app/pages/WomenClothing";
import useCategoryFromUrl from "./categoryFinder";

const CategoryPage = ({ categoryFromUrl, setCategoryFromUrl }) => {
  const category = useCategoryFromUrl();

  useEffect(() => {
    setCategoryFromUrl(category);
  }, [categoryFromUrl, setCategoryFromUrl]);

  switch (category) {
    case "jewelery":
      return <Jewelry />;
    case "men's clothing":
      return <MenClothing />;
    case "women's clothing":
      return <WomenClothing />;
    case "electronics":
      return <Electronics />;

    default:
      return <AllProducts />;
  }
};

export default CategoryPage;
