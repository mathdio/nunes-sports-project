import { Product } from "../interfaces/Product";

export function ProductRow({id, name, description, price}: Product) {
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
        <button className="button">Delete</button>
      </td>
    </tr>
  )
}