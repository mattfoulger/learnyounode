var fs = require('fs');
var filepath = process.argv[2];
var file = fs.readFileSync(filepath);

file = file.toString();
file = file.split('\n');
var lines = file.length - 1;

console.log(lines);