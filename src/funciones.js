export default {
    geo() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(pos) {
                        resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude });
                    },
                    function() {
                        console.log("Ocurrió un error intentando encontrar su ubicación");
                        reject();
                    }
                );
            } else {
                console.log("Debe activar el GPS para utilizar esta función.");
                reject();
            }
        });
    },
    calcularDistancia(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 + (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;


        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    },
    yyyymmdd(date) {
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();

        return (
            date.getFullYear() +
            "-" +
            ((mm > 9 ? "" : "0") + mm) +
            "-" +
            ((dd > 9 ? "" : "0") + dd)
        );
    },
    formatoFecha(date) {
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();

        return (
            (dd > 9 ? "" : "0") +
            dd +
            "-" +
            ((mm > 9 ? "" : "0") + mm) +
            "-" +
            date.getFullYear()
        );
    },
    formatoHora(date) {
        var hora = date.getHours();
        var minutos = date.getMinutes();

        return hora + ":" + minutos;
    },
    fechaYHora(date) {
        console.log(date);
        return this.formatoFecha(date) + " " + this.formatoHora(date);
    }
};
