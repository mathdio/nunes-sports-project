import ProductRow from '../components/ProductRow';
import styles from '../styles/ProductsTable.module.css';
import fetchProducts from '../utils/fetchProducts';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [updateDatabase, setUpdateDatabase] = useState(false);

  useEffect(() => {
    document.title = 'Sistema de Produtos';
    fetchProducts(setProducts);
  }, [updateDatabase]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <main className={ styles['main-container'] }>
      <div className={ styles['create-container'] }>
        <h1>Sistema de produtos</h1>
        <Link className={ styles['create-link'] } to="/register">
          <button
            type="button"
            className={ styles['create-button'] }
          >
            Registrar novo produto
          </button>
        </Link>
      </div>
      <table className={ styles['table-container'] }>
        <thead className={ styles['table-head'] }>
          <tr>
            <th className={ styles['head-cell'] }>Código</th>
            <th className={ styles['head-cell'] }>Nome</th>
            <th className={ styles['head-cell'] }>Descrição</th>
            <th className={ styles['head-cell'] }>Preço</th>
            <th className={ styles['head-cell'] }>Editar</th>
            <th className={ styles['head-cell'] }>Excluir</th>
          </tr>
        </thead>
        <tbody className={ styles.tablebody }>
          {products.map((product) => (
            <ProductRow
              key={ product.id }
              id={ product.id }
              name={ product.name }
              description={ product.description }
              price={ product.price }
              updateDatabase={ updateDatabase }
              setUpdateDatabase={ setUpdateDatabase }
            />))}
        </tbody>
      </table>
    </main>
  );
}

export default ProductsTable;
