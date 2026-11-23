import { Link, useParams } from "react-router";
import { products } from "../data/products";

export function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <h1>Vara fannst ekki</h1>
        <Link to="/products">Til baka í vörur</Link>
      </>
    );
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Verð: {product.price}</p>
      <Link to="/products">Til baka</Link>
    </div>
  );
}
