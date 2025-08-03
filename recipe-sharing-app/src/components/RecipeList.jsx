import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className='border rounded border-[#415E72]'>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
           >
            <h3 className='text-bold'>Title: {recipe.title}</h3>
            <p>
              Description: {recipe.description}
            </p>
            <Link to={`/${recipe.id}`} >Details</Link>
          </div>
        ))
      )}
    </div>
  );
};
export default RecipeList;