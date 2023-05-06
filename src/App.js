import { Route, Routes } from 'react-router-dom'
import PreviewPage from './pages/PreviewPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PreviewPage></PreviewPage>}></Route>
    </Routes>
  );
}

export default App;
