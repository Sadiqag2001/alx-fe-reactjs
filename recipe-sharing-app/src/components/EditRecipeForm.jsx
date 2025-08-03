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
    <form onSubmit={handleSubmit} className='p-3 flex flex-col'>
        <h1>Edit Recipe</h1>
      <input
      className='border rounded border-[#415E72] p-1 m-2'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Recipe Title"
      />
      <textarea
      className='border rounded border-[#415E72] p-1 m-2'
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Recipe Description"
      />
      <div className='flex flex-row justify-center gap-2'>
      <button className='bg-[#415E72] shadow-md text-white' type="submit" >Save</button>
      <button className='bg-[#415E72] shadow-md text-white' type="button" onClick={onFinish} >Cancel</button>
     </div>
    
    </form>
  );
};

export default EditRecipeForm;