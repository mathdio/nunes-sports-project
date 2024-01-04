import styles from '../styles/ProductEditForm.module.css';
import fetchProductById from '../utils/fetchProductById';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ProductEditForm() {
  const [product, setProduct] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const navigateTo = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchProductById(id, setProduct);
  }, []);

  const updateProductInfo = async () => {
    if (price === '') {
      alert('Campo de preço deve ser preenchido!');
      return 0;
    }

    const requestBody = {
      name,
      description,
      price,
    };

    const response = await fetch(
      `http://localhost:8080/products/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        },
        body: JSON.stringify(requestBody),
      },
    );

    const NOT_FOUND_STATUS = 404;
    if (response.status === NOT_FOUND_STATUS) {
      alert('Produto não encontrado!');
    } else {
      alert(`Produto de ID ${id} editado com sucesso!`);
      navigateTo('/');
    }
  };

  return (
    <div className={ styles['main-container'] }>
      <h2 className={ styles.title }>INFORMAÇÕES DO PRODUTO</h2>
      <table className={ styles['product-table'] }>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>
              R$
              {' '}
              {product.price}
            </td>
          </tr>
        </tbody>
      </table>

      <form className={ styles['form-container'] }>
        <h2>Editar informações do produto</h2>
        <input
          className={ styles.input }
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
          placeholder="Nome"
        />
        <input
          className={ styles.input }
          type="text"
          value={ description }
          onChange={ ({ target }) => setDescription(target.value) }
          placeholder="Descrição"
        />
        <input
          className={ styles.input }
          type="number"
          value={ price }
          onChange={ ({ target }) => setPrice(target.value) }
          placeholder="Preço"
        />
        <button
          className={ styles['button-update'] }
          type="button"
          onClick={ updateProductInfo }
        >
          ATUALIZAR
        </button>
      </form>
    </div>
  );
}

export default ProductEditForm;
