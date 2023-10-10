class LampaElem {
    #index;
    #kattinthato;

    constructor(Szuloelem, index) {
        //console.log("LampaElem elérhető");
        this.#index = index;
        this.#kattinthato = true;

        this.SzuloElem = Szuloelem;
        this.#htmlOsszarak();

        this.Kor = $(".kor:last-child");
        //console.log(this.Kor);
        this.Kor.on("click", () => {
            if (this.#kattinthato) {
                this.#sajatEsemeny();
                this.#kattinthato = false;
                //console.log(this.Kor);                
            }
        })
    }

    #htmlOsszarak() {
        let txt = `<div class="kor"></div>`;
        this.SzuloElem.append(txt);
    }

    setSzin() {
        let valami = true;//állapot

        if (valami == true) {
            this.Kor.css(`background-color`, `darkgreen`);
            valami = true;
        } else {
            this.Kor.css(`background-color`, `orange`);
            valami = false;
        }
    }

    getIndex() {
        return this.#index;
    }

    #sajatEsemeny() {
        const esemenyem = new CustomEvent("kattintas", { detail: this });
        window.dispatchEvent(esemenyem);
    }

}
export default LampaElem;