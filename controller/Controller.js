import LampakModell from "../modell/LampakModell.js";
import Lampak from "../view/Lampak.js";

class Controller {
    #vizszintesElemSzam;
    #fuggolegesElemSzam;

    constructor() {        
        this.#vizszintesElemSzam = 3;
        this.#fuggolegesElemSzam = 3;
        this.dbSzam = this.#vizszintesElemSzam * this.#fuggolegesElemSzam;
        this.LAMPAKMODELL = new LampakModell(this.dbSzam);
        let modell = this.LAMPAKMODELL;

        this.LAMPAK = new Lampak(this.#vizszintesElemSzam, this.#fuggolegesElemSzam,
            $(".jatekter"), this.LAMPAKMODELL.getAllapot(), modell);

        //console.log(this.LAMPAK.getLampaLista());

        //this.LAMPAKMODELL.LampakModel(this.LAMPAK.getLampaLista());
        //this.LAMPAKMODELL.init(this.LAMPAK.getLampaLista());
        //this.LAMPAKMODELL.setAllapot();


    }
}
export default Controller;