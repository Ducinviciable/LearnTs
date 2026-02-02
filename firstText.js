import { products } from "./Data.js";

// 0 lấy tất cả sản phẩm
console.table(products);

// 0.5 Dùng .map in ra danh sách tên sản phẩm cùng id
console.log("Danh sách tên sản phẩm cùng id:");
const nameProduct = products.map((index) => ({
  id: index.id,
  name: index.name,
}));
console.table(nameProduct);

// 1 lấy sản phẩm có giá hơn 1500
const newProduct = products.filter((product) => product.cost >= 1500);
console.log("Sản phẩm có giá hơn 1500Đ:");
console.table(newProduct);

// 1.1 lấy sản phẩm có giá hơn 1500 màu xanh lá
const newProduct1 = newProduct.filter((product) => product.color == "green");
if (newProduct1.length === 0) {
  console.log("Data not available");
} else {
  console.log(
    `Sản phẩm hơn màu xanh lá hơn 1500Đ: ${JSON.stringify(newProduct1)}`,
  );
}

// 2 Tính tổng giá sản phẩm
const sumProducts = products.reduce((s, value) => s + value.cost, 0);
console.log(`Tổng các sản phẩm: ${JSON.stringify(sumProducts)}`);
// 3. Dùng Destructuring để lấy ra name của sản phẩm đầu tiên
const { name: tensanpham } = products[0];
console.log(`Tên sản phẩm đầu tiên: ${tensanpham}`);
// 4. In ra file Index.jsx
