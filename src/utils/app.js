var fs = require('fs');
var fr = require('fr');
fs.readFile('test.txt', 'utf8', function (err, data) {
    
    debugger;

    if (err) throw err;
    
    console.log(data);
});