export const initialFilterState = {
  "all products": { priceRange: [0, 1000], selectedRating: null },
  "": { priceRange: [0, 1000], selectedRating: null },
  "react-fakestore": { priceRange: [0, 1000], selectedRating: null },
  undefined: { priceRange: [0, 1000], selectedRating: null },
  electronics: { priceRange: [0, 1000], selectedRating: null },
  jewelery: { priceRange: [0, 1000], selectedRating: null },
  "men's clothing": { priceRange: [0, 1000], selectedRating: null },
  "women's clothing": { priceRange: [0, 1000], selectedRating: null },
};

export const initializeFilterState = () => {
  sessionStorage.setItem("filterState", JSON.stringify(initialFilterState));
};

export const saveFiltersToSessionStorage = (category, filters) => {
  const storedFilters = JSON.parse(sessionStorage.getItem("filterState")) || {};
  storedFilters[category] = filters;
  sessionStorage.setItem("filterState", JSON.stringify(storedFilters));
};

export const checkFiltersFromSessionStorage = () => {
  if (!sessionStorage.getItem("filterState")) {
    return true
  }
};

export const getFilterCategoryFromSessionStorage = (category) => {
  const storedFilters = JSON.parse(sessionStorage.getItem("filterState")) || {};
  return storedFilters[category];
};
