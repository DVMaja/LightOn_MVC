class LampaElem {
    #index;
    #kattinthato;
    #allapot;

    constructor(Szuloelem, index, allapot) {
        //console.log("LampaElem elérhető");
        this.#index = index;        
        this.#kattinthato = true;
        this.#allapot = allapot;        
        this.SzuloElem = Szuloelem;

        this.#htmlOsszarak();
        this.Kor = $(".kor:last-child");
        this.setSzin();

        //console.log(this.Kor);
        this.Kor.on("click", () => {
            if (this.#kattinthato) {
                this.#sajatEsemeny();
                this.#kattinthato = false;    
                this.setSzin();            
                //console.log(this.Kor);                
            }
        })        
    }   

    #htmlOsszarak() {
        let txt = `<div class="kor"></div>`;
        this.SzuloElem.append(txt);
    }

    setSzin() {
        if (this.#allapot == true) {            
            this.Kor.css(`background-color`, `darkgreen`);  
            //this.#allapot = true; 
        } else {            
            this.Kor.css(`background-color`, `orange`);
            //this.#allapot = false;
            //console.log(this.#allapot);
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