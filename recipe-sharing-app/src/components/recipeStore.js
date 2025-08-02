import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  // CRUD
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      );
      return {
        recipes: updated,
        filteredRecipes: filterWithTerm(updated, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: filterWithTerm(updated, state.searchTerm),
        favorites: state.favorites.filter((fid) => fid !== id),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterWithTerm(state.recipes, term),
    })),

  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes,
    })),

  // Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Mock Recommendation (can be improved)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (r) =>
          !state.favorites.includes(r.id) && // Exclude favorites
          state.favorites.length &&
          Math.random() > 0.5 // Random for now
      );
      return { recommendations: recommended };
    }),
}));

function filterWithTerm(recipes, term) {
  const lowerTerm = term.toLowerCase();
  return recipes.filter((r) =>
    r.title.toLowerCase().includes(lowerTerm)
  );
}

export default useRecipeStore;
export { useRecipeStore };