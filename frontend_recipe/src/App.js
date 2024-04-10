import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AddRecipePage from './Pages/AddRecipePage/AddRecipe';
import Navbar from './Components/Navbar/Navbar';
import SingleRecipe from './Pages/SingleRecipe/SingleRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<SingleRecipe />} />
          <Route path='/add' element={<AddRecipePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
