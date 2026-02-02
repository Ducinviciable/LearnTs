const scores = [9, 7, 8, 10, 6];

console.log(`mảng điểm ban đầu ${scores}`);

const newScores = scores.map((point) => Math.min(point + 1, 10));

console.log(`Điểm sau khi cộng ưu tiên 2 là: ${newScores}`);

// lọc điểm bé hơn 10, 10 điểm là sẽ đậuu
const filterScores = newScores.filter((point) => point >= 10);

// số học sinh đậu
console.log(`Số học sinh đậu: ${filterScores.length}`);
