import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-6">Recipes</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="shadow-xl rounded-lg overflow-hidden hover:shadow-md hover:translate-y-1 transition duration-200 bg-white"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover brightness-75"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{recipe.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
