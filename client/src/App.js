import { Route, Routes } from 'react-router-dom'
import BasketPage from './pages/BasketPage/BasketPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PreviewPage from './pages/PreviewPage/PreviewPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PreviewPage></PreviewPage>}></Route>
      <Route path='/basket' element={<BasketPage></BasketPage>}></Route>
      <Route path='/payment' element={<PaymentPage />}></Route>
      <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
      <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
  );
}

export default App;
