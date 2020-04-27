var MODE_ENV = 2; // 1 produccion - 2 developer

let config = {
    dominioApi_dev: "http://localhost:9990/api",
    dominioWeb_dev: "http://localhost:8080",
    dominioApi_prod: "https://myraus.com:9999/api",
    dominioWeb_prod: "https://myraus.com/personas/",
    ModeRUN: MODE_ENV,
    rutaApi(direccion) {
        return MODE_ENV === 2
            ? this.dominioApi_prod + "/" + direccion
            : this.dominioApi_dev + "/" + direccion;
    },
    rutaWeb(ruta) {
        return MODE_ENV === 1
            ? this.dominioWeb_prod + ruta
            : this.dominioWeb_dev + ruta;
    }
};

export default config;