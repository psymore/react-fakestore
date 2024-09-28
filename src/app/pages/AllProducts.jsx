import { useEffect } from "react";
import useFilterStore from "../../store/filterStore";
import useProductStore from "../../store/productStore";
import ProductList from "../components/listComponents/ProductList";
import { applyFilter } from "../utils/applyFilter";

const Electronics = () => {
  const { products, fetchAllProducts } = useProductStore();
  const { filters } = useFilterStore(); // Get filters from Zustand

  const allProductsFilter = filters["all products"];

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const filteredProducts = applyFilter(products, allProductsFilter);

  return <ProductList products={filteredProducts} />;
};

export default Electronics;
