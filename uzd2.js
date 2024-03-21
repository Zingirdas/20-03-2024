const fs = require("fs");
const data = fs.readFileSync('./uzd2.txt').toString().split("\n");

let mas = [];
data.forEach((l) => {
    mas.push(l.split(" "));
});

// for (let i = 0; i < mas.length; i++) {
//     for (let y = 0; y < mas.length; y++) {
//         if (i === y || i + y === mas.length - 1) {
//             mas[i][y] = 0;
//         }
//     }
// }
// for (let i = 0; i < mas.length; i++) {
//     console.log(mas[i].join(' '));
// }

let n = mas.length;

for (i = 0; i < n; i++) {
    mas[i][i] = 0
    mas[n - 1 - i][i] = 0
}
console.log(mas);