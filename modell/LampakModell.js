class LampakModell {
    #allapot;
    #allapotList = [];

    constructor(lampa) {
        this.#allapot = false;
        this.init();
        this.setAllapot(this.#allapot);

    }

    init(lampa) {
        let aktualisAllapot;
        let esely = Math.floor((Math.random() * 4) + 1);

        if (esely == 1) {
            aktualisAllapot = true;
            this.setAllapot(aktualisAllapot);
        } else {
            aktualisAllapot = false;
            this.setAllapot(aktualisAllapot);
        }
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
    getList() {
        return this.#allapotList;
    }

}
export default LampakModell;