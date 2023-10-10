class LampakModell {
    #allapot;
    #allapotList = [];

    constructor(n) {
        this.#allapot;        
        this.n = n;        
        this.init();
        //this.setAllapot(this.#allapot);

    }

    init() {
        let aktualisAllapot;
        for (let db = 0; db < this.n; db++) {
            let esely = Math.floor((Math.random() * 4) + 1);

            if (esely == 1) {
                aktualisAllapot = true;
                this.setAllapot(aktualisAllapot);
            } else {
                aktualisAllapot = false;
                this.setAllapot(aktualisAllapot);
            }
            this.#allapotList.push(aktualisAllapot);
            
        }
        console.log(this.#allapotList);
    }

    /*     lampakModel(lampak) {
            console.log(lampak);
    
            this.#allapotList.push(lampak.allapot);
            console.log(this.#allapotList);
        } */

    setAllapot(aktualisAllapot) {
        this.#allapot = aktualisAllapot;
    }

    getAllapot() {
        return this.#allapot;
    }
    getList() {
        return this.#allapotList;
    }

}
export default LampakModell;