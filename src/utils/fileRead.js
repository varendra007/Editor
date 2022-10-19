var fs = require('fs');

fs.readFile('FileRead.txt', function (err, data) {
                    if (err) throw err;

    console.log(data);
});