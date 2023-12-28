import { Product } from "../interfaces/Product";

export function ProductRow({id, name, description, price}: Product) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <button>Edit</button>
      <button>Delete</button>
    </tr>
  )
}