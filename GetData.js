const votanducInf = {
  firstName: "Đức",
  lastName: "Võ",
  age: 22,
  address: "Quảng Nam",
  trinhDo: [12, "Đại học", "Cao đẳng", "Trung cấp"],
};

// lấy toàn bộ
console.log(votanducInf);

// lấy theo thuộc tính
console.log(votanducInf.age);
console.log(votanducInf.address);

// lấy theo destructuring
// lấy theo destructuring và đổi tên biến
const { lastName: ho, firstName: ten } = votanducInf;
console.log(ho);

const [THPT, ĐH] = votanducInf.trinhDo;
console.log(`Trình độ: ${THPT} -> ${ĐH}`);

// const { firstName, lastName } = votanducInf;
// console.log(firstName);
// console.log(lastName);
