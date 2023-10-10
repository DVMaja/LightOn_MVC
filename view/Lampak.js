import LampaElem from "./LampaElem.js";

class Lampak {
    #vizszintesDb;
    #fuggolegesDB;
    #allapot;


    constructor(vizszintesDb, fuggolegesDB, Szuloelem, allapot) {
        this.#fuggolegesDB = fuggolegesDB;
        this.#vizszintesDb = vizszintesDb;
        this.SzuloElem = Szuloelem;
        this.#allapot = allapot;
        console.log("Lampak állapot " + this.#allapot); 
        this.init();
    }

    init(){

        this.#htmlOsszarak();
        this.elemekLetrehozasa();
        this.LAMPAELEM.setSzin();
    }

    #htmlOsszarak() {
        let txt = `<div class="elemekHelye"></div>`;
        this.SzuloElem.append(txt);
    }

    elemekLetrehozasa() {
        for (let elemDb = 0; elemDb < this.#fuggolegesDB * this.#vizszintesDb; elemDb++) {
            //console.log("elemek száma: "+ elemDb);
            this.LAMPAELEM = new LampaElem($(".elemekHelye"), elemDb, this.#allapot);
        }
    }
    
}
export default Lampak;