import React from 'react'
import { useState, useEffect } from 'react'
import recipesData from "../data.json";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        setRecipes(recipesData)
    }, [])

  return (
    <div className='p-5'>
        <h1 className='text-4xl font-bold'>Recipes</h1>
        <div  className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='shadow-xl rounded-md hover:shadow-sm hover:translate-y-1'>
            {recipes.map((recipe) => (
            <div key={recipes.id} className=' w-full h-auto shadow flex flex-col'>
                <img src={recipes.image} alt={recipes.title} className='w-full h-[40%]' />
                <h1 className='text-2xl'>{recipes.title}</h1>
                <p className='text-sm'>{recipes.title}</p>
            </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default HomePage
