import LampaElem from "./LampaElem.js";

class Lampak {
    #vizszintesDb;
    #fuggolegesDB;


    constructor(vizszintesDb, fuggolegesDB, Szuloelem) {
        this.#fuggolegesDB = fuggolegesDB;
        this.#vizszintesDb = vizszintesDb;
        this.SzuloElem = Szuloelem;

        this.#htmlOsszarak();
        this.elemekLetrehozasa();

    }

    #htmlOsszarak() {
        let txt = `<div class="elemekHelye"></div>`;
        this.SzuloElem.append(txt);
    }

    elemekLetrehozasa() {
        for (let elemDb = 0; elemDb < this.#fuggolegesDB * this.#vizszintesDb; elemDb++) {
            //console.log("elemek száma: "+ elemDb);
            this.LAMPAELEM = new LampaElem($(".elemekHelye"), elemDb);
        }
    }
}
export default Lampak;