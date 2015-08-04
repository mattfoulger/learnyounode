var fs = require('fs');
var path = require('path');

var pathname = process.argv[2];
var filetype = process.argv[3];

fs.readdir(pathname, function(err, list) {
  list.forEach(function (file) {
    if (path.extname(file).substr(1) == filetype) {
      console.log(file);
    }
  })
});
