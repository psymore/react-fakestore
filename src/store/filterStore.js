import { create } from 'zustand';
import { initialFilterState } from '../config/initialFilterValues';

const useFilterStore = create((set) => ({
  filters: initialFilterState, // Storing filters for each category

  // Set price range for a specific category
  setPriceRange: (category, newRange) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [category]: {
          ...state.filters[category],
          priceRange: newRange,
        },
      },
    })),

  // Set rating for a specific category
  setRating: (category, newRating) =>
    set((state) => {
      const currentRating = state.filters[category]?.selectedRating;

      return {
        filters: {
          ...state.filters,
          [category]: {
            ...state.filters[category], 
            selectedRating: currentRating === newRating ? null : newRating, // Toggle behavior
          },
        },
      };
    }),

  // Reset filters for a specific category
  resetFilters: (category) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [category]: {
          priceRange: [0, 1000],
          selectedRating: 0,
        },
      },
    })),
}));

export default useFilterStore;