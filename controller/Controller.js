import LampakModell from "../modell/LampakModell.js";
import Lampak from "../view/Lampak.js";

class Controller {
    #vizszintesElemSzam;
    #fuggolegesElemSzam;

    constructor() {
        this.LAMPAKMODELL = new LampakModell();

        this.#vizszintesElemSzam = 3;
        this.#fuggolegesElemSzam = 3;       

        this.LAMPAK = new Lampak(this.#vizszintesElemSzam, this.#fuggolegesElemSzam, $(".jatekter"));
        
        this.LAMPAKMODELL.LampakModel()


    }
}
export default Controller;