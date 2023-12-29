import { useEffect, useState } from 'react';
import fetchProductById from '../utils/fetchProductById';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/ProductEditForm.css'


function ProductEditForm() {
  const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigateTo = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchProductById(id, setProduct)
  }, []);

  const updateProductInfo = async () => {
    if (price === "") {
      alert("Price cannot be empty");
      return 0;
    }

    const requestBody = {
      name,
      description,
      price,
    }

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
    console.log(response.status);
    if (response.status === NOT_FOUND_STATUS) {
      alert("Product not found!");
    } else {
      alert("Product edited successfully!")
      navigateTo("/");
    }
  }

  return (
    <div className='main-container'>
      <div className='product-info'>
        <h2>PRODUCT INFO</h2>
        <table className='product-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>R$ {product.price}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <form className='form-container'>
        <h2>Edit product info</h2>
        <input
          className='input'
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
          placeholder='Name'
        />
        <input
          className='input'
          type="text"
          value={ description }
          onChange={ ({ target }) => setDescription(target.value) }
          placeholder='Description'
        />
        <input
          className='input'
          type="number"
          value={ price }
          onChange={ ({ target }) => setPrice(target.value) }
          placeholder='Price'
        />
        <button
          className='button-update'
          type='button'
          onClick={ updateProductInfo  }
        >
          UPDATE
        </button>
      </form>
    </div>
  )
}

export default ProductEditForm;