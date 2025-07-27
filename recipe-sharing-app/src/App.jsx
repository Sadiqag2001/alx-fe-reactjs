import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <Router>   
        <Routes>
          <Route path= "/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
       </Routes>  
      </Router>

    </div>
  );
}

export default App;