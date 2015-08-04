var fs = require('fs');
var path = require('path');


module.exports = function(pathname, extension, callback) {

  var fileList = [];
  var error;
  var callback = callback;

  fs.readdir(pathname, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      list.forEach(function (file) {
        if (path.extname(file).substr(1) == extension) {
          fileList.push(file);
        }
      });
      callback(null, fileList);
    }
  });

}


