import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ProductRow({id, name, description, price, updateDatabase, setUpdateDatabase}) {
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
    setUpdateDatabase(!updateDatabase);
  }

  const editProduct = (id) => {
    navigateTo(`/edit/${id}`)
  }

  return (
    <tr>
      <td className="data-cell">{id}</td>
      <td className="data-cell">{name}</td>
      <td className="data-cell">{description}</td>
      <td className="data-cell">R$ {price.toFixed(2).toString().replace(".", ",")}</td>
      <td className="data-cell">
        <button 
          className="button"
          type='button'
          onClick={ () => editProduct(id) }  
        >
          Edit
        </button>
      </td>
      <td className="data-cell">
        <button
          className="button"
          type='button'
          onClick={ ()=> deleteProduct(id) }
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

ProductRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  updateDatabase: PropTypes.bool,
  setUpdateDatabase: PropTypes.func,
}

export default ProductRow;