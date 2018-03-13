function Figura(nazwa) {
    this.nazwa = nazwa;
}

function Czworokat(nazwa, typ_czworokata, a, b, c, d) {
    Figura.call(this, nazwa);
    this.typ_czworokata = typ_czworokata;
    this.dlugosci_bokow = {
        a,
        b,
        c,
        d
    };
}

Czworokat.prototype = Object.create(Figura.prototype);
Czworokat.prototype.constructor = Czworokat;

function Prostokat(nazwa, typ_czworokata, a, b, c, d) {
    Czworokat.call(this, nazwa, typ_czworokata, a, b, c, d);

}

Prostokat.prototype = Object.create(Czworokat.prototype);
Prostokat.prototype.constructor = Prostokat;

Prostokat.prototype.podaj_obwod = function() {
    return this.dlugosci_bokow.a + this.dlugosci_bokow.b + this.dlugosci_bokow.c + this.dlugosci_bokow.d;
}

Prostokat.prototype.podaj_pole = function() {
    return this.dlugosci_bokow.a * this.dlugosci_bokow.b;
}

var pro = new Prostokat("Figura", "Prostokat", 5, 8, 5, 8);
console.log(pro);
console.log(pro.podaj_obwod());
console.log(pro.podaj_pole());