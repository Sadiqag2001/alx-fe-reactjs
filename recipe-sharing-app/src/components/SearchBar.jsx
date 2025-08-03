import React from 'react';
import { useRecipeStore } from './recipeStore';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <div>
        <input className='border rounded-2xl p-2 relative mb-2 w-80'
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
       />
       <CiSearch className='absolute top-106 left-185 fill-[#415E72]'/>
    </div>
  );
};

export default SearchBar;