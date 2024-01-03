import styles from '../styles/RegisterProduct.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigateTo = useNavigate();

  const registerProduct = async () => {
    if (price === '') {
      alert('O campo de preço deve ser preenchido!');
      return 0;
    }

    const requestBody = {
      name,
      description,
      price,
    };

    const response = await fetch(
      'http://localhost:8080/products',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        },
        body: JSON.stringify(requestBody),
      },
    );

    const CREATED_STATUS = 201;
    if (response.status === CREATED_STATUS) {
      alert('Produto registrado com sucesso!');
      navigateTo('/');
    } else {
      alert('Erro ao registrar! Tente novamente mais tarde.');
    }
  };

  return (
    <main className={ styles['main-container'] }>
      <form className={ styles['form-container'] }>
        <h1 className={ styles['form-title'] }>Insira as informações do produto</h1>
        <input
          type="text"
          name="name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
          className={ styles.input }
          placeholder="Nome"
        />
        <input
          type="text"
          name="description"
          value={ description }
          onChange={ ({ target }) => setDescription(target.value) }
          className={ styles.input }
          placeholder="Descrição"
        />
        <input
          type="number"
          name="price"
          value={ price }
          onChange={ ({ target }) => setPrice(target.value) }
          className={ styles.input }
          placeholder="Preço"
        />
        <button
          type="button"
          className={ styles.button }
          onClick={ registerProduct }
        >
          REGISTRAR
        </button>
      </form>
    </main>
  );
}

export default RegisterProduct;
