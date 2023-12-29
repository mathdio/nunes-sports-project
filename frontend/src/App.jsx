import {Route, Routes} from 'react-router-dom';
import ProductsTable from './pages/ProductsTable';
import ProductEditForm from './pages/ProductEditForm';
import RegisterProduct from './pages/RegisterProduct';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ ProductsTable } />
      <Route path="/edit/:id" Component={ ProductEditForm } />
      <Route path='/register' Component={ RegisterProduct } />
    </Routes>
  )
}

export default App
