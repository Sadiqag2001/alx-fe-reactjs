import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p className="text-gray-500 text-center">No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="w-sm h-4/5 rounded mx-auto my-2.5 flex flex-col gap-2"
          >
            <h3 className="mx-auto text-xl mb-1.5">Title: {recipe.title}</h3>
            <p className="mx-auto text-base mb-1.5">
              Description: {recipe.description}
            </p>
            <Link to={`/${recipe.id}`}  className='mx-auto text-lg text-center underline text-blue-500 mx-auto hover:text-blue-600 active:text-blue-700'>Details</Link>
          </div>
        ))
      )}
    </div>
  );
};
export default RecipeList;