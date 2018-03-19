function Osoba (imie, nazwisko, rokUrodzenia, plec) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.rokUrodzenia = rokUrodzenia;
    this.plec = plec;
    this.wiek = function () {
        let d = new Date();
        return d.getFullYear() - this.rokUrodzenia;
    }
}

function Nauczyciel (imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy) {
    Osoba.call(this, imie, nazwisko, rokUrodzenia, plec);
    this.nauczanyPrzedmiot = nauczanyPrzedmiot;
    this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
    this.lataPracy = function () {
        let d = new Date();
        return d.getFullYear() - this.rokRozpoczeciaPracy;
    }
}

Nauczyciel.prototype = Object.create(Osoba.prototype);
Nauczyciel.prototype.constructor = Nauczyciel;


function Wychowawca (imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa) {
    Nauczyciel.call(this, imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy);
    this.przydzielonaKlasa = przydzielonaKlasa;
}

Wychowawca.prototype = Object.create(Nauczyciel.prototype);
Wychowawca.prototype.constructor = Wychowawca;

var foo = new Wychowawca('Jan', 'Kowalski', 1970, 'Mężczyzna', 'Matematyka', 1998, '1b');
console.log(foo);
console.log(foo.wiek());
console.log(foo.lataPracy());
