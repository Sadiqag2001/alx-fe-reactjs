import React from 'react'
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username);
    } catch (error) {
      setError('Looks like we cant find the user')
    } finally{
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='border rounded-2xl m-6 py-2 px-8'
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <button type='submit' className='text-white bg-[#1a1a1a]'>Search</button>
      </form>
       {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div style={{ marginTop: '1rem' }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <h2>{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0366d6' }}
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  )
}

export default Search
