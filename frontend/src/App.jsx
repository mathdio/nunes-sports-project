import './App.css'
import { ProductRow } from './components/ProductRow';
import { fetchProducts } from './utils/fetchProducts';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [updateDatabase, setUpdateDatabase] = useState(false);

  useEffect(() => {
    document.title = 'Products System';
    fetchProducts(setProducts);
  }, [updateDatabase]);

  return (
      <div className="container">
        <h1>Products System</h1>
        <table className="table-container">
          <thead className="table-head">
            <tr>
              <th className="head-cell">ID</th>
              <th className="head-cell">Name</th>
              <th className="head-cell">Description</th>
              <th className="head-cell">Price</th>
              <th className="head-cell">Edit</th>
              <th className="head-cell">Delete</th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {products.map((product) => (
              <ProductRow
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                updateDatabase={updateDatabase}
                setUpdateDatabase={setUpdateDatabase}
            />))}
          </tbody>
        </table>
      </div>
  )
}

export default App
