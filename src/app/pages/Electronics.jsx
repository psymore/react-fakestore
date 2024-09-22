import { useEffect } from "react";
import useProductStore from "../../store/productStore";
import ProductList from "../components/listComponents/ProductList";

const Electronics = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("electronics");
  }, []);

  return <ProductList products={categoryProducts} />;
};

export default Electronics;
