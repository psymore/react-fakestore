import { useEffect } from "react";
import useFilterStore from "../../store/filterStore";
import useProductStore from "../../store/productStore";
import ProductList from "../components/listComponents/ProductList";
import { applyFilter } from "../utils/applyFilter";

const Jewelry = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();
  const { filters } = useFilterStore();

  const jeweleryFilters = filters["jewelery"];

  useEffect(() => {
    fetchProductsByCategory("jewelery");
  }, []);

  const filteredProducts = applyFilter(categoryProducts, jeweleryFilters);

  return <ProductList products={filteredProducts} />;
};

export default Jewelry;
