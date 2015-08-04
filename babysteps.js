
var sum = 0;
args = process.argv;

for (i=2; i<args.length; i++) {
  sum += parseFloat(args[i]);
}


console.log(sum);