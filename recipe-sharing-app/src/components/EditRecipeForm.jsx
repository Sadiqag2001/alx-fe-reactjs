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
    <form onSubmit={handleSubmit} >
        <h1>Edit Recipe</h1>
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
      <button type="submit" >Save</button>
      <button type="button" onClick={onFinish} >Cancel</button>
    </form>
  );
};

export default EditRecipeForm;