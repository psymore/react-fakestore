import { useEffect } from "react";
import useProductStore from "../../store/productStore";
import ProductList from "../components/listComponents/ProductList";

const Jewelry = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("jewelery");
  }, []);

  return <ProductList products={categoryProducts} />;
};

export default Jewelry;
