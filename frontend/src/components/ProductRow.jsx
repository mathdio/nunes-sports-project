export function ProductRow({id, name, description, price, updateDatabase, setUpdateDatabase}) {

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

  return (
    <tr>
      <td className="data-cell">{id}</td>
      <td className="data-cell">{name}</td>
      <td className="data-cell">{description}</td>
      <td className="data-cell">{price}</td>
      <td className="data-cell">
        <button className="button">Edit</button>
      </td>
      <td className="data-cell">
        <button className="button"
          onClick={()=> deleteProduct(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}