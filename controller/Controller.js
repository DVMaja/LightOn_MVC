import Modell from "../modell/Modell.js";
import Lampak from "../view/Lampak.js";

class Controller {
    #vizszintesElemSzam;
    #fuggolegesElemSzam;

    constructor() {
        this.MODELL = new Modell();
        
        this.#vizszintesElemSzam = 3;
        this.#fuggolegesElemSzam = 3;

        this.LAMPAK = new Lampak(this.#vizszintesElemSzam, this.#fuggolegesElemSzam, $(".jatekter")); 


    }
}
export default Controller;