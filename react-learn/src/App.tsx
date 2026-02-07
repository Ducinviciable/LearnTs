import { useState } from "react";
import "./App.css";
import products from "./Data/Data";

function App() {
  const [color, setColor] = useState("all");
  const [showTab, setShowTab] = useState(false);
  const filterProducts = products.filter((product) => {
    if (color === "all") return true;
    return product.color === color;
  });

  const handleShowTab = () => {
    setShowTab(!showTab);
  };

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
      {/* Ẩn  hiện toàn bộ danh sách sản phẩm trong tab */}
      <div>
        <h1>Danh sách sản phẩm</h1>
        <button onClick={handleShowTab}>
          {showTab ? "Hiên danh sách sản phẩm" : "Ẩn danh sách sản phẩm"}
        </button>
        <div>
          {showTab && (
            <ul>
              {products.map((products) => (
                <li key={products.id}>{products.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {showTab && (
        <div>
          <h1>Danh sách lọc sản phẩm:</h1>
          <div>
            <button onClick={() => setColor("all")}>Tất cả</button>
            <button onClick={() => setColor("yellow")}>Vàng</button>
            <button onClick={() => setColor("red")}>Đỏ</button>
            <button onClick={() => setColor("green")}>Xanh lục</button>
            <button onClick={() => setColor("blue")}>Xanh dương</button>
            <button onClick={() => setColor("black")}>Đen</button>
          </div>
          <ul>
            {filterProducts.map((product) => (
              <li key={product.id}>
                {product.name} - {product.color}
              </li>
            ))}
          </ul>
          <h3>
            {filterProducts.length === 0 && (
              <div style={{ color: "red" }}>Không có sản phẩm</div>
            )}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
