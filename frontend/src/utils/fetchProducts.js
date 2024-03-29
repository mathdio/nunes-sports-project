const fetchProducts = async (setProducts, pageNumber = 1) => {
  const response = await fetch(
    `http://localhost:8080/products?pageNumber=${Number(pageNumber) - 1}`,
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
  setProducts(data);
};

export default fetchProducts;
