import PagesButtons from '../components/PagesButtons';
import ProductRow from '../components/ProductRow';
import styles from '../styles/ProductsTable.module.css';
import fetchCount from '../utils/fetchCount';
import fetchProducts from '../utils/fetchProducts';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [updateDatabase, setUpdateDatabase] = useState(false);
  const [count, setCount] = useState(0);
  const [pageNumber, setPageNumber] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigateTo = useNavigate();

  useEffect(() => {
    document.title = 'Sistema de Produtos';
    setPageNumber(searchParams.get('pageNumber') || 1);
  }, [updateDatabase]);

  useEffect(() => {
    fetchProducts(setProducts, pageNumber);
    fetchCount(setCount);
  }, [pageNumber]);

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
      {(count > 0) && (
        <PagesButtons
          count={ count }
          pageNumber={ Number(pageNumber) }
          navigateTo={ navigateTo }
          setPageNumber={ setPageNumber }
        />)}
    </main>
  );
}

export default ProductsTable;
