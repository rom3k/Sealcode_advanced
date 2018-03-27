var fs = require("fs");
var d = new Date;
var timeout = process.argv[2];
var file = process.argv[3];


setTimeout(() => {
    fs.appendFile(file, '\n'+ d, (err) => {
        if (err) throw err;
    })    
}, parseInt(timeout, 10));


