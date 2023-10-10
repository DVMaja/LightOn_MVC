class LampakModell {
    #allapot;
    #allapotList = [];

    constructor() {
        this.#allapot = true;

        this.setAllapot(this.#allapot);
    }

    LampakModel(id) {
        this.#allapotList;
        

    }
    setAllapot(aktualisAllapot) {
        this.#allapot = aktualisAllapot;
    }

    getAllapot() {
        return this.#allapot;
    }
    getList(){
        return this.#allapotList;
    }

}
export default LampakModell;