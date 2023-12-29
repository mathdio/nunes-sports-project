import ProductRow from "../components/ProductRow";
import fetchProducts from "../utils/fetchProducts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ProductsTable.module.css";

function ProductsTable() {

  const [products, setProducts] = useState([]);
  const [updateDatabase, setUpdateDatabase] = useState(false);

  useEffect(() => {
    document.title = 'Products System';
    fetchProducts(setProducts);
  }, [updateDatabase]);

  return (
      <main className={styles["main-container"]}>
        <div className={styles["create-container"]}>
          <h1>Products System</h1>
          <Link className={styles["create-link"]} to="/register">
            <button
              type="button"
              className={styles["create-button"]}
            >
              Create new product
            </button>
          </Link>
        </div>
        <table className={styles["table-container"]}>
          <thead className={styles["table-head"]}>
            <tr>
              <th className={styles["head-cell"]}>ID</th>
              <th className={styles["head-cell"]}>Name</th>
              <th className={styles["head-cell"]}>Description</th>
              <th className={styles["head-cell"]}>Price</th>
              <th className={styles["head-cell"]}>Edit</th>
              <th className={styles["head-cell"]}>Delete</th>
            </tr>
          </thead>
          <tbody className={styles["tablebody"]}>
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
      </main>
  )
}

export default ProductsTable;