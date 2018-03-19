class Osoba {
    constructor(imie, nazwisko, rokUrodzenia, plec) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.rokUrodzenia = rokUrodzenia;
        this.plec = plec;
    }
    wiek() {
        let d = new Date();
        return d.getFullYear() - this.rokUrodzenia;
    }
}

class Nauczyciel extends Osoba {
    constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy) {
        super(imie, nazwisko, rokUrodzenia, plec);
        this.nauczanyPrzedmiot = nauczanyPrzedmiot;
        this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
    }
    lataPracy() {
        let d = new Date();
        return d.getFullYear() - this.rokRozpoczeciaPracy;
    }
}

class Wychowawca extends Nauczyciel {
    constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa) {
        super(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy);
        this.przydzielonaKlasa = przydzielonaKlasa;
    }
}

var foo = new Wychowawca('Jan', 'Kowalski', 1970, 'Mężczyzna', 'Matematyka', 1998, '1b');
console.log(foo);
console.log(`Wiek: ${foo.wiek()}`);
console.log(`Lata pracy: ${foo.lataPracy()}`);