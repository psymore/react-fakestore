import { useEffect } from "react";
import useProductStore from "../../store/productStore";
import ProductList from "../components/listComponents/ProductList";

const WomenClothing = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("women's clothing");
  }, []);

  return <ProductList products={categoryProducts} />;
};

export default WomenClothing;
