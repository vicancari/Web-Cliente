import config from "./config.js";
import axios from "axios";

export default {
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios
                .get(config.rutaApi(url), { params: params })
                .then(resp => {
                    resolve(resp.data);
                })
                .catch(err => {
                    console.log(err.response.msg)
                    reject(err);
                });
        });
    },
    post(url, objeto) {
        return new Promise((resolve, reject) => {
            axios
                .post(config.rutaApi(url), objeto)
                .then(resp => {
                    if (resp.data.msg) console.log(resp.data.msg);
                    if (resp.data.msj) console.log(resp.data.msj);
                    resolve(resp.data);
                })
                .catch(err => {
                    if (err.response.data.msg) console.log(err.response.data.msg);
                    reject(err);
                });
        });
    },
    put(url, objeto) {
        return new Promise((resolve, reject) => {
            console.log(objeto);
            axios
                .put(config.rutaApi(url), objeto)
                .then(resp => {
                    if (resp.data.msg) console.log(resp.data.msg);
                    if (resp.data.msj) console.log(resp.data.msj);
                    resolve(resp.data);
                })
                .catch(err => {
                    if (err.response.data.msg) console.log(err.response.data.msg);
                    reject(err);
                });
        });
    },
    patch(url, objeto) {
        return new Promise((resolve, reject) => {
            axios
                .patch(config.rutaApi(url), objeto)
                .then(resp => {
                    if (resp.data.msg) console.log(resp.data.msg);
                    if (resp.data.msj) console.log(resp.data.msj);
                    resolve(resp.data);
                })
                .catch(err => {
                    if (err.response.data.msg) console.log(err.response.data.msg);
                    reject(err);
                });
        });
    }
};
