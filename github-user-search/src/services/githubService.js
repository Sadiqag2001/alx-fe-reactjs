import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  let query = '';

   if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}&per_page=12`;
  const searchResponse = await axios.get(url);

  if (!searchResponse.data.items || searchResponse.data.items.length === 0) {
    throw new Error("Looks like we cant find the user");
  }

  const usersWithDetails = await Promise.all(
    searchResponse.data.items.map(async (user) => {
      const details = await axios.get(`https://api.github.com/users/${user.login}`);
      return { ...user, ...details.data };
    })
  );


  return { items: usersWithDetails };
};