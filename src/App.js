import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/favorites' element={<FavoritesPage></FavoritesPage>}></Route>

    </Routes>
  );
}

export default App;
