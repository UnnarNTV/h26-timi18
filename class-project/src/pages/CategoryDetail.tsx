import { Link, useParams } from "react-router";
import { categories, products } from "../data/products";

export function CategoryDetail() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.category === slug);

  if (!category) {
    return (
      <>
        <h1>Vöruflokkur finnst ekki</h1>
        <Link to="/categories">Til baka í vöruflokka</Link>
      </>
    );
  }
  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {categoryProducts.map((cp) => (
          <li>
            <Link to={`/product/${cp.id}`}>
              {cp.name}: <b>{cp.price}</b>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
