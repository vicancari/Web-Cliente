import config from "./config.js";
import axios from "axios";

export default {
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios
                .get(config.ruta(url), { params: params })
                .then(resp => {
                    resolve(resp.data);
                })
                .catch(err => {
                    // M.toast({ html: err.response.msg });
                    reject(err);
                });
        });
    },
    post(url, objeto) {
        return new Promise((resolve, reject) => {
            axios
                .post(config.ruta(url), objeto)
                .then(resp => {
                    // if (resp.data.msg) M.toast({ html: resp.data.msg });
                    // if (resp.data.msj) M.toast({ html: resp.data.msj });
                    resolve(resp.data);
                })
                .catch(err => {
                    // if (err.response.data.msg) M.toast({ html: err.response.data.msg });
                    reject(err);
                });
        });
    },
    put(url, objeto) {
        return new Promise((resolve, reject) => {
            console.log(objeto);
            axios
                .put(config.ruta(url), objeto)
                .then(resp => {
                    // if (resp.data.msg) M.toast({ html: resp.data.msg });
                    // if (resp.data.msj) M.toast({ html: resp.data.msj });
                    resolve(resp.data);
                })
                .catch(err => {
                    // if (err.response.data.msg) M.toast({ html: err.response.data.msg });
                    reject(err);
                });
        });
    },
    patch(url, objeto) {
        return new Promise((resolve, reject) => {
            axios
                .patch(config.ruta(url), objeto)
                .then(resp => {
                    // if (resp.data.msg) M.toast({ html: resp.data.msg });
                    // if (resp.data.msj) M.toast({ html: resp.data.msj });
                    resolve(resp.data);
                })
                .catch(err => {
                    // if (err.response.data.msg) M.toast({ html: err.response.data.msg });
                    reject(err);
                });
        });
    }
};
