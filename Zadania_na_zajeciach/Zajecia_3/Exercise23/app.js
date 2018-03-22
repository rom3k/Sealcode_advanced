window.onerror = function (message, url, line) {
    console.warn(`  Treść błędu: ${message} 
      Ścieżka: ${url}
      Linia: ${line}`);
    }
    

function main() {
    const x = "Hello world!";
    
    try {
        const result = run(x);
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log(e.message);
            console.log(e.name);
        }
        if (typeof x == 'string') {
            console.error(`Error 200: x jest typu string`);
        }
        if (e instanceof TypeError) {
            console.log(e.message);
            console.log(e.name);
        }
    }
    try {
        console.log(x.lowerCase())
    }
    catch(e) {
        console.log(e.message);
        console.log(e.name);
    }
}

window.onload = main;