import ProductEditForm from './pages/ProductEditForm';
import ProductsTable from './pages/ProductsTable';
import RegisterProduct from './pages/RegisterProduct';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ ProductsTable } />
      <Route path="/edit/:id" Component={ ProductEditForm } />
      <Route path="/register" Component={ RegisterProduct } />
    </Routes>
  );
}

export default App;
