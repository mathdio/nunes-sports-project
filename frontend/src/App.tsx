import './App.css'
import { Product } from './interfaces/Product';
import { ProductRow } from './components/ProductRow';
import { useProductsData } from './hooks/useProductsData';

function App() {
  const products: Product[] = useProductsData().data;

  return (
      <div className="container">
        <h1>Produtos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map(product => 
              <ProductRow
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
            />)}
          </tbody>
        </table>
      </div>
  )
}

export default App
