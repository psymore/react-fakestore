import { useEffect } from "react";
import useFilterStore from "../../store/filterStore";
import useProductStore from "../../store/productStore";
import ProductList from "../components/listComponents/ProductList";
import { applyFilter } from "../utils/applyFilter";

const MenClothing = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();
  const { filters } = useFilterStore();

  const menFilters = filters["men's clothing"];

  useEffect(() => {
    fetchProductsByCategory("men's clothing");
  }, []);

  const filteredProducts = applyFilter(categoryProducts, menFilters);

  return <ProductList products={filteredProducts} />;
};

export default MenClothing;
