var fs = require('fs');

fs.readFile('FileReadData.txt', function (err, data) {
                    if (err) throw err;

    console.log(data);
});