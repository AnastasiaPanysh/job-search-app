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
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import VacancyPage from './Pages/VacancyPage/VacancyPage';
import BasketPage from './Pages/BasketPage/BasketPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/vacancy/:id" element={<VacancyPage />}></Route>
      <Route path="/basket" element={<BasketPage />}></Route>
    </Routes>
  );
}

export default App;
