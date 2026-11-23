import { Link } from "react-router";
import { categories } from "../data/products";

export function Categories() {
  return (
    <>
      <h1>Vöruflokkar</h1>
      <ul>
        {categories.map((c) => (
          <li>
            <Link to={`/categories/${c.slug}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
