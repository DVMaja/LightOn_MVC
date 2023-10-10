import LampaElem from "./LampaElem.js";

class Lampak {
    #vizszintesDb;
    #fuggolegesDB;
    #allapot;


    constructor(vizszintesDb, fuggolegesDB, Szuloelem, allapot, modell) {
        this.#fuggolegesDB = fuggolegesDB;
        this.#vizszintesDb = vizszintesDb;
        this.SzuloElem = Szuloelem;
        this.#allapot = allapot;
        this.modell = modell;
        this.lampaLista = [];
        //console.log("Lampak állapot " + this.#allapot); 
        this.init();    
        /* $(window).on("kattintas", (event) => {   
            console.log(event.detail);  
            this.modell.setAllpot(event.detail.getIndex()) 

            event.detail.setErtek(this.MODELL.getAllapot());    
        
        }) */
    }

    init(){
        this.#htmlOsszarak();
        this.elemekLetrehozasa();
        //this.LAMPAELEM.setSzin();       
    }

    #htmlOsszarak() {
        let txt = `<div class="elemekHelye"></div>`;
        this.SzuloElem.append(txt);
    }

    elemekLetrehozasa() {        
        for (let elemDb = 0; elemDb < this.#fuggolegesDB * this.#vizszintesDb; elemDb++) {
            //console.log("elemek száma: "+ elemDb);
            this.LAMPAELEM = new LampaElem($(".elemekHelye"), elemDb, this.#allapot);
            //this.LAMPAELEM.getIndex();
            this.lampaLista.push(this.LAMPAELEM);
        }
    }

    getLampaLista(){
        return this.lampaLista;
    }    
}
export default Lampak;