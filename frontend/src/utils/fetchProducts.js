export const fetchProducts = async (setProducts) => {
  const response = await fetch(
    "http://localhost:8080/products",
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
  console.log(data);
  setProducts(data);
}