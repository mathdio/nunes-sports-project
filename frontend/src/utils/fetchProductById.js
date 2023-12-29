const fetchProductById = async (id, setProduct) => {
  const response = await fetch(
    `http://localhost:8080/products/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
      },
    },
  );
  const data = await response.json();
  data.price = data.price.toFixed(2).toString().replace(".", ",");
  setProduct(data);
}

export default fetchProductById;