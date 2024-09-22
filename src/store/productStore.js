import { create } from "zustand";

const useProductStore = create(set => ({
  products: [],
  product: null,
  categories: [],
  currentCategory: null,
  tabValue: 0,
  categoryProducts: [],
  loading: false,
  error: null,
  setProducts: products => set({ products }),
  setProduct: product => set({ product }),
  setCategories: categories => set({ categories }),
  setTabValue: tabValue => set({ tabValue }),
  setCurrentCategory: currentCategory => set({ currentCategory }),
  setCategoryProducts: categoryProducts => set({ categoryProducts }),

  fetchAllProducts: async () => {
    set({ loading: true });

    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      set({ products: data, loading: false });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ loading: false, error: true });
    }
  },

  fetchProductById: async id => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      set({ product: data });
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
    }
  },

  fetchCategories: async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      set({ categories: data });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },

  fetchProductsByCategory: async category => {
    set({ loading: true });

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      set({ categoryProducts: data, loading: false });
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      set({ loading: false, error: true });
    }
  },

  updateProduct: async (id, updatedProduct) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await response.json();
      set(state => ({
        products: state.products.map(product =>
          product.id === id ? data : product
        ),
      }));
    } catch (error) {
      console.error(`Error updating product with ID ${id}:`, error);
    }
  },

  deleteProduct: async id => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      set(state => ({
        products: state.products.filter(product => product.id !== id),
      }));
    } catch (error) {
      console.error(`Error deleting product with ID ${id}:`, error);
    }
  },
}));

export default useProductStore;
