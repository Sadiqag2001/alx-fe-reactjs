import React from 'react'
import { useState } from 'react';
const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div>
      <input
        className='border rounded-2xl m-6 py-2 px-8'
        type="text"
        placeholder="Search GitHub username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
