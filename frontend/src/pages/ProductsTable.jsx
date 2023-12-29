import ProductRow from "../components/ProductRow";
import fetchProducts from "../utils/fetchProducts";
import { useEffect, useState } from "react";
import "../styles/ProductsTable.css";
import { Link } from "react-router-dom";

function ProductsTable() {

  const [products, setProducts] = useState([]);
  const [updateDatabase, setUpdateDatabase] = useState(false);

  useEffect(() => {
    document.title = 'Products System';
    fetchProducts(setProducts);
  }, [updateDatabase]);

  return (
      <div className="container">
        <div className="create-container">
          <h1>Products System</h1>
          <Link className="create-link" to="/register">
            <button
              type="button"
              className="create-button"
            >
              Create new product
            </button>
          </Link>
        </div>
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

export default ProductsTable;