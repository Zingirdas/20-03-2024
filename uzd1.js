const fs = require("fs");
const data = fs.readFileSync('./uzd1.txt').toString().split(' ').map(Number);

let lyginiai = [];
let nelyginiai = [];

data.forEach((num) => {
    if (num % 2 === 0) {
        lyginiai.push(num);
    } else {
        nelyginiai.push(num);
    }
})
console.log('Lyginiai skaiciai:', lyginiai.join(' '));
console.log('Nelyginiai skaiciai:', nelyginiai.join(' '));
