import { useEffect } from "react";
import useFilterStore from "../../store/filterStore";
import useProductStore from "../../store/productStore";
import ProductList from "../components/listComponents/ProductList";
import { applyFilter } from "../utils/applyFilter";

const WomenClothing = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();
  const { filters } = useFilterStore();

  const womenFilters = filters["women's clothing"];

  useEffect(() => {
    fetchProductsByCategory("women's clothing");
  }, []);

  const filteredProducts = applyFilter(categoryProducts, womenFilters);

  return <ProductList products={filteredProducts} />;
};

export default WomenClothing;
