import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div className='w-full h-full m-10 rounded-2xl'>
      <div className=' bg-[#FAF7F3] shadow-md p-6 rounded-2xl w-full h-full'>
      <h1 className='font-extrabold'>Recipe Sharing App</h1>
      <Router>   
        <Routes>
          <Route path= "/" element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          } />
        <Route path="/:recipeId" element={<RecipeDetails />} />
       </Routes>  
      </Router>
     </div>
    </div>
  );
}

export default App;