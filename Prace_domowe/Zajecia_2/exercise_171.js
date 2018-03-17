function poleWycinka(a, b, c = domyslnePi()) {
    return (a * c * b * b)/360;
}

function domyslnePi() {
    return Math.PI;
}

console.log(poleWycinka(30, 5, 3.14));
console.log(poleWycinka(30, 5, 22/7));
console.log(poleWycinka(30, 5));