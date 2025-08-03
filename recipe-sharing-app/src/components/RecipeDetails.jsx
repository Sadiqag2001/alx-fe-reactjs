import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router';
import { useState } from 'react';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(recipeId))
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onFinish={() => setIsEditing(false)} />
      ) : (
        <>
          <h1 className='mx-auto text-2xl mb-2.5'>Recipe Details</h1>
          <h3 className='mx-auto text-xl mb-1.5'>Title: {recipe.title}</h3>
          <p className='mx-auto text-base mb-1.5 pb-3 '>Description: {recipe.description}</p>

          <button className='bg-[#415E72] mr-2 shadow-md text-white'onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <DeleteRecipeButton  recipeId={recipe.id} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
