import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='mb-7'>
      <h2 className='font-bold my-3 text-2xl'>Add New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className='block mb-3 w-full border rounded p-1 border-[#415E72]'
        
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className='block h-18 mb-3 w-full border rounded p-1 border-[#415E72]'
        />
      <button className='bg-[#415E72] text-[#FAF7F3] shadow-md' type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;