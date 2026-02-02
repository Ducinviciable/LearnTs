import "./App.css";
import products from "./Data/Data";

function App() {
  const getProductsByColor = products.filter(
    (product) => product.color === "green",
  );
  const expProducts = products.filter((product) => product.cost >= 1500);
  const getProductsByColorCost = getProductsByColor.filter(
    (p) => p.cost >= 1500,
  );
  const sum = products.reduce((s, value) => s + value.cost, 0);

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id}-{product.name}
          </li>
        ))}
      </ul>
      <h1>Tổng giá trị sản phẩm là: {sum}</h1>

      <h1>Danh sách sản phẩm có giá trị lớn hơn 1500</h1>
      <ul>
        {expProducts.map((product) => (
          <li key={product.id}>Giá: {product.cost}</li>
        ))}
      </ul>
      <h1>Danh sách sản phẩm có màu xanh:</h1>
      <ul>
        {getProductsByColor.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
      <h1>Danh sách sản phẩm có màu xanh giá 1500:</h1>
      <ul>
        {getProductsByColorCost.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
