import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [selectedId, setSelectedId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelectedId(id);

    const selected = recipes.find((r) => r.id === Number(id));
    if (selected) {
      setTitle(selected.title);
      setDescription(selected.description);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedId) return;

    updateRecipe(Number(selectedId), { title, description });
    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Edit Recipe</h2>

      <select value={selectedId} onChange={handleSelect} required style={{ display: 'block', marginBottom: '10px' }}>
        <option value="">-- Select Recipe to Edit --</option>
        {recipes.map((recipe) => (
          <option key={recipe.id} value={recipe.id}>
            {recipe.title}
          </option>
        ))}
      </select>

      {selectedId && (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Updated Title"
            required
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Updated Description"
            required
            style={{ display: 'block', marginBottom: '10px', width: '100%', height: '80px' }}
          />
          <button type="submit">Save Changes</button>
        </>
      )}
    </form>
  );
};

export default EditRecipeForm;