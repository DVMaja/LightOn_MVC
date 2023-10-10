import LampaElem from "./LampaElem.js";

class Lampak {
    #vizszintesDb;
    #fuggolegesDB;

    constructor(vizszintesDb, fuggolegesDB, Szuloelem){
        this.#fuggolegesDB = fuggolegesDB;
        this.#vizszintesDb = vizszintesDb;
        this.SzuloElem = Szuloelem;
        
        this.elemekLetrehozasa();
       
    }   

    elemekLetrehozasa(){
        for (let elemDb = 0; elemDb < this.#fuggolegesDB * this.#vizszintesDb; elemDb++) {
            console.log("elemek száma: "+ elemDb);
            this.LAMPAELEM = new LampaElem();
            
        }

    }
}
export default Lampak ;