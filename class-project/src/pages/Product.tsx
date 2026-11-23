import { Link, useParams } from "react-router";
import { categories, products } from "../data/products";

export function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const category = categories.find((c) => c.slug === product?.category);

  if (!product) {
    return (
      <>
        <h1>Vara fannst ekki</h1>
        <Link to="/products">Til baka í vörur</Link>
      </>
    );
  } else if (!category) {
    return (
      <>
        <h1>Vöruflokkur fannst ekki</h1>
        <Link to="/products">Til baka í vörur</Link>
      </>
    );
  }
  return (
    <div>
      <h1>{product.name}</h1>
      Flokkur:{" "}
      <Link to={`/categories/${product.category}`}>{category.name}</Link>
      <p>Verð: {product.price}</p>
      <Link to="/products">Til baka</Link>
      <br />
    </div>
  );
}
