import React from 'react'
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';


const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() && !location.trim() && !minRepos.trim()) {
      setError('Please enter at least one search criteria.');
      return;
    }

    setLoading(true);
    setError('');
    setUser([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUsers(data.items || []);
     } catch (error) {
      setError('Error fetching users. Try again.')
    } finally{
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Advanced Github User Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='border rounded-2xl m-6 py-2 px-8'
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border mb-3 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border mb-3 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
        />
        <button type='submit' className='text-white bg-[#1a1a1a]'>Search</button>
      </form>
       {loading && <p>Loading...</p>}
      {error && <p className='text-red-600'>{error}</p>}
      {user && (
        <div className='mt-0.5'>
          {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h2 className="text-lg font-semibold text-center mt-2">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-500 mt-2 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
        </div>
      )}
    </div>
  )
}

export default Search
