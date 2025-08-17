import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Convert id from string to number
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Recipe not found</h2>
        <Link to="/" className="text-blue-500 underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="p-6 w-full m-10 flex flex-col justify-center items-center ">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <h1 className="text-4xl font-bold mt-4">{recipe.title}</h1>
      <p className="mt-2 text-gray-600">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <Link to="/" className="block mt-6 text-white bg-gray-700 hover:bg-gray-800 rounded-3xl px-5 py-2 shadow-md ">
        ← Back to Recipes
      </Link>
    </div>
  );
}

export default RecipeDetail;
