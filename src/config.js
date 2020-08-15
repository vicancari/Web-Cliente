var MODE_ENV = 1; // 1 produccion - 2 developer

let config = {
    dominioApi_dev: "http://localhost:9990",
    dominioWeb_dev: "http://localhost:8080",
    dominioApi_prod: "https://myraus.com:9999",
    dominioWeb_prod: "https://myraus.com/personas/",
    ModeRUN: MODE_ENV,
    rutaApi(direccion) {
        return MODE_ENV === 1
            ? this.dominioApi_prod + "/api/" + direccion
            : this.dominioApi_dev + "/api/" + direccion;
    },
    rutaWeb(ruta) {
        return MODE_ENV === 1
            ? this.dominioWeb_prod + ruta
            : this.dominioWeb_dev + ruta;
    }
};

export default config;