import type { Product } from "../Type/Product";

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  if (products.length === 0) return <p>Không có sản phẩm</p>;
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.id}-{p.name}-{p.color}-{p.cost}
        </li>
      ))}
    </ul>
  );
}
export default ProductList;
