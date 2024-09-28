import { useEffect } from "react";
import useFilterStore from "../../store/filterStore";
import useProductStore from "../../store/productStore";
import ProductList from "../components/listComponents/ProductList";
import { applyFilter } from "../utils/applyFilter";

const Electronics = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();
  const { filters } = useFilterStore();

  const electronicsFilters = filters["electronics"];

  useEffect(() => {
    fetchProductsByCategory("electronics");
  }, []);

  const filteredProducts = applyFilter(categoryProducts, electronicsFilters);

  return <ProductList products={filteredProducts} />;
};

export default Electronics;
