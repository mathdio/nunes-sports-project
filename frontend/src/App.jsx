import './App.css'
import {Route, Routes} from 'react-router-dom';
import ProductsTable from './pages/ProductsTable';
import ProductEditForm from './pages/ProductEditForm';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ ProductsTable } />
      <Route path="/edit/:id" Component={ ProductEditForm } />
    </Routes>
  )
}

export default App
