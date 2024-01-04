import styles from '../styles/ProductsTable.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ProductRow({ id, name, description, price, setUpdateDatabase }) {
  const navigateTo = useNavigate();

  const deleteProduct = async (productId) => {
    await fetch(
      `http://localhost:8080/products/${productId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        },
      },
    );
    alert(`Produto de ID ${id} deletado com sucesso!`);
    setUpdateDatabase(true);
  };

  const editProduct = (productId) => {
    navigateTo(`/edit/${productId}`);
  };

  return (
    <tr>
      <td className={ styles['data-cell'] }>{id}</td>
      <td className={ styles['data-cell'] }>{name}</td>
      <td className={ styles['data-cell'] }>{description}</td>
      <td className={ styles['data-cell'] }>
        R$
        {' '}
        {price.toFixed(2).toString().replace('.', ',')}
      </td>
      <td className={ styles['data-cell'] }>
        <button
          className={ styles.button }
          type="button"
          onClick={ () => editProduct(id) }
        >
          Editar
        </button>
      </td>
      <td className={ styles['data-cell'] }>
        <button
          className={ styles.button }
          type="button"
          onClick={ () => deleteProduct(id) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

ProductRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  setUpdateDatabase: PropTypes.func,
}.isRequired;

export default ProductRow;
