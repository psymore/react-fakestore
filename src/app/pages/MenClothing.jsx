import { useEffect } from "react";
import ProductList from "../components/listComponents/ProductList";
import useProductStore from "../../store/productStore";

const MenClothing = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("men's clothing");
  }, []);

  return <ProductList products={categoryProducts} />;
};

export default MenClothing;
