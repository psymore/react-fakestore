import { useEffect } from "react";
import useProductStore from "../../store/productStore";
import ProductList from "../components/listComponents/ProductList";

function AllProducts() {
  const { products, fetchAllProducts } = useProductStore();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return <ProductList products={products} />;
}

export default AllProducts;
