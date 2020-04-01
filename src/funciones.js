var $ = require("jquery");

export default {
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
    },
    campoNumber(e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        // console.log(charCode);
        if (charCode > 31 && (charCode < 48 || charCode > 57)){
            return false;
        }
    },
    searchDirection(e, google) {
        var autocomplete = google;
        
        autocomplete.addListener('place_changed', function() {
            var place = autocomplete.getPlace();
            e.addEventListener("onchange", () => {
                if (!place.geometry) {
                    document.querySelector("#origen").value = "Error";
                    // console.log("error");
                } else {
                    document.querySelector("#origen").value = place.geometry.location.lat() +" "+ place.geometry.location.lng();
                    $.post("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + place.geometry.location.lat() + "," + place.geometry.location.lng() + "&key=AIzaSyBUhsxeoY9tYVFFD31lLygBdRROqHU7s6k", function(data) {
                        var formCountry = document.querySelector("#country");
                        var formCity = document.querySelector("#city");
                        formCountry.value = `${data.results[0].address_components[5].long_name}`;
                        formCity.value = `${data.results[0].address_components[3].long_name}`;
                    });
                    // console.log(place.geometry.location.lat() +" "+ place.geometry.location.lng());
                }
            });
            if (!place.geometry) {
                document.querySelector("#origen").value = "Error";
                // console.log("error");
            } else {
                document.querySelector("#origen").value = place.geometry.location.lat() +" "+ place.geometry.location.lng();
                $.post("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + place.geometry.location.lat() + "," + place.geometry.location.lng() + "&key=AIzaSyBUhsxeoY9tYVFFD31lLygBdRROqHU7s6k", function(data) {
                    var formCountry = document.querySelector("#country");
                    var formCity = document.querySelector("#city");
                    formCountry.value = `${data.results[0].address_components[5].long_name}`;
                    formCity.value = `${data.results[0].address_components[3].long_name}`;
                });
                // console.log(place.geometry.location.lat() +" "+ place.geometry.location.lng());
            }
        });
    }
};
