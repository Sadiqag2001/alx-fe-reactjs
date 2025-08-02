import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe, onFinish }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe.id, { title, description });
    if (onFinish) onFinish();
  };

  return (
    <form onSubmit={handleSubmit} className='w-sm h-4/5 mx-auto my-[5%] flex flex-col gap-2 text-center'>
        <h1 className='mx-auto text-2xl mb-2.5'>Edit Recipe</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Recipe Title"
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Recipe Description"
      />
      <button type="submit" className='w-[150px] h-10 bg-blue-500 mx-auto rounded-2xl hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-700'>Save</button>
      <button type="button" onClick={onFinish} className='w-[150px] h-10 bg-blue-500 mx-auto rounded-2xl hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-700'>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;