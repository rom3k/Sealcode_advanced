class Figura {
    constructor(nazwa) {
        this.nazwa = nazwa;
    }
}

class Czworokat extends Figura {
    constructor(nazwa, typ_czworokata, a, b, c, d) {
        super(nazwa);
        this.typ_czworokata = typ_czworokata;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}

class Prostokat extends Czworokat {
    constructor(nazwa, typ_czworokata, a, b, c, d) {
        super(nazwa, typ_czworokata, a, b, c, d);
    }
    podaj_obwod() {
        return this.a + this.b + this.c + this.d;
    }
    podaj_pole() {
        return this.a * this.b;
    }
}

var pro = new Prostokat("Figura", "Prostokąt", 5, 8, 5, 8);
console.log(pro);
console.log(pro.podaj_obwod());
console.log(pro.podaj_pole());


