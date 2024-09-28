export const applyFilter = (products, filters) => {
    // Filter by price range
    let filteredProducts = products.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Conditionally apply rating filter and sorting if selectedRating is not null
    if (filters.selectedRating !== null) {
      filteredProducts = filteredProducts
        .filter((product) => product.rating.rate <= filters.selectedRating)
        .sort((a, b) => b.rating.rate - a.rating.rate); // Sort by rating in descending order
    }

    return filteredProducts;
  };