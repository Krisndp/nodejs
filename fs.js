var fs = require('fs');

var read = fs.readFileSync('m.txt', 'utf-8')

console.log(read);

var write = fs.writeFileSync('n.txt', 'look what you made me do')