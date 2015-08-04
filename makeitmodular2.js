var filteredLs = require('./makeitmodular');

var pathname = process.argv[2];
var filetype = process.argv[3];

filteredLs(pathname, filetype, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    data.forEach(function(file) {
      console.log(file);
    })
  }

});
