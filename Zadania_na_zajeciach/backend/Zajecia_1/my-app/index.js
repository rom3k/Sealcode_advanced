
var fs = require("fs");
var d = new Date;
var timeout = parseInt(process.argv[2], 10);
var file = process.argv[3];

if (isNaN(timeout)) {
    console.log('Time is defined badly.');
}

else if (!/([a-zA-Z0-9]+)(\.)([a-z]+)/.test(file)) {
    console.log('File is defined badly.');
}
else {
    setTimeout(() => {
        fs.appendFile(file, '\n'+ d, (err) => {
            if (err) throw err;
        })    
    }, timeout);
}

