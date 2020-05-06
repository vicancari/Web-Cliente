import api from "./api.js";

export default {
    campoNumber(e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        // console.log(charCode);
        if (charCode > 31 && (charCode < 48 || charCode > 57)){
            return false;
        }
    },
    progress__event() {
        var configprogress = { onUploadProgress: progressEvent => {
                this.EstatusProgress(Math.floor((progressEvent.loaded * 100) / progressEvent.total));
            }
        };
        return configprogress;
    },
    EstatusProgress(value) {
        var ProgressP = document.querySelector("#Progress__P");
        var ProgressC = document.querySelector("#Progress__C");
        if (ProgressP && ProgressC) {
            ProgressP.style.display = "block";
            if (value < 100) {
                ProgressC.style.width = value + '%';
            } else {
                ProgressC.style.width = value + '%';
                setTimeout(function() { ProgressP.style.display = "none"; ProgressC.style.width = '0%'; }, 500);
            }
        }
    },
    validar_clave(e) {
        if (e.value.length >= 8 && e.value.length <= 15) {		
            var mayuscula = false;
            var minuscula = false;
            var numero = false;
            var caracter_raro = false;
            
            for (var i = 0; i < e.value.length; i++) {
                if (e.value.charCodeAt(i) >= 65 && e.value.charCodeAt(i) <= 90) {
                    mayuscula = true;
                }
                else if (e.value.charCodeAt(i) >= 97 && e.value.charCodeAt(i) <= 122) {
                    minuscula = true;
                }
                else if (e.value.charCodeAt(i) >= 48 && e.value.charCodeAt(i) <= 57) {
                    numero = true;
                }
                else {
                    caracter_raro = true;
                }
            }
            if (mayuscula == true && minuscula == true && caracter_raro == true && numero == true) {
                if (document.querySelector("#btnRegistar")) {
                    document.querySelector("#btnRegistar").disabled = false;
                }
                return true;
            }
        }

        if (document.querySelector("#btnRegistar")) {
            document.querySelector("#btnRegistar").disabled = true;
        }
        return false;
    },
    codigoArea(country) {
        let objCode = [
            {
            "_id": "AFG",
            "country_id": "1",
            "pais_name": "Afghanistan",
            "phone_code": "93",
            "departamento": [
                {
                "zone_id": "1",
                "name": "Badakhshan"
                },
                {
                "zone_id": "2",
                "name": "Badghis"
                },
                {
                "zone_id": "3",
                "name": "Baghlan"
                },
                {
                "zone_id": "4",
                "name": "Balkh"
                },
                {
                "zone_id": "5",
                "name": "Bamian"
                },
                {
                "zone_id": "6",
                "name": "Farah"
                },
                {
                "zone_id": "7",
                "name": "Faryab"
                },
                {
                "zone_id": "8",
                "name": "Ghazni"
                },
                {
                "zone_id": "9",
                "name": "Ghowr"
                },
                {
                "zone_id": "10",
                "name": "Helmand"
                },
                {
                "zone_id": "11",
                "name": "Herat"
                },
                {
                "zone_id": "12",
                "name": "Jowzjan"
                },
                {
                "zone_id": "13",
                "name": "Kabul"
                },
                {
                "zone_id": "14",
                "name": "Kandahar"
                },
                {
                "zone_id": "15",
                "name": "Kapisa"
                },
                {
                "zone_id": "16",
                "name": "Khost"
                },
                {
                "zone_id": "17",
                "name": "Konar"
                },
                {
                "zone_id": "18",
                "name": "Kondoz"
                },
                {
                "zone_id": "19",
                "name": "Laghman"
                },
                {
                "zone_id": "20",
                "name": "Lowgar"
                },
                {
                "zone_id": "21",
                "name": "Nangrahar"
                },
                {
                "zone_id": "22",
                "name": "Nimruz"
                },
                {
                "zone_id": "23",
                "name": "Nurestan"
                },
                {
                "zone_id": "24",
                "name": "Oruzgan"
                },
                {
                "zone_id": "25",
                "name": "Paktia"
                },
                {
                "zone_id": "26",
                "name": "Paktika"
                },
                {
                "zone_id": "27",
                "name": "Parwan"
                },
                {
                "zone_id": "28",
                "name": "Samangan"
                },
                {
                "zone_id": "29",
                "name": "Sar-e Pol"
                },
                {
                "zone_id": "30",
                "name": "Takhar"
                },
                {
                "zone_id": "31",
                "name": "Wardak"
                },
                {
                "zone_id": "32",
                "name": "Zabol"
                }
            ]
            },
            {
            "_id": "ALB",
            "country_id": "2",
            "pais_name": "Albania",
            "phone_code": "355",
            "departamento": [
                {
                "zone_id": "33",
                "name": "Berat"
                },
                {
                "zone_id": "34",
                "name": "Bulqize"
                },
                {
                "zone_id": "35",
                "name": "Delvine"
                },
                {
                "zone_id": "36",
                "name": "Devoll"
                },
                {
                "zone_id": "37",
                "name": "Diber"
                },
                {
                "zone_id": "38",
                "name": "Durres"
                },
                {
                "zone_id": "39",
                "name": "Elbasan"
                },
                {
                "zone_id": "40",
                "name": "Kolonje"
                },
                {
                "zone_id": "41",
                "name": "Fier"
                },
                {
                "zone_id": "42",
                "name": "Gjirokaster"
                },
                {
                "zone_id": "43",
                "name": "Gramsh"
                },
                {
                "zone_id": "44",
                "name": "Has"
                },
                {
                "zone_id": "45",
                "name": "Kavaje"
                },
                {
                "zone_id": "46",
                "name": "Kurbin"
                },
                {
                "zone_id": "47",
                "name": "Kucove"
                },
                {
                "zone_id": "48",
                "name": "Korce"
                },
                {
                "zone_id": "49",
                "name": "Kruje"
                },
                {
                "zone_id": "50",
                "name": "Kukes"
                },
                {
                "zone_id": "51",
                "name": "Librazhd"
                },
                {
                "zone_id": "52",
                "name": "Lezhe"
                },
                {
                "zone_id": "53",
                "name": "Lushnje"
                },
                {
                "zone_id": "54",
                "name": "Malesi e Madhe"
                },
                {
                "zone_id": "55",
                "name": "Mallakaster"
                },
                {
                "zone_id": "56",
                "name": "Mat"
                },
                {
                "zone_id": "57",
                "name": "Mirdite"
                },
                {
                "zone_id": "58",
                "name": "Peqin"
                },
                {
                "zone_id": "59",
                "name": "Permet"
                },
                {
                "zone_id": "60",
                "name": "Pogradec"
                },
                {
                "zone_id": "61",
                "name": "Puke"
                },
                {
                "zone_id": "62",
                "name": "Shkoder"
                },
                {
                "zone_id": "63",
                "name": "Skrapar"
                },
                {
                "zone_id": "64",
                "name": "Sarande"
                },
                {
                "zone_id": "65",
                "name": "Tepelene"
                },
                {
                "zone_id": "66",
                "name": "Tropoje"
                },
                {
                "zone_id": "67",
                "name": "Tirane"
                },
                {
                "zone_id": "68",
                "name": "Vlore"
                }
            ]
            },
            {
            "_id": "DZA",
            "country_id": "3",
            "pais_name": "Algeria",
            "phone_code": "213",
            "departamento": [
                {
                "zone_id": "69",
                "name": "Adrar"
                },
                {
                "zone_id": "70",
                "name": "Ain Defla"
                },
                {
                "zone_id": "71",
                "name": "Ain Temouchent"
                },
                {
                "zone_id": "72",
                "name": "Alger"
                },
                {
                "zone_id": "73",
                "name": "Annaba"
                },
                {
                "zone_id": "74",
                "name": "Batna"
                },
                {
                "zone_id": "75",
                "name": "Bechar"
                },
                {
                "zone_id": "76",
                "name": "Bejaia"
                },
                {
                "zone_id": "77",
                "name": "Biskra"
                },
                {
                "zone_id": "78",
                "name": "Blida"
                },
                {
                "zone_id": "79",
                "name": "Bordj Bou Arreridj"
                },
                {
                "zone_id": "80",
                "name": "Bouira"
                },
                {
                "zone_id": "81",
                "name": "Boumerdes"
                },
                {
                "zone_id": "82",
                "name": "Chlef"
                },
                {
                "zone_id": "83",
                "name": "Constantine"
                },
                {
                "zone_id": "84",
                "name": "Djelfa"
                },
                {
                "zone_id": "85",
                "name": "El Bayadh"
                },
                {
                "zone_id": "86",
                "name": "El Oued"
                },
                {
                "zone_id": "87",
                "name": "El Tarf"
                },
                {
                "zone_id": "88",
                "name": "Ghardaia"
                },
                {
                "zone_id": "89",
                "name": "Guelma"
                },
                {
                "zone_id": "90",
                "name": "Illizi"
                },
                {
                "zone_id": "91",
                "name": "Jijel"
                },
                {
                "zone_id": "92",
                "name": "Khenchela"
                },
                {
                "zone_id": "93",
                "name": "Laghouat"
                },
                {
                "zone_id": "94",
                "name": "Muaskar"
                },
                {
                "zone_id": "95",
                "name": "Medea"
                },
                {
                "zone_id": "96",
                "name": "Mila"
                },
                {
                "zone_id": "97",
                "name": "Mostaganem"
                },
                {
                "zone_id": "98",
                "name": "M'Sila"
                },
                {
                "zone_id": "99",
                "name": "Naama"
                },
                {
                "zone_id": "100",
                "name": "Oran"
                },
                {
                "zone_id": "101",
                "name": "Ouargla"
                },
                {
                "zone_id": "102",
                "name": "Oum el-Bouaghi"
                },
                {
                "zone_id": "103",
                "name": "Relizane"
                },
                {
                "zone_id": "104",
                "name": "Saida"
                },
                {
                "zone_id": "105",
                "name": "Setif"
                },
                {
                "zone_id": "106",
                "name": "Sidi Bel Abbes"
                },
                {
                "zone_id": "107",
                "name": "Skikda"
                },
                {
                "zone_id": "108",
                "name": "Souk Ahras"
                },
                {
                "zone_id": "109",
                "name": "Tamanghasset"
                },
                {
                "zone_id": "110",
                "name": "Tebessa"
                },
                {
                "zone_id": "111",
                "name": "Tiaret"
                },
                {
                "zone_id": "112",
                "name": "Tindouf"
                },
                {
                "zone_id": "113",
                "name": "Tipaza"
                },
                {
                "zone_id": "114",
                "name": "Tissemsilt"
                },
                {
                "zone_id": "115",
                "name": "Tizi Ouzou"
                },
                {
                "zone_id": "116",
                "name": "Tlemcen"
                }
            ]
            },
            {
            "_id": "ASM",
            "country_id": "4",
            "pais_name": "American Samoa",
            "phone_code": "684",
            "departamento": [
                {
                "zone_id": "117",
                "name": "Eastern"
                },
                {
                "zone_id": "118",
                "name": "Manu'a"
                },
                {
                "zone_id": "119",
                "name": "Rose Island"
                },
                {
                "zone_id": "120",
                "name": "Swains Island"
                },
                {
                "zone_id": "121",
                "name": "Western"
                }
            ]
            },
            {
            "_id": "AND",
            "country_id": "5",
            "pais_name": "Andorra",
            "phone_code": "376",
            "departamento": [
                {
                "zone_id": "122",
                "name": "Andorra la Vella"
                },
                {
                "zone_id": "123",
                "name": "Canillo"
                },
                {
                "zone_id": "124",
                "name": "Encamp"
                },
                {
                "zone_id": "125",
                "name": "Escaldes-Engordany"
                },
                {
                "zone_id": "126",
                "name": "La Massana"
                },
                {
                "zone_id": "127",
                "name": "Ordino"
                },
                {
                "zone_id": "128",
                "name": "Sant Julia de Loria"
                }
            ]
            },
            {
            "_id": "AGO",
            "country_id": "6",
            "pais_name": "Angola",
            "phone_code": "244",
            "departamento": [
                {
                "zone_id": "129",
                "name": "Bengo"
                },
                {
                "zone_id": "130",
                "name": "Benguela"
                },
                {
                "zone_id": "131",
                "name": "Bie"
                },
                {
                "zone_id": "132",
                "name": "Cabinda"
                },
                {
                "zone_id": "133",
                "name": "Cuando-Cubango"
                },
                {
                "zone_id": "134",
                "name": "Cuanza Norte"
                },
                {
                "zone_id": "135",
                "name": "Cuanza Sul"
                },
                {
                "zone_id": "136",
                "name": "Cunene"
                },
                {
                "zone_id": "137",
                "name": "Huambo"
                },
                {
                "zone_id": "138",
                "name": "Huila"
                },
                {
                "zone_id": "139",
                "name": "Luanda"
                },
                {
                "zone_id": "140",
                "name": "Lunda Norte"
                },
                {
                "zone_id": "141",
                "name": "Lunda Sul"
                },
                {
                "zone_id": "142",
                "name": "Malange"
                },
                {
                "zone_id": "143",
                "name": "Moxico"
                },
                {
                "zone_id": "144",
                "name": "Namibe"
                },
                {
                "zone_id": "145",
                "name": "Uige"
                },
                {
                "zone_id": "146",
                "name": "Zaire"
                }
            ]
            },
            {
            "_id": "ATG",
            "country_id": "9",
            "pais_name": "Antigua and Barbuda",
            "phone_code": "1",
            "departamento": [
                {
                "zone_id": "147",
                "name": "Saint George"
                },
                {
                "zone_id": "148",
                "name": "Saint John"
                },
                {
                "zone_id": "149",
                "name": "Saint Mary"
                },
                {
                "zone_id": "150",
                "name": "Saint Paul"
                },
                {
                "zone_id": "151",
                "name": "Saint Peter"
                },
                {
                "zone_id": "152",
                "name": "Saint Philip"
                },
                {
                "zone_id": "153",
                "name": "Barbuda"
                },
                {
                "zone_id": "154",
                "name": "Redonda"
                }
            ]
            },
            {
            "_id": "ARG",
            "country_id": "10",
            "pais_name": "Argentina",
            "phone_code": "54",
            "departamento": [
                {
                "zone_id": "155",
                "name": "Antartida e Islas del Atlantico"
                },
                {
                "zone_id": "156",
                "name": "Buenos Aires"
                },
                {
                "zone_id": "157",
                "name": "Catamarca"
                },
                {
                "zone_id": "158",
                "name": "Chaco"
                },
                {
                "zone_id": "159",
                "name": "Chubut"
                },
                {
                "zone_id": "160",
                "name": "Cordoba"
                },
                {
                "zone_id": "161",
                "name": "Corrientes"
                },
                {
                "zone_id": "162",
                "name": "Distrito Federal"
                },
                {
                "zone_id": "163",
                "name": "Entre Rios"
                },
                {
                "zone_id": "164",
                "name": "Formosa"
                },
                {
                "zone_id": "165",
                "name": "Jujuy"
                },
                {
                "zone_id": "166",
                "name": "La Pampa"
                },
                {
                "zone_id": "167",
                "name": "La Rioja"
                },
                {
                "zone_id": "168",
                "name": "Mendoza"
                },
                {
                "zone_id": "169",
                "name": "Misiones"
                },
                {
                "zone_id": "170",
                "name": "Neuquen"
                },
                {
                "zone_id": "171",
                "name": "Rio Negro"
                },
                {
                "zone_id": "172",
                "name": "Salta"
                },
                {
                "zone_id": "173",
                "name": "San Juan"
                },
                {
                "zone_id": "174",
                "name": "San Luis"
                },
                {
                "zone_id": "175",
                "name": "Santa Cruz"
                },
                {
                "zone_id": "176",
                "name": "Santa Fe"
                },
                {
                "zone_id": "177",
                "name": "Santiago del Estero"
                },
                {
                "zone_id": "178",
                "name": "Tierra del Fuego"
                },
                {
                "zone_id": "179",
                "name": "Tucuman"
                }
            ]
            },
            {
            "_id": "ARM",
            "country_id": "11",
            "pais_name": "Armenia",
            "phone_code": "374",
            "departamento": [
                {
                "zone_id": "180",
                "name": "Aragatsotn"
                },
                {
                "zone_id": "181",
                "name": "Ararat"
                },
                {
                "zone_id": "182",
                "name": "Armavir"
                },
                {
                "zone_id": "183",
                "name": "Geghark'unik'"
                },
                {
                "zone_id": "184",
                "name": "Kotayk'"
                },
                {
                "zone_id": "185",
                "name": "Lorri"
                },
                {
                "zone_id": "186",
                "name": "Shirak"
                },
                {
                "zone_id": "187",
                "name": "Syunik'"
                },
                {
                "zone_id": "188",
                "name": "Tavush"
                },
                {
                "zone_id": "189",
                "name": "Vayots' Dzor"
                },
                {
                "zone_id": "190",
                "name": "Yerevan"
                }
            ]
            },
            {
            "_id": "AUS",
            "country_id": "13",
            "pais_name": "Australia",
            "phone_code": "61",
            "departamento": [
                {
                "zone_id": "191",
                "name": "Australian Capital Territory"
                },
                {
                "zone_id": "192",
                "name": "New South Wales"
                },
                {
                "zone_id": "193",
                "name": "Northern Territory"
                },
                {
                "zone_id": "194",
                "name": "Queensland"
                },
                {
                "zone_id": "195",
                "name": "South Australia"
                },
                {
                "zone_id": "196",
                "name": "Tasmania"
                },
                {
                "zone_id": "197",
                "name": "Victoria"
                },
                {
                "zone_id": "198",
                "name": "Western Australia"
                }
            ]
            },
            {
            "_id": "AUT",
            "country_id": "14",
            "pais_name": "Austria",
            "phone_code": "43",
            "departamento": [
                {
                "zone_id": "199",
                "name": "Burgenland"
                },
                {
                "zone_id": "200",
                "name": "K\u00e4rnten"
                },
                {
                "zone_id": "201",
                "name": "Nieder&ouml;sterreich"
                },
                {
                "zone_id": "202",
                "name": "Ober&ouml;sterreich"
                },
                {
                "zone_id": "203",
                "name": "Salzburg"
                },
                {
                "zone_id": "204",
                "name": "Steiermark"
                },
                {
                "zone_id": "205",
                "name": "Tirol"
                },
                {
                "zone_id": "206",
                "name": "Vorarlberg"
                },
                {
                "zone_id": "207",
                "name": "Wien"
                }
            ]
            },
            {
            "_id": "AZE",
            "country_id": "15",
            "pais_name": "Azerbaijan",
            "phone_code": "994",
            "departamento": [
                {
                "zone_id": "208",
                "name": "Ali Bayramli"
                },
                {
                "zone_id": "209",
                "name": "Abseron"
                },
                {
                "zone_id": "210",
                "name": "AgcabAdi"
                },
                {
                "zone_id": "211",
                "name": "Agdam"
                },
                {
                "zone_id": "212",
                "name": "Agdas"
                },
                {
                "zone_id": "213",
                "name": "Agstafa"
                },
                {
                "zone_id": "214",
                "name": "Agsu"
                },
                {
                "zone_id": "215",
                "name": "Astara"
                },
                {
                "zone_id": "216",
                "name": "Baki"
                },
                {
                "zone_id": "217",
                "name": "BabAk"
                },
                {
                "zone_id": "218",
                "name": "BalakAn"
                },
                {
                "zone_id": "219",
                "name": "BArdA"
                },
                {
                "zone_id": "220",
                "name": "Beylaqan"
                },
                {
                "zone_id": "221",
                "name": "Bilasuvar"
                },
                {
                "zone_id": "222",
                "name": "Cabrayil"
                },
                {
                "zone_id": "223",
                "name": "Calilabab"
                },
                {
                "zone_id": "224",
                "name": "Culfa"
                },
                {
                "zone_id": "225",
                "name": "Daskasan"
                },
                {
                "zone_id": "226",
                "name": "Davaci"
                },
                {
                "zone_id": "227",
                "name": "Fuzuli"
                },
                {
                "zone_id": "228",
                "name": "Ganca"
                },
                {
                "zone_id": "229",
                "name": "Gadabay"
                },
                {
                "zone_id": "230",
                "name": "Goranboy"
                },
                {
                "zone_id": "231",
                "name": "Goycay"
                },
                {
                "zone_id": "232",
                "name": "Haciqabul"
                },
                {
                "zone_id": "233",
                "name": "Imisli"
                },
                {
                "zone_id": "234",
                "name": "Ismayilli"
                },
                {
                "zone_id": "235",
                "name": "Kalbacar"
                },
                {
                "zone_id": "236",
                "name": "Kurdamir"
                },
                {
                "zone_id": "237",
                "name": "Lankaran"
                },
                {
                "zone_id": "238",
                "name": "Lacin"
                },
                {
                "zone_id": "239",
                "name": "Lankaran"
                },
                {
                "zone_id": "240",
                "name": "Lerik"
                },
                {
                "zone_id": "241",
                "name": "Masalli"
                },
                {
                "zone_id": "242",
                "name": "Mingacevir"
                },
                {
                "zone_id": "243",
                "name": "Naftalan"
                },
                {
                "zone_id": "244",
                "name": "Neftcala"
                },
                {
                "zone_id": "245",
                "name": "Oguz"
                },
                {
                "zone_id": "246",
                "name": "Ordubad"
                },
                {
                "zone_id": "247",
                "name": "Qabala"
                },
                {
                "zone_id": "248",
                "name": "Qax"
                },
                {
                "zone_id": "249",
                "name": "Qazax"
                },
                {
                "zone_id": "250",
                "name": "Qobustan"
                },
                {
                "zone_id": "251",
                "name": "Quba"
                },
                {
                "zone_id": "252",
                "name": "Qubadli"
                },
                {
                "zone_id": "253",
                "name": "Qusar"
                },
                {
                "zone_id": "254",
                "name": "Saki"
                },
                {
                "zone_id": "255",
                "name": "Saatli"
                },
                {
                "zone_id": "256",
                "name": "Sabirabad"
                },
                {
                "zone_id": "257",
                "name": "Sadarak"
                },
                {
                "zone_id": "258",
                "name": "Sahbuz"
                },
                {
                "zone_id": "259",
                "name": "Saki"
                },
                {
                "zone_id": "260",
                "name": "Salyan"
                },
                {
                "zone_id": "261",
                "name": "Sumqayit"
                },
                {
                "zone_id": "262",
                "name": "Samaxi"
                },
                {
                "zone_id": "263",
                "name": "Samkir"
                },
                {
                "zone_id": "264",
                "name": "Samux"
                },
                {
                "zone_id": "265",
                "name": "Sarur"
                },
                {
                "zone_id": "266",
                "name": "Siyazan"
                },
                {
                "zone_id": "267",
                "name": "Susa"
                },
                {
                "zone_id": "268",
                "name": "Susa"
                },
                {
                "zone_id": "269",
                "name": "Tartar"
                },
                {
                "zone_id": "270",
                "name": "Tovuz"
                },
                {
                "zone_id": "271",
                "name": "Ucar"
                },
                {
                "zone_id": "272",
                "name": "Xankandi"
                },
                {
                "zone_id": "273",
                "name": "Xacmaz"
                },
                {
                "zone_id": "274",
                "name": "Xanlar"
                },
                {
                "zone_id": "275",
                "name": "Xizi"
                },
                {
                "zone_id": "276",
                "name": "Xocali"
                },
                {
                "zone_id": "277",
                "name": "Xocavand"
                },
                {
                "zone_id": "278",
                "name": "Yardimli"
                },
                {
                "zone_id": "279",
                "name": "Yevlax"
                },
                {
                "zone_id": "280",
                "name": "Zangilan"
                },
                {
                "zone_id": "281",
                "name": "Zaqatala"
                },
                {
                "zone_id": "282",
                "name": "Zardab"
                },
                {
                "zone_id": "283",
                "name": "Naxcivan"
                }
            ]
            },
            {
            "_id": "BHS",
            "country_id": "16",
            "pais_name": "Bahamas",
            "phone_code": "1",
            "departamento": [
                {
                "zone_id": "284",
                "name": "Acklins"
                },
                {
                "zone_id": "285",
                "name": "Berry Islands"
                },
                {
                "zone_id": "286",
                "name": "Bimini"
                },
                {
                "zone_id": "287",
                "name": "Black Point"
                },
                {
                "zone_id": "288",
                "name": "Cat Island"
                },
                {
                "zone_id": "289",
                "name": "Central Abaco"
                },
                {
                "zone_id": "290",
                "name": "Central Andros"
                },
                {
                "zone_id": "291",
                "name": "Central Eleuthera"
                },
                {
                "zone_id": "292",
                "name": "City of Freeport"
                },
                {
                "zone_id": "293",
                "name": "Crooked Island"
                },
                {
                "zone_id": "294",
                "name": "East Grand Bahama"
                },
                {
                "zone_id": "295",
                "name": "Exuma"
                },
                {
                "zone_id": "296",
                "name": "Grand Cay"
                },
                {
                "zone_id": "297",
                "name": "Harbour Island"
                },
                {
                "zone_id": "298",
                "name": "Hope Town"
                },
                {
                "zone_id": "299",
                "name": "Inagua"
                },
                {
                "zone_id": "300",
                "name": "Long Island"
                },
                {
                "zone_id": "301",
                "name": "Mangrove Cay"
                },
                {
                "zone_id": "302",
                "name": "Mayaguana"
                },
                {
                "zone_id": "303",
                "name": "Moore's Island"
                },
                {
                "zone_id": "304",
                "name": "North Abaco"
                },
                {
                "zone_id": "305",
                "name": "North Andros"
                },
                {
                "zone_id": "306",
                "name": "North Eleuthera"
                },
                {
                "zone_id": "307",
                "name": "Ragged Island"
                },
                {
                "zone_id": "308",
                "name": "Rum Cay"
                },
                {
                "zone_id": "309",
                "name": "San Salvador"
                },
                {
                "zone_id": "310",
                "name": "South Abaco"
                },
                {
                "zone_id": "311",
                "name": "South Andros"
                },
                {
                "zone_id": "312",
                "name": "South Eleuthera"
                },
                {
                "zone_id": "313",
                "name": "Spanish Wells"
                },
                {
                "zone_id": "314",
                "name": "West Grand Bahama"
                }
            ]
            },
            {
            "_id": "BHR",
            "country_id": "17",
            "pais_name": "Bahrain",
            "phone_code": "973",
            "departamento": [
                {
                "zone_id": "315",
                "name": "Capital"
                },
                {
                "zone_id": "316",
                "name": "Central"
                },
                {
                "zone_id": "317",
                "name": "Muharraq"
                },
                {
                "zone_id": "318",
                "name": "Northern"
                },
                {
                "zone_id": "319",
                "name": "Southern"
                }
            ]
            },
            {
            "_id": "BGD",
            "country_id": "18",
            "pais_name": "Bangladesh",
            "phone_code": "880",
            "departamento": [
                {
                "zone_id": "320",
                "name": "Barisal"
                },
                {
                "zone_id": "321",
                "name": "Chittagong"
                },
                {
                "zone_id": "322",
                "name": "Dhaka"
                },
                {
                "zone_id": "323",
                "name": "Khulna"
                },
                {
                "zone_id": "324",
                "name": "Rajshahi"
                },
                {
                "zone_id": "325",
                "name": "Sylhet"
                }
            ]
            },
            {
            "_id": "BRB",
            "country_id": "19",
            "pais_name": "Barbados",
            "phone_code": "1",
            "departamento": [
                {
                "zone_id": "326",
                "name": "Christ Church"
                },
                {
                "zone_id": "327",
                "name": "Saint Andrew"
                },
                {
                "zone_id": "328",
                "name": "Saint George"
                },
                {
                "zone_id": "329",
                "name": "Saint James"
                },
                {
                "zone_id": "330",
                "name": "Saint John"
                },
                {
                "zone_id": "331",
                "name": "Saint Joseph"
                },
                {
                "zone_id": "332",
                "name": "Saint Lucy"
                },
                {
                "zone_id": "333",
                "name": "Saint Michael"
                },
                {
                "zone_id": "334",
                "name": "Saint Peter"
                },
                {
                "zone_id": "335",
                "name": "Saint Philip"
                },
                {
                "zone_id": "336",
                "name": "Saint Thomas"
                }
            ]
            },
            {
            "_id": "BLR",
            "country_id": "20",
            "pais_name": "Belarus",
            "phone_code": "375",
            "departamento": [
                {
                "zone_id": "337",
                "name": "Brestskaya (Brest)"
                },
                {
                "zone_id": "338",
                "name": "Homyel'skaya (Homyel')"
                },
                {
                "zone_id": "339",
                "name": "Horad Minsk"
                },
                {
                "zone_id": "340",
                "name": "Hrodzyenskaya (Hrodna)"
                },
                {
                "zone_id": "341",
                "name": "Mahilyowskaya (Mahilyow)"
                },
                {
                "zone_id": "342",
                "name": "Minskaya"
                },
                {
                "zone_id": "343",
                "name": "Vitsyebskaya (Vitsyebsk)"
                }
            ]
            },
            {
            "_id": "BEL",
            "country_id": "21",
            "pais_name": "Belgium",
            "phone_code": "32",
            "departamento": [
                {
                "zone_id": "344",
                "name": "Antwerpen"
                },
                {
                "zone_id": "345",
                "name": "Brabant Wallon"
                },
                {
                "zone_id": "346",
                "name": "Hainaut"
                },
                {
                "zone_id": "347",
                "name": "Liege"
                },
                {
                "zone_id": "348",
                "name": "Limburg"
                },
                {
                "zone_id": "349",
                "name": "Luxembourg"
                },
                {
                "zone_id": "350",
                "name": "Namur"
                },
                {
                "zone_id": "351",
                "name": "Oost-Vlaanderen"
                },
                {
                "zone_id": "352",
                "name": "Vlaams Brabant"
                },
                {
                "zone_id": "353",
                "name": "West-Vlaanderen"
                }
            ]
            },
            {
            "_id": "BLZ",
            "country_id": "22",
            "pais_name": "Belize",
            "phone_code": "501",
            "departamento": [
                {
                "zone_id": "354",
                "name": "Belize"
                },
                {
                "zone_id": "355",
                "name": "Cayo"
                },
                {
                "zone_id": "356",
                "name": "Corozal"
                },
                {
                "zone_id": "357",
                "name": "Orange Walk"
                },
                {
                "zone_id": "358",
                "name": "Stann Creek"
                },
                {
                "zone_id": "359",
                "name": "Toledo"
                }
            ]
            },
            {
            "_id": "BEN",
            "country_id": "23",
            "pais_name": "Benin",
            "phone_code": "229",
            "departamento": [
                {
                "zone_id": "360",
                "name": "Alibori"
                },
                {
                "zone_id": "361",
                "name": "Atakora"
                },
                {
                "zone_id": "362",
                "name": "Atlantique"
                },
                {
                "zone_id": "363",
                "name": "Borgou"
                },
                {
                "zone_id": "364",
                "name": "Collines"
                },
                {
                "zone_id": "365",
                "name": "Donga"
                },
                {
                "zone_id": "366",
                "name": "Kouffo"
                },
                {
                "zone_id": "367",
                "name": "Littoral"
                },
                {
                "zone_id": "368",
                "name": "Mono"
                },
                {
                "zone_id": "369",
                "name": "Oueme"
                },
                {
                "zone_id": "370",
                "name": "Plateau"
                },
                {
                "zone_id": "371",
                "name": "Zou"
                }
            ]
            },
            {
            "_id": "BMU",
            "country_id": "24",
            "pais_name": "Bermuda",
            "phone_code": "1004",
            "departamento": [
                {
                "zone_id": "372",
                "name": "Devonshire"
                },
                {
                "zone_id": "373",
                "name": "Hamilton City"
                },
                {
                "zone_id": "374",
                "name": "Hamilton"
                },
                {
                "zone_id": "375",
                "name": "Paget"
                },
                {
                "zone_id": "376",
                "name": "Pembroke"
                },
                {
                "zone_id": "377",
                "name": "Saint George City"
                },
                {
                "zone_id": "378",
                "name": "Saint George's"
                },
                {
                "zone_id": "379",
                "name": "Sandys"
                },
                {
                "zone_id": "380",
                "name": "Smith's"
                },
                {
                "zone_id": "381",
                "name": "Southampton"
                },
                {
                "zone_id": "382",
                "name": "Warwick"
                }
            ]
            },
            {
            "_id": "BTN",
            "country_id": "25",
            "pais_name": "Bhutan",
            "phone_code": "975",
            "departamento": [
                {
                "zone_id": "383",
                "name": "Bumthang"
                },
                {
                "zone_id": "384",
                "name": "Chukha"
                },
                {
                "zone_id": "385",
                "name": "Dagana"
                },
                {
                "zone_id": "386",
                "name": "Gasa"
                },
                {
                "zone_id": "387",
                "name": "Haa"
                },
                {
                "zone_id": "388",
                "name": "Lhuntse"
                },
                {
                "zone_id": "389",
                "name": "Mongar"
                },
                {
                "zone_id": "390",
                "name": "Paro"
                },
                {
                "zone_id": "391",
                "name": "Pemagatshel"
                },
                {
                "zone_id": "392",
                "name": "Punakha"
                },
                {
                "zone_id": "393",
                "name": "Samdrup Jongkhar"
                },
                {
                "zone_id": "394",
                "name": "Samtse"
                },
                {
                "zone_id": "395",
                "name": "Sarpang"
                },
                {
                "zone_id": "396",
                "name": "Thimphu"
                },
                {
                "zone_id": "397",
                "name": "Trashigang"
                },
                {
                "zone_id": "398",
                "name": "Trashiyangste"
                },
                {
                "zone_id": "399",
                "name": "Trongsa"
                },
                {
                "zone_id": "400",
                "name": "Tsirang"
                },
                {
                "zone_id": "401",
                "name": "Wangdue Phodrang"
                },
                {
                "zone_id": "402",
                "name": "Zhemgang"
                }
            ]
            },
            {
            "_id": "BOL",
            "country_id": "26",
            "pais_name": "Bolivia",
            "phone_code": "591",
            "departamento": [
                {
                "zone_id": "403",
                "name": "Beni"
                },
                {
                "zone_id": "404",
                "name": "Chuquisaca"
                },
                {
                "zone_id": "405",
                "name": "Cochabamba"
                },
                {
                "zone_id": "406",
                "name": "La Paz"
                },
                {
                "zone_id": "407",
                "name": "Oruro"
                },
                {
                "zone_id": "408",
                "name": "Pando"
                },
                {
                "zone_id": "409",
                "name": "Potosi"
                },
                {
                "zone_id": "410",
                "name": "Santa Cruz"
                },
                {
                "zone_id": "411",
                "name": "Tarija"
                }
            ]
            },
            {
            "_id": "BIH",
            "country_id": "27",
            "pais_name": "Bosnia and Herzegowina",
            "phone_code": "387",
            "departamento": [
                {
                "zone_id": "412",
                "name": "Brcko district"
                },
                {
                "zone_id": "413",
                "name": "Unsko-Sanski Kanton"
                },
                {
                "zone_id": "414",
                "name": "Posavski Kanton"
                },
                {
                "zone_id": "415",
                "name": "Tuzlanski Kanton"
                },
                {
                "zone_id": "416",
                "name": "Zenicko-Dobojski Kanton"
                },
                {
                "zone_id": "417",
                "name": "Bosanskopodrinjski Kanton"
                },
                {
                "zone_id": "418",
                "name": "Srednjebosanski Kanton"
                },
                {
                "zone_id": "419",
                "name": "Hercegovacko-neretvanski Kanton"
                },
                {
                "zone_id": "420",
                "name": "Zapadnohercegovacka Zupanija"
                },
                {
                "zone_id": "421",
                "name": "Kanton Sarajevo"
                },
                {
                "zone_id": "422",
                "name": "Zapadnobosanska"
                },
                {
                "zone_id": "423",
                "name": "Banja Luka"
                },
                {
                "zone_id": "424",
                "name": "Doboj"
                },
                {
                "zone_id": "425",
                "name": "Bijeljina"
                },
                {
                "zone_id": "426",
                "name": "Vlasenica"
                },
                {
                "zone_id": "427",
                "name": "Sarajevo-Romanija or Sokolac"
                },
                {
                "zone_id": "428",
                "name": "Foca"
                },
                {
                "zone_id": "429",
                "name": "Trebinje"
                }
            ]
            },
            {
            "_id": "BWA",
            "country_id": "28",
            "pais_name": "Botswana",
            "phone_code": "267",
            "departamento": [
                {
                "zone_id": "430",
                "name": "Central"
                },
                {
                "zone_id": "431",
                "name": "Ghanzi"
                },
                {
                "zone_id": "432",
                "name": "Kgalagadi"
                },
                {
                "zone_id": "433",
                "name": "Kgatleng"
                },
                {
                "zone_id": "434",
                "name": "Kweneng"
                },
                {
                "zone_id": "435",
                "name": "Ngamiland"
                },
                {
                "zone_id": "436",
                "name": "North East"
                },
                {
                "zone_id": "437",
                "name": "North West"
                },
                {
                "zone_id": "438",
                "name": "South East"
                },
                {
                "zone_id": "439",
                "name": "Southern"
                }
            ]
            },
            {
            "_id": "BRA",
            "country_id": "30",
            "pais_name": "Brazil",
            "phone_code": "55",
            "departamento": [
                {
                "zone_id": "440",
                "name": "Acre"
                },
                {
                "zone_id": "441",
                "name": "Alagoas"
                },
                {
                "zone_id": "442",
                "name": "Amapa"
                },
                {
                "zone_id": "443",
                "name": "Amazonas"
                },
                {
                "zone_id": "444",
                "name": "Bahia"
                },
                {
                "zone_id": "445",
                "name": "Ceara"
                },
                {
                "zone_id": "446",
                "name": "Distrito Federal"
                },
                {
                "zone_id": "447",
                "name": "Espirito Santo"
                },
                {
                "zone_id": "448",
                "name": "Goias"
                },
                {
                "zone_id": "449",
                "name": "Maranhao"
                },
                {
                "zone_id": "450",
                "name": "Mato Grosso"
                },
                {
                "zone_id": "451",
                "name": "Mato Grosso do Sul"
                },
                {
                "zone_id": "452",
                "name": "Minas Gerais"
                },
                {
                "zone_id": "453",
                "name": "Para"
                },
                {
                "zone_id": "454",
                "name": "Paraiba"
                },
                {
                "zone_id": "455",
                "name": "Parana"
                },
                {
                "zone_id": "456",
                "name": "Pernambuco"
                },
                {
                "zone_id": "457",
                "name": "Piaui"
                },
                {
                "zone_id": "458",
                "name": "Rio de Janeiro"
                },
                {
                "zone_id": "459",
                "name": "Rio Grande do Norte"
                },
                {
                "zone_id": "460",
                "name": "Rio Grande do Sul"
                },
                {
                "zone_id": "461",
                "name": "Rondonia"
                },
                {
                "zone_id": "462",
                "name": "Roraima"
                },
                {
                "zone_id": "463",
                "name": "Santa Catarina"
                },
                {
                "zone_id": "464",
                "name": "Sao Paulo"
                },
                {
                "zone_id": "465",
                "name": "Sergipe"
                },
                {
                "zone_id": "466",
                "name": "Tocantins"
                }
            ]
            },
            {
            "_id": "BRA",
            "country_id": "30",
            "pais_name": "Brasil",
            "phone_code": "55",
            "departamento": [
                {
                "zone_id": "440",
                "name": "Acre"
                },
                {
                "zone_id": "441",
                "name": "Alagoas"
                },
                {
                "zone_id": "442",
                "name": "Amapa"
                },
                {
                "zone_id": "443",
                "name": "Amazonas"
                },
                {
                "zone_id": "444",
                "name": "Bahia"
                },
                {
                "zone_id": "445",
                "name": "Ceara"
                },
                {
                "zone_id": "446",
                "name": "Distrito Federal"
                },
                {
                "zone_id": "447",
                "name": "Espirito Santo"
                },
                {
                "zone_id": "448",
                "name": "Goias"
                },
                {
                "zone_id": "449",
                "name": "Maranhao"
                },
                {
                "zone_id": "450",
                "name": "Mato Grosso"
                },
                {
                "zone_id": "451",
                "name": "Mato Grosso do Sul"
                },
                {
                "zone_id": "452",
                "name": "Minas Gerais"
                },
                {
                "zone_id": "453",
                "name": "Para"
                },
                {
                "zone_id": "454",
                "name": "Paraiba"
                },
                {
                "zone_id": "455",
                "name": "Parana"
                },
                {
                "zone_id": "456",
                "name": "Pernambuco"
                },
                {
                "zone_id": "457",
                "name": "Piaui"
                },
                {
                "zone_id": "458",
                "name": "Rio de Janeiro"
                },
                {
                "zone_id": "459",
                "name": "Rio Grande do Norte"
                },
                {
                "zone_id": "460",
                "name": "Rio Grande do Sul"
                },
                {
                "zone_id": "461",
                "name": "Rondonia"
                },
                {
                "zone_id": "462",
                "name": "Roraima"
                },
                {
                "zone_id": "463",
                "name": "Santa Catarina"
                },
                {
                "zone_id": "464",
                "name": "Sao Paulo"
                },
                {
                "zone_id": "465",
                "name": "Sergipe"
                },
                {
                "zone_id": "466",
                "name": "Tocantins"
                }
            ]
            },
            {
            "_id": "IOT",
            "country_id": "31",
            "pais_name": "British Indian Ocean Territory",
            "phone_code": "246",
            "departamento": [
                {
                "zone_id": "467",
                "name": "Peros Banhos"
                },
                {
                "zone_id": "468",
                "name": "Salomon Islands"
                },
                {
                "zone_id": "469",
                "name": "Nelsons Island"
                },
                {
                "zone_id": "470",
                "name": "Three Brothers"
                },
                {
                "zone_id": "471",
                "name": "Eagle Islands"
                },
                {
                "zone_id": "472",
                "name": "Danger Island"
                },
                {
                "zone_id": "473",
                "name": "Egmont Islands"
                },
                {
                "zone_id": "474",
                "name": "Diego Garcia"
                }
            ]
            },
            {
            "_id": "BRN",
            "country_id": "32",
            "pais_name": "Brunei Darussalam",
            "phone_code": "673",
            "departamento": [
                {
                "zone_id": "475",
                "name": "Belait"
                },
                {
                "zone_id": "476",
                "name": "Brunei and Muara"
                },
                {
                "zone_id": "477",
                "name": "Temburong"
                },
                {
                "zone_id": "478",
                "name": "Tutong"
                }
            ]
            },
            {
            "_id": "BGR",
            "country_id": "33",
            "pais_name": "Bulgaria",
            "phone_code": "359",
            "departamento": [
                {
                "zone_id": "479",
                "name": "Blagoevgrad"
                },
                {
                "zone_id": "480",
                "name": "Burgas"
                },
                {
                "zone_id": "481",
                "name": "Dobrich"
                },
                {
                "zone_id": "482",
                "name": "Gabrovo"
                },
                {
                "zone_id": "483",
                "name": "Haskovo"
                },
                {
                "zone_id": "484",
                "name": "Kardjali"
                },
                {
                "zone_id": "485",
                "name": "Kyustendil"
                },
                {
                "zone_id": "486",
                "name": "Lovech"
                },
                {
                "zone_id": "487",
                "name": "Montana"
                },
                {
                "zone_id": "488",
                "name": "Pazardjik"
                },
                {
                "zone_id": "489",
                "name": "Pernik"
                },
                {
                "zone_id": "490",
                "name": "Pleven"
                },
                {
                "zone_id": "491",
                "name": "Plovdiv"
                },
                {
                "zone_id": "492",
                "name": "Razgrad"
                },
                {
                "zone_id": "493",
                "name": "Shumen"
                },
                {
                "zone_id": "494",
                "name": "Silistra"
                },
                {
                "zone_id": "495",
                "name": "Sliven"
                },
                {
                "zone_id": "496",
                "name": "Smolyan"
                },
                {
                "zone_id": "497",
                "name": "Sofia"
                },
                {
                "zone_id": "498",
                "name": "Sofia - town"
                },
                {
                "zone_id": "499",
                "name": "Stara Zagora"
                },
                {
                "zone_id": "500",
                "name": "Targovishte"
                },
                {
                "zone_id": "501",
                "name": "Varna"
                },
                {
                "zone_id": "502",
                "name": "Veliko Tarnovo"
                },
                {
                "zone_id": "503",
                "name": "Vidin"
                },
                {
                "zone_id": "504",
                "name": "Vratza"
                },
                {
                "zone_id": "505",
                "name": "Yambol"
                }
            ]
            },
            {
            "_id": "BFA",
            "country_id": "34",
            "pais_name": "Burkina Faso",
            "phone_code": "226",
            "departamento": [
                {
                "zone_id": "506",
                "name": "Bale"
                },
                {
                "zone_id": "507",
                "name": "Bam"
                },
                {
                "zone_id": "508",
                "name": "Banwa"
                },
                {
                "zone_id": "509",
                "name": "Bazega"
                },
                {
                "zone_id": "510",
                "name": "Bougouriba"
                },
                {
                "zone_id": "511",
                "name": "Boulgou"
                },
                {
                "zone_id": "512",
                "name": "Boulkiemde"
                },
                {
                "zone_id": "513",
                "name": "Comoe"
                },
                {
                "zone_id": "514",
                "name": "Ganzourgou"
                },
                {
                "zone_id": "515",
                "name": "Gnagna"
                },
                {
                "zone_id": "516",
                "name": "Gourma"
                },
                {
                "zone_id": "517",
                "name": "Houet"
                },
                {
                "zone_id": "518",
                "name": "Ioba"
                },
                {
                "zone_id": "519",
                "name": "Kadiogo"
                },
                {
                "zone_id": "520",
                "name": "Kenedougou"
                },
                {
                "zone_id": "521",
                "name": "Komondjari"
                },
                {
                "zone_id": "522",
                "name": "Kompienga"
                },
                {
                "zone_id": "523",
                "name": "Kossi"
                },
                {
                "zone_id": "524",
                "name": "Koulpelogo"
                },
                {
                "zone_id": "525",
                "name": "Kouritenga"
                },
                {
                "zone_id": "526",
                "name": "Kourweogo"
                },
                {
                "zone_id": "527",
                "name": "Leraba"
                },
                {
                "zone_id": "528",
                "name": "Loroum"
                },
                {
                "zone_id": "529",
                "name": "Mouhoun"
                },
                {
                "zone_id": "530",
                "name": "Nahouri"
                },
                {
                "zone_id": "531",
                "name": "Namentenga"
                },
                {
                "zone_id": "532",
                "name": "Nayala"
                },
                {
                "zone_id": "533",
                "name": "Noumbiel"
                },
                {
                "zone_id": "534",
                "name": "Oubritenga"
                },
                {
                "zone_id": "535",
                "name": "Oudalan"
                },
                {
                "zone_id": "536",
                "name": "Passore"
                },
                {
                "zone_id": "537",
                "name": "Poni"
                },
                {
                "zone_id": "538",
                "name": "Sanguie"
                },
                {
                "zone_id": "539",
                "name": "Sanmatenga"
                },
                {
                "zone_id": "540",
                "name": "Seno"
                },
                {
                "zone_id": "541",
                "name": "Sissili"
                },
                {
                "zone_id": "542",
                "name": "Soum"
                },
                {
                "zone_id": "543",
                "name": "Sourou"
                },
                {
                "zone_id": "544",
                "name": "Tapoa"
                },
                {
                "zone_id": "545",
                "name": "Tuy"
                },
                {
                "zone_id": "546",
                "name": "Yagha"
                },
                {
                "zone_id": "547",
                "name": "Yatenga"
                },
                {
                "zone_id": "548",
                "name": "Ziro"
                },
                {
                "zone_id": "549",
                "name": "Zondoma"
                },
                {
                "zone_id": "550",
                "name": "Zoundweogo"
                }
            ]
            },
            {
            "_id": "BDI",
            "country_id": "35",
            "pais_name": "Burundi",
            "phone_code": "257",
            "departamento": [
                {
                "zone_id": "551",
                "name": "Bubanza"
                },
                {
                "zone_id": "552",
                "name": "Bujumbura"
                },
                {
                "zone_id": "553",
                "name": "Bururi"
                },
                {
                "zone_id": "554",
                "name": "Cankuzo"
                },
                {
                "zone_id": "555",
                "name": "Cibitoke"
                },
                {
                "zone_id": "556",
                "name": "Gitega"
                },
                {
                "zone_id": "557",
                "name": "Karuzi"
                },
                {
                "zone_id": "558",
                "name": "Kayanza"
                },
                {
                "zone_id": "559",
                "name": "Kirundo"
                },
                {
                "zone_id": "560",
                "name": "Makamba"
                },
                {
                "zone_id": "561",
                "name": "Muramvya"
                },
                {
                "zone_id": "562",
                "name": "Muyinga"
                },
                {
                "zone_id": "563",
                "name": "Mwaro"
                },
                {
                "zone_id": "564",
                "name": "Ngozi"
                },
                {
                "zone_id": "565",
                "name": "Rutana"
                },
                {
                "zone_id": "566",
                "name": "Ruyigi"
                }
            ]
            },
            {
            "_id": "KHM",
            "country_id": "36",
            "pais_name": "Cambodia",
            "phone_code": "855",
            "departamento": [
                {
                "zone_id": "567",
                "name": "Phnom Penh"
                },
                {
                "zone_id": "568",
                "name": "Preah Seihanu (Kompong Som or Sihanoukville)"
                },
                {
                "zone_id": "569",
                "name": "Pailin"
                },
                {
                "zone_id": "570",
                "name": "Keb"
                },
                {
                "zone_id": "571",
                "name": "Banteay Meanchey"
                },
                {
                "zone_id": "572",
                "name": "Battambang"
                },
                {
                "zone_id": "573",
                "name": "Kampong Cham"
                },
                {
                "zone_id": "574",
                "name": "Kampong Chhnang"
                },
                {
                "zone_id": "575",
                "name": "Kampong Speu"
                },
                {
                "zone_id": "576",
                "name": "Kampong Som"
                },
                {
                "zone_id": "577",
                "name": "Kampong Thom"
                },
                {
                "zone_id": "578",
                "name": "Kampot"
                },
                {
                "zone_id": "579",
                "name": "Kandal"
                },
                {
                "zone_id": "580",
                "name": "Kaoh Kong"
                },
                {
                "zone_id": "581",
                "name": "Kratie"
                },
                {
                "zone_id": "582",
                "name": "Mondul Kiri"
                },
                {
                "zone_id": "583",
                "name": "Oddar Meancheay"
                },
                {
                "zone_id": "584",
                "name": "Pursat"
                },
                {
                "zone_id": "585",
                "name": "Preah Vihear"
                },
                {
                "zone_id": "586",
                "name": "Prey Veng"
                },
                {
                "zone_id": "587",
                "name": "Ratanak Kiri"
                },
                {
                "zone_id": "588",
                "name": "Siemreap"
                },
                {
                "zone_id": "589",
                "name": "Stung Treng"
                },
                {
                "zone_id": "590",
                "name": "Svay Rieng"
                },
                {
                "zone_id": "591",
                "name": "Takeo"
                }
            ]
            },
            {
            "_id": "CMR",
            "country_id": "37",
            "pais_name": "Cameroon",
            "phone_code": "237",
            "departamento": [
                {
                "zone_id": "592",
                "name": "Adamawa (Adamaoua)"
                },
                {
                "zone_id": "593",
                "name": "Centre"
                },
                {
                "zone_id": "594",
                "name": "East (Est)"
                },
                {
                "zone_id": "595",
                "name": "Extreme North (Extreme-Nord)"
                },
                {
                "zone_id": "596",
                "name": "Littoral"
                },
                {
                "zone_id": "597",
                "name": "North (Nord)"
                },
                {
                "zone_id": "598",
                "name": "Northwest (Nord-Ouest)"
                },
                {
                "zone_id": "599",
                "name": "West (Ouest)"
                },
                {
                "zone_id": "600",
                "name": "South (Sud)"
                },
                {
                "zone_id": "601",
                "name": "Southwest (Sud-Ouest)."
                }
            ]
            },
            {
            "_id": "CAN",
            "country_id": "38",
            "pais_name": "Canada",
            "phone_code": "1",
            "departamento": [
                {
                "zone_id": "602",
                "name": "Alberta"
                },
                {
                "zone_id": "603",
                "name": "British Columbia"
                },
                {
                "zone_id": "604",
                "name": "Manitoba"
                },
                {
                "zone_id": "605",
                "name": "New Brunswick"
                },
                {
                "zone_id": "606",
                "name": "Newfoundland and Labrador"
                },
                {
                "zone_id": "607",
                "name": "Northwest Territories"
                },
                {
                "zone_id": "608",
                "name": "Nova Scotia"
                },
                {
                "zone_id": "609",
                "name": "Nunavut"
                },
                {
                "zone_id": "610",
                "name": "Ontario"
                },
                {
                "zone_id": "611",
                "name": "Prince Edward Island"
                },
                {
                "zone_id": "612",
                "name": "Qu&eacute;bec"
                },
                {
                "zone_id": "613",
                "name": "Saskatchewan"
                },
                {
                "zone_id": "614",
                "name": "Yukon Territory"
                }
            ]
            },
            {
            "_id": "CPV",
            "country_id": "39",
            "pais_name": "Cape Verde",
            "phone_code": "238",
            "departamento": [
                {
                "zone_id": "615",
                "name": "Boa Vista"
                },
                {
                "zone_id": "616",
                "name": "Brava"
                },
                {
                "zone_id": "617",
                "name": "Calheta de Sao Miguel"
                },
                {
                "zone_id": "618",
                "name": "Maio"
                },
                {
                "zone_id": "619",
                "name": "Mosteiros"
                },
                {
                "zone_id": "620",
                "name": "Paul"
                },
                {
                "zone_id": "621",
                "name": "Porto Novo"
                },
                {
                "zone_id": "622",
                "name": "Praia"
                },
                {
                "zone_id": "623",
                "name": "Ribeira Grande"
                },
                {
                "zone_id": "624",
                "name": "Sal"
                },
                {
                "zone_id": "625",
                "name": "Santa Catarina"
                },
                {
                "zone_id": "626",
                "name": "Santa Cruz"
                },
                {
                "zone_id": "627",
                "name": "Sao Domingos"
                },
                {
                "zone_id": "628",
                "name": "Sao Filipe"
                },
                {
                "zone_id": "629",
                "name": "Sao Nicolau"
                },
                {
                "zone_id": "630",
                "name": "Sao Vicente"
                },
                {
                "zone_id": "631",
                "name": "Tarrafal"
                }
            ]
            },
            {
            "_id": "CYM",
            "country_id": "40",
            "pais_name": "Cayman Islands",
            "phone_code": "1006",
            "departamento": [
                {
                "zone_id": "632",
                "name": "Creek"
                },
                {
                "zone_id": "633",
                "name": "Eastern"
                },
                {
                "zone_id": "634",
                "name": "Midland"
                },
                {
                "zone_id": "635",
                "name": "South Town"
                },
                {
                "zone_id": "636",
                "name": "Spot Bay"
                },
                {
                "zone_id": "637",
                "name": "Stake Bay"
                },
                {
                "zone_id": "638",
                "name": "West End"
                },
                {
                "zone_id": "639",
                "name": "Western"
                }
            ]
            },
            {
            "_id": "CAF",
            "country_id": "41",
            "pais_name": "Central African Republic",
            "phone_code": "236",
            "departamento": [
                {
                "zone_id": "640",
                "name": "Bamingui-Bangoran"
                },
                {
                "zone_id": "641",
                "name": "Basse-Kotto"
                },
                {
                "zone_id": "642",
                "name": "Haute-Kotto"
                },
                {
                "zone_id": "643",
                "name": "Haut-Mbomou"
                },
                {
                "zone_id": "644",
                "name": "Kemo"
                },
                {
                "zone_id": "645",
                "name": "Lobaye"
                },
                {
                "zone_id": "646",
                "name": "Mambere-Kade\u00d4"
                },
                {
                "zone_id": "647",
                "name": "Mbomou"
                },
                {
                "zone_id": "648",
                "name": "Nana-Mambere"
                },
                {
                "zone_id": "649",
                "name": "Ombella-M'Poko"
                },
                {
                "zone_id": "650",
                "name": "Ouaka"
                },
                {
                "zone_id": "651",
                "name": "Ouham"
                },
                {
                "zone_id": "652",
                "name": "Ouham-Pende"
                },
                {
                "zone_id": "653",
                "name": "Vakaga"
                },
                {
                "zone_id": "654",
                "name": "Nana-Grebizi"
                },
                {
                "zone_id": "655",
                "name": "Sangha-Mbaere"
                },
                {
                "zone_id": "656",
                "name": "Bangui"
                }
            ]
            },
            {
            "_id": "TCD",
            "country_id": "42",
            "pais_name": "Chad",
            "phone_code": "235",
            "departamento": [
                {
                "zone_id": "657",
                "name": "Batha"
                },
                {
                "zone_id": "658",
                "name": "Biltine"
                },
                {
                "zone_id": "659",
                "name": "Borkou-Ennedi-Tibesti"
                },
                {
                "zone_id": "660",
                "name": "Chari-Baguirmi"
                },
                {
                "zone_id": "661",
                "name": "Guera"
                },
                {
                "zone_id": "662",
                "name": "Kanem"
                },
                {
                "zone_id": "663",
                "name": "Lac"
                },
                {
                "zone_id": "664",
                "name": "Logone Occidental"
                },
                {
                "zone_id": "665",
                "name": "Logone Oriental"
                },
                {
                "zone_id": "666",
                "name": "Mayo-Kebbi"
                },
                {
                "zone_id": "667",
                "name": "Moyen-Chari"
                },
                {
                "zone_id": "668",
                "name": "Ouaddai"
                },
                {
                "zone_id": "669",
                "name": "Salamat"
                },
                {
                "zone_id": "670",
                "name": "Tandjile"
                }
            ]
            },
            {
            "_id": "CHL",
            "country_id": "43",
            "pais_name": "Chile",
            "phone_code": "56",
            "departamento": [
                {
                "zone_id": "671",
                "name": "Aisen del General Carlos Ibanez"
                },
                {
                "zone_id": "672",
                "name": "Antofagasta"
                },
                {
                "zone_id": "673",
                "name": "Araucania"
                },
                {
                "zone_id": "674",
                "name": "Atacama"
                },
                {
                "zone_id": "675",
                "name": "Bio-Bio"
                },
                {
                "zone_id": "676",
                "name": "Coquimbo"
                },
                {
                "zone_id": "677",
                "name": "Libertador General Bernardo O'Hi"
                },
                {
                "zone_id": "678",
                "name": "Los Lagos"
                },
                {
                "zone_id": "679",
                "name": "Magallanes y de la Antartica Chi"
                },
                {
                "zone_id": "680",
                "name": "Maule"
                },
                {
                "zone_id": "681",
                "name": "Region Metropolitana"
                },
                {
                "zone_id": "682",
                "name": "Tarapaca"
                },
                {
                "zone_id": "683",
                "name": "Valparaiso"
                }
            ]
            },
            {
            "_id": "CHN",
            "country_id": "44",
            "pais_name": "China",
            "phone_code": "86",
            "departamento": [
                {
                "zone_id": "684",
                "name": "Anhui"
                },
                {
                "zone_id": "685",
                "name": "Beijing"
                },
                {
                "zone_id": "686",
                "name": "Chongqing"
                },
                {
                "zone_id": "687",
                "name": "Fujian"
                },
                {
                "zone_id": "688",
                "name": "Gansu"
                },
                {
                "zone_id": "689",
                "name": "Guangdong"
                },
                {
                "zone_id": "690",
                "name": "Guangxi"
                },
                {
                "zone_id": "691",
                "name": "Guizhou"
                },
                {
                "zone_id": "692",
                "name": "Hainan"
                },
                {
                "zone_id": "693",
                "name": "Hebei"
                },
                {
                "zone_id": "694",
                "name": "Heilongjiang"
                },
                {
                "zone_id": "695",
                "name": "Henan"
                },
                {
                "zone_id": "696",
                "name": "Hong Kong"
                },
                {
                "zone_id": "697",
                "name": "Hubei"
                },
                {
                "zone_id": "698",
                "name": "Hunan"
                },
                {
                "zone_id": "699",
                "name": "Inner Mongolia"
                },
                {
                "zone_id": "700",
                "name": "Jiangsu"
                },
                {
                "zone_id": "701",
                "name": "Jiangxi"
                },
                {
                "zone_id": "702",
                "name": "Jilin"
                },
                {
                "zone_id": "703",
                "name": "Liaoning"
                },
                {
                "zone_id": "704",
                "name": "Macau"
                },
                {
                "zone_id": "705",
                "name": "Ningxia"
                },
                {
                "zone_id": "706",
                "name": "Shaanxi"
                },
                {
                "zone_id": "707",
                "name": "Shandong"
                },
                {
                "zone_id": "708",
                "name": "Shanghai"
                },
                {
                "zone_id": "709",
                "name": "Shanxi"
                },
                {
                "zone_id": "710",
                "name": "Sichuan"
                },
                {
                "zone_id": "711",
                "name": "Tianjin"
                },
                {
                "zone_id": "712",
                "name": "Xinjiang"
                },
                {
                "zone_id": "713",
                "name": "Yunnan"
                },
                {
                "zone_id": "714",
                "name": "Zhejiang"
                }
            ]
            },
            {
            "_id": "CCK",
            "country_id": "46",
            "pais_name": "Cocos (Keeling) Islands",
            "phone_code": "61",
            "departamento": [
                {
                "zone_id": "715",
                "name": "Direction Island"
                },
                {
                "zone_id": "716",
                "name": "Home Island"
                },
                {
                "zone_id": "717",
                "name": "Horsburgh Island"
                },
                {
                "zone_id": "718",
                "name": "South Island"
                },
                {
                "zone_id": "719",
                "name": "West Island"
                }
            ]
            },
            {
            "_id": "COL",
            "country_id": "47",
            "pais_name": "Colombia",
            "phone_code": "57",
            "departamento": [
                {
                "zone_id": "720",
                "name": "Amazonas"
                },
                {
                "zone_id": "721",
                "name": "Antioquia"
                },
                {
                "zone_id": "722",
                "name": "Arauca"
                },
                {
                "zone_id": "723",
                "name": "Atlantico"
                },
                {
                "zone_id": "725",
                "name": "Bolivar"
                },
                {
                "zone_id": "726",
                "name": "Boyaca"
                },
                {
                "zone_id": "727",
                "name": "Caldas"
                },
                {
                "zone_id": "728",
                "name": "Caqueta"
                },
                {
                "zone_id": "729",
                "name": "Casanare"
                },
                {
                "zone_id": "730",
                "name": "Cauca"
                },
                {
                "zone_id": "731",
                "name": "Cesar"
                },
                {
                "zone_id": "732",
                "name": "Choco"
                },
                {
                "zone_id": "733",
                "name": "Cordoba"
                },
                {
                "zone_id": "734",
                "name": "Cundinamarca"
                },
                {
                "zone_id": "735",
                "name": "Guainia"
                },
                {
                "zone_id": "736",
                "name": "Guajira"
                },
                {
                "zone_id": "737",
                "name": "Guaviare"
                },
                {
                "zone_id": "738",
                "name": "Huila"
                },
                {
                "zone_id": "739",
                "name": "Magdalena"
                },
                {
                "zone_id": "740",
                "name": "Meta"
                },
                {
                "zone_id": "741",
                "name": "Narino"
                },
                {
                "zone_id": "742",
                "name": "Norte de Santander"
                },
                {
                "zone_id": "743",
                "name": "Putumayo"
                },
                {
                "zone_id": "744",
                "name": "Quindio"
                },
                {
                "zone_id": "745",
                "name": "Risaralda"
                },
                {
                "zone_id": "746",
                "name": "San Andres y Providencia"
                },
                {
                "zone_id": "747",
                "name": "Santander"
                },
                {
                "zone_id": "748",
                "name": "Sucre"
                },
                {
                "zone_id": "749",
                "name": "Tolima"
                },
                {
                "zone_id": "750",
                "name": "Valle del Cauca"
                },
                {
                "zone_id": "751",
                "name": "Vaupes"
                },
                {
                "zone_id": "752",
                "name": "Vichada"
                }
            ]
            },
            {
            "_id": "COM",
            "country_id": "48",
            "pais_name": "Comoros",
            "phone_code": "269",
            "departamento": [
                {
                "zone_id": "753",
                "name": "Grande Comore"
                },
                {
                "zone_id": "754",
                "name": "Anjouan"
                },
                {
                "zone_id": "755",
                "name": "Moheli"
                }
            ]
            },
            {
            "_id": "COG",
            "country_id": "49",
            "pais_name": "Congo",
            "phone_code": "242",
            "departamento": [
                {
                "zone_id": "756",
                "name": "Bouenza"
                },
                {
                "zone_id": "757",
                "name": "Brazzaville"
                },
                {
                "zone_id": "758",
                "name": "Cuvette"
                },
                {
                "zone_id": "759",
                "name": "Cuvette-Ouest"
                },
                {
                "zone_id": "760",
                "name": "Kouilou"
                },
                {
                "zone_id": "761",
                "name": "Lekoumou"
                },
                {
                "zone_id": "762",
                "name": "Likouala"
                },
                {
                "zone_id": "763",
                "name": "Niari"
                },
                {
                "zone_id": "764",
                "name": "Plateaux"
                },
                {
                "zone_id": "765",
                "name": "Pool"
                },
                {
                "zone_id": "766",
                "name": "Sangha"
                }
            ]
            },
            {
            "_id": "COK",
            "country_id": "50",
            "pais_name": "Cook Islands",
            "phone_code": "682",
            "departamento": [
                {
                "zone_id": "767",
                "name": "Pukapuka"
                },
                {
                "zone_id": "768",
                "name": "Rakahanga"
                },
                {
                "zone_id": "769",
                "name": "Manihiki"
                },
                {
                "zone_id": "770",
                "name": "Penrhyn"
                },
                {
                "zone_id": "771",
                "name": "Nassau Island"
                },
                {
                "zone_id": "772",
                "name": "Surwarrow"
                },
                {
                "zone_id": "773",
                "name": "Palmerston"
                },
                {
                "zone_id": "774",
                "name": "Aitutaki"
                },
                {
                "zone_id": "775",
                "name": "Manuae"
                },
                {
                "zone_id": "776",
                "name": "Takutea"
                },
                {
                "zone_id": "777",
                "name": "Mitiaro"
                },
                {
                "zone_id": "778",
                "name": "Atiu"
                },
                {
                "zone_id": "779",
                "name": "Mauke"
                },
                {
                "zone_id": "780",
                "name": "Rarotonga"
                },
                {
                "zone_id": "781",
                "name": "Mangaia"
                }
            ]
            },
            {
            "_id": "CRI",
            "country_id": "51",
            "pais_name": "Costa Rica",
            "phone_code": "506",
            "departamento": [
                {
                "zone_id": "782",
                "name": "Alajuela"
                },
                {
                "zone_id": "783",
                "name": "Cartago"
                },
                {
                "zone_id": "784",
                "name": "Guanacaste"
                },
                {
                "zone_id": "785",
                "name": "Heredia"
                },
                {
                "zone_id": "786",
                "name": "Limon"
                },
                {
                "zone_id": "787",
                "name": "Puntarenas"
                },
                {
                "zone_id": "788",
                "name": "San Jose"
                }
            ]
            },
            {
            "_id": "CIV",
            "country_id": "52",
            "pais_name": "Cote D'Ivoire",
            "phone_code": "0",
            "departamento": [
                {
                "zone_id": "789",
                "name": "Abengourou"
                },
                {
                "zone_id": "790",
                "name": "Abidjan"
                },
                {
                "zone_id": "791",
                "name": "Aboisso"
                },
                {
                "zone_id": "792",
                "name": "Adiake"
                },
                {
                "zone_id": "793",
                "name": "Adzope"
                },
                {
                "zone_id": "794",
                "name": "Agboville"
                },
                {
                "zone_id": "795",
                "name": "Agnibilekrou"
                },
                {
                "zone_id": "796",
                "name": "Alepe"
                },
                {
                "zone_id": "797",
                "name": "Bocanda"
                },
                {
                "zone_id": "798",
                "name": "Bangolo"
                },
                {
                "zone_id": "799",
                "name": "Beoumi"
                },
                {
                "zone_id": "800",
                "name": "Biankouma"
                },
                {
                "zone_id": "801",
                "name": "Bondoukou"
                },
                {
                "zone_id": "802",
                "name": "Bongouanou"
                },
                {
                "zone_id": "803",
                "name": "Bouafle"
                },
                {
                "zone_id": "804",
                "name": "Bouake"
                },
                {
                "zone_id": "805",
                "name": "Bouna"
                },
                {
                "zone_id": "806",
                "name": "Boundiali"
                },
                {
                "zone_id": "807",
                "name": "Dabakala"
                },
                {
                "zone_id": "808",
                "name": "Dabou"
                },
                {
                "zone_id": "809",
                "name": "Daloa"
                },
                {
                "zone_id": "810",
                "name": "Danane"
                },
                {
                "zone_id": "811",
                "name": "Daoukro"
                },
                {
                "zone_id": "812",
                "name": "Dimbokro"
                },
                {
                "zone_id": "813",
                "name": "Divo"
                },
                {
                "zone_id": "814",
                "name": "Duekoue"
                },
                {
                "zone_id": "815",
                "name": "Ferkessedougou"
                },
                {
                "zone_id": "816",
                "name": "Gagnoa"
                },
                {
                "zone_id": "817",
                "name": "Grand-Bassam"
                },
                {
                "zone_id": "818",
                "name": "Grand-Lahou"
                },
                {
                "zone_id": "819",
                "name": "Guiglo"
                },
                {
                "zone_id": "820",
                "name": "Issia"
                },
                {
                "zone_id": "821",
                "name": "Jacqueville"
                },
                {
                "zone_id": "822",
                "name": "Katiola"
                },
                {
                "zone_id": "823",
                "name": "Korhogo"
                },
                {
                "zone_id": "824",
                "name": "Lakota"
                },
                {
                "zone_id": "825",
                "name": "Man"
                },
                {
                "zone_id": "826",
                "name": "Mankono"
                },
                {
                "zone_id": "827",
                "name": "Mbahiakro"
                },
                {
                "zone_id": "828",
                "name": "Odienne"
                },
                {
                "zone_id": "829",
                "name": "Oume"
                },
                {
                "zone_id": "830",
                "name": "Sakassou"
                },
                {
                "zone_id": "831",
                "name": "San-Pedro"
                },
                {
                "zone_id": "832",
                "name": "Sassandra"
                },
                {
                "zone_id": "833",
                "name": "Seguela"
                },
                {
                "zone_id": "834",
                "name": "Sinfra"
                },
                {
                "zone_id": "835",
                "name": "Soubre"
                },
                {
                "zone_id": "836",
                "name": "Tabou"
                },
                {
                "zone_id": "837",
                "name": "Tanda"
                },
                {
                "zone_id": "838",
                "name": "Tiebissou"
                },
                {
                "zone_id": "839",
                "name": "Tingrela"
                },
                {
                "zone_id": "840",
                "name": "Tiassale"
                },
                {
                "zone_id": "841",
                "name": "Touba"
                },
                {
                "zone_id": "842",
                "name": "Toulepleu"
                },
                {
                "zone_id": "843",
                "name": "Toumodi"
                },
                {
                "zone_id": "844",
                "name": "Vavoua"
                },
                {
                "zone_id": "845",
                "name": "Yamoussoukro"
                },
                {
                "zone_id": "846",
                "name": "Zuenoula"
                }
            ]
            },
            {
            "_id": "HRV",
            "country_id": "53",
            "pais_name": "Croatia",
            "phone_code": "385",
            "departamento": [
                {
                "zone_id": "847",
                "name": "Bjelovar-Bilogora"
                },
                {
                "zone_id": "848",
                "name": "City of Zagreb"
                },
                {
                "zone_id": "849",
                "name": "Dubrovnik-Neretva"
                },
                {
                "zone_id": "850",
                "name": "Istra"
                },
                {
                "zone_id": "851",
                "name": "Karlovac"
                },
                {
                "zone_id": "852",
                "name": "Koprivnica-Krizevci"
                },
                {
                "zone_id": "853",
                "name": "Krapina-Zagorje"
                },
                {
                "zone_id": "854",
                "name": "Lika-Senj"
                },
                {
                "zone_id": "855",
                "name": "Medimurje"
                },
                {
                "zone_id": "856",
                "name": "Osijek-Baranja"
                },
                {
                "zone_id": "857",
                "name": "Pozega-Slavonia"
                },
                {
                "zone_id": "858",
                "name": "Primorje-Gorski Kotar"
                },
                {
                "zone_id": "859",
                "name": "Sibenik"
                },
                {
                "zone_id": "860",
                "name": "Sisak-Moslavina"
                },
                {
                "zone_id": "861",
                "name": "Slavonski Brod-Posavina"
                },
                {
                "zone_id": "862",
                "name": "Split-Dalmatia"
                },
                {
                "zone_id": "863",
                "name": "Varazdin"
                },
                {
                "zone_id": "864",
                "name": "Virovitica-Podravina"
                },
                {
                "zone_id": "865",
                "name": "Vukovar-Srijem"
                },
                {
                "zone_id": "866",
                "name": "Zadar-Knin"
                },
                {
                "zone_id": "867",
                "name": "Zagreb"
                }
            ]
            },
            {
            "_id": "CUB",
            "country_id": "54",
            "pais_name": "Cuba",
            "phone_code": "53",
            "departamento": [
                {
                "zone_id": "868",
                "name": "Camaguey"
                },
                {
                "zone_id": "869",
                "name": "Ciego de Avila"
                },
                {
                "zone_id": "870",
                "name": "Cienfuegos"
                },
                {
                "zone_id": "871",
                "name": "Ciudad de La Habana"
                },
                {
                "zone_id": "872",
                "name": "Granma"
                },
                {
                "zone_id": "873",
                "name": "Guantanamo"
                },
                {
                "zone_id": "874",
                "name": "Holguin"
                },
                {
                "zone_id": "875",
                "name": "Isla de la Juventud"
                },
                {
                "zone_id": "876",
                "name": "La Habana"
                },
                {
                "zone_id": "877",
                "name": "Las Tunas"
                },
                {
                "zone_id": "878",
                "name": "Matanzas"
                },
                {
                "zone_id": "879",
                "name": "Pinar del Rio"
                },
                {
                "zone_id": "880",
                "name": "Sancti Spiritus"
                },
                {
                "zone_id": "881",
                "name": "Santiago de Cuba"
                },
                {
                "zone_id": "882",
                "name": "Villa Clara"
                }
            ]
            },
            {
            "_id": "CYP",
            "country_id": "55",
            "pais_name": "Cyprus",
            "phone_code": "357",
            "departamento": [
                {
                "zone_id": "883",
                "name": "Famagusta"
                },
                {
                "zone_id": "884",
                "name": "Kyrenia"
                },
                {
                "zone_id": "885",
                "name": "Larnaca"
                },
                {
                "zone_id": "886",
                "name": "Limassol"
                },
                {
                "zone_id": "887",
                "name": "Nicosia"
                },
                {
                "zone_id": "888",
                "name": "Paphos"
                }
            ]
            },
            {
            "_id": "CZE",
            "country_id": "56",
            "pais_name": "Czech Republic",
            "phone_code": "420",
            "departamento": [
                {
                "zone_id": "889",
                "name": "Ustecky"
                },
                {
                "zone_id": "890",
                "name": "Jihocesky"
                },
                {
                "zone_id": "891",
                "name": "Jihomoravsky"
                },
                {
                "zone_id": "892",
                "name": "Karlovarsky"
                },
                {
                "zone_id": "893",
                "name": "Kralovehradecky"
                },
                {
                "zone_id": "894",
                "name": "Liberecky"
                },
                {
                "zone_id": "895",
                "name": "Moravskoslezsky"
                },
                {
                "zone_id": "896",
                "name": "Olomoucky"
                },
                {
                "zone_id": "897",
                "name": "Pardubicky"
                },
                {
                "zone_id": "898",
                "name": "Plzensky"
                },
                {
                "zone_id": "899",
                "name": "Praha"
                },
                {
                "zone_id": "900",
                "name": "Stredocesky"
                },
                {
                "zone_id": "901",
                "name": "Vysocina"
                },
                {
                "zone_id": "902",
                "name": "Zlinsky"
                }
            ]
            },
            {
            "_id": "DNK",
            "country_id": "57",
            "pais_name": "Denmark",
            "phone_code": "45",
            "departamento": [
                {
                "zone_id": "903",
                "name": "Arhus"
                },
                {
                "zone_id": "904",
                "name": "Bornholm"
                },
                {
                "zone_id": "905",
                "name": "Copenhagen"
                },
                {
                "zone_id": "906",
                "name": "Faroe Islands"
                },
                {
                "zone_id": "907",
                "name": "Frederiksborg"
                },
                {
                "zone_id": "908",
                "name": "Fyn"
                },
                {
                "zone_id": "909",
                "name": "Kobenhavn"
                },
                {
                "zone_id": "910",
                "name": "Nordjylland"
                },
                {
                "zone_id": "911",
                "name": "Ribe"
                },
                {
                "zone_id": "912",
                "name": "Ringkobing"
                },
                {
                "zone_id": "913",
                "name": "Roskilde"
                },
                {
                "zone_id": "914",
                "name": "Sonderjylland"
                },
                {
                "zone_id": "915",
                "name": "Storstrom"
                },
                {
                "zone_id": "916",
                "name": "Vejle"
                },
                {
                "zone_id": "917",
                "name": "Vestj&aelig;lland"
                },
                {
                "zone_id": "918",
                "name": "Viborg"
                }
            ]
            },
            {
            "_id": "DJI",
            "country_id": "58",
            "pais_name": "Djibouti",
            "phone_code": "253",
            "departamento": [
                {
                "zone_id": "919",
                "name": "'Ali Sabih"
                },
                {
                "zone_id": "920",
                "name": "Dikhil"
                },
                {
                "zone_id": "921",
                "name": "Djibouti"
                },
                {
                "zone_id": "922",
                "name": "Obock"
                },
                {
                "zone_id": "923",
                "name": "Tadjoura"
                }
            ]
            },
            {
            "_id": "DMA",
            "country_id": "59",
            "pais_name": "Dominica",
            "phone_code": "1",
            "departamento": [
                {
                "zone_id": "924",
                "name": "Saint Andrew Parish"
                },
                {
                "zone_id": "925",
                "name": "Saint David Parish"
                },
                {
                "zone_id": "926",
                "name": "Saint George Parish"
                },
                {
                "zone_id": "927",
                "name": "Saint John Parish"
                },
                {
                "zone_id": "928",
                "name": "Saint Joseph Parish"
                },
                {
                "zone_id": "929",
                "name": "Saint Luke Parish"
                },
                {
                "zone_id": "930",
                "name": "Saint Mark Parish"
                },
                {
                "zone_id": "931",
                "name": "Saint Patrick Parish"
                },
                {
                "zone_id": "932",
                "name": "Saint Paul Parish"
                },
                {
                "zone_id": "933",
                "name": "Saint Peter Parish"
                }
            ]
            },
            {
            "_id": "DOM",
            "country_id": "60",
            "pais_name": "Dominican Republic",
            "phone_code": "1809",
            "departamento": [
                {
                "zone_id": "934",
                "name": "Distrito Nacional"
                },
                {
                "zone_id": "935",
                "name": "Azua"
                },
                {
                "zone_id": "936",
                "name": "Baoruco"
                },
                {
                "zone_id": "937",
                "name": "Barahona"
                },
                {
                "zone_id": "938",
                "name": "Dajabon"
                },
                {
                "zone_id": "939",
                "name": "Duarte"
                },
                {
                "zone_id": "940",
                "name": "Elias Pina"
                },
                {
                "zone_id": "941",
                "name": "El Seybo"
                },
                {
                "zone_id": "942",
                "name": "Espaillat"
                },
                {
                "zone_id": "943",
                "name": "Hato Mayor"
                },
                {
                "zone_id": "944",
                "name": "Independencia"
                },
                {
                "zone_id": "945",
                "name": "La Altagracia"
                },
                {
                "zone_id": "946",
                "name": "La Romana"
                },
                {
                "zone_id": "947",
                "name": "La Vega"
                },
                {
                "zone_id": "948",
                "name": "Maria Trinidad Sanchez"
                },
                {
                "zone_id": "949",
                "name": "Monsenor Nouel"
                },
                {
                "zone_id": "950",
                "name": "Monte Cristi"
                },
                {
                "zone_id": "951",
                "name": "Monte Plata"
                },
                {
                "zone_id": "952",
                "name": "Pedernales"
                },
                {
                "zone_id": "953",
                "name": "Peravia (Bani)"
                },
                {
                "zone_id": "954",
                "name": "Puerto Plata"
                },
                {
                "zone_id": "955",
                "name": "Salcedo"
                },
                {
                "zone_id": "956",
                "name": "Samana"
                },
                {
                "zone_id": "957",
                "name": "Sanchez Ramirez"
                },
                {
                "zone_id": "958",
                "name": "San Cristobal"
                },
                {
                "zone_id": "959",
                "name": "San Jose de Ocoa"
                },
                {
                "zone_id": "960",
                "name": "San Juan"
                },
                {
                "zone_id": "961",
                "name": "San Pedro de Macoris"
                },
                {
                "zone_id": "962",
                "name": "Santiago"
                },
                {
                "zone_id": "963",
                "name": "Santiago Rodriguez"
                },
                {
                "zone_id": "964",
                "name": "Santo Domingo"
                },
                {
                "zone_id": "965",
                "name": "Valverde"
                }
            ]
            },
            {
            "_id": "TMP",
            "country_id": "61",
            "pais_name": "East Timor",
            "phone_code": "670",
            "departamento": [
                {
                "zone_id": "966",
                "name": "Aileu"
                },
                {
                "zone_id": "967",
                "name": "Ainaro"
                },
                {
                "zone_id": "968",
                "name": "Baucau"
                },
                {
                "zone_id": "969",
                "name": "Bobonaro"
                },
                {
                "zone_id": "970",
                "name": "Cova Lima"
                },
                {
                "zone_id": "971",
                "name": "Dili"
                },
                {
                "zone_id": "972",
                "name": "Ermera"
                },
                {
                "zone_id": "973",
                "name": "Lautem"
                },
                {
                "zone_id": "974",
                "name": "Liquica"
                },
                {
                "zone_id": "975",
                "name": "Manatuto"
                },
                {
                "zone_id": "976",
                "name": "Manufahi"
                },
                {
                "zone_id": "977",
                "name": "Oecussi"
                },
                {
                "zone_id": "978",
                "name": "Viqueque"
                }
            ]
            },
            {
            "_id": "ECU",
            "country_id": "62",
            "pais_name": "Ecuador",
            "phone_code": "593",
            "departamento": [
                {
                "zone_id": "979",
                "name": "Azuay"
                },
                {
                "zone_id": "980",
                "name": "Bolivar"
                },
                {
                "zone_id": "981",
                "name": "Ca&ntilde;ar"
                },
                {
                "zone_id": "982",
                "name": "Carchi"
                },
                {
                "zone_id": "983",
                "name": "Chimborazo"
                },
                {
                "zone_id": "984",
                "name": "Cotopaxi"
                },
                {
                "zone_id": "985",
                "name": "El Oro"
                },
                {
                "zone_id": "986",
                "name": "Esmeraldas"
                },
                {
                "zone_id": "987",
                "name": "Gal&aacute;pagos"
                },
                {
                "zone_id": "988",
                "name": "Guayas"
                },
                {
                "zone_id": "989",
                "name": "Imbabura"
                },
                {
                "zone_id": "990",
                "name": "Loja"
                },
                {
                "zone_id": "991",
                "name": "Los Rios"
                },
                {
                "zone_id": "992",
                "name": "Manab&iacute;"
                },
                {
                "zone_id": "993",
                "name": "Morona Santiago"
                },
                {
                "zone_id": "994",
                "name": "Napo"
                },
                {
                "zone_id": "995",
                "name": "Orellana"
                },
                {
                "zone_id": "996",
                "name": "Pastaza"
                },
                {
                "zone_id": "997",
                "name": "Pichincha"
                },
                {
                "zone_id": "998",
                "name": "Sucumb&iacute;os"
                },
                {
                "zone_id": "999",
                "name": "Tungurahua"
                },
                {
                "zone_id": "1000",
                "name": "Zamora Chinchipe"
                }
            ]
            },
            {
            "_id": "EGY",
            "country_id": "63",
            "pais_name": "Egypt",
            "phone_code": "20",
            "departamento": [
                {
                "zone_id": "1001",
                "name": "Ad Daqahliyah"
                },
                {
                "zone_id": "1002",
                "name": "Al Bahr al Ahmar"
                },
                {
                "zone_id": "1003",
                "name": "Al Buhayrah"
                },
                {
                "zone_id": "1004",
                "name": "Al Fayyum"
                },
                {
                "zone_id": "1005",
                "name": "Al Gharbiyah"
                },
                {
                "zone_id": "1006",
                "name": "Al Iskandariyah"
                },
                {
                "zone_id": "1007",
                "name": "Al Isma'iliyah"
                },
                {
                "zone_id": "1008",
                "name": "Al Jizah"
                },
                {
                "zone_id": "1009",
                "name": "Al Minufiyah"
                },
                {
                "zone_id": "1010",
                "name": "Al Minya"
                },
                {
                "zone_id": "1011",
                "name": "Al Qahirah"
                },
                {
                "zone_id": "1012",
                "name": "Al Qalyubiyah"
                },
                {
                "zone_id": "1013",
                "name": "Al Wadi al Jadid"
                },
                {
                "zone_id": "1014",
                "name": "Ash Sharqiyah"
                },
                {
                "zone_id": "1015",
                "name": "As Suways"
                },
                {
                "zone_id": "1016",
                "name": "Aswan"
                },
                {
                "zone_id": "1017",
                "name": "Asyut"
                },
                {
                "zone_id": "1018",
                "name": "Bani Suwayf"
                },
                {
                "zone_id": "1019",
                "name": "Bur Sa'id"
                },
                {
                "zone_id": "1020",
                "name": "Dumyat"
                },
                {
                "zone_id": "1021",
                "name": "Janub Sina'"
                },
                {
                "zone_id": "1022",
                "name": "Kafr ash Shaykh"
                },
                {
                "zone_id": "1023",
                "name": "Matruh"
                },
                {
                "zone_id": "1024",
                "name": "Qina"
                },
                {
                "zone_id": "1025",
                "name": "Shamal Sina'"
                },
                {
                "zone_id": "1026",
                "name": "Suhaj"
                }
            ]
            },
            {
            "_id": "SLV",
            "country_id": "64",
            "pais_name": "El Salvador",
            "phone_code": "503",
            "departamento": [
                {
                "zone_id": "1027",
                "name": "Ahuachapan"
                },
                {
                "zone_id": "1028",
                "name": "Cabanas"
                },
                {
                "zone_id": "1029",
                "name": "Chalatenango"
                },
                {
                "zone_id": "1030",
                "name": "Cuscatlan"
                },
                {
                "zone_id": "1031",
                "name": "La Libertad"
                },
                {
                "zone_id": "1032",
                "name": "La Paz"
                },
                {
                "zone_id": "1033",
                "name": "La Union"
                },
                {
                "zone_id": "1034",
                "name": "Morazan"
                },
                {
                "zone_id": "1035",
                "name": "San Miguel"
                },
                {
                "zone_id": "1036",
                "name": "San Salvador"
                },
                {
                "zone_id": "1037",
                "name": "San Vicente"
                },
                {
                "zone_id": "1038",
                "name": "Santa Ana"
                },
                {
                "zone_id": "1039",
                "name": "Sonsonate"
                },
                {
                "zone_id": "1040",
                "name": "Usulutan"
                }
            ]
            },
            {
            "_id": "GNQ",
            "country_id": "65",
            "pais_name": "Equatorial Guinea",
            "phone_code": "240",
            "departamento": [
                {
                "zone_id": "1041",
                "name": "Provincia Annobon"
                },
                {
                "zone_id": "1042",
                "name": "Provincia Bioko Norte"
                },
                {
                "zone_id": "1043",
                "name": "Provincia Bioko Sur"
                },
                {
                "zone_id": "1044",
                "name": "Provincia Centro Sur"
                },
                {
                "zone_id": "1045",
                "name": "Provincia Kie-Ntem"
                },
                {
                "zone_id": "1046",
                "name": "Provincia Litoral"
                },
                {
                "zone_id": "1047",
                "name": "Provincia Wele-Nzas"
                }
            ]
            },
            {
            "_id": "ERI",
            "country_id": "66",
            "pais_name": "Eritrea",
            "phone_code": "291",
            "departamento": [
                {
                "zone_id": "1048",
                "name": "Central (Maekel)"
                },
                {
                "zone_id": "1049",
                "name": "Anseba (Keren)"
                },
                {
                "zone_id": "1050",
                "name": "Southern Red Sea (Debub-Keih-Bahri)"
                },
                {
                "zone_id": "1051",
                "name": "Northern Red Sea (Semien-Keih-Bahri)"
                },
                {
                "zone_id": "1052",
                "name": "Southern (Debub)"
                },
                {
                "zone_id": "1053",
                "name": "Gash-Barka (Barentu)"
                }
            ]
            },
            {
            "_id": "EST",
            "country_id": "67",
            "pais_name": "Estonia",
            "phone_code": "372",
            "departamento": [
                {
                "zone_id": "1054",
                "name": "Harjumaa (Tallinn)"
                },
                {
                "zone_id": "1055",
                "name": "Hiiumaa (Kardla)"
                },
                {
                "zone_id": "1056",
                "name": "Ida-Virumaa (Johvi)"
                },
                {
                "zone_id": "1057",
                "name": "Jarvamaa (Paide)"
                },
                {
                "zone_id": "1058",
                "name": "Jogevamaa (Jogeva)"
                },
                {
                "zone_id": "1059",
                "name": "Laane-Virumaa (Rakvere)"
                },
                {
                "zone_id": "1060",
                "name": "Laanemaa (Haapsalu)"
                },
                {
                "zone_id": "1061",
                "name": "Parnumaa (Parnu)"
                },
                {
                "zone_id": "1062",
                "name": "Polvamaa (Polva)"
                },
                {
                "zone_id": "1063",
                "name": "Raplamaa (Rapla)"
                },
                {
                "zone_id": "1064",
                "name": "Saaremaa (Kuessaare)"
                },
                {
                "zone_id": "1065",
                "name": "Tartumaa (Tartu)"
                },
                {
                "zone_id": "1066",
                "name": "Valgamaa (Valga)"
                },
                {
                "zone_id": "1067",
                "name": "Viljandimaa (Viljandi)"
                },
                {
                "zone_id": "1068",
                "name": "Vorumaa (Voru)"
                }
            ]
            },
            {
            "_id": "ETH",
            "country_id": "68",
            "pais_name": "Ethiopia",
            "phone_code": "251",
            "departamento": [
                {
                "zone_id": "1069",
                "name": "Afar"
                },
                {
                "zone_id": "1070",
                "name": "Amhara"
                },
                {
                "zone_id": "1071",
                "name": "Benishangul-Gumaz"
                },
                {
                "zone_id": "1072",
                "name": "Gambela"
                },
                {
                "zone_id": "1073",
                "name": "Hariai"
                },
                {
                "zone_id": "1074",
                "name": "Oromia"
                },
                {
                "zone_id": "1075",
                "name": "Somali"
                },
                {
                "zone_id": "1076",
                "name": "Southern Nations - Nationalities and Peoples Region"
                },
                {
                "zone_id": "1077",
                "name": "Tigray"
                },
                {
                "zone_id": "1078",
                "name": "Addis Ababa"
                },
                {
                "zone_id": "1079",
                "name": "Dire Dawa"
                }
            ]
            },
            {
            "_id": "FJI",
            "country_id": "71",
            "pais_name": "Fiji",
            "phone_code": "679",
            "departamento": [
                {
                "zone_id": "1080",
                "name": "Central Division"
                },
                {
                "zone_id": "1081",
                "name": "Northern Division"
                },
                {
                "zone_id": "1082",
                "name": "Eastern Division"
                },
                {
                "zone_id": "1083",
                "name": "Western Division"
                },
                {
                "zone_id": "1084",
                "name": "Rotuma"
                }
            ]
            },
            {
            "_id": "FIN",
            "country_id": "72",
            "pais_name": "Finland",
            "phone_code": "358",
            "departamento": [
                {
                "zone_id": "1085",
                "name": "Ahvenanmaan Laani"
                },
                {
                "zone_id": "1086",
                "name": "Etela-Suomen Laani"
                },
                {
                "zone_id": "1087",
                "name": "Ita-Suomen Laani"
                },
                {
                "zone_id": "1088",
                "name": "Lansi-Suomen Laani"
                },
                {
                "zone_id": "1089",
                "name": "Lapin Lanani"
                },
                {
                "zone_id": "1090",
                "name": "Oulun Laani"
                }
            ]
            },
            {
            "_id": "FRA",
            "country_id": "73",
            "pais_name": "France",
            "phone_code": "33",
            "departamento": [
                {
                "zone_id": "1091",
                "name": "Alsace"
                },
                {
                "zone_id": "1092",
                "name": "Aquitaine"
                },
                {
                "zone_id": "1093",
                "name": "Auvergne"
                },
                {
                "zone_id": "1094",
                "name": "Brittany"
                },
                {
                "zone_id": "1095",
                "name": "Burgundy"
                },
                {
                "zone_id": "1096",
                "name": "Center Loire Valley"
                },
                {
                "zone_id": "1097",
                "name": "Champagne"
                },
                {
                "zone_id": "1098",
                "name": "Corse"
                },
                {
                "zone_id": "1099",
                "name": "France Comte"
                },
                {
                "zone_id": "1100",
                "name": "Languedoc Roussillon"
                },
                {
                "zone_id": "1101",
                "name": "Limousin"
                },
                {
                "zone_id": "1102",
                "name": "Lorraine"
                },
                {
                "zone_id": "1103",
                "name": "Midi Pyrenees"
                },
                {
                "zone_id": "1104",
                "name": "Nord Pas de Calais"
                },
                {
                "zone_id": "1105",
                "name": "Normandy"
                },
                {
                "zone_id": "1106",
                "name": "Paris   Ill de France"
                },
                {
                "zone_id": "1107",
                "name": "Picardie"
                },
                {
                "zone_id": "1108",
                "name": "Poitou Charente"
                },
                {
                "zone_id": "1109",
                "name": "Provence"
                },
                {
                "zone_id": "1110",
                "name": "Rhone Alps"
                },
                {
                "zone_id": "1111",
                "name": "Riviera"
                },
                {
                "zone_id": "1112",
                "name": "Western Loire Valley"
                }
            ]
            },
            {
            "_id": "FXX",
            "country_id": "74",
            "pais_name": "France, Metropolitan",
            "phone_code": "0",
            "departamento": [
                {
                "zone_id": "1113",
                "name": "Etranger"
                },
                {
                "zone_id": "1114",
                "name": "Ain"
                },
                {
                "zone_id": "1115",
                "name": "Aisne"
                },
                {
                "zone_id": "1116",
                "name": "Allier"
                },
                {
                "zone_id": "1117",
                "name": "Alpes de Haute Provence"
                },
                {
                "zone_id": "1118",
                "name": "Hautes-Alpes"
                },
                {
                "zone_id": "1119",
                "name": "Alpes Maritimes"
                },
                {
                "zone_id": "1120",
                "name": "Ard&egrave;che"
                },
                {
                "zone_id": "1121",
                "name": "Ardennes"
                },
                {
                "zone_id": "1122",
                "name": "Ari&egrave;ge"
                },
                {
                "zone_id": "1123",
                "name": "Aube"
                },
                {
                "zone_id": "1124",
                "name": "Aude"
                },
                {
                "zone_id": "1125",
                "name": "Aveyron"
                },
                {
                "zone_id": "1126",
                "name": "Bouches du Rh&ocirc;ne"
                },
                {
                "zone_id": "1127",
                "name": "Calvados"
                },
                {
                "zone_id": "1128",
                "name": "Cantal"
                },
                {
                "zone_id": "1129",
                "name": "Charente"
                },
                {
                "zone_id": "1130",
                "name": "Charente Maritime"
                },
                {
                "zone_id": "1131",
                "name": "Cher"
                },
                {
                "zone_id": "1132",
                "name": "Corr&egrave;ze"
                },
                {
                "zone_id": "1133",
                "name": "Corse du Sud"
                },
                {
                "zone_id": "1134",
                "name": "Haute Corse"
                },
                {
                "zone_id": "1135",
                "name": "C&ocirc;te d&#039;or"
                },
                {
                "zone_id": "1136",
                "name": "C&ocirc;tes d&#039;Armor"
                },
                {
                "zone_id": "1137",
                "name": "Creuse"
                },
                {
                "zone_id": "1138",
                "name": "Dordogne"
                },
                {
                "zone_id": "1139",
                "name": "Doubs"
                },
                {
                "zone_id": "1140",
                "name": "Dr&ocirc;me"
                },
                {
                "zone_id": "1141",
                "name": "Eure"
                },
                {
                "zone_id": "1142",
                "name": "Eure et Loir"
                },
                {
                "zone_id": "1143",
                "name": "Finist&egrave;re"
                },
                {
                "zone_id": "1144",
                "name": "Gard"
                },
                {
                "zone_id": "1145",
                "name": "Haute Garonne"
                },
                {
                "zone_id": "1146",
                "name": "Gers"
                },
                {
                "zone_id": "1147",
                "name": "Gironde"
                },
                {
                "zone_id": "1148",
                "name": "H&eacute;rault"
                },
                {
                "zone_id": "1149",
                "name": "Ille et Vilaine"
                },
                {
                "zone_id": "1150",
                "name": "Indre"
                },
                {
                "zone_id": "1151",
                "name": "Indre et Loire"
                },
                {
                "zone_id": "1152",
                "name": "Is&eacute;re"
                },
                {
                "zone_id": "1153",
                "name": "Jura"
                },
                {
                "zone_id": "1154",
                "name": "Landes"
                },
                {
                "zone_id": "1155",
                "name": "Loir et Cher"
                },
                {
                "zone_id": "1156",
                "name": "Loire"
                },
                {
                "zone_id": "1157",
                "name": "Haute Loire"
                },
                {
                "zone_id": "1158",
                "name": "Loire Atlantique"
                },
                {
                "zone_id": "1159",
                "name": "Loiret"
                },
                {
                "zone_id": "1160",
                "name": "Lot"
                },
                {
                "zone_id": "1161",
                "name": "Lot et Garonne"
                },
                {
                "zone_id": "1162",
                "name": "Loz&egrave;re"
                },
                {
                "zone_id": "1163",
                "name": "Maine et Loire"
                },
                {
                "zone_id": "1164",
                "name": "Manche"
                },
                {
                "zone_id": "1165",
                "name": "Marne"
                },
                {
                "zone_id": "1166",
                "name": "Haute Marne"
                },
                {
                "zone_id": "1167",
                "name": "Mayenne"
                },
                {
                "zone_id": "1168",
                "name": "Meurthe et Moselle"
                },
                {
                "zone_id": "1169",
                "name": "Meuse"
                },
                {
                "zone_id": "1170",
                "name": "Morbihan"
                },
                {
                "zone_id": "1171",
                "name": "Moselle"
                },
                {
                "zone_id": "1172",
                "name": "Ni&egrave;vre"
                },
                {
                "zone_id": "1173",
                "name": "Nord"
                },
                {
                "zone_id": "1174",
                "name": "Oise"
                },
                {
                "zone_id": "1175",
                "name": "Orne"
                },
                {
                "zone_id": "1176",
                "name": "Pas de Calais"
                },
                {
                "zone_id": "1177",
                "name": "Puy de D&ocirc;me"
                },
                {
                "zone_id": "1178",
                "name": "Pyr&eacute;n&eacute;es Atlantiques"
                },
                {
                "zone_id": "1179",
                "name": "Hautes Pyr&eacute;n&eacute;es"
                },
                {
                "zone_id": "1180",
                "name": "Pyr&eacute;n&eacute;es Orientales"
                },
                {
                "zone_id": "1181",
                "name": "Bas Rhin"
                },
                {
                "zone_id": "1182",
                "name": "Haut Rhin"
                },
                {
                "zone_id": "1183",
                "name": "Rh&ocirc;ne"
                },
                {
                "zone_id": "1184",
                "name": "Haute Sa&ocirc;ne"
                },
                {
                "zone_id": "1185",
                "name": "Sa&ocirc;ne et Loire"
                },
                {
                "zone_id": "1186",
                "name": "Sarthe"
                },
                {
                "zone_id": "1187",
                "name": "Savoie"
                },
                {
                "zone_id": "1188",
                "name": "Haute Savoie"
                },
                {
                "zone_id": "1189",
                "name": "Paris"
                },
                {
                "zone_id": "1190",
                "name": "Seine Maritime"
                },
                {
                "zone_id": "1191",
                "name": "Seine et Marne"
                },
                {
                "zone_id": "1192",
                "name": "Yvelines"
                },
                {
                "zone_id": "1193",
                "name": "Deux S&egrave;vres"
                },
                {
                "zone_id": "1194",
                "name": "Somme"
                },
                {
                "zone_id": "1195",
                "name": "Tarn"
                },
                {
                "zone_id": "1196",
                "name": "Tarn et Garonne"
                },
                {
                "zone_id": "1197",
                "name": "Var"
                },
                {
                "zone_id": "1198",
                "name": "Vaucluse"
                },
                {
                "zone_id": "1199",
                "name": "Vend&eacute;e"
                },
                {
                "zone_id": "1200",
                "name": "Vienne"
                },
                {
                "zone_id": "1201",
                "name": "Haute Vienne"
                },
                {
                "zone_id": "1202",
                "name": "Vosges"
                },
                {
                "zone_id": "1203",
                "name": "Yonne"
                },
                {
                "zone_id": "1204",
                "name": "Territoire de Belfort"
                },
                {
                "zone_id": "1205",
                "name": "Essonne"
                },
                {
                "zone_id": "1206",
                "name": "Hauts de Seine"
                },
                {
                "zone_id": "1207",
                "name": "Seine St-Denis"
                },
                {
                "zone_id": "1208",
                "name": "Val de Marne"
                },
                {
                "zone_id": "1209",
                "name": "Val d'Oise"
                }
            ]
            },
            {
            "_id": "PYF",
            "country_id": "76",
            "pais_name": "French Polynesia",
            "phone_code": "689",
            "departamento": [
                {
                "zone_id": "1210",
                "name": "Archipel des Marquises"
                },
                {
                "zone_id": "1211",
                "name": "Archipel des Tuamotu"
                },
                {
                "zone_id": "1212",
                "name": "Archipel des Tubuai"
                },
                {
                "zone_id": "1213",
                "name": "Iles du Vent"
                },
                {
                "zone_id": "1214",
                "name": "Iles Sous-le-Vent"
                }
            ]
            },
            {
            "_id": "ATF",
            "country_id": "77",
            "pais_name": "French Southern Territories",
            "phone_code": "0",
            "departamento": [
                {
                "zone_id": "1215",
                "name": "Iles Crozet"
                },
                {
                "zone_id": "1216",
                "name": "Iles Kerguelen"
                },
                {
                "zone_id": "1217",
                "name": "Ile Amsterdam"
                },
                {
                "zone_id": "1218",
                "name": "Ile Saint-Paul"
                },
                {
                "zone_id": "1219",
                "name": "Adelie Land"
                }
            ]
            },
            {
            "_id": "GAB",
            "country_id": "78",
            "pais_name": "Gabon",
            "phone_code": "241",
            "departamento": [
                {
                "zone_id": "1220",
                "name": "Estuaire"
                },
                {
                "zone_id": "1221",
                "name": "Haut-Ogooue"
                },
                {
                "zone_id": "1222",
                "name": "Moyen-Ogooue"
                },
                {
                "zone_id": "1223",
                "name": "Ngounie"
                },
                {
                "zone_id": "1224",
                "name": "Nyanga"
                },
                {
                "zone_id": "1225",
                "name": "Ogooue-Ivindo"
                },
                {
                "zone_id": "1226",
                "name": "Ogooue-Lolo"
                },
                {
                "zone_id": "1227",
                "name": "Ogooue-Maritime"
                },
                {
                "zone_id": "1228",
                "name": "Woleu-Ntem"
                }
            ]
            },
            {
            "_id": "GMB",
            "country_id": "79",
            "pais_name": "Gambia",
            "phone_code": "220",
            "departamento": [
                {
                "zone_id": "1229",
                "name": "Banjul"
                },
                {
                "zone_id": "1230",
                "name": "Basse"
                },
                {
                "zone_id": "1231",
                "name": "Brikama"
                },
                {
                "zone_id": "1232",
                "name": "Janjangbure"
                },
                {
                "zone_id": "1233",
                "name": "Kanifeng"
                },
                {
                "zone_id": "1234",
                "name": "Kerewan"
                },
                {
                "zone_id": "1235",
                "name": "Kuntaur"
                },
                {
                "zone_id": "1236",
                "name": "Mansakonko"
                },
                {
                "zone_id": "1237",
                "name": "Lower River"
                },
                {
                "zone_id": "1238",
                "name": "Central River"
                },
                {
                "zone_id": "1239",
                "name": "North Bank"
                },
                {
                "zone_id": "1240",
                "name": "Upper River"
                },
                {
                "zone_id": "1241",
                "name": "Western"
                }
            ]
            },
            {
            "_id": "GEO",
            "country_id": "80",
            "pais_name": "Georgia",
            "phone_code": "995",
            "departamento": [
                {
                "zone_id": "1242",
                "name": "Abkhazia"
                },
                {
                "zone_id": "1243",
                "name": "Ajaria"
                },
                {
                "zone_id": "1244",
                "name": "Tbilisi"
                },
                {
                "zone_id": "1245",
                "name": "Guria"
                },
                {
                "zone_id": "1246",
                "name": "Imereti"
                },
                {
                "zone_id": "1247",
                "name": "Kakheti"
                },
                {
                "zone_id": "1248",
                "name": "Kvemo Kartli"
                },
                {
                "zone_id": "1249",
                "name": "Mtskheta-Mtianeti"
                },
                {
                "zone_id": "1250",
                "name": "Racha Lechkhumi and Kvemo Svanet"
                },
                {
                "zone_id": "1251",
                "name": "Samegrelo-Zemo Svaneti"
                },
                {
                "zone_id": "1252",
                "name": "Samtskhe-Javakheti"
                },
                {
                "zone_id": "1253",
                "name": "Shida Kartli"
                }
            ]
            },
            {
            "_id": "DEU",
            "country_id": "81",
            "pais_name": "Germany",
            "phone_code": "49",
            "departamento": [
                {
                "zone_id": "1254",
                "name": "Baden-W&uuml;rttemberg"
                },
                {
                "zone_id": "1255",
                "name": "Bayern"
                },
                {
                "zone_id": "1256",
                "name": "Berlin"
                },
                {
                "zone_id": "1257",
                "name": "Brandenburg"
                },
                {
                "zone_id": "1258",
                "name": "Bremen"
                },
                {
                "zone_id": "1259",
                "name": "Hamburg"
                },
                {
                "zone_id": "1260",
                "name": "Hessen"
                },
                {
                "zone_id": "1261",
                "name": "Mecklenburg-Vorpommern"
                },
                {
                "zone_id": "1262",
                "name": "Niedersachsen"
                },
                {
                "zone_id": "1263",
                "name": "Nordrhein-Westfalen"
                },
                {
                "zone_id": "1264",
                "name": "Rheinland-Pfalz"
                },
                {
                "zone_id": "1265",
                "name": "Saarland"
                },
                {
                "zone_id": "1266",
                "name": "Sachsen"
                },
                {
                "zone_id": "1267",
                "name": "Sachsen-Anhalt"
                },
                {
                "zone_id": "1268",
                "name": "Schleswig-Holstein"
                },
                {
                "zone_id": "1269",
                "name": "Th&uuml;ringen"
                }
            ]
            },
            {
            "_id": "GHA",
            "country_id": "82",
            "pais_name": "Ghana",
            "phone_code": "233",
            "departamento": [
                {
                "zone_id": "1270",
                "name": "Ashanti Region"
                },
                {
                "zone_id": "1271",
                "name": "Brong-Ahafo Region"
                },
                {
                "zone_id": "1272",
                "name": "Central Region"
                },
                {
                "zone_id": "1273",
                "name": "Eastern Region"
                },
                {
                "zone_id": "1274",
                "name": "Greater Accra Region"
                },
                {
                "zone_id": "1275",
                "name": "Northern Region"
                },
                {
                "zone_id": "1276",
                "name": "Upper East Region"
                },
                {
                "zone_id": "1277",
                "name": "Upper West Region"
                },
                {
                "zone_id": "1278",
                "name": "Volta Region"
                },
                {
                "zone_id": "1279",
                "name": "Western Region"
                }
            ]
            },
            {
            "_id": "GRC",
            "country_id": "84",
            "pais_name": "Greece",
            "phone_code": "30",
            "departamento": [
                {
                "zone_id": "1280",
                "name": "Attica"
                },
                {
                "zone_id": "1281",
                "name": "Central Greece"
                },
                {
                "zone_id": "1282",
                "name": "Central Macedonia"
                },
                {
                "zone_id": "1283",
                "name": "Crete"
                },
                {
                "zone_id": "1284",
                "name": "East Macedonia and Thrace"
                },
                {
                "zone_id": "1285",
                "name": "Epirus"
                },
                {
                "zone_id": "1286",
                "name": "Ionian Islands"
                },
                {
                "zone_id": "1287",
                "name": "North Aegean"
                },
                {
                "zone_id": "1288",
                "name": "Peloponnesos"
                },
                {
                "zone_id": "1289",
                "name": "South Aegean"
                },
                {
                "zone_id": "1290",
                "name": "Thessaly"
                },
                {
                "zone_id": "1291",
                "name": "West Greece"
                },
                {
                "zone_id": "1292",
                "name": "West Macedonia"
                }
            ]
            },
            {
            "_id": "GRL",
            "country_id": "85",
            "pais_name": "Greenland",
            "phone_code": "299",
            "departamento": [
                {
                "zone_id": "1293",
                "name": "Avannaa"
                },
                {
                "zone_id": "1294",
                "name": "Tunu"
                },
                {
                "zone_id": "1295",
                "name": "Kitaa"
                }
            ]
            },
            {
            "_id": "GRD",
            "country_id": "86",
            "pais_name": "Grenada",
            "phone_code": "1009",
            "departamento": [
                {
                "zone_id": "1296",
                "name": "Saint Andrew"
                },
                {
                "zone_id": "1297",
                "name": "Saint David"
                },
                {
                "zone_id": "1298",
                "name": "Saint George"
                },
                {
                "zone_id": "1299",
                "name": "Saint John"
                },
                {
                "zone_id": "1300",
                "name": "Saint Mark"
                },
                {
                "zone_id": "1301",
                "name": "Saint Patrick"
                },
                {
                "zone_id": "1302",
                "name": "Carriacou"
                },
                {
                "zone_id": "1303",
                "name": "Petit Martinique"
                }
            ]
            },
            {
            "_id": "GTM",
            "country_id": "89",
            "pais_name": "Guatemala",
            "phone_code": "502",
            "departamento": [
                {
                "zone_id": "1304",
                "name": "Alta Verapaz"
                },
                {
                "zone_id": "1305",
                "name": "Baja Verapaz"
                },
                {
                "zone_id": "1306",
                "name": "Chimaltenango"
                },
                {
                "zone_id": "1307",
                "name": "Chiquimula"
                },
                {
                "zone_id": "1308",
                "name": "El Peten"
                },
                {
                "zone_id": "1309",
                "name": "El Progreso"
                },
                {
                "zone_id": "1310",
                "name": "El Quiche"
                },
                {
                "zone_id": "1311",
                "name": "Escuintla"
                },
                {
                "zone_id": "1312",
                "name": "Guatemala"
                },
                {
                "zone_id": "1313",
                "name": "Huehuetenango"
                },
                {
                "zone_id": "1314",
                "name": "Izabal"
                },
                {
                "zone_id": "1315",
                "name": "Jalapa"
                },
                {
                "zone_id": "1316",
                "name": "Jutiapa"
                },
                {
                "zone_id": "1317",
                "name": "Quetzaltenango"
                },
                {
                "zone_id": "1318",
                "name": "Retalhuleu"
                },
                {
                "zone_id": "1319",
                "name": "Sacatepequez"
                },
                {
                "zone_id": "1320",
                "name": "San Marcos"
                },
                {
                "zone_id": "1321",
                "name": "Santa Rosa"
                },
                {
                "zone_id": "1322",
                "name": "Solola"
                },
                {
                "zone_id": "1323",
                "name": "Suchitepequez"
                },
                {
                "zone_id": "1324",
                "name": "Totonicapan"
                },
                {
                "zone_id": "1325",
                "name": "Zacapa"
                }
            ]
            },
            {
            "_id": "GIN",
            "country_id": "90",
            "pais_name": "Guinea",
            "phone_code": "224",
            "departamento": [
                {
                "zone_id": "1326",
                "name": "Conakry"
                },
                {
                "zone_id": "1327",
                "name": "Beyla"
                },
                {
                "zone_id": "1328",
                "name": "Boffa"
                },
                {
                "zone_id": "1329",
                "name": "Boke"
                },
                {
                "zone_id": "1330",
                "name": "Coyah"
                },
                {
                "zone_id": "1331",
                "name": "Dabola"
                },
                {
                "zone_id": "1332",
                "name": "Dalaba"
                },
                {
                "zone_id": "1333",
                "name": "Dinguiraye"
                },
                {
                "zone_id": "1334",
                "name": "Dubreka"
                },
                {
                "zone_id": "1335",
                "name": "Faranah"
                },
                {
                "zone_id": "1336",
                "name": "Forecariah"
                },
                {
                "zone_id": "1337",
                "name": "Fria"
                },
                {
                "zone_id": "1338",
                "name": "Gaoual"
                },
                {
                "zone_id": "1339",
                "name": "Gueckedou"
                },
                {
                "zone_id": "1340",
                "name": "Kankan"
                },
                {
                "zone_id": "1341",
                "name": "Kerouane"
                },
                {
                "zone_id": "1342",
                "name": "Kindia"
                },
                {
                "zone_id": "1343",
                "name": "Kissidougou"
                },
                {
                "zone_id": "1344",
                "name": "Koubia"
                },
                {
                "zone_id": "1345",
                "name": "Koundara"
                },
                {
                "zone_id": "1346",
                "name": "Kouroussa"
                },
                {
                "zone_id": "1347",
                "name": "Labe"
                },
                {
                "zone_id": "1348",
                "name": "Lelouma"
                },
                {
                "zone_id": "1349",
                "name": "Lola"
                },
                {
                "zone_id": "1350",
                "name": "Macenta"
                },
                {
                "zone_id": "1351",
                "name": "Mali"
                },
                {
                "zone_id": "1352",
                "name": "Mamou"
                },
                {
                "zone_id": "1353",
                "name": "Mandiana"
                },
                {
                "zone_id": "1354",
                "name": "Nzerekore"
                },
                {
                "zone_id": "1355",
                "name": "Pita"
                },
                {
                "zone_id": "1356",
                "name": "Siguiri"
                },
                {
                "zone_id": "1357",
                "name": "Telimele"
                },
                {
                "zone_id": "1358",
                "name": "Tougue"
                },
                {
                "zone_id": "1359",
                "name": "Yomou"
                }
            ]
            },
            {
            "_id": "GNB",
            "country_id": "91",
            "pais_name": "Guinea-bissau",
            "phone_code": "245",
            "departamento": [
                {
                "zone_id": "1360",
                "name": "Bafata Region"
                },
                {
                "zone_id": "1361",
                "name": "Biombo Region"
                },
                {
                "zone_id": "1362",
                "name": "Bissau Region"
                },
                {
                "zone_id": "1363",
                "name": "Bolama Region"
                },
                {
                "zone_id": "1364",
                "name": "Cacheu Region"
                },
                {
                "zone_id": "1365",
                "name": "Gabu Region"
                },
                {
                "zone_id": "1366",
                "name": "Oio Region"
                },
                {
                "zone_id": "1367",
                "name": "Quinara Region"
                },
                {
                "zone_id": "1368",
                "name": "Tombali Region"
                }
            ]
            },
            {
            "_id": "GUY",
            "country_id": "92",
            "pais_name": "Guyana",
            "phone_code": "592",
            "departamento": [
                {
                "zone_id": "1369",
                "name": "Barima-Waini"
                },
                {
                "zone_id": "1370",
                "name": "Cuyuni-Mazaruni"
                },
                {
                "zone_id": "1371",
                "name": "Demerara-Mahaica"
                },
                {
                "zone_id": "1372",
                "name": "East Berbice-Corentyne"
                },
                {
                "zone_id": "1373",
                "name": "Essequibo Islands-West Demerara"
                },
                {
                "zone_id": "1374",
                "name": "Mahaica-Berbice"
                },
                {
                "zone_id": "1375",
                "name": "Pomeroon-Supenaam"
                },
                {
                "zone_id": "1376",
                "name": "Potaro-Siparuni"
                },
                {
                "zone_id": "1377",
                "name": "Upper Demerara-Berbice"
                },
                {
                "zone_id": "1378",
                "name": "Upper Takutu-Upper Essequibo"
                }
            ]
            },
            {
            "_id": "HTI",
            "country_id": "93",
            "pais_name": "Haiti",
            "phone_code": "509",
            "departamento": [
                {
                "zone_id": "1379",
                "name": "Artibonite"
                },
                {
                "zone_id": "1380",
                "name": "Centre"
                },
                {
                "zone_id": "1381",
                "name": "Grand'Anse"
                },
                {
                "zone_id": "1382",
                "name": "Nord"
                },
                {
                "zone_id": "1383",
                "name": "Nord-Est"
                },
                {
                "zone_id": "1384",
                "name": "Nord-Ouest"
                },
                {
                "zone_id": "1385",
                "name": "Ouest"
                },
                {
                "zone_id": "1386",
                "name": "Sud"
                },
                {
                "zone_id": "1387",
                "name": "Sud-Est"
                }
            ]
            },
            {
            "_id": "HMD",
            "country_id": "94",
            "pais_name": "Heard and Mc Donald Islands",
            "phone_code": "0",
            "departamento": [
                {
                "zone_id": "1388",
                "name": "Flat Island"
                },
                {
                "zone_id": "1389",
                "name": "McDonald Island"
                },
                {
                "zone_id": "1390",
                "name": "Shag Island"
                },
                {
                "zone_id": "1391",
                "name": "Heard Island"
                }
            ]
            },
            {
            "_id": "HND",
            "country_id": "95",
            "pais_name": "Honduras",
            "phone_code": "504",
            "departamento": [
                {
                "zone_id": "1392",
                "name": "Atlantida"
                },
                {
                "zone_id": "1393",
                "name": "Choluteca"
                },
                {
                "zone_id": "1394",
                "name": "Colon"
                },
                {
                "zone_id": "1395",
                "name": "Comayagua"
                },
                {
                "zone_id": "1396",
                "name": "Copan"
                },
                {
                "zone_id": "1397",
                "name": "Cortes"
                },
                {
                "zone_id": "1398",
                "name": "El Paraiso"
                },
                {
                "zone_id": "1399",
                "name": "Francisco Morazan"
                },
                {
                "zone_id": "1400",
                "name": "Gracias a Dios"
                },
                {
                "zone_id": "1401",
                "name": "Intibuca"
                },
                {
                "zone_id": "1402",
                "name": "Islas de la Bahia (Bay Islands)"
                },
                {
                "zone_id": "1403",
                "name": "La Paz"
                },
                {
                "zone_id": "1404",
                "name": "Lempira"
                },
                {
                "zone_id": "1405",
                "name": "Ocotepeque"
                },
                {
                "zone_id": "1406",
                "name": "Olancho"
                },
                {
                "zone_id": "1407",
                "name": "Santa Barbara"
                },
                {
                "zone_id": "1408",
                "name": "Valle"
                },
                {
                "zone_id": "1409",
                "name": "Yoro"
                }
            ]
            },
            {
            "_id": "HKG",
            "country_id": "96",
            "pais_name": "Hong Kong",
            "phone_code": "852",
            "departamento": [
                {
                "zone_id": "1410",
                "name": "Central and Western Hong Kong Island"
                },
                {
                "zone_id": "1411",
                "name": "Eastern Hong Kong Island"
                },
                {
                "zone_id": "1412",
                "name": "Southern Hong Kong Island"
                },
                {
                "zone_id": "1413",
                "name": "Wan Chai Hong Kong Island"
                },
                {
                "zone_id": "1414",
                "name": "Kowloon City Kowloon"
                },
                {
                "zone_id": "1415",
                "name": "Kwun Tong Kowloon"
                },
                {
                "zone_id": "1416",
                "name": "Sham Shui Po Kowloon"
                },
                {
                "zone_id": "1417",
                "name": "Wong Tai Sin Kowloon"
                },
                {
                "zone_id": "1418",
                "name": "Yau Tsim Mong Kowloon"
                },
                {
                "zone_id": "1419",
                "name": "Islands New Territories"
                },
                {
                "zone_id": "1420",
                "name": "Kwai Tsing New Territories"
                },
                {
                "zone_id": "1421",
                "name": "North New Territories"
                },
                {
                "zone_id": "1422",
                "name": "Sai Kung New Territories"
                },
                {
                "zone_id": "1423",
                "name": "Sha Tin New Territories"
                },
                {
                "zone_id": "1424",
                "name": "Tai Po New Territories"
                },
                {
                "zone_id": "1425",
                "name": "Tsuen Wan New Territories"
                },
                {
                "zone_id": "1426",
                "name": "Tuen Mun New Territories"
                },
                {
                "zone_id": "1427",
                "name": "Yuen Long New Territories"
                }
            ]
            },
            {
            "_id": "HUN",
            "country_id": "97",
            "pais_name": "Hungary",
            "phone_code": "36",
            "departamento": [
                {
                "zone_id": "1428",
                "name": "Bacs-Kiskun"
                },
                {
                "zone_id": "1429",
                "name": "Baranya"
                },
                {
                "zone_id": "1430",
                "name": "Bekes"
                },
                {
                "zone_id": "1431",
                "name": "Bekescsaba"
                },
                {
                "zone_id": "1432",
                "name": "Borsod-Abauj-Zemplen"
                },
                {
                "zone_id": "1433",
                "name": "Budapest"
                },
                {
                "zone_id": "1434",
                "name": "Csongrad"
                },
                {
                "zone_id": "1435",
                "name": "Debrecen"
                },
                {
                "zone_id": "1436",
                "name": "Dunaujvaros"
                },
                {
                "zone_id": "1437",
                "name": "Eger"
                },
                {
                "zone_id": "1438",
                "name": "Fejer"
                },
                {
                "zone_id": "1439",
                "name": "Gyor"
                },
                {
                "zone_id": "1440",
                "name": "Gyor-Moson-Sopron"
                },
                {
                "zone_id": "1441",
                "name": "Hajdu-Bihar"
                },
                {
                "zone_id": "1442",
                "name": "Heves"
                },
                {
                "zone_id": "1443",
                "name": "Hodmezovasarhely"
                },
                {
                "zone_id": "1444",
                "name": "Jasz-Nagykun-Szolnok"
                },
                {
                "zone_id": "1445",
                "name": "Kaposvar"
                },
                {
                "zone_id": "1446",
                "name": "Kecskemet"
                },
                {
                "zone_id": "1447",
                "name": "Komarom-Esztergom"
                },
                {
                "zone_id": "1448",
                "name": "Miskolc"
                },
                {
                "zone_id": "1449",
                "name": "Nagykanizsa"
                },
                {
                "zone_id": "1450",
                "name": "Nograd"
                },
                {
                "zone_id": "1451",
                "name": "Nyiregyhaza"
                },
                {
                "zone_id": "1452",
                "name": "Pecs"
                },
                {
                "zone_id": "1453",
                "name": "Pest"
                },
                {
                "zone_id": "1454",
                "name": "Somogy"
                },
                {
                "zone_id": "1455",
                "name": "Sopron"
                },
                {
                "zone_id": "1456",
                "name": "Szabolcs-Szatmar-Bereg"
                },
                {
                "zone_id": "1457",
                "name": "Szeged"
                },
                {
                "zone_id": "1458",
                "name": "Szekesfehervar"
                },
                {
                "zone_id": "1459",
                "name": "Szolnok"
                },
                {
                "zone_id": "1460",
                "name": "Szombathely"
                },
                {
                "zone_id": "1461",
                "name": "Tatabanya"
                },
                {
                "zone_id": "1462",
                "name": "Tolna"
                },
                {
                "zone_id": "1463",
                "name": "Vas"
                },
                {
                "zone_id": "1464",
                "name": "Veszprem"
                },
                {
                "zone_id": "1465",
                "name": "Zala"
                },
                {
                "zone_id": "1466",
                "name": "Zalaegerszeg"
                }
            ]
            },
            {
            "_id": "ISL",
            "country_id": "98",
            "pais_name": "Iceland",
            "phone_code": "354",
            "departamento": [
                {
                "zone_id": "1467",
                "name": "Austurland"
                },
                {
                "zone_id": "1468",
                "name": "Hofuoborgarsvaeoi"
                },
                {
                "zone_id": "1469",
                "name": "Norourland eystra"
                },
                {
                "zone_id": "1470",
                "name": "Norourland vestra"
                },
                {
                "zone_id": "1471",
                "name": "Suourland"
                },
                {
                "zone_id": "1472",
                "name": "Suournes"
                },
                {
                "zone_id": "1473",
                "name": "Vestfiroir"
                },
                {
                "zone_id": "1474",
                "name": "Vesturland"
                }
            ]
            },
            {
            "_id": "IND",
            "country_id": "99",
            "pais_name": "India",
            "phone_code": "91",
            "departamento": [
                {
                "zone_id": "1475",
                "name": "Andaman and Nicobar Islands"
                },
                {
                "zone_id": "1476",
                "name": "Andhra Pradesh"
                },
                {
                "zone_id": "1477",
                "name": "Arunachal Pradesh"
                },
                {
                "zone_id": "1478",
                "name": "Assam"
                },
                {
                "zone_id": "1479",
                "name": "Bihar"
                },
                {
                "zone_id": "1480",
                "name": "Chandigarh"
                },
                {
                "zone_id": "1481",
                "name": "Dadra and Nagar Haveli"
                },
                {
                "zone_id": "1482",
                "name": "Daman and Diu"
                },
                {
                "zone_id": "1483",
                "name": "Delhi"
                },
                {
                "zone_id": "1484",
                "name": "Goa"
                },
                {
                "zone_id": "1485",
                "name": "Gujarat"
                },
                {
                "zone_id": "1486",
                "name": "Haryana"
                },
                {
                "zone_id": "1487",
                "name": "Himachal Pradesh"
                },
                {
                "zone_id": "1488",
                "name": "Jammu and Kashmir"
                },
                {
                "zone_id": "1489",
                "name": "Karnataka"
                },
                {
                "zone_id": "1490",
                "name": "Kerala"
                },
                {
                "zone_id": "1491",
                "name": "Lakshadweep Islands"
                },
                {
                "zone_id": "1492",
                "name": "Madhya Pradesh"
                },
                {
                "zone_id": "1493",
                "name": "Maharashtra"
                },
                {
                "zone_id": "1494",
                "name": "Manipur"
                },
                {
                "zone_id": "1495",
                "name": "Meghalaya"
                },
                {
                "zone_id": "1496",
                "name": "Mizoram"
                },
                {
                "zone_id": "1497",
                "name": "Nagaland"
                },
                {
                "zone_id": "1498",
                "name": "Orissa"
                },
                {
                "zone_id": "1499",
                "name": "Pondicherry"
                },
                {
                "zone_id": "1500",
                "name": "Punjab"
                },
                {
                "zone_id": "1501",
                "name": "Rajasthan"
                },
                {
                "zone_id": "1502",
                "name": "Sikkim"
                },
                {
                "zone_id": "1503",
                "name": "Tamil Nadu"
                },
                {
                "zone_id": "1504",
                "name": "Tripura"
                },
                {
                "zone_id": "1505",
                "name": "Uttar Pradesh"
                },
                {
                "zone_id": "1506",
                "name": "West Bengal"
                }
            ]
            },
            {
            "_id": "IDN",
            "country_id": "100",
            "pais_name": "Indonesia",
            "phone_code": "62",
            "departamento": [
                {
                "zone_id": "1507",
                "name": "Aceh"
                },
                {
                "zone_id": "1508",
                "name": "Bali"
                },
                {
                "zone_id": "1509",
                "name": "Banten"
                },
                {
                "zone_id": "1510",
                "name": "Bengkulu"
                },
                {
                "zone_id": "1511",
                "name": "BoDeTaBek"
                },
                {
                "zone_id": "1512",
                "name": "Gorontalo"
                },
                {
                "zone_id": "1513",
                "name": "Jakarta Raya"
                },
                {
                "zone_id": "1514",
                "name": "Jambi"
                },
                {
                "zone_id": "1515",
                "name": "Jawa Barat"
                },
                {
                "zone_id": "1516",
                "name": "Jawa Tengah"
                },
                {
                "zone_id": "1517",
                "name": "Jawa Timur"
                },
                {
                "zone_id": "1518",
                "name": "Kalimantan Barat"
                },
                {
                "zone_id": "1519",
                "name": "Kalimantan Selatan"
                },
                {
                "zone_id": "1520",
                "name": "Kalimantan Tengah"
                },
                {
                "zone_id": "1521",
                "name": "Kalimantan Timur"
                },
                {
                "zone_id": "1522",
                "name": "Kepulauan Bangka Belitung"
                },
                {
                "zone_id": "1523",
                "name": "Lampung"
                },
                {
                "zone_id": "1524",
                "name": "Maluku"
                },
                {
                "zone_id": "1525",
                "name": "Maluku Utara"
                },
                {
                "zone_id": "1526",
                "name": "Nusa Tenggara Barat"
                },
                {
                "zone_id": "1527",
                "name": "Nusa Tenggara Timur"
                },
                {
                "zone_id": "1528",
                "name": "Papua"
                },
                {
                "zone_id": "1529",
                "name": "Riau"
                },
                {
                "zone_id": "1530",
                "name": "Sulawesi Selatan"
                },
                {
                "zone_id": "1531",
                "name": "Sulawesi Tengah"
                },
                {
                "zone_id": "1532",
                "name": "Sulawesi Tenggara"
                },
                {
                "zone_id": "1533",
                "name": "Sulawesi Utara"
                },
                {
                "zone_id": "1534",
                "name": "Sumatera Barat"
                },
                {
                "zone_id": "1535",
                "name": "Sumatera Selatan"
                },
                {
                "zone_id": "1536",
                "name": "Sumatera Utara"
                },
                {
                "zone_id": "1537",
                "name": "Yogyakarta"
                }
            ]
            },
            {
            "_id": "IRN",
            "country_id": "101",
            "pais_name": "Iran (Islamic Republic of)",
            "phone_code": "98",
            "departamento": [
                {
                "zone_id": "1538",
                "name": "Tehran"
                },
                {
                "zone_id": "1539",
                "name": "Qom"
                },
                {
                "zone_id": "1540",
                "name": "Markazi"
                },
                {
                "zone_id": "1541",
                "name": "Qazvin"
                },
                {
                "zone_id": "1542",
                "name": "Gilan"
                },
                {
                "zone_id": "1543",
                "name": "Ardabil"
                },
                {
                "zone_id": "1544",
                "name": "Zanjan"
                },
                {
                "zone_id": "1545",
                "name": "East Azarbaijan"
                },
                {
                "zone_id": "1546",
                "name": "West Azarbaijan"
                },
                {
                "zone_id": "1547",
                "name": "Kurdistan"
                },
                {
                "zone_id": "1548",
                "name": "Hamadan"
                },
                {
                "zone_id": "1549",
                "name": "Kermanshah"
                },
                {
                "zone_id": "1550",
                "name": "Ilam"
                },
                {
                "zone_id": "1551",
                "name": "Lorestan"
                },
                {
                "zone_id": "1552",
                "name": "Khuzestan"
                },
                {
                "zone_id": "1553",
                "name": "Chahar Mahaal and Bakhtiari"
                },
                {
                "zone_id": "1554",
                "name": "Kohkiluyeh and Buyer Ahmad"
                },
                {
                "zone_id": "1555",
                "name": "Bushehr"
                },
                {
                "zone_id": "1556",
                "name": "Fars"
                },
                {
                "zone_id": "1557",
                "name": "Hormozgan"
                },
                {
                "zone_id": "1558",
                "name": "Sistan and Baluchistan"
                },
                {
                "zone_id": "1559",
                "name": "Kerman"
                },
                {
                "zone_id": "1560",
                "name": "Yazd"
                },
                {
                "zone_id": "1561",
                "name": "Esfahan"
                },
                {
                "zone_id": "1562",
                "name": "Semnan"
                },
                {
                "zone_id": "1563",
                "name": "Mazandaran"
                },
                {
                "zone_id": "1564",
                "name": "Golestan"
                },
                {
                "zone_id": "1565",
                "name": "North Khorasan"
                },
                {
                "zone_id": "1566",
                "name": "Razavi Khorasan"
                },
                {
                "zone_id": "1567",
                "name": "South Khorasan"
                }
            ]
            },
            {
            "_id": "IRQ",
            "country_id": "102",
            "pais_name": "Iraq",
            "phone_code": "964",
            "departamento": [
                {
                "zone_id": "1568",
                "name": "Baghdad"
                },
                {
                "zone_id": "1569",
                "name": "Salah ad Din"
                },
                {
                "zone_id": "1570",
                "name": "Diyala"
                },
                {
                "zone_id": "1571",
                "name": "Wasit"
                },
                {
                "zone_id": "1572",
                "name": "Maysan"
                },
                {
                "zone_id": "1573",
                "name": "Al Basrah"
                },
                {
                "zone_id": "1574",
                "name": "Dhi Qar"
                },
                {
                "zone_id": "1575",
                "name": "Al Muthanna"
                },
                {
                "zone_id": "1576",
                "name": "Al Qadisyah"
                },
                {
                "zone_id": "1577",
                "name": "Babil"
                },
                {
                "zone_id": "1578",
                "name": "Al Karbala"
                },
                {
                "zone_id": "1579",
                "name": "An Najaf"
                },
                {
                "zone_id": "1580",
                "name": "Al Anbar"
                },
                {
                "zone_id": "1581",
                "name": "Ninawa"
                },
                {
                "zone_id": "1582",
                "name": "Dahuk"
                },
                {
                "zone_id": "1583",
                "name": "Arbil"
                },
                {
                "zone_id": "1584",
                "name": "At Ta'mim"
                },
                {
                "zone_id": "1585",
                "name": "As Sulaymaniyah"
                }
            ]
            },
            {
            "_id": "IRL",
            "country_id": "103",
            "pais_name": "Ireland",
            "phone_code": "354",
            "departamento": [
                {
                "zone_id": "1586",
                "name": "Carlow"
                },
                {
                "zone_id": "1587",
                "name": "Cavan"
                },
                {
                "zone_id": "1588",
                "name": "Clare"
                },
                {
                "zone_id": "1589",
                "name": "Cork"
                },
                {
                "zone_id": "1590",
                "name": "Donegal"
                },
                {
                "zone_id": "1591",
                "name": "Dublin"
                },
                {
                "zone_id": "1592",
                "name": "Galway"
                },
                {
                "zone_id": "1593",
                "name": "Kerry"
                },
                {
                "zone_id": "1594",
                "name": "Kildare"
                },
                {
                "zone_id": "1595",
                "name": "Kilkenny"
                },
                {
                "zone_id": "1596",
                "name": "Laois"
                },
                {
                "zone_id": "1597",
                "name": "Leitrim"
                },
                {
                "zone_id": "1598",
                "name": "Limerick"
                },
                {
                "zone_id": "1599",
                "name": "Longford"
                },
                {
                "zone_id": "1600",
                "name": "Louth"
                },
                {
                "zone_id": "1601",
                "name": "Mayo"
                },
                {
                "zone_id": "1602",
                "name": "Meath"
                },
                {
                "zone_id": "1603",
                "name": "Monaghan"
                },
                {
                "zone_id": "1604",
                "name": "Offaly"
                },
                {
                "zone_id": "1605",
                "name": "Roscommon"
                },
                {
                "zone_id": "1606",
                "name": "Sligo"
                },
                {
                "zone_id": "1607",
                "name": "Tipperary"
                },
                {
                "zone_id": "1608",
                "name": "Waterford"
                },
                {
                "zone_id": "1609",
                "name": "Westmeath"
                },
                {
                "zone_id": "1610",
                "name": "Wexford"
                },
                {
                "zone_id": "1611",
                "name": "Wicklow"
                }
            ]
            },
            {
            "_id": "ISR",
            "country_id": "104",
            "pais_name": "Israel",
            "phone_code": "972",
            "departamento": [
                {
                "zone_id": "1612",
                "name": "Be'er Sheva"
                },
                {
                "zone_id": "1613",
                "name": "Bika'at Hayarden"
                },
                {
                "zone_id": "1614",
                "name": "Eilat and Arava"
                },
                {
                "zone_id": "1615",
                "name": "Galil"
                },
                {
                "zone_id": "1616",
                "name": "Haifa"
                },
                {
                "zone_id": "1617",
                "name": "Jehuda Mountains"
                },
                {
                "zone_id": "1618",
                "name": "Jerusalem"
                },
                {
                "zone_id": "1619",
                "name": "Negev"
                },
                {
                "zone_id": "1620",
                "name": "Semaria"
                },
                {
                "zone_id": "1621",
                "name": "Sharon"
                },
                {
                "zone_id": "1622",
                "name": "Tel Aviv (Gosh Dan)"
                }
            ]
            },
            {
            "_id": "JAM",
            "country_id": "106",
            "pais_name": "Jamaica",
            "phone_code": "1",
            "departamento": [
                {
                "zone_id": "1643",
                "name": "Clarendon Parish"
                },
                {
                "zone_id": "1644",
                "name": "Hanover Parish"
                },
                {
                "zone_id": "1645",
                "name": "Kingston Parish"
                },
                {
                "zone_id": "1646",
                "name": "Manchester Parish"
                },
                {
                "zone_id": "1647",
                "name": "Portland Parish"
                },
                {
                "zone_id": "1648",
                "name": "Saint Andrew Parish"
                },
                {
                "zone_id": "1649",
                "name": "Saint Ann Parish"
                },
                {
                "zone_id": "1650",
                "name": "Saint Catherine Parish"
                },
                {
                "zone_id": "1651",
                "name": "Saint Elizabeth Parish"
                },
                {
                "zone_id": "1652",
                "name": "Saint James Parish"
                },
                {
                "zone_id": "1653",
                "name": "Saint Mary Parish"
                },
                {
                "zone_id": "1654",
                "name": "Saint Thomas Parish"
                },
                {
                "zone_id": "1655",
                "name": "Trelawny Parish"
                },
                {
                "zone_id": "1656",
                "name": "Westmoreland Parish"
                }
            ]
            },
            {
            "_id": "JPN",
            "country_id": "107",
            "pais_name": "Japan",
            "phone_code": "81",
            "departamento": [
                {
                "zone_id": "1657",
                "name": "Aichi"
                },
                {
                "zone_id": "1658",
                "name": "Akita"
                },
                {
                "zone_id": "1659",
                "name": "Aomori"
                },
                {
                "zone_id": "1660",
                "name": "Chiba"
                },
                {
                "zone_id": "1661",
                "name": "Ehime"
                },
                {
                "zone_id": "1662",
                "name": "Fukui"
                },
                {
                "zone_id": "1663",
                "name": "Fukuoka"
                },
                {
                "zone_id": "1664",
                "name": "Fukushima"
                },
                {
                "zone_id": "1665",
                "name": "Gifu"
                },
                {
                "zone_id": "1666",
                "name": "Gumma"
                },
                {
                "zone_id": "1667",
                "name": "Hiroshima"
                },
                {
                "zone_id": "1668",
                "name": "Hokkaido"
                },
                {
                "zone_id": "1669",
                "name": "Hyogo"
                },
                {
                "zone_id": "1670",
                "name": "Ibaraki"
                },
                {
                "zone_id": "1671",
                "name": "Ishikawa"
                },
                {
                "zone_id": "1672",
                "name": "Iwate"
                },
                {
                "zone_id": "1673",
                "name": "Kagawa"
                },
                {
                "zone_id": "1674",
                "name": "Kagoshima"
                },
                {
                "zone_id": "1675",
                "name": "Kanagawa"
                },
                {
                "zone_id": "1676",
                "name": "Kochi"
                },
                {
                "zone_id": "1677",
                "name": "Kumamoto"
                },
                {
                "zone_id": "1678",
                "name": "Kyoto"
                },
                {
                "zone_id": "1679",
                "name": "Mie"
                },
                {
                "zone_id": "1680",
                "name": "Miyagi"
                },
                {
                "zone_id": "1681",
                "name": "Miyazaki"
                },
                {
                "zone_id": "1682",
                "name": "Nagano"
                },
                {
                "zone_id": "1683",
                "name": "Nagasaki"
                },
                {
                "zone_id": "1684",
                "name": "Nara"
                },
                {
                "zone_id": "1685",
                "name": "Niigata"
                },
                {
                "zone_id": "1686",
                "name": "Oita"
                },
                {
                "zone_id": "1687",
                "name": "Okayama"
                },
                {
                "zone_id": "1688",
                "name": "Okinawa"
                },
                {
                "zone_id": "1689",
                "name": "Osaka"
                },
                {
                "zone_id": "1690",
                "name": "Saga"
                },
                {
                "zone_id": "1691",
                "name": "Saitama"
                },
                {
                "zone_id": "1692",
                "name": "Shiga"
                },
                {
                "zone_id": "1693",
                "name": "Shimane"
                },
                {
                "zone_id": "1694",
                "name": "Shizuoka"
                },
                {
                "zone_id": "1695",
                "name": "Tochigi"
                },
                {
                "zone_id": "1696",
                "name": "Tokushima"
                },
                {
                "zone_id": "1697",
                "name": "Tokyo"
                },
                {
                "zone_id": "1698",
                "name": "Tottori"
                },
                {
                "zone_id": "1699",
                "name": "Toyama"
                },
                {
                "zone_id": "1700",
                "name": "Wakayama"
                },
                {
                "zone_id": "1701",
                "name": "Yamagata"
                },
                {
                "zone_id": "1702",
                "name": "Yamaguchi"
                },
                {
                "zone_id": "1703",
                "name": "Yamanashi"
                }
            ]
            },
            {
            "_id": "JOR",
            "country_id": "108",
            "pais_name": "Jordan",
            "phone_code": "962",
            "departamento": [
                {
                "zone_id": "1704",
                "name": "'Amman"
                },
                {
                "zone_id": "1705",
                "name": "Ajlun"
                },
                {
                "zone_id": "1706",
                "name": "Al 'Aqabah"
                },
                {
                "zone_id": "1707",
                "name": "Al Balqa'"
                },
                {
                "zone_id": "1708",
                "name": "Al Karak"
                },
                {
                "zone_id": "1709",
                "name": "Al Mafraq"
                },
                {
                "zone_id": "1710",
                "name": "At Tafilah"
                },
                {
                "zone_id": "1711",
                "name": "Az Zarqa'"
                },
                {
                "zone_id": "1712",
                "name": "Irbid"
                },
                {
                "zone_id": "1713",
                "name": "Jarash"
                },
                {
                "zone_id": "1714",
                "name": "Ma'an"
                },
                {
                "zone_id": "1715",
                "name": "Madaba"
                }
            ]
            },
            {
            "_id": "KAZ",
            "country_id": "109",
            "pais_name": "Kazakhstan",
            "phone_code": "731",
            "departamento": [
                {
                "zone_id": "1716",
                "name": "Almaty"
                },
                {
                "zone_id": "1717",
                "name": "Almaty City"
                },
                {
                "zone_id": "1718",
                "name": "Aqmola"
                },
                {
                "zone_id": "1719",
                "name": "Aqtobe"
                },
                {
                "zone_id": "1720",
                "name": "Astana City"
                },
                {
                "zone_id": "1721",
                "name": "Atyrau"
                },
                {
                "zone_id": "1722",
                "name": "Batys Qazaqstan"
                },
                {
                "zone_id": "1723",
                "name": "Bayqongyr City"
                },
                {
                "zone_id": "1724",
                "name": "Mangghystau"
                },
                {
                "zone_id": "1725",
                "name": "Ongtustik Qazaqstan"
                },
                {
                "zone_id": "1726",
                "name": "Pavlodar"
                },
                {
                "zone_id": "1727",
                "name": "Qaraghandy"
                },
                {
                "zone_id": "1728",
                "name": "Qostanay"
                },
                {
                "zone_id": "1729",
                "name": "Qyzylorda"
                },
                {
                "zone_id": "1730",
                "name": "Shyghys Qazaqstan"
                },
                {
                "zone_id": "1731",
                "name": "Soltustik Qazaqstan"
                },
                {
                "zone_id": "1732",
                "name": "Zhambyl"
                }
            ]
            },
            {
            "_id": "KEN",
            "country_id": "110",
            "pais_name": "Kenya",
            "phone_code": "254",
            "departamento": [
                {
                "zone_id": "1733",
                "name": "Central"
                },
                {
                "zone_id": "1734",
                "name": "Coast"
                },
                {
                "zone_id": "1735",
                "name": "Eastern"
                },
                {
                "zone_id": "1736",
                "name": "Nairobi Area"
                },
                {
                "zone_id": "1737",
                "name": "North Eastern"
                },
                {
                "zone_id": "1738",
                "name": "Nyanza"
                },
                {
                "zone_id": "1739",
                "name": "Rift Valley"
                },
                {
                "zone_id": "1740",
                "name": "Western"
                }
            ]
            },
            {
            "_id": "KIR",
            "country_id": "111",
            "pais_name": "Kiribati",
            "phone_code": "686",
            "departamento": [
                {
                "zone_id": "1741",
                "name": "Abaiang"
                },
                {
                "zone_id": "1742",
                "name": "Abemama"
                },
                {
                "zone_id": "1743",
                "name": "Aranuka"
                },
                {
                "zone_id": "1744",
                "name": "Arorae"
                },
                {
                "zone_id": "1745",
                "name": "Banaba"
                },
                {
                "zone_id": "1746",
                "name": "Beru"
                },
                {
                "zone_id": "1747",
                "name": "Butaritari"
                },
                {
                "zone_id": "1748",
                "name": "Kanton"
                },
                {
                "zone_id": "1749",
                "name": "Kiritimati"
                },
                {
                "zone_id": "1750",
                "name": "Kuria"
                },
                {
                "zone_id": "1751",
                "name": "Maiana"
                },
                {
                "zone_id": "1752",
                "name": "Makin"
                },
                {
                "zone_id": "1753",
                "name": "Marakei"
                },
                {
                "zone_id": "1754",
                "name": "Nikunau"
                },
                {
                "zone_id": "1755",
                "name": "Nonouti"
                },
                {
                "zone_id": "1756",
                "name": "Onotoa"
                },
                {
                "zone_id": "1757",
                "name": "Tabiteuea"
                },
                {
                "zone_id": "1758",
                "name": "Tabuaeran"
                },
                {
                "zone_id": "1759",
                "name": "Tamana"
                },
                {
                "zone_id": "1760",
                "name": "Tarawa"
                },
                {
                "zone_id": "1761",
                "name": "Teraina"
                }
            ]
            },
            {
            "_id": "PRK",
            "country_id": "112",
            "pais_name": "North Korea",
            "phone_code": "850",
            "departamento": [
                {
                "zone_id": "1762",
                "name": "Chagang-do"
                },
                {
                "zone_id": "1763",
                "name": "Hamgyong-bukto"
                },
                {
                "zone_id": "1764",
                "name": "Hamgyong-namdo"
                },
                {
                "zone_id": "1765",
                "name": "Hwanghae-bukto"
                },
                {
                "zone_id": "1766",
                "name": "Hwanghae-namdo"
                },
                {
                "zone_id": "1767",
                "name": "Kangwon-do"
                },
                {
                "zone_id": "1768",
                "name": "P'yongan-bukto"
                },
                {
                "zone_id": "1769",
                "name": "P'yongan-namdo"
                },
                {
                "zone_id": "1770",
                "name": "Ryanggang-do (Yanggang-do)"
                },
                {
                "zone_id": "1771",
                "name": "Rason Directly Governed City"
                },
                {
                "zone_id": "1772",
                "name": "P'yongyang Special City"
                }
            ]
            },
            {
            "_id": "KOR",
            "country_id": "113",
            "pais_name": "Korea, Republic of",
            "phone_code": "82",
            "departamento": [
                {
                "zone_id": "1773",
                "name": "Ch'ungch'ong-bukto"
                },
                {
                "zone_id": "1774",
                "name": "Ch'ungch'ong-namdo"
                },
                {
                "zone_id": "1775",
                "name": "Cheju-do"
                },
                {
                "zone_id": "1776",
                "name": "Cholla-bukto"
                },
                {
                "zone_id": "1777",
                "name": "Cholla-namdo"
                },
                {
                "zone_id": "1778",
                "name": "Inch'on-gwangyoksi"
                },
                {
                "zone_id": "1779",
                "name": "Kangwon-do"
                },
                {
                "zone_id": "1780",
                "name": "Kwangju-gwangyoksi"
                },
                {
                "zone_id": "1781",
                "name": "Kyonggi-do"
                },
                {
                "zone_id": "1782",
                "name": "Kyongsang-bukto"
                },
                {
                "zone_id": "1783",
                "name": "Kyongsang-namdo"
                },
                {
                "zone_id": "1784",
                "name": "Pusan-gwangyoksi"
                },
                {
                "zone_id": "1785",
                "name": "Soul-t'ukpyolsi"
                },
                {
                "zone_id": "1786",
                "name": "Taegu-gwangyoksi"
                },
                {
                "zone_id": "1787",
                "name": "Taejon-gwangyoksi"
                }
            ]
            },
            {
            "_id": "KWT",
            "country_id": "114",
            "pais_name": "Kuwait",
            "phone_code": "965",
            "departamento": [
                {
                "zone_id": "1788",
                "name": "Al 'Asimah"
                },
                {
                "zone_id": "1789",
                "name": "Al Ahmadi"
                },
                {
                "zone_id": "1790",
                "name": "Al Farwaniyah"
                },
                {
                "zone_id": "1791",
                "name": "Al Jahra'"
                },
                {
                "zone_id": "1792",
                "name": "Hawalli"
                }
            ]
            },
            {
            "_id": "KGZ",
            "country_id": "115",
            "pais_name": "Kyrgyzstan",
            "phone_code": "996",
            "departamento": [
                {
                "zone_id": "1793",
                "name": "Bishkek"
                },
                {
                "zone_id": "1794",
                "name": "Batken"
                },
                {
                "zone_id": "1795",
                "name": "Chu"
                },
                {
                "zone_id": "1796",
                "name": "Jalal-Abad"
                },
                {
                "zone_id": "1797",
                "name": "Naryn"
                },
                {
                "zone_id": "1798",
                "name": "Osh"
                },
                {
                "zone_id": "1799",
                "name": "Talas"
                },
                {
                "zone_id": "1800",
                "name": "Ysyk-Kol"
                }
            ]
            },
            {
            "_id": "LAO",
            "country_id": "116",
            "pais_name": "Lao People's Democratic Republic",
            "phone_code": "0",
            "departamento": [
                {
                "zone_id": "1801",
                "name": "Vientiane"
                },
                {
                "zone_id": "1802",
                "name": "Attapu"
                },
                {
                "zone_id": "1803",
                "name": "Bokeo"
                },
                {
                "zone_id": "1804",
                "name": "Bolikhamxai"
                },
                {
                "zone_id": "1805",
                "name": "Champasak"
                },
                {
                "zone_id": "1806",
                "name": "Houaphan"
                },
                {
                "zone_id": "1807",
                "name": "Khammouan"
                },
                {
                "zone_id": "1808",
                "name": "Louang Namtha"
                },
                {
                "zone_id": "1809",
                "name": "Louangphabang"
                },
                {
                "zone_id": "1810",
                "name": "Oudomxai"
                },
                {
                "zone_id": "1811",
                "name": "Phongsali"
                },
                {
                "zone_id": "1812",
                "name": "Salavan"
                },
                {
                "zone_id": "1813",
                "name": "Savannakhet"
                },
                {
                "zone_id": "1814",
                "name": "Vientiane"
                },
                {
                "zone_id": "1815",
                "name": "Xaignabouli"
                },
                {
                "zone_id": "1816",
                "name": "Xekong"
                },
                {
                "zone_id": "1817",
                "name": "Xiangkhoang"
                },
                {
                "zone_id": "1818",
                "name": "Xaisomboun"
                }
            ]
            },
            {
            "_id": "LVA",
            "country_id": "117",
            "pais_name": "Latvia",
            "phone_code": "371",
            "departamento": [
                {
                "zone_id": "1819",
                "name": "Aizkraukles Rajons"
                },
                {
                "zone_id": "1820",
                "name": "Aluksnes Rajons"
                },
                {
                "zone_id": "1821",
                "name": "Balvu Rajons"
                },
                {
                "zone_id": "1822",
                "name": "Bauskas Rajons"
                },
                {
                "zone_id": "1823",
                "name": "Cesu Rajons"
                },
                {
                "zone_id": "1824",
                "name": "Daugavpils Rajons"
                },
                {
                "zone_id": "1825",
                "name": "Dobeles Rajons"
                },
                {
                "zone_id": "1826",
                "name": "Gulbenes Rajons"
                },
                {
                "zone_id": "1827",
                "name": "Jekabpils Rajons"
                },
                {
                "zone_id": "1828",
                "name": "Jelgavas Rajons"
                },
                {
                "zone_id": "1829",
                "name": "Kraslavas Rajons"
                },
                {
                "zone_id": "1830",
                "name": "Kuldigas Rajons"
                },
                {
                "zone_id": "1831",
                "name": "Liepajas Rajons"
                },
                {
                "zone_id": "1832",
                "name": "Limbazu Rajons"
                },
                {
                "zone_id": "1833",
                "name": "Ludzas Rajons"
                },
                {
                "zone_id": "1834",
                "name": "Madonas Rajons"
                },
                {
                "zone_id": "1835",
                "name": "Ogres Rajons"
                },
                {
                "zone_id": "1836",
                "name": "Preilu Rajons"
                },
                {
                "zone_id": "1837",
                "name": "Rezeknes Rajons"
                },
                {
                "zone_id": "1838",
                "name": "Rigas Rajons"
                },
                {
                "zone_id": "1839",
                "name": "Saldus Rajons"
                },
                {
                "zone_id": "1840",
                "name": "Talsu Rajons"
                },
                {
                "zone_id": "1841",
                "name": "Tukuma Rajons"
                },
                {
                "zone_id": "1842",
                "name": "Valkas Rajons"
                },
                {
                "zone_id": "1843",
                "name": "Valmieras Rajons"
                },
                {
                "zone_id": "1844",
                "name": "Ventspils Rajons"
                },
                {
                "zone_id": "1845",
                "name": "Daugavpils"
                },
                {
                "zone_id": "1846",
                "name": "Jelgava"
                },
                {
                "zone_id": "1847",
                "name": "Jurmala"
                },
                {
                "zone_id": "1848",
                "name": "Liepaja"
                },
                {
                "zone_id": "1849",
                "name": "Rezekne"
                },
                {
                "zone_id": "1850",
                "name": "Riga"
                },
                {
                "zone_id": "1851",
                "name": "Ventspils"
                }
            ]
            },
            {
            "_id": "LSO",
            "country_id": "119",
            "pais_name": "Lesotho",
            "phone_code": "266",
            "departamento": [
                {
                "zone_id": "1852",
                "name": "Berea"
                },
                {
                "zone_id": "1853",
                "name": "Butha-Buthe"
                },
                {
                "zone_id": "1854",
                "name": "Leribe"
                },
                {
                "zone_id": "1855",
                "name": "Mafeteng"
                },
                {
                "zone_id": "1856",
                "name": "Maseru"
                },
                {
                "zone_id": "1857",
                "name": "Mohale's Hoek"
                },
                {
                "zone_id": "1858",
                "name": "Mokhotlong"
                },
                {
                "zone_id": "1859",
                "name": "Qacha's Nek"
                },
                {
                "zone_id": "1860",
                "name": "Quthing"
                },
                {
                "zone_id": "1861",
                "name": "Thaba-Tseka"
                }
            ]
            },
            {
            "_id": "LBR",
            "country_id": "120",
            "pais_name": "Liberia",
            "phone_code": "231",
            "departamento": [
                {
                "zone_id": "1862",
                "name": "Bomi"
                },
                {
                "zone_id": "1863",
                "name": "Bong"
                },
                {
                "zone_id": "1864",
                "name": "Grand Bassa"
                },
                {
                "zone_id": "1865",
                "name": "Grand Cape Mount"
                },
                {
                "zone_id": "1866",
                "name": "Grand Gedeh"
                },
                {
                "zone_id": "1867",
                "name": "Grand Kru"
                },
                {
                "zone_id": "1868",
                "name": "Lofa"
                },
                {
                "zone_id": "1869",
                "name": "Margibi"
                },
                {
                "zone_id": "1870",
                "name": "Maryland"
                },
                {
                "zone_id": "1871",
                "name": "Montserrado"
                },
                {
                "zone_id": "1872",
                "name": "Nimba"
                },
                {
                "zone_id": "1873",
                "name": "River Cess"
                },
                {
                "zone_id": "1874",
                "name": "Sinoe"
                }
            ]
            },
            {
            "_id": "LBY",
            "country_id": "121",
            "pais_name": "Libyan Arab Jamahiriya",
            "phone_code": "218",
            "departamento": [
                {
                "zone_id": "1875",
                "name": "Ajdabiya"
                },
                {
                "zone_id": "1876",
                "name": "Al 'Aziziyah"
                },
                {
                "zone_id": "1877",
                "name": "Al Fatih"
                },
                {
                "zone_id": "1878",
                "name": "Al Jabal al Akhdar"
                },
                {
                "zone_id": "1879",
                "name": "Al Jufrah"
                },
                {
                "zone_id": "1880",
                "name": "Al Khums"
                },
                {
                "zone_id": "1881",
                "name": "Al Kufrah"
                },
                {
                "zone_id": "1882",
                "name": "An Nuqat al Khams"
                },
                {
                "zone_id": "1883",
                "name": "Ash Shati'"
                },
                {
                "zone_id": "1884",
                "name": "Awbari"
                },
                {
                "zone_id": "1885",
                "name": "Az Zawiyah"
                },
                {
                "zone_id": "1886",
                "name": "Banghazi"
                },
                {
                "zone_id": "1887",
                "name": "Darnah"
                },
                {
                "zone_id": "1888",
                "name": "Ghadamis"
                },
                {
                "zone_id": "1889",
                "name": "Gharyan"
                },
                {
                "zone_id": "1890",
                "name": "Misratah"
                },
                {
                "zone_id": "1891",
                "name": "Murzuq"
                },
                {
                "zone_id": "1892",
                "name": "Sabha"
                },
                {
                "zone_id": "1893",
                "name": "Sawfajjin"
                },
                {
                "zone_id": "1894",
                "name": "Surt"
                },
                {
                "zone_id": "1895",
                "name": "Tarabulus (Tripoli)"
                },
                {
                "zone_id": "1896",
                "name": "Tarhunah"
                },
                {
                "zone_id": "1897",
                "name": "Tubruq"
                },
                {
                "zone_id": "1898",
                "name": "Yafran"
                },
                {
                "zone_id": "1899",
                "name": "Zlitan"
                }
            ]
            },
            {
            "_id": "LIE",
            "country_id": "122",
            "pais_name": "Liechtenstein",
            "phone_code": "423",
            "departamento": [
                {
                "zone_id": "1900",
                "name": "Vaduz"
                },
                {
                "zone_id": "1901",
                "name": "Schaan"
                },
                {
                "zone_id": "1902",
                "name": "Balzers"
                },
                {
                "zone_id": "1903",
                "name": "Triesen"
                },
                {
                "zone_id": "1904",
                "name": "Eschen"
                },
                {
                "zone_id": "1905",
                "name": "Mauren"
                },
                {
                "zone_id": "1906",
                "name": "Triesenberg"
                },
                {
                "zone_id": "1907",
                "name": "Ruggell"
                },
                {
                "zone_id": "1908",
                "name": "Gamprin"
                },
                {
                "zone_id": "1909",
                "name": "Schellenberg"
                },
                {
                "zone_id": "1910",
                "name": "Planken"
                }
            ]
            },
            {
            "_id": "LTU",
            "country_id": "123",
            "pais_name": "Lithuania",
            "phone_code": "370",
            "departamento": [
                {
                "zone_id": "1911",
                "name": "Alytus"
                },
                {
                "zone_id": "1912",
                "name": "Kaunas"
                },
                {
                "zone_id": "1913",
                "name": "Klaipeda"
                },
                {
                "zone_id": "1914",
                "name": "Marijampole"
                },
                {
                "zone_id": "1915",
                "name": "Panevezys"
                },
                {
                "zone_id": "1916",
                "name": "Siauliai"
                },
                {
                "zone_id": "1917",
                "name": "Taurage"
                },
                {
                "zone_id": "1918",
                "name": "Telsiai"
                },
                {
                "zone_id": "1919",
                "name": "Utena"
                },
                {
                "zone_id": "1920",
                "name": "Vilnius"
                }
            ]
            },
            {
            "_id": "LUX",
            "country_id": "124",
            "pais_name": "Luxembourg",
            "phone_code": "352",
            "departamento": [
                {
                "zone_id": "1921",
                "name": "Diekirch"
                },
                {
                "zone_id": "1922",
                "name": "Clervaux"
                },
                {
                "zone_id": "1923",
                "name": "Redange"
                },
                {
                "zone_id": "1924",
                "name": "Vianden"
                },
                {
                "zone_id": "1925",
                "name": "Wiltz"
                },
                {
                "zone_id": "1926",
                "name": "Grevenmacher"
                },
                {
                "zone_id": "1927",
                "name": "Echternach"
                },
                {
                "zone_id": "1928",
                "name": "Remich"
                },
                {
                "zone_id": "1929",
                "name": "Luxembourg"
                },
                {
                "zone_id": "1930",
                "name": "Capellen"
                },
                {
                "zone_id": "1931",
                "name": "Esch-sur-Alzette"
                },
                {
                "zone_id": "1932",
                "name": "Mersch"
                }
            ]
            },
            {
            "_id": "MAC",
            "country_id": "125",
            "pais_name": "Macau",
            "phone_code": "853",
            "departamento": [
                {
                "zone_id": "1933",
                "name": "Our Lady Fatima Parish"
                },
                {
                "zone_id": "1934",
                "name": "St. Anthony Parish"
                },
                {
                "zone_id": "1935",
                "name": "St. Lazarus Parish"
                },
                {
                "zone_id": "1936",
                "name": "Cathedral Parish"
                },
                {
                "zone_id": "1937",
                "name": "St. Lawrence Parish"
                }
            ]
            },
            {
            "_id": "MDG",
            "country_id": "127",
            "pais_name": "Madagascar",
            "phone_code": "261",
            "departamento": [
                {
                "zone_id": "1938",
                "name": "Antananarivo"
                },
                {
                "zone_id": "1939",
                "name": "Antsiranana"
                },
                {
                "zone_id": "1940",
                "name": "Fianarantsoa"
                },
                {
                "zone_id": "1941",
                "name": "Mahajanga"
                },
                {
                "zone_id": "1942",
                "name": "Toamasina"
                },
                {
                "zone_id": "1943",
                "name": "Toliara"
                }
            ]
            },
            {
            "_id": "MWI",
            "country_id": "128",
            "pais_name": "Malawi",
            "phone_code": "265",
            "departamento": [
                {
                "zone_id": "1944",
                "name": "Balaka"
                },
                {
                "zone_id": "1945",
                "name": "Blantyre"
                },
                {
                "zone_id": "1946",
                "name": "Chikwawa"
                },
                {
                "zone_id": "1947",
                "name": "Chiradzulu"
                },
                {
                "zone_id": "1948",
                "name": "Chitipa"
                },
                {
                "zone_id": "1949",
                "name": "Dedza"
                },
                {
                "zone_id": "1950",
                "name": "Dowa"
                },
                {
                "zone_id": "1951",
                "name": "Karonga"
                },
                {
                "zone_id": "1952",
                "name": "Kasungu"
                },
                {
                "zone_id": "1953",
                "name": "Likoma"
                },
                {
                "zone_id": "1954",
                "name": "Lilongwe"
                },
                {
                "zone_id": "1955",
                "name": "Machinga"
                },
                {
                "zone_id": "1956",
                "name": "Mangochi"
                },
                {
                "zone_id": "1957",
                "name": "Mchinji"
                },
                {
                "zone_id": "1958",
                "name": "Mulanje"
                },
                {
                "zone_id": "1959",
                "name": "Mwanza"
                },
                {
                "zone_id": "1960",
                "name": "Mzimba"
                },
                {
                "zone_id": "1961",
                "name": "Ntcheu"
                },
                {
                "zone_id": "1962",
                "name": "Nkhata Bay"
                },
                {
                "zone_id": "1963",
                "name": "Nkhotakota"
                },
                {
                "zone_id": "1964",
                "name": "Nsanje"
                },
                {
                "zone_id": "1965",
                "name": "Ntchisi"
                },
                {
                "zone_id": "1966",
                "name": "Phalombe"
                },
                {
                "zone_id": "1967",
                "name": "Rumphi"
                },
                {
                "zone_id": "1968",
                "name": "Salima"
                },
                {
                "zone_id": "1969",
                "name": "Thyolo"
                },
                {
                "zone_id": "1970",
                "name": "Zomba"
                }
            ]
            },
            {
            "_id": "MYS",
            "country_id": "129",
            "pais_name": "Malaysia",
            "phone_code": "60",
            "departamento": [
                {
                "zone_id": "1971",
                "name": "Johor"
                },
                {
                "zone_id": "1972",
                "name": "Kedah"
                },
                {
                "zone_id": "1973",
                "name": "Kelantan"
                },
                {
                "zone_id": "1974",
                "name": "Labuan"
                },
                {
                "zone_id": "1975",
                "name": "Melaka"
                },
                {
                "zone_id": "1976",
                "name": "Negeri Sembilan"
                },
                {
                "zone_id": "1977",
                "name": "Pahang"
                },
                {
                "zone_id": "1978",
                "name": "Perak"
                },
                {
                "zone_id": "1979",
                "name": "Perlis"
                },
                {
                "zone_id": "1980",
                "name": "Pulau Pinang"
                },
                {
                "zone_id": "1981",
                "name": "Sabah"
                },
                {
                "zone_id": "1982",
                "name": "Sarawak"
                },
                {
                "zone_id": "1983",
                "name": "Selangor"
                },
                {
                "zone_id": "1984",
                "name": "Terengganu"
                },
                {
                "zone_id": "1985",
                "name": "Wilayah Persekutuan"
                }
            ]
            },
            {
            "_id": "MDV",
            "country_id": "130",
            "pais_name": "Maldives",
            "phone_code": "960",
            "departamento": [
                {
                "zone_id": "1986",
                "name": "Thiladhunmathi Uthuru"
                },
                {
                "zone_id": "1987",
                "name": "Thiladhunmathi Dhekunu"
                },
                {
                "zone_id": "1988",
                "name": "Miladhunmadulu Uthuru"
                },
                {
                "zone_id": "1989",
                "name": "Miladhunmadulu Dhekunu"
                },
                {
                "zone_id": "1990",
                "name": "Maalhosmadulu Uthuru"
                },
                {
                "zone_id": "1991",
                "name": "Maalhosmadulu Dhekunu"
                },
                {
                "zone_id": "1992",
                "name": "Faadhippolhu"
                },
                {
                "zone_id": "1993",
                "name": "Male Atoll"
                },
                {
                "zone_id": "1994",
                "name": "Ari Atoll Uthuru"
                },
                {
                "zone_id": "1995",
                "name": "Ari Atoll Dheknu"
                },
                {
                "zone_id": "1996",
                "name": "Felidhe Atoll"
                },
                {
                "zone_id": "1997",
                "name": "Mulaku Atoll"
                },
                {
                "zone_id": "1998",
                "name": "Nilandhe Atoll Uthuru"
                },
                {
                "zone_id": "1999",
                "name": "Nilandhe Atoll Dhekunu"
                },
                {
                "zone_id": "2000",
                "name": "Kolhumadulu"
                },
                {
                "zone_id": "2001",
                "name": "Hadhdhunmathi"
                },
                {
                "zone_id": "2002",
                "name": "Huvadhu Atoll Uthuru"
                },
                {
                "zone_id": "2003",
                "name": "Huvadhu Atoll Dhekunu"
                },
                {
                "zone_id": "2004",
                "name": "Fua Mulaku"
                },
                {
                "zone_id": "2005",
                "name": "Addu"
                }
            ]
            },
            {
            "_id": "MLI",
            "country_id": "131",
            "pais_name": "Mali",
            "phone_code": "223",
            "departamento": [
                {
                "zone_id": "2006",
                "name": "Gao"
                },
                {
                "zone_id": "2007",
                "name": "Kayes"
                },
                {
                "zone_id": "2008",
                "name": "Kidal"
                },
                {
                "zone_id": "2009",
                "name": "Koulikoro"
                },
                {
                "zone_id": "2010",
                "name": "Mopti"
                },
                {
                "zone_id": "2011",
                "name": "Segou"
                },
                {
                "zone_id": "2012",
                "name": "Sikasso"
                },
                {
                "zone_id": "2013",
                "name": "Tombouctou"
                },
                {
                "zone_id": "2014",
                "name": "Bamako Capital District"
                }
            ]
            },
            {
            "_id": "MLT",
            "country_id": "132",
            "pais_name": "Malta",
            "phone_code": "356",
            "departamento": [
                {
                "zone_id": "2015",
                "name": "Attard"
                },
                {
                "zone_id": "2016",
                "name": "Balzan"
                },
                {
                "zone_id": "2017",
                "name": "Birgu"
                },
                {
                "zone_id": "2018",
                "name": "Birkirkara"
                },
                {
                "zone_id": "2019",
                "name": "Birzebbuga"
                },
                {
                "zone_id": "2020",
                "name": "Bormla"
                },
                {
                "zone_id": "2021",
                "name": "Dingli"
                },
                {
                "zone_id": "2022",
                "name": "Fgura"
                },
                {
                "zone_id": "2023",
                "name": "Floriana"
                },
                {
                "zone_id": "2024",
                "name": "Gudja"
                },
                {
                "zone_id": "2025",
                "name": "Gzira"
                },
                {
                "zone_id": "2026",
                "name": "Gargur"
                },
                {
                "zone_id": "2027",
                "name": "Gaxaq"
                },
                {
                "zone_id": "2028",
                "name": "Hamrun"
                },
                {
                "zone_id": "2029",
                "name": "Iklin"
                },
                {
                "zone_id": "2030",
                "name": "Isla"
                },
                {
                "zone_id": "2031",
                "name": "Kalkara"
                },
                {
                "zone_id": "2032",
                "name": "Kirkop"
                },
                {
                "zone_id": "2033",
                "name": "Lija"
                },
                {
                "zone_id": "2034",
                "name": "Luqa"
                },
                {
                "zone_id": "2035",
                "name": "Marsa"
                },
                {
                "zone_id": "2036",
                "name": "Marsaskala"
                },
                {
                "zone_id": "2037",
                "name": "Marsaxlokk"
                },
                {
                "zone_id": "2038",
                "name": "Mdina"
                },
                {
                "zone_id": "2039",
                "name": "Melliea"
                },
                {
                "zone_id": "2040",
                "name": "Mgarr"
                },
                {
                "zone_id": "2041",
                "name": "Mosta"
                },
                {
                "zone_id": "2042",
                "name": "Mqabba"
                },
                {
                "zone_id": "2043",
                "name": "Msida"
                },
                {
                "zone_id": "2044",
                "name": "Mtarfa"
                },
                {
                "zone_id": "2045",
                "name": "Naxxar"
                },
                {
                "zone_id": "2046",
                "name": "Paola"
                },
                {
                "zone_id": "2047",
                "name": "Pembroke"
                },
                {
                "zone_id": "2048",
                "name": "Pieta"
                },
                {
                "zone_id": "2049",
                "name": "Qormi"
                },
                {
                "zone_id": "2050",
                "name": "Qrendi"
                },
                {
                "zone_id": "2051",
                "name": "Rabat"
                },
                {
                "zone_id": "2052",
                "name": "Safi"
                },
                {
                "zone_id": "2053",
                "name": "San Giljan"
                },
                {
                "zone_id": "2054",
                "name": "Santa Lucija"
                },
                {
                "zone_id": "2055",
                "name": "San Pawl il-Bahar"
                },
                {
                "zone_id": "2056",
                "name": "San Gwann"
                },
                {
                "zone_id": "2057",
                "name": "Santa Venera"
                },
                {
                "zone_id": "2058",
                "name": "Siggiewi"
                },
                {
                "zone_id": "2059",
                "name": "Sliema"
                },
                {
                "zone_id": "2060",
                "name": "Swieqi"
                },
                {
                "zone_id": "2061",
                "name": "Ta Xbiex"
                },
                {
                "zone_id": "2062",
                "name": "Tarxien"
                },
                {
                "zone_id": "2063",
                "name": "Valletta"
                },
                {
                "zone_id": "2064",
                "name": "Xgajra"
                },
                {
                "zone_id": "2065",
                "name": "Zabbar"
                },
                {
                "zone_id": "2066",
                "name": "Zebbug"
                },
                {
                "zone_id": "2067",
                "name": "Zejtun"
                },
                {
                "zone_id": "2068",
                "name": "Zurrieq"
                },
                {
                "zone_id": "2069",
                "name": "Fontana"
                },
                {
                "zone_id": "2070",
                "name": "Ghajnsielem"
                },
                {
                "zone_id": "2071",
                "name": "Gharb"
                },
                {
                "zone_id": "2072",
                "name": "Ghasri"
                },
                {
                "zone_id": "2073",
                "name": "Kercem"
                },
                {
                "zone_id": "2074",
                "name": "Munxar"
                },
                {
                "zone_id": "2075",
                "name": "Nadur"
                },
                {
                "zone_id": "2076",
                "name": "Qala"
                },
                {
                "zone_id": "2077",
                "name": "Victoria"
                },
                {
                "zone_id": "2078",
                "name": "San Lawrenz"
                },
                {
                "zone_id": "2079",
                "name": "Sannat"
                },
                {
                "zone_id": "2080",
                "name": "Xagra"
                },
                {
                "zone_id": "2081",
                "name": "Xewkija"
                },
                {
                "zone_id": "2082",
                "name": "Zebbug"
                }
            ]
            },
            {
            "_id": "MHL",
            "country_id": "133",
            "pais_name": "Marshall Islands",
            "phone_code": "962",
            "departamento": [
                {
                "zone_id": "2083",
                "name": "Ailinginae"
                },
                {
                "zone_id": "2084",
                "name": "Ailinglaplap"
                },
                {
                "zone_id": "2085",
                "name": "Ailuk"
                },
                {
                "zone_id": "2086",
                "name": "Arno"
                },
                {
                "zone_id": "2087",
                "name": "Aur"
                },
                {
                "zone_id": "2088",
                "name": "Bikar"
                },
                {
                "zone_id": "2089",
                "name": "Bikini"
                },
                {
                "zone_id": "2090",
                "name": "Bokak"
                },
                {
                "zone_id": "2091",
                "name": "Ebon"
                },
                {
                "zone_id": "2092",
                "name": "Enewetak"
                },
                {
                "zone_id": "2093",
                "name": "Erikub"
                },
                {
                "zone_id": "2094",
                "name": "Jabat"
                },
                {
                "zone_id": "2095",
                "name": "Jaluit"
                },
                {
                "zone_id": "2096",
                "name": "Jemo"
                },
                {
                "zone_id": "2097",
                "name": "Kili"
                },
                {
                "zone_id": "2098",
                "name": "Kwajalein"
                },
                {
                "zone_id": "2099",
                "name": "Lae"
                },
                {
                "zone_id": "2100",
                "name": "Lib"
                },
                {
                "zone_id": "2101",
                "name": "Likiep"
                },
                {
                "zone_id": "2102",
                "name": "Majuro"
                },
                {
                "zone_id": "2103",
                "name": "Maloelap"
                },
                {
                "zone_id": "2104",
                "name": "Mejit"
                },
                {
                "zone_id": "2105",
                "name": "Mili"
                },
                {
                "zone_id": "2106",
                "name": "Namorik"
                },
                {
                "zone_id": "2107",
                "name": "Namu"
                },
                {
                "zone_id": "2108",
                "name": "Rongelap"
                },
                {
                "zone_id": "2109",
                "name": "Rongrik"
                },
                {
                "zone_id": "2110",
                "name": "Toke"
                },
                {
                "zone_id": "2111",
                "name": "Ujae"
                },
                {
                "zone_id": "2112",
                "name": "Ujelang"
                },
                {
                "zone_id": "2113",
                "name": "Utirik"
                },
                {
                "zone_id": "2114",
                "name": "Wotho"
                },
                {
                "zone_id": "2115",
                "name": "Wotje"
                }
            ]
            },
            {
            "_id": "MRT",
            "country_id": "135",
            "pais_name": "Mauritania",
            "phone_code": "222",
            "departamento": [
                {
                "zone_id": "2116",
                "name": "Adrar"
                },
                {
                "zone_id": "2117",
                "name": "Assaba"
                },
                {
                "zone_id": "2118",
                "name": "Brakna"
                },
                {
                "zone_id": "2119",
                "name": "Dakhlet Nouadhibou"
                },
                {
                "zone_id": "2120",
                "name": "Gorgol"
                },
                {
                "zone_id": "2121",
                "name": "Guidimaka"
                },
                {
                "zone_id": "2122",
                "name": "Hodh Ech Chargui"
                },
                {
                "zone_id": "2123",
                "name": "Hodh El Gharbi"
                },
                {
                "zone_id": "2124",
                "name": "Inchiri"
                },
                {
                "zone_id": "2125",
                "name": "Tagant"
                },
                {
                "zone_id": "2126",
                "name": "Tiris Zemmour"
                },
                {
                "zone_id": "2127",
                "name": "Trarza"
                },
                {
                "zone_id": "2128",
                "name": "Nouakchott"
                }
            ]
            },
            {
            "_id": "MUS",
            "country_id": "136",
            "pais_name": "Mauritius",
            "phone_code": "230",
            "departamento": [
                {
                "zone_id": "2129",
                "name": "Beau Bassin-Rose Hill"
                },
                {
                "zone_id": "2130",
                "name": "Curepipe"
                },
                {
                "zone_id": "2131",
                "name": "Port Louis"
                },
                {
                "zone_id": "2132",
                "name": "Quatre Bornes"
                },
                {
                "zone_id": "2133",
                "name": "Vacoas-Phoenix"
                },
                {
                "zone_id": "2134",
                "name": "Agalega Islands"
                },
                {
                "zone_id": "2135",
                "name": "Cargados Carajos Shoals (Saint Brandon Islands)"
                },
                {
                "zone_id": "2136",
                "name": "Rodrigues"
                },
                {
                "zone_id": "2137",
                "name": "Black River"
                },
                {
                "zone_id": "2138",
                "name": "Flacq"
                },
                {
                "zone_id": "2139",
                "name": "Grand Port"
                },
                {
                "zone_id": "2140",
                "name": "Moka"
                },
                {
                "zone_id": "2141",
                "name": "Pamplemousses"
                },
                {
                "zone_id": "2142",
                "name": "Plaines Wilhems"
                },
                {
                "zone_id": "2143",
                "name": "Port Louis"
                },
                {
                "zone_id": "2144",
                "name": "Riviere du Rempart"
                },
                {
                "zone_id": "2145",
                "name": "Savanne"
                }
            ]
            },
            {
            "_id": "MEX",
            "country_id": "138",
            "pais_name": "Mexico",
            "phone_code": "52",
            "departamento": [
                {
                "zone_id": "2146",
                "name": "Baja California Norte"
                },
                {
                "zone_id": "2147",
                "name": "Baja California Sur"
                },
                {
                "zone_id": "2148",
                "name": "Campeche"
                },
                {
                "zone_id": "2149",
                "name": "Chiapas"
                },
                {
                "zone_id": "2150",
                "name": "Chihuahua"
                },
                {
                "zone_id": "2151",
                "name": "Coahuila de Zaragoza"
                },
                {
                "zone_id": "2152",
                "name": "Colima"
                },
                {
                "zone_id": "2153",
                "name": "Distrito Federal"
                },
                {
                "zone_id": "2154",
                "name": "Durango"
                },
                {
                "zone_id": "2155",
                "name": "Guanajuato"
                },
                {
                "zone_id": "2156",
                "name": "Guerrero"
                },
                {
                "zone_id": "2157",
                "name": "Hidalgo"
                },
                {
                "zone_id": "2158",
                "name": "Jalisco"
                },
                {
                "zone_id": "2159",
                "name": "Mexico"
                },
                {
                "zone_id": "2160",
                "name": "Michoacan de Ocampo"
                },
                {
                "zone_id": "2161",
                "name": "Morelos"
                },
                {
                "zone_id": "2162",
                "name": "Nayarit"
                },
                {
                "zone_id": "2163",
                "name": "Nuevo Leon"
                },
                {
                "zone_id": "2164",
                "name": "Oaxaca"
                },
                {
                "zone_id": "2165",
                "name": "Puebla"
                },
                {
                "zone_id": "2166",
                "name": "Queretaro de Arteaga"
                },
                {
                "zone_id": "2167",
                "name": "Quintana Roo"
                },
                {
                "zone_id": "2168",
                "name": "San Luis Potosi"
                },
                {
                "zone_id": "2169",
                "name": "Sinaloa"
                },
                {
                "zone_id": "2170",
                "name": "Sonora"
                },
                {
                "zone_id": "2171",
                "name": "Tabasco"
                },
                {
                "zone_id": "2172",
                "name": "Tamaulipas"
                },
                {
                "zone_id": "2173",
                "name": "Tlaxcala"
                },
                {
                "zone_id": "2174",
                "name": "Veracruz-Llave"
                },
                {
                "zone_id": "2175",
                "name": "Yucatan"
                },
                {
                "zone_id": "2176",
                "name": "Zacatecas"
                }
            ]
            },
            {
            "_id": "FSM",
            "country_id": "139",
            "pais_name": "Micronesia, Federated States of",
            "phone_code": "691",
            "departamento": [
                {
                "zone_id": "2177",
                "name": "Chuuk"
                },
                {
                "zone_id": "2178",
                "name": "Kosrae"
                },
                {
                "zone_id": "2179",
                "name": "Pohnpei"
                },
                {
                "zone_id": "2180",
                "name": "Yap"
                }
            ]
            },
            {
            "_id": "MDA",
            "country_id": "140",
            "pais_name": "Moldova, Republic of",
            "phone_code": "373",
            "departamento": [
                {
                "zone_id": "2181",
                "name": "Gagauzia"
                },
                {
                "zone_id": "2182",
                "name": "Chisinau"
                },
                {
                "zone_id": "2183",
                "name": "Balti"
                },
                {
                "zone_id": "2184",
                "name": "Cahul"
                },
                {
                "zone_id": "2185",
                "name": "Edinet"
                },
                {
                "zone_id": "2186",
                "name": "Lapusna"
                },
                {
                "zone_id": "2187",
                "name": "Orhei"
                },
                {
                "zone_id": "2188",
                "name": "Soroca"
                },
                {
                "zone_id": "2189",
                "name": "Tighina"
                },
                {
                "zone_id": "2190",
                "name": "Ungheni"
                },
                {
                "zone_id": "2191",
                "name": "St\u201anga Nistrului"
                }
            ]
            },
            {
            "_id": "MCO",
            "country_id": "141",
            "pais_name": "Monaco",
            "phone_code": "377",
            "departamento": [
                {
                "zone_id": "2192",
                "name": "Fontvieille"
                },
                {
                "zone_id": "2193",
                "name": "La Condamine"
                },
                {
                "zone_id": "2194",
                "name": "Monaco-Ville"
                },
                {
                "zone_id": "2195",
                "name": "Monte-Carlo"
                }
            ]
            },
            {
            "_id": "MNG",
            "country_id": "142",
            "pais_name": "Mongolia",
            "phone_code": "976",
            "departamento": [
                {
                "zone_id": "2196",
                "name": "Ulanbaatar"
                },
                {
                "zone_id": "2197",
                "name": "Orhon"
                },
                {
                "zone_id": "2198",
                "name": "Darhan uul"
                },
                {
                "zone_id": "2199",
                "name": "Hentiy"
                },
                {
                "zone_id": "2200",
                "name": "Hovsgol"
                },
                {
                "zone_id": "2201",
                "name": "Hovd"
                },
                {
                "zone_id": "2202",
                "name": "Uvs"
                },
                {
                "zone_id": "2203",
                "name": "Tov"
                },
                {
                "zone_id": "2204",
                "name": "Selenge"
                },
                {
                "zone_id": "2205",
                "name": "Suhbaatar"
                },
                {
                "zone_id": "2206",
                "name": "Omnogovi"
                },
                {
                "zone_id": "2207",
                "name": "Ovorhangay"
                },
                {
                "zone_id": "2208",
                "name": "Dzavhan"
                },
                {
                "zone_id": "2209",
                "name": "DundgovL"
                },
                {
                "zone_id": "2210",
                "name": "Dornod"
                },
                {
                "zone_id": "2211",
                "name": "Dornogov"
                },
                {
                "zone_id": "2212",
                "name": "Govi-Sumber"
                },
                {
                "zone_id": "2213",
                "name": "Govi-Altay"
                },
                {
                "zone_id": "2214",
                "name": "Bulgan"
                },
                {
                "zone_id": "2215",
                "name": "Bayanhongor"
                },
                {
                "zone_id": "2216",
                "name": "Bayan-Olgiy"
                },
                {
                "zone_id": "2217",
                "name": "Arhangay"
                }
            ]
            },
            {
            "_id": "MSR",
            "country_id": "143",
            "pais_name": "Montserrat",
            "phone_code": "1",
            "departamento": [
                {
                "zone_id": "2218",
                "name": "Saint Anthony"
                },
                {
                "zone_id": "2219",
                "name": "Saint Georges"
                },
                {
                "zone_id": "2220",
                "name": "Saint Peter"
                }
            ]
            },
            {
            "_id": "MAR",
            "country_id": "144",
            "pais_name": "Morocco",
            "phone_code": "212",
            "departamento": [
                {
                "zone_id": "2221",
                "name": "Agadir"
                },
                {
                "zone_id": "2222",
                "name": "Al Hoceima"
                },
                {
                "zone_id": "2223",
                "name": "Azilal"
                },
                {
                "zone_id": "2224",
                "name": "Beni Mellal"
                },
                {
                "zone_id": "2225",
                "name": "Ben Slimane"
                },
                {
                "zone_id": "2226",
                "name": "Boulemane"
                },
                {
                "zone_id": "2227",
                "name": "Casablanca"
                },
                {
                "zone_id": "2228",
                "name": "Chaouen"
                },
                {
                "zone_id": "2229",
                "name": "El Jadida"
                },
                {
                "zone_id": "2230",
                "name": "El Kelaa des Sraghna"
                },
                {
                "zone_id": "2231",
                "name": "Er Rachidia"
                },
                {
                "zone_id": "2232",
                "name": "Essaouira"
                },
                {
                "zone_id": "2233",
                "name": "Fes"
                },
                {
                "zone_id": "2234",
                "name": "Figuig"
                },
                {
                "zone_id": "2235",
                "name": "Guelmim"
                },
                {
                "zone_id": "2236",
                "name": "Ifrane"
                },
                {
                "zone_id": "2237",
                "name": "Kenitra"
                },
                {
                "zone_id": "2238",
                "name": "Khemisset"
                },
                {
                "zone_id": "2239",
                "name": "Khenifra"
                },
                {
                "zone_id": "2240",
                "name": "Khouribga"
                },
                {
                "zone_id": "2241",
                "name": "Laayoune"
                },
                {
                "zone_id": "2242",
                "name": "Larache"
                },
                {
                "zone_id": "2243",
                "name": "Marrakech"
                },
                {
                "zone_id": "2244",
                "name": "Meknes"
                },
                {
                "zone_id": "2245",
                "name": "Nador"
                },
                {
                "zone_id": "2246",
                "name": "Ouarzazate"
                },
                {
                "zone_id": "2247",
                "name": "Oujda"
                },
                {
                "zone_id": "2248",
                "name": "Rabat-Sale"
                },
                {
                "zone_id": "2249",
                "name": "Safi"
                },
                {
                "zone_id": "2250",
                "name": "Settat"
                },
                {
                "zone_id": "2251",
                "name": "Sidi Kacem"
                },
                {
                "zone_id": "2252",
                "name": "Tangier"
                },
                {
                "zone_id": "2253",
                "name": "Tan-Tan"
                },
                {
                "zone_id": "2254",
                "name": "Taounate"
                },
                {
                "zone_id": "2255",
                "name": "Taroudannt"
                },
                {
                "zone_id": "2256",
                "name": "Tata"
                },
                {
                "zone_id": "2257",
                "name": "Taza"
                },
                {
                "zone_id": "2258",
                "name": "Tetouan"
                },
                {
                "zone_id": "2259",
                "name": "Tiznit"
                },
                {
                "zone_id": "2260",
                "name": "Ad Dakhla"
                },
                {
                "zone_id": "2261",
                "name": "Boujdour"
                },
                {
                "zone_id": "2262",
                "name": "Es Smara"
                }
            ]
            },
            {
            "_id": "MOZ",
            "country_id": "145",
            "pais_name": "Mozambique",
            "phone_code": "258",
            "departamento": [
                {
                "zone_id": "2263",
                "name": "Cabo Delgado"
                },
                {
                "zone_id": "2264",
                "name": "Gaza"
                },
                {
                "zone_id": "2265",
                "name": "Inhambane"
                },
                {
                "zone_id": "2266",
                "name": "Manica"
                },
                {
                "zone_id": "2267",
                "name": "Maputo (city)"
                },
                {
                "zone_id": "2268",
                "name": "Maputo"
                },
                {
                "zone_id": "2269",
                "name": "Nampula"
                },
                {
                "zone_id": "2270",
                "name": "Niassa"
                },
                {
                "zone_id": "2271",
                "name": "Sofala"
                },
                {
                "zone_id": "2272",
                "name": "Tete"
                },
                {
                "zone_id": "2273",
                "name": "Zambezia"
                }
            ]
            },
            {
            "_id": "MMR",
            "country_id": "146",
            "pais_name": "Myanmar",
            "phone_code": "95",
            "departamento": [
                {
                "zone_id": "2274",
                "name": "Ayeyarwady"
                },
                {
                "zone_id": "2275",
                "name": "Bago"
                },
                {
                "zone_id": "2276",
                "name": "Magway"
                },
                {
                "zone_id": "2277",
                "name": "Mandalay"
                },
                {
                "zone_id": "2278",
                "name": "Sagaing"
                },
                {
                "zone_id": "2279",
                "name": "Tanintharyi"
                },
                {
                "zone_id": "2280",
                "name": "Yangon"
                },
                {
                "zone_id": "2281",
                "name": "Chin State"
                },
                {
                "zone_id": "2282",
                "name": "Kachin State"
                },
                {
                "zone_id": "2283",
                "name": "Kayah State"
                },
                {
                "zone_id": "2284",
                "name": "Kayin State"
                },
                {
                "zone_id": "2285",
                "name": "Mon State"
                },
                {
                "zone_id": "2286",
                "name": "Rakhine State"
                },
                {
                "zone_id": "2287",
                "name": "Shan State"
                }
            ]
            },
            {
            "_id": "NAM",
            "country_id": "147",
            "pais_name": "Namibia",
            "phone_code": "264",
            "departamento": [
                {
                "zone_id": "2288",
                "name": "Caprivi"
                },
                {
                "zone_id": "2289",
                "name": "Erongo"
                },
                {
                "zone_id": "2290",
                "name": "Hardap"
                },
                {
                "zone_id": "2291",
                "name": "Karas"
                },
                {
                "zone_id": "2292",
                "name": "Kavango"
                },
                {
                "zone_id": "2293",
                "name": "Khomas"
                },
                {
                "zone_id": "2294",
                "name": "Kunene"
                },
                {
                "zone_id": "2295",
                "name": "Ohangwena"
                },
                {
                "zone_id": "2296",
                "name": "Omaheke"
                },
                {
                "zone_id": "2297",
                "name": "Omusati"
                },
                {
                "zone_id": "2298",
                "name": "Oshana"
                },
                {
                "zone_id": "2299",
                "name": "Oshikoto"
                },
                {
                "zone_id": "2300",
                "name": "Otjozondjupa"
                }
            ]
            },
            {
            "_id": "NRU",
            "country_id": "148",
            "pais_name": "Nauru",
            "phone_code": "674",
            "departamento": [
                {
                "zone_id": "2301",
                "name": "Aiwo"
                },
                {
                "zone_id": "2302",
                "name": "Anabar"
                },
                {
                "zone_id": "2303",
                "name": "Anetan"
                },
                {
                "zone_id": "2304",
                "name": "Anibare"
                },
                {
                "zone_id": "2305",
                "name": "Baiti"
                },
                {
                "zone_id": "2306",
                "name": "Boe"
                },
                {
                "zone_id": "2307",
                "name": "Buada"
                },
                {
                "zone_id": "2308",
                "name": "Denigomodu"
                },
                {
                "zone_id": "2309",
                "name": "Ewa"
                },
                {
                "zone_id": "2310",
                "name": "Ijuw"
                },
                {
                "zone_id": "2311",
                "name": "Meneng"
                },
                {
                "zone_id": "2312",
                "name": "Nibok"
                },
                {
                "zone_id": "2313",
                "name": "Uaboe"
                },
                {
                "zone_id": "2314",
                "name": "Yaren"
                }
            ]
            },
            {
            "_id": "NPL",
            "country_id": "149",
            "pais_name": "Nepal",
            "phone_code": "977",
            "departamento": [
                {
                "zone_id": "2315",
                "name": "Bagmati"
                },
                {
                "zone_id": "2316",
                "name": "Bheri"
                },
                {
                "zone_id": "2317",
                "name": "Dhawalagiri"
                },
                {
                "zone_id": "2318",
                "name": "Gandaki"
                },
                {
                "zone_id": "2319",
                "name": "Janakpur"
                },
                {
                "zone_id": "2320",
                "name": "Karnali"
                },
                {
                "zone_id": "2321",
                "name": "Kosi"
                },
                {
                "zone_id": "2322",
                "name": "Lumbini"
                },
                {
                "zone_id": "2323",
                "name": "Mahakali"
                },
                {
                "zone_id": "2324",
                "name": "Mechi"
                },
                {
                "zone_id": "2325",
                "name": "Narayani"
                },
                {
                "zone_id": "2326",
                "name": "Rapti"
                },
                {
                "zone_id": "2327",
                "name": "Sagarmatha"
                },
                {
                "zone_id": "2328",
                "name": "Seti"
                }
            ]
            },
            {
            "_id": "NLD",
            "country_id": "150",
            "pais_name": "Netherlands",
            "phone_code": "31",
            "departamento": [
                {
                "zone_id": "2329",
                "name": "Drenthe"
                },
                {
                "zone_id": "2330",
                "name": "Flevoland"
                },
                {
                "zone_id": "2331",
                "name": "Friesland"
                },
                {
                "zone_id": "2332",
                "name": "Gelderland"
                },
                {
                "zone_id": "2333",
                "name": "Groningen"
                },
                {
                "zone_id": "2334",
                "name": "Limburg"
                },
                {
                "zone_id": "2335",
                "name": "Noord Brabant"
                },
                {
                "zone_id": "2336",
                "name": "Noord Holland"
                },
                {
                "zone_id": "2337",
                "name": "Overijssel"
                },
                {
                "zone_id": "2338",
                "name": "Utrecht"
                },
                {
                "zone_id": "2339",
                "name": "Zeeland"
                },
                {
                "zone_id": "2340",
                "name": "Zuid Holland"
                }
            ]
            },
            {
            "_id": "NCL",
            "country_id": "152",
            "pais_name": "New Caledonia",
            "phone_code": "687",
            "departamento": [
                {
                "zone_id": "2341",
                "name": "Iles Loyaute"
                },
                {
                "zone_id": "2342",
                "name": "Nord"
                },
                {
                "zone_id": "2343",
                "name": "Sud"
                }
            ]
            },
            {
            "_id": "NZL",
            "country_id": "153",
            "pais_name": "New Zealand",
            "phone_code": "64",
            "departamento": [
                {
                "zone_id": "2344",
                "name": "Auckland"
                },
                {
                "zone_id": "2345",
                "name": "Bay of Plenty"
                },
                {
                "zone_id": "2346",
                "name": "Canterbury"
                },
                {
                "zone_id": "2347",
                "name": "Coromandel"
                },
                {
                "zone_id": "2348",
                "name": "Gisborne"
                },
                {
                "zone_id": "2349",
                "name": "Fiordland"
                },
                {
                "zone_id": "2350",
                "name": "Hawke's Bay"
                },
                {
                "zone_id": "2351",
                "name": "Marlborough"
                },
                {
                "zone_id": "2352",
                "name": "Manawatu-Wanganui"
                },
                {
                "zone_id": "2353",
                "name": "Mt Cook-Mackenzie"
                },
                {
                "zone_id": "2354",
                "name": "Nelson"
                },
                {
                "zone_id": "2355",
                "name": "Northland"
                },
                {
                "zone_id": "2356",
                "name": "Otago"
                },
                {
                "zone_id": "2357",
                "name": "Southland"
                },
                {
                "zone_id": "2358",
                "name": "Taranaki"
                },
                {
                "zone_id": "2359",
                "name": "Wellington"
                },
                {
                "zone_id": "2360",
                "name": "Waikato"
                },
                {
                "zone_id": "2361",
                "name": "Wairprarapa"
                },
                {
                "zone_id": "2362",
                "name": "West Coast"
                }
            ]
            },
            {
            "_id": "NIC",
            "country_id": "154",
            "pais_name": "Nicaragua",
            "phone_code": "505",
            "departamento": [
                {
                "zone_id": "2363",
                "name": "Atlantico Norte"
                },
                {
                "zone_id": "2364",
                "name": "Atlantico Sur"
                },
                {
                "zone_id": "2365",
                "name": "Boaco"
                },
                {
                "zone_id": "2366",
                "name": "Carazo"
                },
                {
                "zone_id": "2367",
                "name": "Chinandega"
                },
                {
                "zone_id": "2368",
                "name": "Chontales"
                },
                {
                "zone_id": "2369",
                "name": "Esteli"
                },
                {
                "zone_id": "2370",
                "name": "Granada"
                },
                {
                "zone_id": "2371",
                "name": "Jinotega"
                },
                {
                "zone_id": "2372",
                "name": "Leon"
                },
                {
                "zone_id": "2373",
                "name": "Madriz"
                },
                {
                "zone_id": "2374",
                "name": "Managua"
                },
                {
                "zone_id": "2375",
                "name": "Masaya"
                },
                {
                "zone_id": "2376",
                "name": "Matagalpa"
                },
                {
                "zone_id": "2377",
                "name": "Nuevo Segovia"
                },
                {
                "zone_id": "2378",
                "name": "Rio San Juan"
                },
                {
                "zone_id": "2379",
                "name": "Rivas"
                }
            ]
            },
            {
            "_id": "NER",
            "country_id": "155",
            "pais_name": "Niger",
            "phone_code": "227",
            "departamento": [
                {
                "zone_id": "2380",
                "name": "Agadez"
                },
                {
                "zone_id": "2381",
                "name": "Diffa"
                },
                {
                "zone_id": "2382",
                "name": "Dosso"
                },
                {
                "zone_id": "2383",
                "name": "Maradi"
                },
                {
                "zone_id": "2384",
                "name": "Niamey"
                },
                {
                "zone_id": "2385",
                "name": "Tahoua"
                },
                {
                "zone_id": "2386",
                "name": "Tillaberi"
                },
                {
                "zone_id": "2387",
                "name": "Zinder"
                }
            ]
            },
            {
            "_id": "NGA",
            "country_id": "156",
            "pais_name": "Nigeria",
            "phone_code": "234",
            "departamento": [
                {
                "zone_id": "2388",
                "name": "Abia"
                },
                {
                "zone_id": "2389",
                "name": "Abuja Federal Capital Territory"
                },
                {
                "zone_id": "2390",
                "name": "Adamawa"
                },
                {
                "zone_id": "2391",
                "name": "Akwa Ibom"
                },
                {
                "zone_id": "2392",
                "name": "Anambra"
                },
                {
                "zone_id": "2393",
                "name": "Bauchi"
                },
                {
                "zone_id": "2394",
                "name": "Bayelsa"
                },
                {
                "zone_id": "2395",
                "name": "Benue"
                },
                {
                "zone_id": "2396",
                "name": "Borno"
                },
                {
                "zone_id": "2397",
                "name": "Cross River"
                },
                {
                "zone_id": "2398",
                "name": "Delta"
                },
                {
                "zone_id": "2399",
                "name": "Ebonyi"
                },
                {
                "zone_id": "2400",
                "name": "Edo"
                },
                {
                "zone_id": "2401",
                "name": "Ekiti"
                },
                {
                "zone_id": "2402",
                "name": "Enugu"
                },
                {
                "zone_id": "2403",
                "name": "Gombe"
                },
                {
                "zone_id": "2404",
                "name": "Imo"
                },
                {
                "zone_id": "2405",
                "name": "Jigawa"
                },
                {
                "zone_id": "2406",
                "name": "Kaduna"
                },
                {
                "zone_id": "2407",
                "name": "Kano"
                },
                {
                "zone_id": "2408",
                "name": "Katsina"
                },
                {
                "zone_id": "2409",
                "name": "Kebbi"
                },
                {
                "zone_id": "2410",
                "name": "Kogi"
                },
                {
                "zone_id": "2411",
                "name": "Kwara"
                },
                {
                "zone_id": "2412",
                "name": "Lagos"
                },
                {
                "zone_id": "2413",
                "name": "Nassarawa"
                },
                {
                "zone_id": "2414",
                "name": "Niger"
                },
                {
                "zone_id": "2415",
                "name": "Ogun"
                },
                {
                "zone_id": "2416",
                "name": "Ondo"
                },
                {
                "zone_id": "2417",
                "name": "Osun"
                },
                {
                "zone_id": "2418",
                "name": "Oyo"
                },
                {
                "zone_id": "2419",
                "name": "Plateau"
                },
                {
                "zone_id": "2420",
                "name": "Rivers"
                },
                {
                "zone_id": "2421",
                "name": "Sokoto"
                },
                {
                "zone_id": "2422",
                "name": "Taraba"
                },
                {
                "zone_id": "2423",
                "name": "Yobe"
                },
                {
                "zone_id": "2424",
                "name": "Zamfara"
                }
            ]
            },
            {
            "_id": "MNP",
            "country_id": "159",
            "pais_name": "Northern Mariana Islands",
            "phone_code": "1670",
            "departamento": [
                {
                "zone_id": "2425",
                "name": "Northern Islands"
                },
                {
                "zone_id": "2426",
                "name": "Rota"
                },
                {
                "zone_id": "2427",
                "name": "Saipan"
                },
                {
                "zone_id": "2428",
                "name": "Tinian"
                }
            ]
            },
            {
            "_id": "NOR",
            "country_id": "160",
            "pais_name": "Norway",
            "phone_code": "27",
            "departamento": [
                {
                "zone_id": "2429",
                "name": "Akershus"
                },
                {
                "zone_id": "2430",
                "name": "Aust-Agder"
                },
                {
                "zone_id": "2431",
                "name": "Buskerud"
                },
                {
                "zone_id": "2432",
                "name": "Finnmark"
                },
                {
                "zone_id": "2433",
                "name": "Hedmark"
                },
                {
                "zone_id": "2434",
                "name": "Hordaland"
                },
                {
                "zone_id": "2435",
                "name": "More og Romdal"
                },
                {
                "zone_id": "2436",
                "name": "Nord-Trondelag"
                },
                {
                "zone_id": "2437",
                "name": "Nordland"
                },
                {
                "zone_id": "2438",
                "name": "Ostfold"
                },
                {
                "zone_id": "2439",
                "name": "Oppland"
                },
                {
                "zone_id": "2440",
                "name": "Oslo"
                },
                {
                "zone_id": "2441",
                "name": "Rogaland"
                },
                {
                "zone_id": "2442",
                "name": "Sor-Trondelag"
                },
                {
                "zone_id": "2443",
                "name": "Sogn og Fjordane"
                },
                {
                "zone_id": "2444",
                "name": "Svalbard"
                },
                {
                "zone_id": "2445",
                "name": "Telemark"
                },
                {
                "zone_id": "2446",
                "name": "Troms"
                },
                {
                "zone_id": "2447",
                "name": "Vest-Agder"
                },
                {
                "zone_id": "2448",
                "name": "Vestfold"
                }
            ]
            },
            {
            "_id": "OMN",
            "country_id": "161",
            "pais_name": "Oman",
            "phone_code": "968",
            "departamento": [
                {
                "zone_id": "2449",
                "name": "Ad Dakhiliyah"
                },
                {
                "zone_id": "2450",
                "name": "Al Batinah"
                },
                {
                "zone_id": "2451",
                "name": "Al Wusta"
                },
                {
                "zone_id": "2452",
                "name": "Ash Sharqiyah"
                },
                {
                "zone_id": "2453",
                "name": "Az Zahirah"
                },
                {
                "zone_id": "2454",
                "name": "Masqat"
                },
                {
                "zone_id": "2455",
                "name": "Musandam"
                },
                {
                "zone_id": "2456",
                "name": "Zufar"
                }
            ]
            },
            {
            "_id": "PAK",
            "country_id": "162",
            "pais_name": "Pakistan",
            "phone_code": "92",
            "departamento": [
                {
                "zone_id": "2457",
                "name": "Balochistan"
                },
                {
                "zone_id": "2458",
                "name": "Federally Administered Tribal Areas"
                },
                {
                "zone_id": "2459",
                "name": "Islamabad Capital Territory"
                },
                {
                "zone_id": "2460",
                "name": "North-West Frontier"
                },
                {
                "zone_id": "2461",
                "name": "Punjab"
                },
                {
                "zone_id": "2462",
                "name": "Sindh"
                }
            ]
            },
            {
            "_id": "PLW",
            "country_id": "163",
            "pais_name": "Palau",
            "phone_code": "680",
            "departamento": [
                {
                "zone_id": "2463",
                "name": "Aimeliik"
                },
                {
                "zone_id": "2464",
                "name": "Airai"
                },
                {
                "zone_id": "2465",
                "name": "Angaur"
                },
                {
                "zone_id": "2466",
                "name": "Hatohobei"
                },
                {
                "zone_id": "2467",
                "name": "Kayangel"
                },
                {
                "zone_id": "2468",
                "name": "Koror"
                },
                {
                "zone_id": "2469",
                "name": "Melekeok"
                },
                {
                "zone_id": "2470",
                "name": "Ngaraard"
                },
                {
                "zone_id": "2471",
                "name": "Ngarchelong"
                },
                {
                "zone_id": "2472",
                "name": "Ngardmau"
                },
                {
                "zone_id": "2473",
                "name": "Ngatpang"
                },
                {
                "zone_id": "2474",
                "name": "Ngchesar"
                },
                {
                "zone_id": "2475",
                "name": "Ngeremlengui"
                },
                {
                "zone_id": "2476",
                "name": "Ngiwal"
                },
                {
                "zone_id": "2477",
                "name": "Peleliu"
                },
                {
                "zone_id": "2478",
                "name": "Sonsorol"
                }
            ]
            },
            {
            "_id": "PAN",
            "country_id": "164",
            "pais_name": "Panama",
            "phone_code": "507",
            "departamento": [
                {
                "zone_id": "2479",
                "name": "Bocas del Toro"
                },
                {
                "zone_id": "2480",
                "name": "Chiriqui"
                },
                {
                "zone_id": "2481",
                "name": "Cocle"
                },
                {
                "zone_id": "2482",
                "name": "Colon"
                },
                {
                "zone_id": "2483",
                "name": "Darien"
                },
                {
                "zone_id": "2484",
                "name": "Herrera"
                },
                {
                "zone_id": "2485",
                "name": "Los Santos"
                },
                {
                "zone_id": "2486",
                "name": "Panama"
                },
                {
                "zone_id": "2487",
                "name": "San Blas"
                },
                {
                "zone_id": "2488",
                "name": "Veraguas"
                }
            ]
            },
            {
            "_id": "PNG",
            "country_id": "165",
            "pais_name": "Papua New Guinea",
            "phone_code": "675",
            "departamento": [
                {
                "zone_id": "2489",
                "name": "Bougainville"
                },
                {
                "zone_id": "2490",
                "name": "Central"
                },
                {
                "zone_id": "2491",
                "name": "Chimbu"
                },
                {
                "zone_id": "2492",
                "name": "Eastern Highlands"
                },
                {
                "zone_id": "2493",
                "name": "East New Britain"
                },
                {
                "zone_id": "2494",
                "name": "East Sepik"
                },
                {
                "zone_id": "2495",
                "name": "Enga"
                },
                {
                "zone_id": "2496",
                "name": "Gulf"
                },
                {
                "zone_id": "2497",
                "name": "Madang"
                },
                {
                "zone_id": "2498",
                "name": "Manus"
                },
                {
                "zone_id": "2499",
                "name": "Milne Bay"
                },
                {
                "zone_id": "2500",
                "name": "Morobe"
                },
                {
                "zone_id": "2501",
                "name": "National Capital"
                },
                {
                "zone_id": "2502",
                "name": "New Ireland"
                },
                {
                "zone_id": "2503",
                "name": "Northern"
                },
                {
                "zone_id": "2504",
                "name": "Sandaun"
                },
                {
                "zone_id": "2505",
                "name": "Southern Highlands"
                },
                {
                "zone_id": "2506",
                "name": "Western"
                },
                {
                "zone_id": "2507",
                "name": "Western Highlands"
                },
                {
                "zone_id": "2508",
                "name": "West New Britain"
                }
            ]
            },
            {
            "_id": "PRY",
            "country_id": "166",
            "pais_name": "Paraguay",
            "phone_code": "595",
            "departamento": [
                {
                "zone_id": "2509",
                "name": "Alto Paraguay"
                },
                {
                "zone_id": "2510",
                "name": "Alto Parana"
                },
                {
                "zone_id": "2511",
                "name": "Amambay"
                },
                {
                "zone_id": "2512",
                "name": "Asuncion"
                },
                {
                "zone_id": "2513",
                "name": "Boqueron"
                },
                {
                "zone_id": "2514",
                "name": "Caaguazu"
                },
                {
                "zone_id": "2515",
                "name": "Caazapa"
                },
                {
                "zone_id": "2516",
                "name": "Canindeyu"
                },
                {
                "zone_id": "2517",
                "name": "Central"
                },
                {
                "zone_id": "2518",
                "name": "Concepcion"
                },
                {
                "zone_id": "2519",
                "name": "Cordillera"
                },
                {
                "zone_id": "2520",
                "name": "Guaira"
                },
                {
                "zone_id": "2521",
                "name": "Itapua"
                },
                {
                "zone_id": "2522",
                "name": "Misiones"
                },
                {
                "zone_id": "2523",
                "name": "Neembucu"
                },
                {
                "zone_id": "2524",
                "name": "Paraguari"
                },
                {
                "zone_id": "2525",
                "name": "Presidente Hayes"
                },
                {
                "zone_id": "2526",
                "name": "San Pedro"
                }
            ]
            },
            {
            "_id": "PER",
            "country_id": "167",
            "pais_name": "Peru",
            "phone_code": "51",
            "departamento": [
                {
                "zone_id": "2527",
                "name": "Amazonas"
                },
                {
                "zone_id": "2528",
                "name": "Ancash"
                },
                {
                "zone_id": "2529",
                "name": "Apurimac"
                },
                {
                "zone_id": "2530",
                "name": "Arequipa"
                },
                {
                "zone_id": "2531",
                "name": "Ayacucho"
                },
                {
                "zone_id": "2532",
                "name": "Cajamarca"
                },
                {
                "zone_id": "2533",
                "name": "Callao"
                },
                {
                "zone_id": "2534",
                "name": "Cusco"
                },
                {
                "zone_id": "2535",
                "name": "Huancavelica"
                },
                {
                "zone_id": "2536",
                "name": "Huanuco"
                },
                {
                "zone_id": "2537",
                "name": "Ica"
                },
                {
                "zone_id": "2538",
                "name": "Junin"
                },
                {
                "zone_id": "2539",
                "name": "La Libertad"
                },
                {
                "zone_id": "2540",
                "name": "Lambayeque"
                },
                {
                "zone_id": "2541",
                "name": "Lima"
                },
                {
                "zone_id": "2542",
                "name": "Loreto"
                },
                {
                "zone_id": "2543",
                "name": "Madre de Dios"
                },
                {
                "zone_id": "2544",
                "name": "Moquegua"
                },
                {
                "zone_id": "2545",
                "name": "Pasco"
                },
                {
                "zone_id": "2546",
                "name": "Piura"
                },
                {
                "zone_id": "2547",
                "name": "Puno"
                },
                {
                "zone_id": "2548",
                "name": "San Martin"
                },
                {
                "zone_id": "2549",
                "name": "Tacna"
                },
                {
                "zone_id": "2550",
                "name": "Tumbes"
                },
                {
                "zone_id": "2551",
                "name": "Ucayali"
                }
            ]
            },
            {
            "_id": "PER",
            "country_id": "167",
            "pais_name": "Perú",
            "phone_code": "51",
            "departamento": [
                {
                "zone_id": "2527",
                "name": "Amazonas"
                },
                {
                "zone_id": "2528",
                "name": "Ancash"
                },
                {
                "zone_id": "2529",
                "name": "Apurimac"
                },
                {
                "zone_id": "2530",
                "name": "Arequipa"
                },
                {
                "zone_id": "2531",
                "name": "Ayacucho"
                },
                {
                "zone_id": "2532",
                "name": "Cajamarca"
                },
                {
                "zone_id": "2533",
                "name": "Callao"
                },
                {
                "zone_id": "2534",
                "name": "Cusco"
                },
                {
                "zone_id": "2535",
                "name": "Huancavelica"
                },
                {
                "zone_id": "2536",
                "name": "Huanuco"
                },
                {
                "zone_id": "2537",
                "name": "Ica"
                },
                {
                "zone_id": "2538",
                "name": "Junin"
                },
                {
                "zone_id": "2539",
                "name": "La Libertad"
                },
                {
                "zone_id": "2540",
                "name": "Lambayeque"
                },
                {
                "zone_id": "2541",
                "name": "Lima"
                },
                {
                "zone_id": "2542",
                "name": "Loreto"
                },
                {
                "zone_id": "2543",
                "name": "Madre de Dios"
                },
                {
                "zone_id": "2544",
                "name": "Moquegua"
                },
                {
                "zone_id": "2545",
                "name": "Pasco"
                },
                {
                "zone_id": "2546",
                "name": "Piura"
                },
                {
                "zone_id": "2547",
                "name": "Puno"
                },
                {
                "zone_id": "2548",
                "name": "San Martin"
                },
                {
                "zone_id": "2549",
                "name": "Tacna"
                },
                {
                "zone_id": "2550",
                "name": "Tumbes"
                },
                {
                "zone_id": "2551",
                "name": "Ucayali"
                }
            ]
            },
            {
            "_id": "PHL",
            "country_id": "168",
            "pais_name": "Philippines",
            "phone_code": "63",
            "departamento": [
                {
                "zone_id": "2552",
                "name": "Abra"
                },
                {
                "zone_id": "2553",
                "name": "Agusan del Norte"
                },
                {
                "zone_id": "2554",
                "name": "Agusan del Sur"
                },
                {
                "zone_id": "2555",
                "name": "Aklan"
                },
                {
                "zone_id": "2556",
                "name": "Albay"
                },
                {
                "zone_id": "2557",
                "name": "Antique"
                },
                {
                "zone_id": "2558",
                "name": "Apayao"
                },
                {
                "zone_id": "2559",
                "name": "Aurora"
                },
                {
                "zone_id": "2560",
                "name": "Basilan"
                },
                {
                "zone_id": "2561",
                "name": "Bataan"
                },
                {
                "zone_id": "2562",
                "name": "Batanes"
                },
                {
                "zone_id": "2563",
                "name": "Batangas"
                },
                {
                "zone_id": "2564",
                "name": "Biliran"
                },
                {
                "zone_id": "2565",
                "name": "Benguet"
                },
                {
                "zone_id": "2566",
                "name": "Bohol"
                },
                {
                "zone_id": "2567",
                "name": "Bukidnon"
                },
                {
                "zone_id": "2568",
                "name": "Bulacan"
                },
                {
                "zone_id": "2569",
                "name": "Cagayan"
                },
                {
                "zone_id": "2570",
                "name": "Camarines Norte"
                },
                {
                "zone_id": "2571",
                "name": "Camarines Sur"
                },
                {
                "zone_id": "2572",
                "name": "Camiguin"
                },
                {
                "zone_id": "2573",
                "name": "Capiz"
                },
                {
                "zone_id": "2574",
                "name": "Catanduanes"
                },
                {
                "zone_id": "2575",
                "name": "Cavite"
                },
                {
                "zone_id": "2576",
                "name": "Cebu"
                },
                {
                "zone_id": "2577",
                "name": "Compostela"
                },
                {
                "zone_id": "2578",
                "name": "Davao del Norte"
                },
                {
                "zone_id": "2579",
                "name": "Davao del Sur"
                },
                {
                "zone_id": "2580",
                "name": "Davao Oriental"
                },
                {
                "zone_id": "2581",
                "name": "Eastern Samar"
                },
                {
                "zone_id": "2582",
                "name": "Guimaras"
                },
                {
                "zone_id": "2583",
                "name": "Ifugao"
                },
                {
                "zone_id": "2584",
                "name": "Ilocos Norte"
                },
                {
                "zone_id": "2585",
                "name": "Ilocos Sur"
                },
                {
                "zone_id": "2586",
                "name": "Iloilo"
                },
                {
                "zone_id": "2587",
                "name": "Isabela"
                },
                {
                "zone_id": "2588",
                "name": "Kalinga"
                },
                {
                "zone_id": "2589",
                "name": "Laguna"
                },
                {
                "zone_id": "2590",
                "name": "Lanao del Norte"
                },
                {
                "zone_id": "2591",
                "name": "Lanao del Sur"
                },
                {
                "zone_id": "2592",
                "name": "La Union"
                },
                {
                "zone_id": "2593",
                "name": "Leyte"
                },
                {
                "zone_id": "2594",
                "name": "Maguindanao"
                },
                {
                "zone_id": "2595",
                "name": "Marinduque"
                },
                {
                "zone_id": "2596",
                "name": "Masbate"
                },
                {
                "zone_id": "2597",
                "name": "Mindoro Occidental"
                },
                {
                "zone_id": "2598",
                "name": "Mindoro Oriental"
                },
                {
                "zone_id": "2599",
                "name": "Misamis Occidental"
                },
                {
                "zone_id": "2600",
                "name": "Misamis Oriental"
                },
                {
                "zone_id": "2601",
                "name": "Mountain"
                },
                {
                "zone_id": "2602",
                "name": "Negros Occidental"
                },
                {
                "zone_id": "2603",
                "name": "Negros Oriental"
                },
                {
                "zone_id": "2604",
                "name": "North Cotabato"
                },
                {
                "zone_id": "2605",
                "name": "Northern Samar"
                },
                {
                "zone_id": "2606",
                "name": "Nueva Ecija"
                },
                {
                "zone_id": "2607",
                "name": "Nueva Vizcaya"
                },
                {
                "zone_id": "2608",
                "name": "Palawan"
                },
                {
                "zone_id": "2609",
                "name": "Pampanga"
                },
                {
                "zone_id": "2610",
                "name": "Pangasinan"
                },
                {
                "zone_id": "2611",
                "name": "Quezon"
                },
                {
                "zone_id": "2612",
                "name": "Quirino"
                },
                {
                "zone_id": "2613",
                "name": "Rizal"
                },
                {
                "zone_id": "2614",
                "name": "Romblon"
                },
                {
                "zone_id": "2615",
                "name": "Samar"
                },
                {
                "zone_id": "2616",
                "name": "Sarangani"
                },
                {
                "zone_id": "2617",
                "name": "Siquijor"
                },
                {
                "zone_id": "2618",
                "name": "Sorsogon"
                },
                {
                "zone_id": "2619",
                "name": "South Cotabato"
                },
                {
                "zone_id": "2620",
                "name": "Southern Leyte"
                },
                {
                "zone_id": "2621",
                "name": "Sultan Kudarat"
                },
                {
                "zone_id": "2622",
                "name": "Sulu"
                },
                {
                "zone_id": "2623",
                "name": "Surigao del Norte"
                },
                {
                "zone_id": "2624",
                "name": "Surigao del Sur"
                },
                {
                "zone_id": "2625",
                "name": "Tarlac"
                },
                {
                "zone_id": "2626",
                "name": "Tawi-Tawi"
                },
                {
                "zone_id": "2627",
                "name": "Zambales"
                },
                {
                "zone_id": "2628",
                "name": "Zamboanga del Norte"
                },
                {
                "zone_id": "2629",
                "name": "Zamboanga del Sur"
                },
                {
                "zone_id": "2630",
                "name": "Zamboanga Sibugay"
                }
            ]
            },
            {
            "_id": "POL",
            "country_id": "170",
            "pais_name": "Poland",
            "phone_code": "48",
            "departamento": [
                {
                "zone_id": "2631",
                "name": "Dolnoslaskie"
                },
                {
                "zone_id": "2632",
                "name": "Kujawsko-Pomorskie"
                },
                {
                "zone_id": "2633",
                "name": "Lodzkie"
                },
                {
                "zone_id": "2634",
                "name": "Lubelskie"
                },
                {
                "zone_id": "2635",
                "name": "Lubuskie"
                },
                {
                "zone_id": "2636",
                "name": "Malopolskie"
                },
                {
                "zone_id": "2637",
                "name": "Mazowieckie"
                },
                {
                "zone_id": "2638",
                "name": "Opolskie"
                },
                {
                "zone_id": "2639",
                "name": "Podkarpackie"
                },
                {
                "zone_id": "2640",
                "name": "Podlaskie"
                },
                {
                "zone_id": "2641",
                "name": "Pomorskie"
                },
                {
                "zone_id": "2642",
                "name": "Slaskie"
                },
                {
                "zone_id": "2643",
                "name": "Swietokrzyskie"
                },
                {
                "zone_id": "2644",
                "name": "Warminsko-Mazurskie"
                },
                {
                "zone_id": "2645",
                "name": "Wielkopolskie"
                },
                {
                "zone_id": "2646",
                "name": "Zachodniopomorskie"
                }
            ]
            },
            {
            "_id": "SPM",
            "country_id": "198",
            "pais_name": "St. Pierre and Miquelon",
            "phone_code": "508",
            "departamento": [
                {
                "zone_id": "2647",
                "name": "Saint Pierre"
                },
                {
                "zone_id": "2648",
                "name": "Miquelon"
                }
            ]
            },
            {
            "_id": "PRT",
            "country_id": "171",
            "pais_name": "Portugal",
            "phone_code": "351",
            "departamento": [
                {
                "zone_id": "2649",
                "name": "A&ccedil;ores"
                },
                {
                "zone_id": "2650",
                "name": "Aveiro"
                },
                {
                "zone_id": "2651",
                "name": "Beja"
                },
                {
                "zone_id": "2652",
                "name": "Braga"
                },
                {
                "zone_id": "2653",
                "name": "Bragan&ccedil;a"
                },
                {
                "zone_id": "2654",
                "name": "Castelo Branco"
                },
                {
                "zone_id": "2655",
                "name": "Coimbra"
                },
                {
                "zone_id": "2656",
                "name": "&Eacute;vora"
                },
                {
                "zone_id": "2657",
                "name": "Faro"
                },
                {
                "zone_id": "2658",
                "name": "Guarda"
                },
                {
                "zone_id": "2659",
                "name": "Leiria"
                },
                {
                "zone_id": "2660",
                "name": "Lisboa"
                },
                {
                "zone_id": "2661",
                "name": "Madeira"
                },
                {
                "zone_id": "2662",
                "name": "Portalegre"
                },
                {
                "zone_id": "2663",
                "name": "Porto"
                },
                {
                "zone_id": "2664",
                "name": "Santar&eacute;m"
                },
                {
                "zone_id": "2665",
                "name": "Set&uacute;bal"
                },
                {
                "zone_id": "2666",
                "name": "Viana do Castelo"
                },
                {
                "zone_id": "2667",
                "name": "Vila Real"
                },
                {
                "zone_id": "2668",
                "name": "Viseu"
                }
            ]
            },
            {
            "_id": "QAT",
            "country_id": "173",
            "pais_name": "Qatar",
            "phone_code": "974",
            "departamento": [
                {
                "zone_id": "2669",
                "name": "Ad Dawhah"
                },
                {
                "zone_id": "2670",
                "name": "Al Ghuwayriyah"
                },
                {
                "zone_id": "2671",
                "name": "Al Jumayliyah"
                },
                {
                "zone_id": "2672",
                "name": "Al Khawr"
                },
                {
                "zone_id": "2673",
                "name": "Al Wakrah"
                },
                {
                "zone_id": "2674",
                "name": "Ar Rayyan"
                },
                {
                "zone_id": "2675",
                "name": "Jarayan al Batinah"
                },
                {
                "zone_id": "2676",
                "name": "Madinat ash Shamal"
                },
                {
                "zone_id": "2677",
                "name": "Umm Sa'id"
                },
                {
                "zone_id": "2678",
                "name": "Umm Salal"
                }
            ]
            },
            {
            "_id": "ROM",
            "country_id": "175",
            "pais_name": "Romania",
            "phone_code": "40",
            "departamento": [
                {
                "zone_id": "2679",
                "name": "Alba"
                },
                {
                "zone_id": "2680",
                "name": "Arad"
                },
                {
                "zone_id": "2681",
                "name": "Arges"
                },
                {
                "zone_id": "2682",
                "name": "Bacau"
                },
                {
                "zone_id": "2683",
                "name": "Bihor"
                },
                {
                "zone_id": "2684",
                "name": "Bistrita-Nasaud"
                },
                {
                "zone_id": "2685",
                "name": "Botosani"
                },
                {
                "zone_id": "2686",
                "name": "Brasov"
                },
                {
                "zone_id": "2687",
                "name": "Braila"
                },
                {
                "zone_id": "2688",
                "name": "Bucuresti"
                },
                {
                "zone_id": "2689",
                "name": "Buzau"
                },
                {
                "zone_id": "2690",
                "name": "Caras-Severin"
                },
                {
                "zone_id": "2691",
                "name": "Calarasi"
                },
                {
                "zone_id": "2692",
                "name": "Cluj"
                },
                {
                "zone_id": "2693",
                "name": "Constanta"
                },
                {
                "zone_id": "2694",
                "name": "Covasna"
                },
                {
                "zone_id": "2695",
                "name": "Dimbovita"
                },
                {
                "zone_id": "2696",
                "name": "Dolj"
                },
                {
                "zone_id": "2697",
                "name": "Galati"
                },
                {
                "zone_id": "2698",
                "name": "Giurgiu"
                },
                {
                "zone_id": "2699",
                "name": "Gorj"
                },
                {
                "zone_id": "2700",
                "name": "Harghita"
                },
                {
                "zone_id": "2701",
                "name": "Hunedoara"
                },
                {
                "zone_id": "2702",
                "name": "Ialomita"
                },
                {
                "zone_id": "2703",
                "name": "Iasi"
                },
                {
                "zone_id": "2704",
                "name": "Ilfov"
                },
                {
                "zone_id": "2705",
                "name": "Maramures"
                },
                {
                "zone_id": "2706",
                "name": "Mehedinti"
                },
                {
                "zone_id": "2707",
                "name": "Mures"
                },
                {
                "zone_id": "2708",
                "name": "Neamt"
                },
                {
                "zone_id": "2709",
                "name": "Olt"
                },
                {
                "zone_id": "2710",
                "name": "Prahova"
                },
                {
                "zone_id": "2711",
                "name": "Satu-Mare"
                },
                {
                "zone_id": "2712",
                "name": "Salaj"
                },
                {
                "zone_id": "2713",
                "name": "Sibiu"
                },
                {
                "zone_id": "2714",
                "name": "Suceava"
                },
                {
                "zone_id": "2715",
                "name": "Teleorman"
                },
                {
                "zone_id": "2716",
                "name": "Timis"
                },
                {
                "zone_id": "2717",
                "name": "Tulcea"
                },
                {
                "zone_id": "2718",
                "name": "Vaslui"
                },
                {
                "zone_id": "2719",
                "name": "Valcea"
                },
                {
                "zone_id": "2720",
                "name": "Vrancea"
                }
            ]
            },
            {
            "_id": "RUS",
            "country_id": "176",
            "pais_name": "Russia",
            "phone_code": "7",
            "departamento": [
                {
                "zone_id": "2721",
                "name": "Republic of Khakassia"
                },
                {
                "zone_id": "2722",
                "name": "Aginsky Buryatsky AO"
                },
                {
                "zone_id": "2723",
                "name": "Chukotka Autonomous Okrug"
                },
                {
                "zone_id": "2724",
                "name": "Arkhangelsk Region"
                },
                {
                "zone_id": "2725",
                "name": "Astrakhan Oblast"
                },
                {
                "zone_id": "2726",
                "name": "Altai Krai"
                },
                {
                "zone_id": "2727",
                "name": "Belgorod Oblast"
                },
                {
                "zone_id": "2728",
                "name": "Jewish Autonomous Oblast"
                },
                {
                "zone_id": "2729",
                "name": "Amur Region"
                },
                {
                "zone_id": "2730",
                "name": "Bryansk Oblast"
                },
                {
                "zone_id": "2731",
                "name": "Chuvash Republic"
                },
                {
                "zone_id": "2732",
                "name": "Chelyabinsk Region"
                },
                {
                "zone_id": "2733",
                "name": "Karachay-Cherkess Republic"
                },
                {
                "zone_id": "2734",
                "name": "Zabaykalsky Krai"
                },
                {
                "zone_id": "2735",
                "name": "Taymyr Dolgano-Nenets Autonomous Okrug"
                },
                {
                "zone_id": "2736",
                "name": "Republic of Kalmykia"
                },
                {
                "zone_id": "2737",
                "name": "Moscow Oblast"
                },
                {
                "zone_id": "2738",
                "name": "Altai Republic"
                },
                {
                "zone_id": "2739",
                "name": "Chechen Republic"
                },
                {
                "zone_id": "2740",
                "name": "Irkutsk Oblast"
                },
                {
                "zone_id": "2741",
                "name": "Ivanovo Oblast"
                },
                {
                "zone_id": "2742",
                "name": "Udmurtia"
                },
                {
                "zone_id": "2743",
                "name": "Kaliningrad Oblast"
                },
                {
                "zone_id": "2744",
                "name": "Kaluzhskaya oblast"
                },
                {
                "zone_id": "2745",
                "name": "Kirov Oblast"
                },
                {
                "zone_id": "2746",
                "name": "Republic of Tatarstan"
                },
                {
                "zone_id": "2747",
                "name": "Kemerovo region"
                },
                {
                "zone_id": "2748",
                "name": "Khabarovsk Krai"
                },
                {
                "zone_id": "2749",
                "name": "Khanty\u2013Mansi Autonomous Okrug \u2013 Yugra"
                },
                {
                "zone_id": "2750",
                "name": "Kostroma Oblast"
                },
                {
                "zone_id": "2751",
                "name": "Krasnodar Krai"
                },
                {
                "zone_id": "2752",
                "name": "Krasnoyarsk Krai"
                },
                {
                "zone_id": "2753",
                "name": "Komi-Permyatsky AO"
                },
                {
                "zone_id": "2754",
                "name": "Kurgan Oblast"
                },
                {
                "zone_id": "2755",
                "name": "Kursk Region"
                },
                {
                "zone_id": "2756",
                "name": "Respublika Tyva"
                },
                {
                "zone_id": "2757",
                "name": "Lipetsk Region"
                },
                {
                "zone_id": "2758",
                "name": "Magadan Oblast"
                },
                {
                "zone_id": "2759",
                "name": "Republic of Dagestan"
                },
                {
                "zone_id": "2760",
                "name": "Republic of Adygea"
                },
                {
                "zone_id": "2761",
                "name": "Moscow"
                },
                {
                "zone_id": "2762",
                "name": "Murmansk Oblast"
                },
                {
                "zone_id": "2763",
                "name": "Kabardino-Balkar Republic"
                },
                {
                "zone_id": "2764",
                "name": "Nenets Autonomous Okrug"
                },
                {
                "zone_id": "2765",
                "name": "Republic of Ingushetia"
                },
                {
                "zone_id": "2766",
                "name": "Nizhegorodskaya oblast"
                },
                {
                "zone_id": "2767",
                "name": "Novgorod Oblast"
                },
                {
                "zone_id": "2768",
                "name": "Novosibirsk Oblast"
                },
                {
                "zone_id": "2769",
                "name": "Omsk Oblast"
                },
                {
                "zone_id": "2770",
                "name": "Oryol Oblast"
                },
                {
                "zone_id": "2771",
                "name": "Orenburg Oblast"
                },
                {
                "zone_id": "2772",
                "name": "Leningrad Oblast"
                },
                {
                "zone_id": "2773",
                "name": "Penza Oblast"
                },
                {
                "zone_id": "2774",
                "name": "Perm Krai"
                },
                {
                "zone_id": "2775",
                "name": "Kamchatka Krai"
                },
                {
                "zone_id": "2776",
                "name": "Republic of Karelia"
                },
                {
                "zone_id": "2777",
                "name": "Pskov Oblast"
                },
                {
                "zone_id": "2778",
                "name": "Rostov Region"
                },
                {
                "zone_id": "2779",
                "name": "Ryazan Oblast"
                },
                {
                "zone_id": "2780",
                "name": "Yamalo-Nenets Autonomous Okrug"
                },
                {
                "zone_id": "2781",
                "name": "Samara Region"
                },
                {
                "zone_id": "2782",
                "name": "Republic of Mordovia"
                },
                {
                "zone_id": "2783",
                "name": "Saratov Region"
                },
                {
                "zone_id": "2784",
                "name": "Smolensk Oblast"
                },
                {
                "zone_id": "2785",
                "name": "Saint Petersburg"
                },
                {
                "zone_id": "2786",
                "name": "Stavropol Krai"
                },
                {
                "zone_id": "2787",
                "name": "Komi Republic"
                },
                {
                "zone_id": "2788",
                "name": "Tambov Region"
                },
                {
                "zone_id": "2789",
                "name": "Tomsk Oblast"
                },
                {
                "zone_id": "2790",
                "name": "Tula Region"
                },
                {
                "zone_id": "2791",
                "name": "Evenkysky AO"
                },
                {
                "zone_id": "2792",
                "name": "Tver Oblast"
                },
                {
                "zone_id": "2793",
                "name": "Tyumen Oblast"
                },
                {
                "zone_id": "2794",
                "name": "Republic of Bashkortostan"
                },
                {
                "zone_id": "2795",
                "name": "Ulyanovsk Oblast"
                },
                {
                "zone_id": "2796",
                "name": "Republic of Buryatia"
                },
                {
                "zone_id": "2797",
                "name": "Ust-Orda Buryat Okrug"
                },
                {
                "zone_id": "2798",
                "name": "North Ossetia-Alania"
                },
                {
                "zone_id": "2799",
                "name": "Vladimir Oblast"
                },
                {
                "zone_id": "2800",
                "name": "Primorsky Krai"
                },
                {
                "zone_id": "2801",
                "name": "Volgograd Oblast"
                },
                {
                "zone_id": "2802",
                "name": "Vologda Oblast"
                },
                {
                "zone_id": "2803",
                "name": "Voronezh Oblast"
                },
                {
                "zone_id": "2804",
                "name": "Sakhalin Oblast"
                },
                {
                "zone_id": "2805",
                "name": "Sakha Republic"
                },
                {
                "zone_id": "2806",
                "name": "Yaroslavl Oblast"
                },
                {
                "zone_id": "2807",
                "name": "Sverdlovsk Oblast"
                },
                {
                "zone_id": "2808",
                "name": "Mari El Republic"
                }
            ]
            },
            {
            "_id": "RWA",
            "country_id": "177",
            "pais_name": "Rwanda",
            "phone_code": "250",
            "departamento": [
                {
                "zone_id": "2809",
                "name": "Butare"
                },
                {
                "zone_id": "2810",
                "name": "Byumba"
                },
                {
                "zone_id": "2811",
                "name": "Cyangugu"
                },
                {
                "zone_id": "2812",
                "name": "Gikongoro"
                },
                {
                "zone_id": "2813",
                "name": "Gisenyi"
                },
                {
                "zone_id": "2814",
                "name": "Gitarama"
                },
                {
                "zone_id": "2815",
                "name": "Kibungo"
                },
                {
                "zone_id": "2816",
                "name": "Kibuye"
                },
                {
                "zone_id": "2817",
                "name": "Kigali Rurale"
                },
                {
                "zone_id": "2818",
                "name": "Kigali-ville"
                },
                {
                "zone_id": "2819",
                "name": "Ruhengeri"
                },
                {
                "zone_id": "2820",
                "name": "Umutara"
                }
            ]
            },
            {
            "_id": "KNA",
            "country_id": "178",
            "pais_name": "Saint Kitts and Nevis",
            "phone_code": "869",
            "departamento": [
                {
                "zone_id": "2821",
                "name": "Christ Church Nichola Town"
                },
                {
                "zone_id": "2822",
                "name": "Saint Anne Sandy Point"
                },
                {
                "zone_id": "2823",
                "name": "Saint George Basseterre"
                },
                {
                "zone_id": "2824",
                "name": "Saint George Gingerland"
                },
                {
                "zone_id": "2825",
                "name": "Saint James Windward"
                },
                {
                "zone_id": "2826",
                "name": "Saint John Capesterre"
                },
                {
                "zone_id": "2827",
                "name": "Saint John Figtree"
                },
                {
                "zone_id": "2828",
                "name": "Saint Mary Cayon"
                },
                {
                "zone_id": "2829",
                "name": "Saint Paul Capesterre"
                },
                {
                "zone_id": "2830",
                "name": "Saint Paul Charlestown"
                },
                {
                "zone_id": "2831",
                "name": "Saint Peter Basseterre"
                },
                {
                "zone_id": "2832",
                "name": "Saint Thomas Lowland"
                },
                {
                "zone_id": "2833",
                "name": "Saint Thomas Middle Island"
                },
                {
                "zone_id": "2834",
                "name": "Trinity Palmetto Point"
                }
            ]
            },
            {
            "_id": "LCA",
            "country_id": "179",
            "pais_name": "Saint Lucia",
            "phone_code": "1014",
            "departamento": [
                {
                "zone_id": "2835",
                "name": "Anse-la-Raye"
                },
                {
                "zone_id": "2836",
                "name": "Castries"
                },
                {
                "zone_id": "2837",
                "name": "Choiseul"
                },
                {
                "zone_id": "2838",
                "name": "Dauphin"
                },
                {
                "zone_id": "2839",
                "name": "Dennery"
                },
                {
                "zone_id": "2840",
                "name": "Gros-Islet"
                },
                {
                "zone_id": "2841",
                "name": "Laborie"
                },
                {
                "zone_id": "2842",
                "name": "Micoud"
                },
                {
                "zone_id": "2843",
                "name": "Praslin"
                },
                {
                "zone_id": "2844",
                "name": "Soufriere"
                },
                {
                "zone_id": "2845",
                "name": "Vieux-Fort"
                }
            ]
            },
            {
            "_id": "VCT",
            "country_id": "180",
            "pais_name": "Saint Vincent and the Grenadines",
            "phone_code": "1784",
            "departamento": [
                {
                "zone_id": "2846",
                "name": "Charlotte"
                },
                {
                "zone_id": "2847",
                "name": "Grenadines"
                },
                {
                "zone_id": "2848",
                "name": "Saint Andrew"
                },
                {
                "zone_id": "2849",
                "name": "Saint David"
                },
                {
                "zone_id": "2850",
                "name": "Saint George"
                },
                {
                "zone_id": "2851",
                "name": "Saint Patrick"
                }
            ]
            },
            {
            "_id": "WSM",
            "country_id": "181",
            "pais_name": "Samoa",
            "phone_code": "685",
            "departamento": [
                {
                "zone_id": "2852",
                "name": "A'ana"
                },
                {
                "zone_id": "2853",
                "name": "Aiga-i-le-Tai"
                },
                {
                "zone_id": "2854",
                "name": "Atua"
                },
                {
                "zone_id": "2855",
                "name": "Fa'asaleleaga"
                },
                {
                "zone_id": "2856",
                "name": "Gaga'emauga"
                },
                {
                "zone_id": "2857",
                "name": "Gagaifomauga"
                },
                {
                "zone_id": "2858",
                "name": "Palauli"
                },
                {
                "zone_id": "2859",
                "name": "Satupa'itea"
                },
                {
                "zone_id": "2860",
                "name": "Tuamasaga"
                },
                {
                "zone_id": "2861",
                "name": "Va'a-o-Fonoti"
                },
                {
                "zone_id": "2862",
                "name": "Vaisigano"
                }
            ]
            },
            {
            "_id": "SMR",
            "country_id": "182",
            "pais_name": "San Marino",
            "phone_code": "378",
            "departamento": [
                {
                "zone_id": "2863",
                "name": "Acquaviva"
                },
                {
                "zone_id": "2864",
                "name": "Borgo Maggiore"
                },
                {
                "zone_id": "2865",
                "name": "Chiesanuova"
                },
                {
                "zone_id": "2866",
                "name": "Domagnano"
                },
                {
                "zone_id": "2867",
                "name": "Faetano"
                },
                {
                "zone_id": "2868",
                "name": "Fiorentino"
                },
                {
                "zone_id": "2869",
                "name": "Montegiardino"
                },
                {
                "zone_id": "2870",
                "name": "Citta di San Marino"
                },
                {
                "zone_id": "2871",
                "name": "Serravalle"
                }
            ]
            },
            {
            "_id": "STP",
            "country_id": "183",
            "pais_name": "Sao Tome and Principe",
            "phone_code": "239",
            "departamento": [
                {
                "zone_id": "2872",
                "name": "Sao Tome"
                },
                {
                "zone_id": "2873",
                "name": "Principe"
                }
            ]
            },
            {
            "_id": "SAU",
            "country_id": "184",
            "pais_name": "Saudi Arabia",
            "phone_code": "966",
            "departamento": [
                {
                "zone_id": "2874",
                "name": "Al Bahah"
                },
                {
                "zone_id": "2875",
                "name": "Al Hudud ash Shamaliyah"
                },
                {
                "zone_id": "2876",
                "name": "Al Jawf"
                },
                {
                "zone_id": "2877",
                "name": "Al Madinah"
                },
                {
                "zone_id": "2878",
                "name": "Al Qasim"
                },
                {
                "zone_id": "2879",
                "name": "Ar Riyad"
                },
                {
                "zone_id": "2880",
                "name": "Ash Sharqiyah (Eastern)"
                },
                {
                "zone_id": "2881",
                "name": "'Asir"
                },
                {
                "zone_id": "2882",
                "name": "Ha'il"
                },
                {
                "zone_id": "2883",
                "name": "Jizan"
                },
                {
                "zone_id": "2884",
                "name": "Makkah"
                },
                {
                "zone_id": "2885",
                "name": "Najran"
                },
                {
                "zone_id": "2886",
                "name": "Tabuk"
                }
            ]
            },
            {
            "_id": "SEN",
            "country_id": "185",
            "pais_name": "Senegal",
            "phone_code": "221",
            "departamento": [
                {
                "zone_id": "2887",
                "name": "Dakar"
                },
                {
                "zone_id": "2888",
                "name": "Diourbel"
                },
                {
                "zone_id": "2889",
                "name": "Fatick"
                },
                {
                "zone_id": "2890",
                "name": "Kaolack"
                },
                {
                "zone_id": "2891",
                "name": "Kolda"
                },
                {
                "zone_id": "2892",
                "name": "Louga"
                },
                {
                "zone_id": "2893",
                "name": "Matam"
                },
                {
                "zone_id": "2894",
                "name": "Saint-Louis"
                },
                {
                "zone_id": "2895",
                "name": "Tambacounda"
                },
                {
                "zone_id": "2896",
                "name": "Thies"
                },
                {
                "zone_id": "2897",
                "name": "Ziguinchor"
                }
            ]
            },
            {
            "_id": "SYC",
            "country_id": "186",
            "pais_name": "Seychelles",
            "phone_code": "248",
            "departamento": [
                {
                "zone_id": "2898",
                "name": "Anse aux Pins"
                },
                {
                "zone_id": "2899",
                "name": "Anse Boileau"
                },
                {
                "zone_id": "2900",
                "name": "Anse Etoile"
                },
                {
                "zone_id": "2901",
                "name": "Anse Louis"
                },
                {
                "zone_id": "2902",
                "name": "Anse Royale"
                },
                {
                "zone_id": "2903",
                "name": "Baie Lazare"
                },
                {
                "zone_id": "2904",
                "name": "Baie Sainte Anne"
                },
                {
                "zone_id": "2905",
                "name": "Beau Vallon"
                },
                {
                "zone_id": "2906",
                "name": "Bel Air"
                },
                {
                "zone_id": "2907",
                "name": "Bel Ombre"
                },
                {
                "zone_id": "2908",
                "name": "Cascade"
                },
                {
                "zone_id": "2909",
                "name": "Glacis"
                },
                {
                "zone_id": "2910",
                "name": "Grand' Anse (on Mahe)"
                },
                {
                "zone_id": "2911",
                "name": "Grand' Anse (on Praslin)"
                },
                {
                "zone_id": "2912",
                "name": "La Digue"
                },
                {
                "zone_id": "2913",
                "name": "La Riviere Anglaise"
                },
                {
                "zone_id": "2914",
                "name": "Mont Buxton"
                },
                {
                "zone_id": "2915",
                "name": "Mont Fleuri"
                },
                {
                "zone_id": "2916",
                "name": "Plaisance"
                },
                {
                "zone_id": "2917",
                "name": "Pointe La Rue"
                },
                {
                "zone_id": "2918",
                "name": "Port Glaud"
                },
                {
                "zone_id": "2919",
                "name": "Saint Louis"
                },
                {
                "zone_id": "2920",
                "name": "Takamaka"
                }
            ]
            },
            {
            "_id": "SLE",
            "country_id": "187",
            "pais_name": "Sierra Leone",
            "phone_code": "232",
            "departamento": [
                {
                "zone_id": "2921",
                "name": "Eastern"
                },
                {
                "zone_id": "2922",
                "name": "Northern"
                },
                {
                "zone_id": "2923",
                "name": "Southern"
                },
                {
                "zone_id": "2924",
                "name": "Western"
                }
            ]
            },
            {
            "_id": "SVK",
            "country_id": "189",
            "pais_name": "Slovak Republic",
            "phone_code": "421",
            "departamento": [
                {
                "zone_id": "2925",
                "name": "Banskobystrick\u00fd"
                },
                {
                "zone_id": "2926",
                "name": "Bratislavsk\u00fd"
                },
                {
                "zone_id": "2927",
                "name": "Ko\u0161ick\u00fd"
                },
                {
                "zone_id": "2928",
                "name": "Nitriansky"
                },
                {
                "zone_id": "2929",
                "name": "Pre\u0161ovsk\u00fd"
                },
                {
                "zone_id": "2930",
                "name": "Tren\u010diansky"
                },
                {
                "zone_id": "2931",
                "name": "Trnavsk\u00fd"
                },
                {
                "zone_id": "2932",
                "name": "\u017dilinsk\u00fd"
                }
            ]
            },
            {
            "_id": "SLB",
            "country_id": "191",
            "pais_name": "Solomon Islands",
            "phone_code": "677",
            "departamento": [
                {
                "zone_id": "2933",
                "name": "Central"
                },
                {
                "zone_id": "2934",
                "name": "Choiseul"
                },
                {
                "zone_id": "2935",
                "name": "Guadalcanal"
                },
                {
                "zone_id": "2936",
                "name": "Honiara"
                },
                {
                "zone_id": "2937",
                "name": "Isabel"
                },
                {
                "zone_id": "2938",
                "name": "Makira"
                },
                {
                "zone_id": "2939",
                "name": "Malaita"
                },
                {
                "zone_id": "2940",
                "name": "Rennell and Bellona"
                },
                {
                "zone_id": "2941",
                "name": "Temotu"
                },
                {
                "zone_id": "2942",
                "name": "Western"
                }
            ]
            },
            {
            "_id": "SOM",
            "country_id": "192",
            "pais_name": "Somalia",
            "phone_code": "252",
            "departamento": [
                {
                "zone_id": "2943",
                "name": "Awdal"
                },
                {
                "zone_id": "2944",
                "name": "Bakool"
                },
                {
                "zone_id": "2945",
                "name": "Banaadir"
                },
                {
                "zone_id": "2946",
                "name": "Bari"
                },
                {
                "zone_id": "2947",
                "name": "Bay"
                },
                {
                "zone_id": "2948",
                "name": "Galguduud"
                },
                {
                "zone_id": "2949",
                "name": "Gedo"
                },
                {
                "zone_id": "2950",
                "name": "Hiiraan"
                },
                {
                "zone_id": "2951",
                "name": "Jubbada Dhexe"
                },
                {
                "zone_id": "2952",
                "name": "Jubbada Hoose"
                },
                {
                "zone_id": "2953",
                "name": "Mudug"
                },
                {
                "zone_id": "2954",
                "name": "Nugaal"
                },
                {
                "zone_id": "2955",
                "name": "Sanaag"
                },
                {
                "zone_id": "2956",
                "name": "Shabeellaha Dhexe"
                },
                {
                "zone_id": "2957",
                "name": "Shabeellaha Hoose"
                },
                {
                "zone_id": "2958",
                "name": "Sool"
                },
                {
                "zone_id": "2959",
                "name": "Togdheer"
                },
                {
                "zone_id": "2960",
                "name": "Woqooyi Galbeed"
                }
            ]
            },
            {
            "_id": "ZAF",
            "country_id": "193",
            "pais_name": "South Africa",
            "phone_code": "27",
            "departamento": [
                {
                "zone_id": "2961",
                "name": "Eastern Cape"
                },
                {
                "zone_id": "2962",
                "name": "Free State"
                },
                {
                "zone_id": "2963",
                "name": "Gauteng"
                },
                {
                "zone_id": "2964",
                "name": "KwaZulu-Natal"
                },
                {
                "zone_id": "2965",
                "name": "Limpopo"
                },
                {
                "zone_id": "2966",
                "name": "Mpumalanga"
                },
                {
                "zone_id": "2967",
                "name": "North West"
                },
                {
                "zone_id": "2968",
                "name": "Northern Cape"
                },
                {
                "zone_id": "2969",
                "name": "Western Cape"
                }
            ]
            },{
            "_id": "ESP",
            "country_id": "195",
            "pais_name": "España",
            "phone_code": "34",
            "departamento": [
                {
                "zone_id": "2970",
                "name": "La Coru&ntilde;a"
                },
                {
                "zone_id": "2971",
                "name": "&Aacute;lava"
                },
                {
                "zone_id": "2972",
                "name": "Albacete"
                },
                {
                "zone_id": "2973",
                "name": "Alicante"
                },
                {
                "zone_id": "2974",
                "name": "Almeria"
                },
                {
                "zone_id": "2975",
                "name": "Asturias"
                },
                {
                "zone_id": "2976",
                "name": "&Aacute;vila"
                },
                {
                "zone_id": "2977",
                "name": "Badajoz"
                },
                {
                "zone_id": "2978",
                "name": "Baleares"
                },
                {
                "zone_id": "2979",
                "name": "Barcelona"
                },
                {
                "zone_id": "2980",
                "name": "Burgos"
                },
                {
                "zone_id": "2981",
                "name": "C&aacute;ceres"
                },
                {
                "zone_id": "2982",
                "name": "C&aacute;diz"
                },
                {
                "zone_id": "2983",
                "name": "Cantabria"
                },
                {
                "zone_id": "2984",
                "name": "Castell&oacute;n"
                },
                {
                "zone_id": "2985",
                "name": "Ceuta"
                },
                {
                "zone_id": "2986",
                "name": "Ciudad Real"
                },
                {
                "zone_id": "2987",
                "name": "C&oacute;rdoba"
                },
                {
                "zone_id": "2988",
                "name": "Cuenca"
                },
                {
                "zone_id": "2989",
                "name": "Girona"
                },
                {
                "zone_id": "2990",
                "name": "Granada"
                },
                {
                "zone_id": "2991",
                "name": "Guadalajara"
                },
                {
                "zone_id": "2992",
                "name": "Guip&uacute;zcoa"
                },
                {
                "zone_id": "2993",
                "name": "Huelva"
                },
                {
                "zone_id": "2994",
                "name": "Huesca"
                },
                {
                "zone_id": "2995",
                "name": "Ja&eacute;n"
                },
                {
                "zone_id": "2996",
                "name": "La Rioja"
                },
                {
                "zone_id": "2997",
                "name": "Las Palmas"
                },
                {
                "zone_id": "2998",
                "name": "Leon"
                },
                {
                "zone_id": "2999",
                "name": "Lleida"
                },
                {
                "zone_id": "3000",
                "name": "Lugo"
                },
                {
                "zone_id": "3001",
                "name": "Madrid"
                },
                {
                "zone_id": "3002",
                "name": "Malaga"
                },
                {
                "zone_id": "3003",
                "name": "Melilla"
                },
                {
                "zone_id": "3004",
                "name": "Murcia"
                },
                {
                "zone_id": "3005",
                "name": "Navarra"
                },
                {
                "zone_id": "3006",
                "name": "Ourense"
                },
                {
                "zone_id": "3007",
                "name": "Palencia"
                },
                {
                "zone_id": "3008",
                "name": "Pontevedra"
                },
                {
                "zone_id": "3009",
                "name": "Salamanca"
                },
                {
                "zone_id": "3010",
                "name": "Santa Cruz de Tenerife"
                },
                {
                "zone_id": "3011",
                "name": "Segovia"
                },
                {
                "zone_id": "3012",
                "name": "Sevilla"
                },
                {
                "zone_id": "3013",
                "name": "Soria"
                },
                {
                "zone_id": "3014",
                "name": "Tarragona"
                },
                {
                "zone_id": "3015",
                "name": "Teruel"
                },
                {
                "zone_id": "3016",
                "name": "Toledo"
                },
                {
                "zone_id": "3017",
                "name": "Valencia"
                },
                {
                "zone_id": "3018",
                "name": "Valladolid"
                },
                {
                "zone_id": "3019",
                "name": "Vizcaya"
                },
                {
                "zone_id": "3020",
                "name": "Zamora"
                },
                {
                "zone_id": "3021",
                "name": "Zaragoza"
                }
            ]
            },
            {
            "_id": "ESP",
            "country_id": "195",
            "pais_name": "Espanya",
            "phone_code": "34",
            "departamento": [
                {
                "zone_id": "2970",
                "name": "La Coru&ntilde;a"
                },
                {
                "zone_id": "2971",
                "name": "&Aacute;lava"
                },
                {
                "zone_id": "2972",
                "name": "Albacete"
                },
                {
                "zone_id": "2973",
                "name": "Alicante"
                },
                {
                "zone_id": "2974",
                "name": "Almeria"
                },
                {
                "zone_id": "2975",
                "name": "Asturias"
                },
                {
                "zone_id": "2976",
                "name": "&Aacute;vila"
                },
                {
                "zone_id": "2977",
                "name": "Badajoz"
                },
                {
                "zone_id": "2978",
                "name": "Baleares"
                },
                {
                "zone_id": "2979",
                "name": "Barcelona"
                },
                {
                "zone_id": "2980",
                "name": "Burgos"
                },
                {
                "zone_id": "2981",
                "name": "C&aacute;ceres"
                },
                {
                "zone_id": "2982",
                "name": "C&aacute;diz"
                },
                {
                "zone_id": "2983",
                "name": "Cantabria"
                },
                {
                "zone_id": "2984",
                "name": "Castell&oacute;n"
                },
                {
                "zone_id": "2985",
                "name": "Ceuta"
                },
                {
                "zone_id": "2986",
                "name": "Ciudad Real"
                },
                {
                "zone_id": "2987",
                "name": "C&oacute;rdoba"
                },
                {
                "zone_id": "2988",
                "name": "Cuenca"
                },
                {
                "zone_id": "2989",
                "name": "Girona"
                },
                {
                "zone_id": "2990",
                "name": "Granada"
                },
                {
                "zone_id": "2991",
                "name": "Guadalajara"
                },
                {
                "zone_id": "2992",
                "name": "Guip&uacute;zcoa"
                },
                {
                "zone_id": "2993",
                "name": "Huelva"
                },
                {
                "zone_id": "2994",
                "name": "Huesca"
                },
                {
                "zone_id": "2995",
                "name": "Ja&eacute;n"
                },
                {
                "zone_id": "2996",
                "name": "La Rioja"
                },
                {
                "zone_id": "2997",
                "name": "Las Palmas"
                },
                {
                "zone_id": "2998",
                "name": "Leon"
                },
                {
                "zone_id": "2999",
                "name": "Lleida"
                },
                {
                "zone_id": "3000",
                "name": "Lugo"
                },
                {
                "zone_id": "3001",
                "name": "Madrid"
                },
                {
                "zone_id": "3002",
                "name": "Malaga"
                },
                {
                "zone_id": "3003",
                "name": "Melilla"
                },
                {
                "zone_id": "3004",
                "name": "Murcia"
                },
                {
                "zone_id": "3005",
                "name": "Navarra"
                },
                {
                "zone_id": "3006",
                "name": "Ourense"
                },
                {
                "zone_id": "3007",
                "name": "Palencia"
                },
                {
                "zone_id": "3008",
                "name": "Pontevedra"
                },
                {
                "zone_id": "3009",
                "name": "Salamanca"
                },
                {
                "zone_id": "3010",
                "name": "Santa Cruz de Tenerife"
                },
                {
                "zone_id": "3011",
                "name": "Segovia"
                },
                {
                "zone_id": "3012",
                "name": "Sevilla"
                },
                {
                "zone_id": "3013",
                "name": "Soria"
                },
                {
                "zone_id": "3014",
                "name": "Tarragona"
                },
                {
                "zone_id": "3015",
                "name": "Teruel"
                },
                {
                "zone_id": "3016",
                "name": "Toledo"
                },
                {
                "zone_id": "3017",
                "name": "Valencia"
                },
                {
                "zone_id": "3018",
                "name": "Valladolid"
                },
                {
                "zone_id": "3019",
                "name": "Vizcaya"
                },
                {
                "zone_id": "3020",
                "name": "Zamora"
                },
                {
                "zone_id": "3021",
                "name": "Zaragoza"
                }
            ]
            },
            {
            "_id": "ESP",
            "country_id": "195",
            "pais_name": "Spain",
            "phone_code": "34",
            "departamento": [
                {
                "zone_id": "2970",
                "name": "La Coru&ntilde;a"
                },
                {
                "zone_id": "2971",
                "name": "&Aacute;lava"
                },
                {
                "zone_id": "2972",
                "name": "Albacete"
                },
                {
                "zone_id": "2973",
                "name": "Alicante"
                },
                {
                "zone_id": "2974",
                "name": "Almeria"
                },
                {
                "zone_id": "2975",
                "name": "Asturias"
                },
                {
                "zone_id": "2976",
                "name": "&Aacute;vila"
                },
                {
                "zone_id": "2977",
                "name": "Badajoz"
                },
                {
                "zone_id": "2978",
                "name": "Baleares"
                },
                {
                "zone_id": "2979",
                "name": "Barcelona"
                },
                {
                "zone_id": "2980",
                "name": "Burgos"
                },
                {
                "zone_id": "2981",
                "name": "C&aacute;ceres"
                },
                {
                "zone_id": "2982",
                "name": "C&aacute;diz"
                },
                {
                "zone_id": "2983",
                "name": "Cantabria"
                },
                {
                "zone_id": "2984",
                "name": "Castell&oacute;n"
                },
                {
                "zone_id": "2985",
                "name": "Ceuta"
                },
                {
                "zone_id": "2986",
                "name": "Ciudad Real"
                },
                {
                "zone_id": "2987",
                "name": "C&oacute;rdoba"
                },
                {
                "zone_id": "2988",
                "name": "Cuenca"
                },
                {
                "zone_id": "2989",
                "name": "Girona"
                },
                {
                "zone_id": "2990",
                "name": "Granada"
                },
                {
                "zone_id": "2991",
                "name": "Guadalajara"
                },
                {
                "zone_id": "2992",
                "name": "Guip&uacute;zcoa"
                },
                {
                "zone_id": "2993",
                "name": "Huelva"
                },
                {
                "zone_id": "2994",
                "name": "Huesca"
                },
                {
                "zone_id": "2995",
                "name": "Ja&eacute;n"
                },
                {
                "zone_id": "2996",
                "name": "La Rioja"
                },
                {
                "zone_id": "2997",
                "name": "Las Palmas"
                },
                {
                "zone_id": "2998",
                "name": "Leon"
                },
                {
                "zone_id": "2999",
                "name": "Lleida"
                },
                {
                "zone_id": "3000",
                "name": "Lugo"
                },
                {
                "zone_id": "3001",
                "name": "Madrid"
                },
                {
                "zone_id": "3002",
                "name": "Malaga"
                },
                {
                "zone_id": "3003",
                "name": "Melilla"
                },
                {
                "zone_id": "3004",
                "name": "Murcia"
                },
                {
                "zone_id": "3005",
                "name": "Navarra"
                },
                {
                "zone_id": "3006",
                "name": "Ourense"
                },
                {
                "zone_id": "3007",
                "name": "Palencia"
                },
                {
                "zone_id": "3008",
                "name": "Pontevedra"
                },
                {
                "zone_id": "3009",
                "name": "Salamanca"
                },
                {
                "zone_id": "3010",
                "name": "Santa Cruz de Tenerife"
                },
                {
                "zone_id": "3011",
                "name": "Segovia"
                },
                {
                "zone_id": "3012",
                "name": "Sevilla"
                },
                {
                "zone_id": "3013",
                "name": "Soria"
                },
                {
                "zone_id": "3014",
                "name": "Tarragona"
                },
                {
                "zone_id": "3015",
                "name": "Teruel"
                },
                {
                "zone_id": "3016",
                "name": "Toledo"
                },
                {
                "zone_id": "3017",
                "name": "Valencia"
                },
                {
                "zone_id": "3018",
                "name": "Valladolid"
                },
                {
                "zone_id": "3019",
                "name": "Vizcaya"
                },
                {
                "zone_id": "3020",
                "name": "Zamora"
                },
                {
                "zone_id": "3021",
                "name": "Zaragoza"
                }
            ]
            },
            {
            "_id": "LKA",
            "country_id": "196",
            "pais_name": "Sri Lanka",
            "phone_code": "94",
            "departamento": [
                {
                "zone_id": "3022",
                "name": "Central"
                },
                {
                "zone_id": "3023",
                "name": "Eastern"
                },
                {
                "zone_id": "3024",
                "name": "North Central"
                },
                {
                "zone_id": "3025",
                "name": "Northern"
                },
                {
                "zone_id": "3026",
                "name": "North Western"
                },
                {
                "zone_id": "3027",
                "name": "Sabaragamuwa"
                },
                {
                "zone_id": "3028",
                "name": "Southern"
                },
                {
                "zone_id": "3029",
                "name": "Uva"
                },
                {
                "zone_id": "3030",
                "name": "Western"
                }
            ]
            },
            {
            "_id": "SHN",
            "country_id": "197",
            "pais_name": "St. Helena",
            "phone_code": "290",
            "departamento": [
                {
                "zone_id": "3031",
                "name": "Ascension"
                },
                {
                "zone_id": "3032",
                "name": "Saint Helena"
                },
                {
                "zone_id": "3033",
                "name": "Tristan da Cunha"
                }
            ]
            },
            {
            "_id": "SDN",
            "country_id": "199",
            "pais_name": "Sudan",
            "phone_code": "249",
            "departamento": [
                {
                "zone_id": "3034",
                "name": "A'ali an Nil"
                },
                {
                "zone_id": "3035",
                "name": "Al Bahr al Ahmar"
                },
                {
                "zone_id": "3036",
                "name": "Al Buhayrat"
                },
                {
                "zone_id": "3037",
                "name": "Al Jazirah"
                },
                {
                "zone_id": "3038",
                "name": "Al Khartum"
                },
                {
                "zone_id": "3039",
                "name": "Al Qadarif"
                },
                {
                "zone_id": "3040",
                "name": "Al Wahdah"
                },
                {
                "zone_id": "3041",
                "name": "An Nil al Abyad"
                },
                {
                "zone_id": "3042",
                "name": "An Nil al Azraq"
                },
                {
                "zone_id": "3043",
                "name": "Ash Shamaliyah"
                },
                {
                "zone_id": "3044",
                "name": "Bahr al Jabal"
                },
                {
                "zone_id": "3045",
                "name": "Gharb al Istiwa'iyah"
                },
                {
                "zone_id": "3046",
                "name": "Gharb Bahr al Ghazal"
                },
                {
                "zone_id": "3047",
                "name": "Gharb Darfur"
                },
                {
                "zone_id": "3048",
                "name": "Gharb Kurdufan"
                },
                {
                "zone_id": "3049",
                "name": "Janub Darfur"
                },
                {
                "zone_id": "3050",
                "name": "Janub Kurdufan"
                },
                {
                "zone_id": "3051",
                "name": "Junqali"
                },
                {
                "zone_id": "3052",
                "name": "Kassala"
                },
                {
                "zone_id": "3053",
                "name": "Nahr an Nil"
                },
                {
                "zone_id": "3054",
                "name": "Shamal Bahr al Ghazal"
                },
                {
                "zone_id": "3055",
                "name": "Shamal Darfur"
                },
                {
                "zone_id": "3056",
                "name": "Shamal Kurdufan"
                },
                {
                "zone_id": "3057",
                "name": "Sharq al Istiwa'iyah"
                },
                {
                "zone_id": "3058",
                "name": "Sinnar"
                },
                {
                "zone_id": "3059",
                "name": "Warab"
                }
            ]
            },
            {
            "_id": "SUR",
            "country_id": "200",
            "pais_name": "Suriname",
            "phone_code": "597",
            "departamento": [
                {
                "zone_id": "3060",
                "name": "Brokopondo"
                },
                {
                "zone_id": "3061",
                "name": "Commewijne"
                },
                {
                "zone_id": "3062",
                "name": "Coronie"
                },
                {
                "zone_id": "3063",
                "name": "Marowijne"
                },
                {
                "zone_id": "3064",
                "name": "Nickerie"
                },
                {
                "zone_id": "3065",
                "name": "Para"
                },
                {
                "zone_id": "3066",
                "name": "Paramaribo"
                },
                {
                "zone_id": "3067",
                "name": "Saramacca"
                },
                {
                "zone_id": "3068",
                "name": "Sipaliwini"
                },
                {
                "zone_id": "3069",
                "name": "Wanica"
                }
            ]
            },
            {
            "_id": "SWZ",
            "country_id": "202",
            "pais_name": "Swaziland",
            "phone_code": "268",
            "departamento": [
                {
                "zone_id": "3070",
                "name": "Hhohho"
                },
                {
                "zone_id": "3071",
                "name": "Lubombo"
                },
                {
                "zone_id": "3072",
                "name": "Manzini"
                },
                {
                "zone_id": "3073",
                "name": "Shishelweni"
                }
            ]
            },
            {
            "_id": "SWE",
            "country_id": "203",
            "pais_name": "Sweden",
            "phone_code": "46",
            "departamento": [
                {
                "zone_id": "3074",
                "name": "Blekinge"
                },
                {
                "zone_id": "3075",
                "name": "Dalama"
                },
                {
                "zone_id": "3076",
                "name": "G&auml;vleborg"
                },
                {
                "zone_id": "3077",
                "name": "Gotland"
                },
                {
                "zone_id": "3078",
                "name": "Halland"
                },
                {
                "zone_id": "3079",
                "name": "J&auml;mtland"
                },
                {
                "zone_id": "3080",
                "name": "J&ouml;nk&ouml;ping"
                },
                {
                "zone_id": "3081",
                "name": "Kalmar"
                },
                {
                "zone_id": "3082",
                "name": "Kronoberg"
                },
                {
                "zone_id": "3083",
                "name": "Norrbotten"
                },
                {
                "zone_id": "3084",
                "name": "&Ouml;rebro"
                },
                {
                "zone_id": "3085",
                "name": "&Ouml;sterg&ouml;tland"
                },
                {
                "zone_id": "3086",
                "name": "Sk&aring;ne"
                },
                {
                "zone_id": "3087",
                "name": "S&ouml;dermanland"
                },
                {
                "zone_id": "3088",
                "name": "Stockholm"
                },
                {
                "zone_id": "3089",
                "name": "Uppsala"
                },
                {
                "zone_id": "3090",
                "name": "V&auml;rmland"
                },
                {
                "zone_id": "3091",
                "name": "V&auml;sterbotten"
                },
                {
                "zone_id": "3092",
                "name": "V&auml;sternorrland"
                },
                {
                "zone_id": "3093",
                "name": "V&auml;stmanland"
                },
                {
                "zone_id": "3094",
                "name": "V&auml;stra G&ouml;taland"
                }
            ]
            },
            {
            "_id": "CHE",
            "country_id": "204",
            "pais_name": "Switzerland",
            "phone_code": "41",
            "departamento": [
                {
                "zone_id": "3095",
                "name": "Aargau"
                },
                {
                "zone_id": "3096",
                "name": "Appenzell Ausserrhoden"
                },
                {
                "zone_id": "3097",
                "name": "Appenzell Innerrhoden"
                },
                {
                "zone_id": "3098",
                "name": "Basel-Stadt"
                },
                {
                "zone_id": "3099",
                "name": "Basel-Landschaft"
                },
                {
                "zone_id": "3100",
                "name": "Bern"
                },
                {
                "zone_id": "3101",
                "name": "Fribourg"
                },
                {
                "zone_id": "3102",
                "name": "Gen&egrave;ve"
                },
                {
                "zone_id": "3103",
                "name": "Glarus"
                },
                {
                "zone_id": "3104",
                "name": "Graub&uuml;nden"
                },
                {
                "zone_id": "3105",
                "name": "Jura"
                },
                {
                "zone_id": "3106",
                "name": "Luzern"
                },
                {
                "zone_id": "3107",
                "name": "Neuch&acirc;tel"
                },
                {
                "zone_id": "3108",
                "name": "Nidwald"
                },
                {
                "zone_id": "3109",
                "name": "Obwald"
                },
                {
                "zone_id": "3110",
                "name": "St. Gallen"
                },
                {
                "zone_id": "3111",
                "name": "Schaffhausen"
                },
                {
                "zone_id": "3112",
                "name": "Schwyz"
                },
                {
                "zone_id": "3113",
                "name": "Solothurn"
                },
                {
                "zone_id": "3114",
                "name": "Thurgau"
                },
                {
                "zone_id": "3115",
                "name": "Ticino"
                },
                {
                "zone_id": "3116",
                "name": "Uri"
                },
                {
                "zone_id": "3117",
                "name": "Valais"
                },
                {
                "zone_id": "3118",
                "name": "Vaud"
                },
                {
                "zone_id": "3119",
                "name": "Zug"
                },
                {
                "zone_id": "3120",
                "name": "Z&uuml;rich"
                }
            ]
            },
            {
            "_id": "SYR",
            "country_id": "205",
            "pais_name": "Syrian Arab Republic",
            "phone_code": "963",
            "departamento": [
                {
                "zone_id": "3121",
                "name": "Al Hasakah"
                },
                {
                "zone_id": "3122",
                "name": "Al Ladhiqiyah"
                },
                {
                "zone_id": "3123",
                "name": "Al Qunaytirah"
                },
                {
                "zone_id": "3124",
                "name": "Ar Raqqah"
                },
                {
                "zone_id": "3125",
                "name": "As Suwayda"
                },
                {
                "zone_id": "3126",
                "name": "Dara"
                },
                {
                "zone_id": "3127",
                "name": "Dayr az Zawr"
                },
                {
                "zone_id": "3128",
                "name": "Dimashq"
                },
                {
                "zone_id": "3129",
                "name": "Halab"
                },
                {
                "zone_id": "3130",
                "name": "Hamah"
                },
                {
                "zone_id": "3131",
                "name": "Hims"
                },
                {
                "zone_id": "3132",
                "name": "Idlib"
                },
                {
                "zone_id": "3133",
                "name": "Rif Dimashq"
                },
                {
                "zone_id": "3134",
                "name": "Tartus"
                }
            ]
            },
            {
            "_id": "TWN",
            "country_id": "206",
            "pais_name": "Taiwan",
            "phone_code": "886",
            "departamento": [
                {
                "zone_id": "3135",
                "name": "Chang-hua"
                },
                {
                "zone_id": "3136",
                "name": "Chia-i"
                },
                {
                "zone_id": "3137",
                "name": "Hsin-chu"
                },
                {
                "zone_id": "3138",
                "name": "Hua-lien"
                },
                {
                "zone_id": "3139",
                "name": "I-lan"
                },
                {
                "zone_id": "3140",
                "name": "Kao-hsiung county"
                },
                {
                "zone_id": "3141",
                "name": "Kin-men"
                },
                {
                "zone_id": "3142",
                "name": "Lien-chiang"
                },
                {
                "zone_id": "3143",
                "name": "Miao-li"
                },
                {
                "zone_id": "3144",
                "name": "Nan-t'ou"
                },
                {
                "zone_id": "3145",
                "name": "P'eng-hu"
                },
                {
                "zone_id": "3146",
                "name": "P'ing-tung"
                },
                {
                "zone_id": "3147",
                "name": "T'ai-chung"
                },
                {
                "zone_id": "3148",
                "name": "T'ai-nan"
                },
                {
                "zone_id": "3149",
                "name": "T'ai-pei county"
                },
                {
                "zone_id": "3150",
                "name": "T'ai-tung"
                },
                {
                "zone_id": "3151",
                "name": "T'ao-yuan"
                },
                {
                "zone_id": "3152",
                "name": "Yun-lin"
                },
                {
                "zone_id": "3153",
                "name": "Chia-i city"
                },
                {
                "zone_id": "3154",
                "name": "Chi-lung"
                },
                {
                "zone_id": "3155",
                "name": "Hsin-chu"
                },
                {
                "zone_id": "3156",
                "name": "T'ai-chung"
                },
                {
                "zone_id": "3157",
                "name": "T'ai-nan"
                },
                {
                "zone_id": "3158",
                "name": "Kao-hsiung city"
                },
                {
                "zone_id": "3159",
                "name": "T'ai-pei city"
                }
            ]
            },
            {
            "_id": "TJK",
            "country_id": "207",
            "pais_name": "Tajikistan",
            "phone_code": "992",
            "departamento": [
                {
                "zone_id": "3160",
                "name": "Gorno-Badakhstan"
                },
                {
                "zone_id": "3161",
                "name": "Khatlon"
                },
                {
                "zone_id": "3162",
                "name": "Sughd"
                }
            ]
            },
            {
            "_id": "TZA",
            "country_id": "208",
            "pais_name": "Tanzania, United Republic of",
            "phone_code": "255",
            "departamento": [
                {
                "zone_id": "3163",
                "name": "Arusha"
                },
                {
                "zone_id": "3164",
                "name": "Dar es Salaam"
                },
                {
                "zone_id": "3165",
                "name": "Dodoma"
                },
                {
                "zone_id": "3166",
                "name": "Iringa"
                },
                {
                "zone_id": "3167",
                "name": "Kagera"
                },
                {
                "zone_id": "3168",
                "name": "Kigoma"
                },
                {
                "zone_id": "3169",
                "name": "Kilimanjaro"
                },
                {
                "zone_id": "3170",
                "name": "Lindi"
                },
                {
                "zone_id": "3171",
                "name": "Manyara"
                },
                {
                "zone_id": "3172",
                "name": "Mara"
                },
                {
                "zone_id": "3173",
                "name": "Mbeya"
                },
                {
                "zone_id": "3174",
                "name": "Morogoro"
                },
                {
                "zone_id": "3175",
                "name": "Mtwara"
                },
                {
                "zone_id": "3176",
                "name": "Mwanza"
                },
                {
                "zone_id": "3177",
                "name": "Pemba North"
                },
                {
                "zone_id": "3178",
                "name": "Pemba South"
                },
                {
                "zone_id": "3179",
                "name": "Pwani"
                },
                {
                "zone_id": "3180",
                "name": "Rukwa"
                },
                {
                "zone_id": "3181",
                "name": "Ruvuma"
                },
                {
                "zone_id": "3182",
                "name": "Shinyanga"
                },
                {
                "zone_id": "3183",
                "name": "Singida"
                },
                {
                "zone_id": "3184",
                "name": "Tabora"
                },
                {
                "zone_id": "3185",
                "name": "Tanga"
                },
                {
                "zone_id": "3186",
                "name": "Zanzibar Central South"
                },
                {
                "zone_id": "3187",
                "name": "Zanzibar North"
                },
                {
                "zone_id": "3188",
                "name": "Zanzibar Urban West"
                }
            ]
            },
            {
            "_id": "THA",
            "country_id": "209",
            "pais_name": "Thailand",
            "phone_code": "66",
            "departamento": [
                {
                "zone_id": "3189",
                "name": "Amnat Charoen"
                },
                {
                "zone_id": "3190",
                "name": "Ang Thong"
                },
                {
                "zone_id": "3191",
                "name": "Ayutthaya"
                },
                {
                "zone_id": "3192",
                "name": "Bangkok"
                },
                {
                "zone_id": "3193",
                "name": "Buriram"
                },
                {
                "zone_id": "3194",
                "name": "Chachoengsao"
                },
                {
                "zone_id": "3195",
                "name": "Chai Nat"
                },
                {
                "zone_id": "3196",
                "name": "Chaiyaphum"
                },
                {
                "zone_id": "3197",
                "name": "Chanthaburi"
                },
                {
                "zone_id": "3198",
                "name": "Chiang Mai"
                },
                {
                "zone_id": "3199",
                "name": "Chiang Rai"
                },
                {
                "zone_id": "3200",
                "name": "Chon Buri"
                },
                {
                "zone_id": "3201",
                "name": "Chumphon"
                },
                {
                "zone_id": "3202",
                "name": "Kalasin"
                },
                {
                "zone_id": "3203",
                "name": "Kamphaeng Phet"
                },
                {
                "zone_id": "3204",
                "name": "Kanchanaburi"
                },
                {
                "zone_id": "3205",
                "name": "Khon Kaen"
                },
                {
                "zone_id": "3206",
                "name": "Krabi"
                },
                {
                "zone_id": "3207",
                "name": "Lampang"
                },
                {
                "zone_id": "3208",
                "name": "Lamphun"
                },
                {
                "zone_id": "3209",
                "name": "Loei"
                },
                {
                "zone_id": "3210",
                "name": "Lop Buri"
                },
                {
                "zone_id": "3211",
                "name": "Mae Hong Son"
                },
                {
                "zone_id": "3212",
                "name": "Maha Sarakham"
                },
                {
                "zone_id": "3213",
                "name": "Mukdahan"
                },
                {
                "zone_id": "3214",
                "name": "Nakhon Nayok"
                },
                {
                "zone_id": "3215",
                "name": "Nakhon Pathom"
                },
                {
                "zone_id": "3216",
                "name": "Nakhon Phanom"
                },
                {
                "zone_id": "3217",
                "name": "Nakhon Ratchasima"
                },
                {
                "zone_id": "3218",
                "name": "Nakhon Sawan"
                },
                {
                "zone_id": "3219",
                "name": "Nakhon Si Thammarat"
                },
                {
                "zone_id": "3220",
                "name": "Nan"
                },
                {
                "zone_id": "3221",
                "name": "Narathiwat"
                },
                {
                "zone_id": "3222",
                "name": "Nong Bua Lamphu"
                },
                {
                "zone_id": "3223",
                "name": "Nong Khai"
                },
                {
                "zone_id": "3224",
                "name": "Nonthaburi"
                },
                {
                "zone_id": "3225",
                "name": "Pathum Thani"
                },
                {
                "zone_id": "3226",
                "name": "Pattani"
                },
                {
                "zone_id": "3227",
                "name": "Phangnga"
                },
                {
                "zone_id": "3228",
                "name": "Phatthalung"
                },
                {
                "zone_id": "3229",
                "name": "Phayao"
                },
                {
                "zone_id": "3230",
                "name": "Phetchabun"
                },
                {
                "zone_id": "3231",
                "name": "Phetchaburi"
                },
                {
                "zone_id": "3232",
                "name": "Phichit"
                },
                {
                "zone_id": "3233",
                "name": "Phitsanulok"
                },
                {
                "zone_id": "3234",
                "name": "Phrae"
                },
                {
                "zone_id": "3235",
                "name": "Phuket"
                },
                {
                "zone_id": "3236",
                "name": "Prachin Buri"
                },
                {
                "zone_id": "3237",
                "name": "Prachuap Khiri Khan"
                },
                {
                "zone_id": "3238",
                "name": "Ranong"
                },
                {
                "zone_id": "3239",
                "name": "Ratchaburi"
                },
                {
                "zone_id": "3240",
                "name": "Rayong"
                },
                {
                "zone_id": "3241",
                "name": "Roi Et"
                },
                {
                "zone_id": "3242",
                "name": "Sa Kaeo"
                },
                {
                "zone_id": "3243",
                "name": "Sakon Nakhon"
                },
                {
                "zone_id": "3244",
                "name": "Samut Prakan"
                },
                {
                "zone_id": "3245",
                "name": "Samut Sakhon"
                },
                {
                "zone_id": "3246",
                "name": "Samut Songkhram"
                },
                {
                "zone_id": "3247",
                "name": "Sara Buri"
                },
                {
                "zone_id": "3248",
                "name": "Satun"
                },
                {
                "zone_id": "3249",
                "name": "Sing Buri"
                },
                {
                "zone_id": "3250",
                "name": "Sisaket"
                },
                {
                "zone_id": "3251",
                "name": "Songkhla"
                },
                {
                "zone_id": "3252",
                "name": "Sukhothai"
                },
                {
                "zone_id": "3253",
                "name": "Suphan Buri"
                },
                {
                "zone_id": "3254",
                "name": "Surat Thani"
                },
                {
                "zone_id": "3255",
                "name": "Surin"
                },
                {
                "zone_id": "3256",
                "name": "Tak"
                },
                {
                "zone_id": "3257",
                "name": "Trang"
                },
                {
                "zone_id": "3258",
                "name": "Trat"
                },
                {
                "zone_id": "3259",
                "name": "Ubon Ratchathani"
                },
                {
                "zone_id": "3260",
                "name": "Udon Thani"
                },
                {
                "zone_id": "3261",
                "name": "Uthai Thani"
                },
                {
                "zone_id": "3262",
                "name": "Uttaradit"
                },
                {
                "zone_id": "3263",
                "name": "Yala"
                },
                {
                "zone_id": "3264",
                "name": "Yasothon"
                }
            ]
            },
            {
            "_id": "TGO",
            "country_id": "210",
            "pais_name": "Togo",
            "phone_code": "228",
            "departamento": [
                {
                "zone_id": "3265",
                "name": "Kara"
                },
                {
                "zone_id": "3266",
                "name": "Plateaux"
                },
                {
                "zone_id": "3267",
                "name": "Savanes"
                },
                {
                "zone_id": "3268",
                "name": "Centrale"
                },
                {
                "zone_id": "3269",
                "name": "Maritime"
                }
            ]
            },
            {
            "_id": "TKL",
            "country_id": "211",
            "pais_name": "Tokelau",
            "phone_code": "690",
            "departamento": [
                {
                "zone_id": "3270",
                "name": "Atafu"
                },
                {
                "zone_id": "3271",
                "name": "Fakaofo"
                },
                {
                "zone_id": "3272",
                "name": "Nukunonu"
                }
            ]
            },
            {
            "_id": "TON",
            "country_id": "212",
            "pais_name": "Tonga",
            "phone_code": "676",
            "departamento": [
                {
                "zone_id": "3273",
                "name": "Ha'apai"
                },
                {
                "zone_id": "3274",
                "name": "Tongatapu"
                },
                {
                "zone_id": "3275",
                "name": "Vava'u"
                }
            ]
            },
            {
                "_id": "TTO",
                "country_id": "213",
                "pais_name": "Trinidad and Tobago",
                "phone_code": "1868",
                "departamento": [
                    {
                    "zone_id": "3276",
                    "name": "Couva Tabaquite Talparo"
                    },
                    {
                    "zone_id": "3277",
                    "name": "Diego Martin"
                    },
                    {
                    "zone_id": "3278",
                    "name": "Mayaro Rio Claro"
                    },
                    {
                    "zone_id": "3279",
                    "name": "Penal Debe"
                    },
                    {
                    "zone_id": "3280",
                    "name": "Princes Town"
                    },
                    {
                    "zone_id": "3281",
                    "name": "Sangre Grande"
                    },
                    {
                    "zone_id": "3282",
                    "name": "San Juan Laventille"
                    },
                    {
                    "zone_id": "3283",
                    "name": "Siparia"
                    },
                    {
                    "zone_id": "3284",
                    "name": "Tunapuna Piarco"
                    },
                    {
                    "zone_id": "3285",
                    "name": "Port of Spain"
                    },
                    {
                    "zone_id": "3286",
                    "name": "San Fernando"
                    },
                    {
                    "zone_id": "3287",
                    "name": "Arima"
                    },
                    {
                    "zone_id": "3288",
                    "name": "Point Fortin"
                    },
                    {
                    "zone_id": "3289",
                    "name": "Chaguanas"
                    },
                    {
                    "zone_id": "3290",
                    "name": "Tobago"
                    }
                ]
            },
            {
                "_id": "TUN",
                "country_id": "214",
                "pais_name": "Tunisia",
                "phone_code": "216",
                "departamento": [
                    {
                    "zone_id": "3291",
                    "name": "Ariana"
                    },
                    {
                    "zone_id": "3292",
                    "name": "Beja"
                    },
                    {
                    "zone_id": "3293",
                    "name": "Ben Arous"
                    },
                    {
                    "zone_id": "3294",
                    "name": "Bizerte"
                    },
                    {
                    "zone_id": "3295",
                    "name": "Gabes"
                    },
                    {
                    "zone_id": "3296",
                    "name": "Gafsa"
                    },
                    {
                    "zone_id": "3297",
                    "name": "Jendouba"
                    },
                    {
                    "zone_id": "3298",
                    "name": "Kairouan"
                    },
                    {
                    "zone_id": "3299",
                    "name": "Kasserine"
                    },
                    {
                    "zone_id": "3300",
                    "name": "Kebili"
                    },
                    {
                    "zone_id": "3301",
                    "name": "Kef"
                    },
                    {
                    "zone_id": "3302",
                    "name": "Mahdia"
                    },
                    {
                    "zone_id": "3303",
                    "name": "Manouba"
                    },
                    {
                    "zone_id": "3304",
                    "name": "Medenine"
                    },
                    {
                    "zone_id": "3305",
                    "name": "Monastir"
                    },
                    {
                    "zone_id": "3306",
                    "name": "Nabeul"
                    },
                    {
                    "zone_id": "3307",
                    "name": "Sfax"
                    },
                    {
                    "zone_id": "3308",
                    "name": "Sidi"
                    },
                    {
                    "zone_id": "3309",
                    "name": "Siliana"
                    },
                    {
                    "zone_id": "3310",
                    "name": "Sousse"
                    },
                    {
                    "zone_id": "3311",
                    "name": "Tataouine"
                    },
                    {
                    "zone_id": "3312",
                    "name": "Tozeur"
                    },
                    {
                    "zone_id": "3313",
                    "name": "Tunis"
                    },
                    {
                    "zone_id": "3314",
                    "name": "Zaghouan"
                    }
                ]
            },
            {
                "_id": "TUR",
                "country_id": "215",
                "pais_name": "Turkey",
                "phone_code": "90",
                "departamento": [
                    {
                    "zone_id": "3315",
                    "name": "Adana"
                    },
                    {
                    "zone_id": "3316",
                    "name": "Adiyaman"
                    },
                    {
                    "zone_id": "3317",
                    "name": "Afyonkarahisar"
                    },
                    {
                    "zone_id": "3318",
                    "name": "Agri"
                    },
                    {
                    "zone_id": "3319",
                    "name": "Aksaray"
                    },
                    {
                    "zone_id": "3320",
                    "name": "Amasya"
                    },
                    {
                    "zone_id": "3321",
                    "name": "Ankara"
                    },
                    {
                    "zone_id": "3322",
                    "name": "Antalya"
                    },
                    {
                    "zone_id": "3323",
                    "name": "Ardahan"
                    },
                    {
                    "zone_id": "3324",
                    "name": "Artvin"
                    },
                    {
                    "zone_id": "3325",
                    "name": "Aydin"
                    },
                    {
                    "zone_id": "3326",
                    "name": "Balikesir"
                    },
                    {
                    "zone_id": "3327",
                    "name": "Bartin"
                    },
                    {
                    "zone_id": "3328",
                    "name": "Batman"
                    },
                    {
                    "zone_id": "3329",
                    "name": "Bayburt"
                    },
                    {
                    "zone_id": "3330",
                    "name": "Bilecik"
                    },
                    {
                    "zone_id": "3331",
                    "name": "Bingol"
                    },
                    {
                    "zone_id": "3332",
                    "name": "Bitlis"
                    },
                    {
                    "zone_id": "3333",
                    "name": "Bolu"
                    },
                    {
                    "zone_id": "3334",
                    "name": "Burdur"
                    },
                    {
                    "zone_id": "3335",
                    "name": "Bursa"
                    },
                    {
                    "zone_id": "3336",
                    "name": "Canakkale"
                    },
                    {
                    "zone_id": "3337",
                    "name": "Cankiri"
                    },
                    {
                    "zone_id": "3338",
                    "name": "Corum"
                    },
                    {
                    "zone_id": "3339",
                    "name": "Denizli"
                    },
                    {
                    "zone_id": "3340",
                    "name": "Diyarbakir"
                    },
                    {
                    "zone_id": "3341",
                    "name": "Duzce"
                    },
                    {
                    "zone_id": "3342",
                    "name": "Edirne"
                    },
                    {
                    "zone_id": "3343",
                    "name": "Elazig"
                    },
                    {
                    "zone_id": "3344",
                    "name": "Erzincan"
                    },
                    {
                    "zone_id": "3345",
                    "name": "Erzurum"
                    },
                    {
                    "zone_id": "3346",
                    "name": "Eskisehir"
                    },
                    {
                    "zone_id": "3347",
                    "name": "Gaziantep"
                    },
                    {
                    "zone_id": "3348",
                    "name": "Giresun"
                    },
                    {
                    "zone_id": "3349",
                    "name": "Gumushane"
                    },
                    {
                    "zone_id": "3350",
                    "name": "Hakkari"
                    },
                    {
                    "zone_id": "3351",
                    "name": "Hatay"
                    },
                    {
                    "zone_id": "3352",
                    "name": "Igdir"
                    },
                    {
                    "zone_id": "3353",
                    "name": "Isparta"
                    },
                    {
                    "zone_id": "3354",
                    "name": "Istanbul"
                    },
                    {
                    "zone_id": "3355",
                    "name": "Izmir"
                    },
                    {
                    "zone_id": "3356",
                    "name": "Kahramanmaras"
                    },
                    {
                    "zone_id": "3357",
                    "name": "Karabuk"
                    },
                    {
                    "zone_id": "3358",
                    "name": "Karaman"
                    },
                    {
                    "zone_id": "3359",
                    "name": "Kars"
                    },
                    {
                    "zone_id": "3360",
                    "name": "Kastamonu"
                    },
                    {
                    "zone_id": "3361",
                    "name": "Kayseri"
                    },
                    {
                    "zone_id": "3362",
                    "name": "Kilis"
                    },
                    {
                    "zone_id": "3363",
                    "name": "Kirikkale"
                    },
                    {
                    "zone_id": "3364",
                    "name": "Kirklareli"
                    },
                    {
                    "zone_id": "3365",
                    "name": "Kirsehir"
                    },
                    {
                    "zone_id": "3366",
                    "name": "Kocaeli"
                    },
                    {
                    "zone_id": "3367",
                    "name": "Konya"
                    },
                    {
                    "zone_id": "3368",
                    "name": "Kutahya"
                    },
                    {
                    "zone_id": "3369",
                    "name": "Malatya"
                    },
                    {
                    "zone_id": "3370",
                    "name": "Manisa"
                    },
                    {
                    "zone_id": "3371",
                    "name": "Mardin"
                    },
                    {
                    "zone_id": "3372",
                    "name": "Mersin"
                    },
                    {
                    "zone_id": "3373",
                    "name": "Mugla"
                    },
                    {
                    "zone_id": "3374",
                    "name": "Mus"
                    },
                    {
                    "zone_id": "3375",
                    "name": "Nevsehir"
                    },
                    {
                    "zone_id": "3376",
                    "name": "Nigde"
                    },
                    {
                    "zone_id": "3377",
                    "name": "Ordu"
                    },
                    {
                    "zone_id": "3378",
                    "name": "Osmaniye"
                    },
                    {
                    "zone_id": "3379",
                    "name": "Rize"
                    },
                    {
                    "zone_id": "3380",
                    "name": "Sakarya"
                    },
                    {
                    "zone_id": "3381",
                    "name": "Samsun"
                    },
                    {
                    "zone_id": "3382",
                    "name": "Sanliurfa"
                    },
                    {
                    "zone_id": "3383",
                    "name": "Siirt"
                    },
                    {
                    "zone_id": "3384",
                    "name": "Sinop"
                    },
                    {
                    "zone_id": "3385",
                    "name": "Sirnak"
                    },
                    {
                    "zone_id": "3386",
                    "name": "Sivas"
                    },
                    {
                    "zone_id": "3387",
                    "name": "Tekirdag"
                    },
                    {
                    "zone_id": "3388",
                    "name": "Tokat"
                    },
                    {
                    "zone_id": "3389",
                    "name": "Trabzon"
                    },
                    {
                    "zone_id": "3390",
                    "name": "Tunceli"
                    },
                    {
                    "zone_id": "3391",
                    "name": "Usak"
                    },
                    {
                    "zone_id": "3392",
                    "name": "Van"
                    },
                    {
                    "zone_id": "3393",
                    "name": "Yalova"
                    },
                    {
                    "zone_id": "3394",
                    "name": "Yozgat"
                    },
                    {
                    "zone_id": "3395",
                    "name": "Zonguldak"
                    }
                ]
            },
            {
                "_id": "TKM",
                "country_id": "216",
                "pais_name": "Turkmenistan",
                "phone_code": "993",
                "departamento": [
                    {
                    "zone_id": "3396",
                    "name": "Ahal Welayaty"
                    },
                    {
                    "zone_id": "3397",
                    "name": "Balkan Welayaty"
                    },
                    {
                    "zone_id": "3398",
                    "name": "Dashhowuz Welayaty"
                    },
                    {
                    "zone_id": "3399",
                    "name": "Lebap Welayaty"
                    },
                    {
                    "zone_id": "3400",
                    "name": "Mary Welayaty"
                    }
                ]
            },
            {
                "_id": "TCA",
                "country_id": "217",
                "pais_name": "Turks and Caicos Islands",
                "phone_code": "1649",
                "departamento": [
                    {
                    "zone_id": "3401",
                    "name": "Ambergris Cays"
                    },
                    {
                    "zone_id": "3402",
                    "name": "Dellis Cay"
                    },
                    {
                    "zone_id": "3403",
                    "name": "French Cay"
                    },
                    {
                    "zone_id": "3404",
                    "name": "Little Water Cay"
                    },
                    {
                    "zone_id": "3405",
                    "name": "Parrot Cay"
                    },
                    {
                    "zone_id": "3406",
                    "name": "Pine Cay"
                    },
                    {
                    "zone_id": "3407",
                    "name": "Salt Cay"
                    },
                    {
                    "zone_id": "3408",
                    "name": "Grand Turk"
                    },
                    {
                    "zone_id": "3409",
                    "name": "South Caicos"
                    },
                    {
                    "zone_id": "3410",
                    "name": "East Caicos"
                    },
                    {
                    "zone_id": "3411",
                    "name": "Middle Caicos"
                    },
                    {
                    "zone_id": "3412",
                    "name": "North Caicos"
                    },
                    {
                    "zone_id": "3413",
                    "name": "Providenciales"
                    },
                    {
                    "zone_id": "3414",
                    "name": "West Caicos"
                    }
                ]
            },
            {
                "_id": "TUV",
                "country_id": "218",
                "pais_name": "Tuvalu",
                "phone_code": "688",
                "departamento": [
                    {
                    "zone_id": "3415",
                    "name": "Nanumanga"
                    },
                    {
                    "zone_id": "3416",
                    "name": "Niulakita"
                    },
                    {
                    "zone_id": "3417",
                    "name": "Niutao"
                    },
                    {
                    "zone_id": "3418",
                    "name": "Funafuti"
                    },
                    {
                    "zone_id": "3419",
                    "name": "Nanumea"
                    },
                    {
                    "zone_id": "3420",
                    "name": "Nui"
                    },
                    {
                    "zone_id": "3421",
                    "name": "Nukufetau"
                    },
                    {
                    "zone_id": "3422",
                    "name": "Nukulaelae"
                    },
                    {
                    "zone_id": "3423",
                    "name": "Vaitupu"
                    }
                ]
            },
            {
                "_id": "UGA",
                "country_id": "219",
                "pais_name": "Uganda",
                "phone_code": "256",
                "departamento": [
                    {
                    "zone_id": "3424",
                    "name": "Kalangala"
                    },
                    {
                    "zone_id": "3425",
                    "name": "Kampala"
                    },
                    {
                    "zone_id": "3426",
                    "name": "Kayunga"
                    },
                    {
                    "zone_id": "3427",
                    "name": "Kiboga"
                    },
                    {
                    "zone_id": "3428",
                    "name": "Luwero"
                    },
                    {
                    "zone_id": "3429",
                    "name": "Masaka"
                    },
                    {
                    "zone_id": "3430",
                    "name": "Mpigi"
                    },
                    {
                    "zone_id": "3431",
                    "name": "Mubende"
                    },
                    {
                    "zone_id": "3432",
                    "name": "Mukono"
                    },
                    {
                    "zone_id": "3433",
                    "name": "Nakasongola"
                    },
                    {
                    "zone_id": "3434",
                    "name": "Rakai"
                    },
                    {
                    "zone_id": "3435",
                    "name": "Sembabule"
                    },
                    {
                    "zone_id": "3436",
                    "name": "Wakiso"
                    },
                    {
                    "zone_id": "3437",
                    "name": "Bugiri"
                    },
                    {
                    "zone_id": "3438",
                    "name": "Busia"
                    },
                    {
                    "zone_id": "3439",
                    "name": "Iganga"
                    },
                    {
                    "zone_id": "3440",
                    "name": "Jinja"
                    },
                    {
                    "zone_id": "3441",
                    "name": "Kaberamaido"
                    },
                    {
                    "zone_id": "3442",
                    "name": "Kamuli"
                    },
                    {
                    "zone_id": "3443",
                    "name": "Kapchorwa"
                    },
                    {
                    "zone_id": "3444",
                    "name": "Katakwi"
                    },
                    {
                    "zone_id": "3445",
                    "name": "Kumi"
                    },
                    {
                    "zone_id": "3446",
                    "name": "Mayuge"
                    },
                    {
                    "zone_id": "3447",
                    "name": "Mbale"
                    },
                    {
                    "zone_id": "3448",
                    "name": "Pallisa"
                    },
                    {
                    "zone_id": "3449",
                    "name": "Sironko"
                    },
                    {
                    "zone_id": "3450",
                    "name": "Soroti"
                    },
                    {
                    "zone_id": "3451",
                    "name": "Tororo"
                    },
                    {
                    "zone_id": "3452",
                    "name": "Adjumani"
                    },
                    {
                    "zone_id": "3453",
                    "name": "Apac"
                    },
                    {
                    "zone_id": "3454",
                    "name": "Arua"
                    },
                    {
                    "zone_id": "3455",
                    "name": "Gulu"
                    },
                    {
                    "zone_id": "3456",
                    "name": "Kitgum"
                    },
                    {
                    "zone_id": "3457",
                    "name": "Kotido"
                    },
                    {
                    "zone_id": "3458",
                    "name": "Lira"
                    },
                    {
                    "zone_id": "3459",
                    "name": "Moroto"
                    },
                    {
                    "zone_id": "3460",
                    "name": "Moyo"
                    },
                    {
                    "zone_id": "3461",
                    "name": "Nakapiripirit"
                    },
                    {
                    "zone_id": "3462",
                    "name": "Nebbi"
                    },
                    {
                    "zone_id": "3463",
                    "name": "Pader"
                    },
                    {
                    "zone_id": "3464",
                    "name": "Yumbe"
                    },
                    {
                    "zone_id": "3465",
                    "name": "Bundibugyo"
                    },
                    {
                    "zone_id": "3466",
                    "name": "Bushenyi"
                    },
                    {
                    "zone_id": "3467",
                    "name": "Hoima"
                    },
                    {
                    "zone_id": "3468",
                    "name": "Kabale"
                    },
                    {
                    "zone_id": "3469",
                    "name": "Kabarole"
                    },
                    {
                    "zone_id": "3470",
                    "name": "Kamwenge"
                    },
                    {
                    "zone_id": "3471",
                    "name": "Kanungu"
                    },
                    {
                    "zone_id": "3472",
                    "name": "Kasese"
                    },
                    {
                    "zone_id": "3473",
                    "name": "Kibaale"
                    },
                    {
                    "zone_id": "3474",
                    "name": "Kisoro"
                    },
                    {
                    "zone_id": "3475",
                    "name": "Kyenjojo"
                    },
                    {
                    "zone_id": "3476",
                    "name": "Masindi"
                    },
                    {
                    "zone_id": "3477",
                    "name": "Mbarara"
                    },
                    {
                    "zone_id": "3478",
                    "name": "Ntungamo"
                    },
                    {
                    "zone_id": "3479",
                    "name": "Rukungiri"
                    }
                ]
            },
            {
                "_id": "UKR",
                "country_id": "220",
                "pais_name": "Ukraine",
                "phone_code": "380",
                "departamento": [
                    {
                    "zone_id": "3480",
                    "name": "Cherkasy"
                    },
                    {
                    "zone_id": "3481",
                    "name": "Chernihiv"
                    },
                    {
                    "zone_id": "3482",
                    "name": "Chernivtsi"
                    },
                    {
                    "zone_id": "3483",
                    "name": "Crimea"
                    },
                    {
                    "zone_id": "3484",
                    "name": "Dnipro"
                    },
                    {
                    "zone_id": "3485",
                    "name": "Donets'k"
                    },
                    {
                    "zone_id": "3486",
                    "name": "Ivano-Frankivs'k"
                    },
                    {
                    "zone_id": "3487",
                    "name": "Kharkiv"
                    },
                    {
                    "zone_id": "3488",
                    "name": "Khmel'nyts'kyy"
                    },
                    {
                    "zone_id": "3489",
                    "name": "Kirovohrad"
                    },
                    {
                    "zone_id": "3490",
                    "name": "Kyiv"
                    },
                    {
                    "zone_id": "3491",
                    "name": "Kherson"
                    },
                    {
                    "zone_id": "3492",
                    "name": "Luhans'k"
                    },
                    {
                    "zone_id": "3493",
                    "name": "L'viv"
                    },
                    {
                    "zone_id": "3494",
                    "name": "Mykolaiv"
                    },
                    {
                    "zone_id": "3495",
                    "name": "Odesa"
                    },
                    {
                    "zone_id": "3496",
                    "name": "Poltava"
                    },
                    {
                    "zone_id": "3497",
                    "name": "Rivne"
                    },
                    {
                    "zone_id": "3498",
                    "name": "Sevastopol"
                    },
                    {
                    "zone_id": "3499",
                    "name": "Sumy"
                    },
                    {
                    "zone_id": "3500",
                    "name": "Ternopil'"
                    },
                    {
                    "zone_id": "3501",
                    "name": "Vinnytsya"
                    },
                    {
                    "zone_id": "3502",
                    "name": "Volyn'"
                    },
                    {
                    "zone_id": "3503",
                    "name": "Zakarpattya"
                    },
                    {
                    "zone_id": "3504",
                    "name": "Zaporizhzhya"
                    },
                    {
                    "zone_id": "3505",
                    "name": "Zhytomyr"
                    }
                ]
            },
            {
                "_id": "ARE",
                "country_id": "221",
                "pais_name": "United Arab Emirates",
                "phone_code": "971",
                "departamento": [
                    {
                    "zone_id": "3506",
                    "name": "Abu Zaby"
                    },
                    {
                    "zone_id": "3507",
                    "name": "'Ajman"
                    },
                    {
                    "zone_id": "3508",
                    "name": "Al Fujayrah"
                    },
                    {
                    "zone_id": "3509",
                    "name": "Ash Shariqah"
                    },
                    {
                    "zone_id": "3510",
                    "name": "Dubayy"
                    },
                    {
                    "zone_id": "3511",
                    "name": "R'as al Khaymah"
                    },
                    {
                    "zone_id": "3512",
                    "name": "Umm al Qaywayn"
                    }
                ]
            },
            {
                "_id": "GBR",
                "country_id": "222",
                "pais_name": "United Kingdom",
                "phone_code": "44",
                "departamento": [
                    {
                    "zone_id": "3513",
                    "name": "Aberdeen"
                    },
                    {
                    "zone_id": "3514",
                    "name": "Aberdeenshire"
                    },
                    {
                    "zone_id": "3515",
                    "name": "Anglesey"
                    },
                    {
                    "zone_id": "3516",
                    "name": "Angus"
                    },
                    {
                    "zone_id": "3517",
                    "name": "Argyll and Bute"
                    },
                    {
                    "zone_id": "3518",
                    "name": "Bedfordshire"
                    },
                    {
                    "zone_id": "3519",
                    "name": "Berkshire"
                    },
                    {
                    "zone_id": "3520",
                    "name": "Blaenau Gwent"
                    },
                    {
                    "zone_id": "3521",
                    "name": "Bridgend"
                    },
                    {
                    "zone_id": "3522",
                    "name": "Bristol"
                    },
                    {
                    "zone_id": "3523",
                    "name": "Buckinghamshire"
                    },
                    {
                    "zone_id": "3524",
                    "name": "Caerphilly"
                    },
                    {
                    "zone_id": "3525",
                    "name": "Cambridgeshire"
                    },
                    {
                    "zone_id": "3526",
                    "name": "Cardiff"
                    },
                    {
                    "zone_id": "3527",
                    "name": "Carmarthenshire"
                    },
                    {
                    "zone_id": "3528",
                    "name": "Ceredigion"
                    },
                    {
                    "zone_id": "3529",
                    "name": "Cheshire"
                    },
                    {
                    "zone_id": "3530",
                    "name": "Clackmannanshire"
                    },
                    {
                    "zone_id": "3531",
                    "name": "Conwy"
                    },
                    {
                    "zone_id": "3532",
                    "name": "Cornwall"
                    },
                    {
                    "zone_id": "3533",
                    "name": "Denbighshire"
                    },
                    {
                    "zone_id": "3534",
                    "name": "Derbyshire"
                    },
                    {
                    "zone_id": "3535",
                    "name": "Devon"
                    },
                    {
                    "zone_id": "3536",
                    "name": "Dorset"
                    },
                    {
                    "zone_id": "3537",
                    "name": "Dumfries and Galloway"
                    },
                    {
                    "zone_id": "3538",
                    "name": "Dundee"
                    },
                    {
                    "zone_id": "3539",
                    "name": "Durham"
                    },
                    {
                    "zone_id": "3540",
                    "name": "East Ayrshire"
                    },
                    {
                    "zone_id": "3541",
                    "name": "East Dunbartonshire"
                    },
                    {
                    "zone_id": "3542",
                    "name": "East Lothian"
                    },
                    {
                    "zone_id": "3543",
                    "name": "East Renfrewshire"
                    },
                    {
                    "zone_id": "3544",
                    "name": "East Riding of Yorkshire"
                    },
                    {
                    "zone_id": "3545",
                    "name": "East Sussex"
                    },
                    {
                    "zone_id": "3546",
                    "name": "Edinburgh"
                    },
                    {
                    "zone_id": "3547",
                    "name": "Essex"
                    },
                    {
                    "zone_id": "3548",
                    "name": "Falkirk"
                    },
                    {
                    "zone_id": "3549",
                    "name": "Fife"
                    },
                    {
                    "zone_id": "3550",
                    "name": "Flintshire"
                    },
                    {
                    "zone_id": "3551",
                    "name": "Glasgow"
                    },
                    {
                    "zone_id": "3552",
                    "name": "Gloucestershire"
                    },
                    {
                    "zone_id": "3553",
                    "name": "Greater London"
                    },
                    {
                    "zone_id": "3554",
                    "name": "Greater Manchester"
                    },
                    {
                    "zone_id": "3555",
                    "name": "Gwynedd"
                    },
                    {
                    "zone_id": "3556",
                    "name": "Hampshire"
                    },
                    {
                    "zone_id": "3557",
                    "name": "Herefordshire"
                    },
                    {
                    "zone_id": "3558",
                    "name": "Hertfordshire"
                    },
                    {
                    "zone_id": "3559",
                    "name": "Highlands"
                    },
                    {
                    "zone_id": "3560",
                    "name": "Inverclyde"
                    },
                    {
                    "zone_id": "3561",
                    "name": "Isle of Wight"
                    },
                    {
                    "zone_id": "3562",
                    "name": "Kent"
                    },
                    {
                    "zone_id": "3563",
                    "name": "Lancashire"
                    },
                    {
                    "zone_id": "3564",
                    "name": "Leicestershire"
                    },
                    {
                    "zone_id": "3565",
                    "name": "Lincolnshire"
                    },
                    {
                    "zone_id": "3566",
                    "name": "Merseyside"
                    },
                    {
                    "zone_id": "3567",
                    "name": "Merthyr Tydfil"
                    },
                    {
                    "zone_id": "3568",
                    "name": "Midlothian"
                    },
                    {
                    "zone_id": "3569",
                    "name": "Monmouthshire"
                    },
                    {
                    "zone_id": "3570",
                    "name": "Moray"
                    },
                    {
                    "zone_id": "3571",
                    "name": "Neath Port Talbot"
                    },
                    {
                    "zone_id": "3572",
                    "name": "Newport"
                    },
                    {
                    "zone_id": "3573",
                    "name": "Norfolk"
                    },
                    {
                    "zone_id": "3574",
                    "name": "North Ayrshire"
                    },
                    {
                    "zone_id": "3575",
                    "name": "North Lanarkshire"
                    },
                    {
                    "zone_id": "3576",
                    "name": "North Yorkshire"
                    },
                    {
                    "zone_id": "3577",
                    "name": "Northamptonshire"
                    },
                    {
                    "zone_id": "3578",
                    "name": "Northumberland"
                    },
                    {
                    "zone_id": "3579",
                    "name": "Nottinghamshire"
                    },
                    {
                    "zone_id": "3580",
                    "name": "Orkney Islands"
                    },
                    {
                    "zone_id": "3581",
                    "name": "Oxfordshire"
                    },
                    {
                    "zone_id": "3582",
                    "name": "Pembrokeshire"
                    },
                    {
                    "zone_id": "3583",
                    "name": "Perth and Kinross"
                    },
                    {
                    "zone_id": "3584",
                    "name": "Powys"
                    },
                    {
                    "zone_id": "3585",
                    "name": "Renfrewshire"
                    },
                    {
                    "zone_id": "3586",
                    "name": "Rhondda Cynon Taff"
                    },
                    {
                    "zone_id": "3587",
                    "name": "Rutland"
                    },
                    {
                    "zone_id": "3588",
                    "name": "Scottish Borders"
                    },
                    {
                    "zone_id": "3589",
                    "name": "Shetland Islands"
                    },
                    {
                    "zone_id": "3590",
                    "name": "Shropshire"
                    },
                    {
                    "zone_id": "3591",
                    "name": "Somerset"
                    },
                    {
                    "zone_id": "3592",
                    "name": "South Ayrshire"
                    },
                    {
                    "zone_id": "3593",
                    "name": "South Lanarkshire"
                    },
                    {
                    "zone_id": "3594",
                    "name": "South Yorkshire"
                    },
                    {
                    "zone_id": "3595",
                    "name": "Staffordshire"
                    },
                    {
                    "zone_id": "3596",
                    "name": "Stirling"
                    },
                    {
                    "zone_id": "3597",
                    "name": "Suffolk"
                    },
                    {
                    "zone_id": "3598",
                    "name": "Surrey"
                    },
                    {
                    "zone_id": "3599",
                    "name": "Swansea"
                    },
                    {
                    "zone_id": "3600",
                    "name": "Torfaen"
                    },
                    {
                    "zone_id": "3601",
                    "name": "Tyne and Wear"
                    },
                    {
                    "zone_id": "3602",
                    "name": "Vale of Glamorgan"
                    },
                    {
                    "zone_id": "3603",
                    "name": "Warwickshire"
                    },
                    {
                    "zone_id": "3604",
                    "name": "West Dunbartonshire"
                    },
                    {
                    "zone_id": "3605",
                    "name": "West Lothian"
                    },
                    {
                    "zone_id": "3606",
                    "name": "West Midlands"
                    },
                    {
                    "zone_id": "3607",
                    "name": "West Sussex"
                    },
                    {
                    "zone_id": "3608",
                    "name": "West Yorkshire"
                    },
                    {
                    "zone_id": "3609",
                    "name": "Western Isles"
                    },
                    {
                    "zone_id": "3610",
                    "name": "Wiltshire"
                    },
                    {
                    "zone_id": "3611",
                    "name": "Worcestershire"
                    },
                    {
                    "zone_id": "3612",
                    "name": "Wrexham"
                    }
                ]
            },
            {
                "_id": "USA",
                "country_id": "223",
                "pais_name": "United States",
                "phone_code": "1",
                "departamento": [
                    {
                    "zone_id": "3613",
                    "name": "Alabama"
                    },
                    {
                    "zone_id": "3614",
                    "name": "Alaska"
                    },
                    {
                    "zone_id": "3615",
                    "name": "American Samoa"
                    },
                    {
                    "zone_id": "3616",
                    "name": "Arizona"
                    },
                    {
                    "zone_id": "3617",
                    "name": "Arkansas"
                    },
                    {
                    "zone_id": "3618",
                    "name": "Armed Forces Africa"
                    },
                    {
                    "zone_id": "3619",
                    "name": "Armed Forces Americas"
                    },
                    {
                    "zone_id": "3620",
                    "name": "Armed Forces Canada"
                    },
                    {
                    "zone_id": "3621",
                    "name": "Armed Forces Europe"
                    },
                    {
                    "zone_id": "3622",
                    "name": "Armed Forces Middle East"
                    },
                    {
                    "zone_id": "3623",
                    "name": "Armed Forces Pacific"
                    },
                    {
                    "zone_id": "3624",
                    "name": "California"
                    },
                    {
                    "zone_id": "3625",
                    "name": "Colorado"
                    },
                    {
                    "zone_id": "3626",
                    "name": "Connecticut"
                    },
                    {
                    "zone_id": "3627",
                    "name": "Delaware"
                    },
                    {
                    "zone_id": "3628",
                    "name": "District of Columbia"
                    },
                    {
                    "zone_id": "3629",
                    "name": "Federated States Of Micronesia"
                    },
                    {
                    "zone_id": "3630",
                    "name": "Florida"
                    },
                    {
                    "zone_id": "3631",
                    "name": "Georgia"
                    },
                    {
                    "zone_id": "3632",
                    "name": "Guam"
                    },
                    {
                    "zone_id": "3633",
                    "name": "Hawaii"
                    },
                    {
                    "zone_id": "3634",
                    "name": "Idaho"
                    },
                    {
                    "zone_id": "3635",
                    "name": "Illinois"
                    },
                    {
                    "zone_id": "3636",
                    "name": "Indiana"
                    },
                    {
                    "zone_id": "3637",
                    "name": "Iowa"
                    },
                    {
                    "zone_id": "3638",
                    "name": "Kansas"
                    },
                    {
                    "zone_id": "3639",
                    "name": "Kentucky"
                    },
                    {
                    "zone_id": "3640",
                    "name": "Louisiana"
                    },
                    {
                    "zone_id": "3641",
                    "name": "Maine"
                    },
                    {
                    "zone_id": "3642",
                    "name": "Marshall Islands"
                    },
                    {
                    "zone_id": "3643",
                    "name": "Maryland"
                    },
                    {
                    "zone_id": "3644",
                    "name": "Massachusetts"
                    },
                    {
                    "zone_id": "3645",
                    "name": "Michigan"
                    },
                    {
                    "zone_id": "3646",
                    "name": "Minnesota"
                    },
                    {
                    "zone_id": "3647",
                    "name": "Mississippi"
                    },
                    {
                    "zone_id": "3648",
                    "name": "Missouri"
                    },
                    {
                    "zone_id": "3649",
                    "name": "Montana"
                    },
                    {
                    "zone_id": "3650",
                    "name": "Nebraska"
                    },
                    {
                    "zone_id": "3651",
                    "name": "Nevada"
                    },
                    {
                    "zone_id": "3652",
                    "name": "New Hampshire"
                    },
                    {
                    "zone_id": "3653",
                    "name": "New Jersey"
                    },
                    {
                    "zone_id": "3654",
                    "name": "New Mexico"
                    },
                    {
                    "zone_id": "3655",
                    "name": "New York"
                    },
                    {
                    "zone_id": "3656",
                    "name": "North Carolina"
                    },
                    {
                    "zone_id": "3657",
                    "name": "North Dakota"
                    },
                    {
                    "zone_id": "3658",
                    "name": "Northern Mariana Islands"
                    },
                    {
                    "zone_id": "3659",
                    "name": "Ohio"
                    },
                    {
                    "zone_id": "3660",
                    "name": "Oklahoma"
                    },
                    {
                    "zone_id": "3661",
                    "name": "Oregon"
                    },
                    {
                    "zone_id": "3662",
                    "name": "Palau"
                    },
                    {
                    "zone_id": "3663",
                    "name": "Pennsylvania"
                    },
                    {
                    "zone_id": "3664",
                    "name": "Puerto Rico"
                    },
                    {
                    "zone_id": "3665",
                    "name": "Rhode Island"
                    },
                    {
                    "zone_id": "3666",
                    "name": "South Carolina"
                    },
                    {
                    "zone_id": "3667",
                    "name": "South Dakota"
                    },
                    {
                    "zone_id": "3668",
                    "name": "Tennessee"
                    },
                    {
                    "zone_id": "3669",
                    "name": "Texas"
                    },
                    {
                    "zone_id": "3670",
                    "name": "Utah"
                    },
                    {
                    "zone_id": "3671",
                    "name": "Vermont"
                    },
                    {
                    "zone_id": "3672",
                    "name": "Virgin Islands"
                    },
                    {
                    "zone_id": "3673",
                    "name": "Virginia"
                    },
                    {
                    "zone_id": "3674",
                    "name": "Washington"
                    },
                    {
                    "zone_id": "3675",
                    "name": "West Virginia"
                    },
                    {
                    "zone_id": "3676",
                    "name": "Wisconsin"
                    },
                    {
                    "zone_id": "3677",
                    "name": "Wyoming"
                    }
                ]
            },
            {
                "_id": "UMI",
                "country_id": "224",
                "pais_name": "United States Minor Outlying Islands",
                "phone_code": "699",
                "departamento": [
                    {
                    "zone_id": "3678",
                    "name": "Baker Island"
                    },
                    {
                    "zone_id": "3679",
                    "name": "Howland Island"
                    },
                    {
                    "zone_id": "3680",
                    "name": "Jarvis Island"
                    },
                    {
                    "zone_id": "3681",
                    "name": "Johnston Atoll"
                    },
                    {
                    "zone_id": "3682",
                    "name": "Kingman Reef"
                    },
                    {
                    "zone_id": "3683",
                    "name": "Midway Atoll"
                    },
                    {
                    "zone_id": "3684",
                    "name": "Navassa Island"
                    },
                    {
                    "zone_id": "3685",
                    "name": "Palmyra Atoll"
                    },
                    {
                    "zone_id": "3686",
                    "name": "Wake Island"
                    }
                ]
            },
            {
                "_id": "URY",
                "country_id": "225",
                "pais_name": "Uruguay",
                "phone_code": "598",
                "departamento": [
                    {
                    "zone_id": "3687",
                    "name": "Artigas"
                    },
                    {
                    "zone_id": "3688",
                    "name": "Canelones"
                    },
                    {
                    "zone_id": "3689",
                    "name": "Cerro Largo"
                    },
                    {
                    "zone_id": "3690",
                    "name": "Colonia"
                    },
                    {
                    "zone_id": "3691",
                    "name": "Durazno"
                    },
                    {
                    "zone_id": "3692",
                    "name": "Flores"
                    },
                    {
                    "zone_id": "3693",
                    "name": "Florida"
                    },
                    {
                    "zone_id": "3694",
                    "name": "Lavalleja"
                    },
                    {
                    "zone_id": "3695",
                    "name": "Maldonado"
                    },
                    {
                    "zone_id": "3696",
                    "name": "Montevideo"
                    },
                    {
                    "zone_id": "3697",
                    "name": "Paysandu"
                    },
                    {
                    "zone_id": "3698",
                    "name": "Rio Negro"
                    },
                    {
                    "zone_id": "3699",
                    "name": "Rivera"
                    },
                    {
                    "zone_id": "3700",
                    "name": "Rocha"
                    },
                    {
                    "zone_id": "3701",
                    "name": "Salto"
                    },
                    {
                    "zone_id": "3702",
                    "name": "San Jose"
                    },
                    {
                    "zone_id": "3703",
                    "name": "Soriano"
                    },
                    {
                    "zone_id": "3704",
                    "name": "Tacuarembo"
                    },
                    {
                    "zone_id": "3705",
                    "name": "Treinta y Tres"
                    }
                ]
            },
            {
                "_id": "UZB",
                "country_id": "226",
                "pais_name": "Uzbekistan",
                "phone_code": "998",
                "departamento": [
                    {
                    "zone_id": "3706",
                    "name": "Andijon"
                    },
                    {
                    "zone_id": "3707",
                    "name": "Buxoro"
                    },
                    {
                    "zone_id": "3708",
                    "name": "Farg'ona"
                    },
                    {
                    "zone_id": "3709",
                    "name": "Jizzax"
                    },
                    {
                    "zone_id": "3710",
                    "name": "Namangan"
                    },
                    {
                    "zone_id": "3711",
                    "name": "Navoiy"
                    },
                    {
                    "zone_id": "3712",
                    "name": "Qashqadaryo"
                    },
                    {
                    "zone_id": "3713",
                    "name": "Qoraqalpog'iston Republikasi"
                    },
                    {
                    "zone_id": "3714",
                    "name": "Samarqand"
                    },
                    {
                    "zone_id": "3715",
                    "name": "Sirdaryo"
                    },
                    {
                    "zone_id": "3716",
                    "name": "Surxondaryo"
                    },
                    {
                    "zone_id": "3717",
                    "name": "Toshkent City"
                    },
                    {
                    "zone_id": "3718",
                    "name": "Toshkent Region"
                    },
                    {
                    "zone_id": "3719",
                    "name": "Xorazm"
                    }
                ]
            },
            {
                "_id": "VUT",
                "country_id": "227",
                "pais_name": "Vanuatu",
                "phone_code": "678",
                "departamento": [
                    {
                    "zone_id": "3720",
                    "name": "Malampa"
                    },
                    {
                    "zone_id": "3721",
                    "name": "Penama"
                    },
                    {
                    "zone_id": "3722",
                    "name": "Sanma"
                    },
                    {
                    "zone_id": "3723",
                    "name": "Shefa"
                    },
                    {
                    "zone_id": "3724",
                    "name": "Tafea"
                    },
                    {
                    "zone_id": "3725",
                    "name": "Torba"
                    }
                ]
            },
            {
                "_id": "VEN",
                "country_id": "229",
                "pais_name": "Venezuela",
                "phone_code": "58",
                "departamento": [
                    {
                    "zone_id": "3726",
                    "name": "Amazonas"
                    },
                    {
                    "zone_id": "3727",
                    "name": "Anzoategui"
                    },
                    {
                    "zone_id": "3728",
                    "name": "Apure"
                    },
                    {
                    "zone_id": "3729",
                    "name": "Aragua"
                    },
                    {
                    "zone_id": "3730",
                    "name": "Barinas"
                    },
                    {
                    "zone_id": "3731",
                    "name": "Bolivar"
                    },
                    {
                    "zone_id": "3732",
                    "name": "Carabobo"
                    },
                    {
                    "zone_id": "3733",
                    "name": "Cojedes"
                    },
                    {
                    "zone_id": "3734",
                    "name": "Delta Amacuro"
                    },
                    {
                    "zone_id": "3735",
                    "name": "Dependencias Federales"
                    },
                    {
                    "zone_id": "3736",
                    "name": "Distrito Federal"
                    },
                    {
                    "zone_id": "3737",
                    "name": "Falcon"
                    },
                    {
                    "zone_id": "3738",
                    "name": "Guarico"
                    },
                    {
                    "zone_id": "3739",
                    "name": "Lara"
                    },
                    {
                    "zone_id": "3740",
                    "name": "Merida"
                    },
                    {
                    "zone_id": "3741",
                    "name": "Miranda"
                    },
                    {
                    "zone_id": "3742",
                    "name": "Monagas"
                    },
                    {
                    "zone_id": "3743",
                    "name": "Nueva Esparta"
                    },
                    {
                    "zone_id": "3744",
                    "name": "Portuguesa"
                    },
                    {
                    "zone_id": "3745",
                    "name": "Sucre"
                    },
                    {
                    "zone_id": "3746",
                    "name": "Tachira"
                    },
                    {
                    "zone_id": "3747",
                    "name": "Trujillo"
                    },
                    {
                    "zone_id": "3748",
                    "name": "Vargas"
                    },
                    {
                    "zone_id": "3749",
                    "name": "Yaracuy"
                    },
                    {
                    "zone_id": "3750",
                    "name": "Zulia"
                    }
                ]
            },
            {
                "_id": "VNM",
                "country_id": "230",
                "pais_name": "Viet Nam",
                "phone_code": "84",
                "departamento": [
                    {
                    "zone_id": "3751",
                    "name": "An Giang"
                    },
                    {
                    "zone_id": "3752",
                    "name": "Bac Giang"
                    },
                    {
                    "zone_id": "3753",
                    "name": "Bac Kan"
                    },
                    {
                    "zone_id": "3754",
                    "name": "Bac Lieu"
                    },
                    {
                    "zone_id": "3755",
                    "name": "Bac Ninh"
                    },
                    {
                    "zone_id": "3756",
                    "name": "Ba Ria-Vung Tau"
                    },
                    {
                    "zone_id": "3757",
                    "name": "Ben Tre"
                    },
                    {
                    "zone_id": "3758",
                    "name": "Binh Dinh"
                    },
                    {
                    "zone_id": "3759",
                    "name": "Binh Duong"
                    },
                    {
                    "zone_id": "3760",
                    "name": "Binh Phuoc"
                    },
                    {
                    "zone_id": "3761",
                    "name": "Binh Thuan"
                    },
                    {
                    "zone_id": "3762",
                    "name": "Ca Mau"
                    },
                    {
                    "zone_id": "3763",
                    "name": "Can Tho"
                    },
                    {
                    "zone_id": "3764",
                    "name": "Cao Bang"
                    },
                    {
                    "zone_id": "3765",
                    "name": "Dak Lak"
                    },
                    {
                    "zone_id": "3766",
                    "name": "Dak Nong"
                    },
                    {
                    "zone_id": "3767",
                    "name": "Da Nang"
                    },
                    {
                    "zone_id": "3768",
                    "name": "Dien Bien"
                    },
                    {
                    "zone_id": "3769",
                    "name": "Dong Nai"
                    },
                    {
                    "zone_id": "3770",
                    "name": "Dong Thap"
                    },
                    {
                    "zone_id": "3771",
                    "name": "Gia Lai"
                    },
                    {
                    "zone_id": "3772",
                    "name": "Ha Giang"
                    },
                    {
                    "zone_id": "3773",
                    "name": "Hai Duong"
                    },
                    {
                    "zone_id": "3774",
                    "name": "Hai Phong"
                    },
                    {
                    "zone_id": "3775",
                    "name": "Ha Nam"
                    },
                    {
                    "zone_id": "3776",
                    "name": "Ha Noi"
                    },
                    {
                    "zone_id": "3777",
                    "name": "Ha Tay"
                    },
                    {
                    "zone_id": "3778",
                    "name": "Ha Tinh"
                    },
                    {
                    "zone_id": "3779",
                    "name": "Hoa Binh"
                    },
                    {
                    "zone_id": "3780",
                    "name": "Ho Chi Minh City"
                    },
                    {
                    "zone_id": "3781",
                    "name": "Hau Giang"
                    },
                    {
                    "zone_id": "3782",
                    "name": "Hung Yen"
                    }
                ]
            },
            {
                "_id": "VIR",
                "country_id": "232",
                "pais_name": "Virgin Islands (U.S.)",
                "phone_code": "1340",
                "departamento": [
                    {
                    "zone_id": "3783",
                    "name": "Saint Croix"
                    },
                    {
                    "zone_id": "3784",
                    "name": "Saint John"
                    },
                    {
                    "zone_id": "3785",
                    "name": "Saint Thomas"
                    }
                ]
            },
            {
                "_id": "WLF",
                "country_id": "233",
                "pais_name": "Wallis and Futuna Islands",
                "phone_code": "681",
                "departamento": [
                    {
                    "zone_id": "3786",
                    "name": "Alo"
                    },
                    {
                    "zone_id": "3787",
                    "name": "Sigave"
                    },
                    {
                    "zone_id": "3788",
                    "name": "Wallis"
                    }
                ]
            },
            {
                "_id": "YEM",
                "country_id": "235",
                "pais_name": "Yemen",
                "phone_code": "967",
                "departamento": [
                    {
                    "zone_id": "3789",
                    "name": "Abyan"
                    },
                    {
                    "zone_id": "3790",
                    "name": "Adan"
                    },
                    {
                    "zone_id": "3791",
                    "name": "Amran"
                    },
                    {
                    "zone_id": "3792",
                    "name": "Al Bayda"
                    },
                    {
                    "zone_id": "3793",
                    "name": "Ad Dali"
                    },
                    {
                    "zone_id": "3794",
                    "name": "Dhamar"
                    },
                    {
                    "zone_id": "3795",
                    "name": "Hadramawt"
                    },
                    {
                    "zone_id": "3796",
                    "name": "Hajjah"
                    },
                    {
                    "zone_id": "3797",
                    "name": "Al Hudaydah"
                    },
                    {
                    "zone_id": "3798",
                    "name": "Ibb"
                    },
                    {
                    "zone_id": "3799",
                    "name": "Al Jawf"
                    },
                    {
                    "zone_id": "3800",
                    "name": "Lahij"
                    },
                    {
                    "zone_id": "3801",
                    "name": "Ma'rib"
                    },
                    {
                    "zone_id": "3802",
                    "name": "Al Mahrah"
                    },
                    {
                    "zone_id": "3803",
                    "name": "Al Mahwit"
                    },
                    {
                    "zone_id": "3804",
                    "name": "Sa'dah"
                    },
                    {
                    "zone_id": "3805",
                    "name": "San'a"
                    },
                    {
                    "zone_id": "3806",
                    "name": "Shabwah"
                    },
                    {
                    "zone_id": "3807",
                    "name": "Ta'izz"
                    }
                ]
            },
            {
                "_id": "YUG",
                "country_id": "236",
                "pais_name": "Yugoslavia",
                "phone_code": "381",
                "departamento": [
                    {
                    "zone_id": "3808",
                    "name": "Kosovo"
                    },
                    {
                    "zone_id": "3809",
                    "name": "Montenegro"
                    },
                    {
                    "zone_id": "3810",
                    "name": "Serbia"
                    },
                    {
                    "zone_id": "3811",
                    "name": "Vojvodina"
                    }
                ]
            },
            {
                "_id": "ZAR",
                "country_id": "237",
                "pais_name": "Zaire",
                "phone_code": "243",
                "departamento": [
                    {
                    "zone_id": "3812",
                    "name": "Bas-Congo"
                    },
                    {
                    "zone_id": "3813",
                    "name": "Bandundu"
                    },
                    {
                    "zone_id": "3814",
                    "name": "Equateur"
                    },
                    {
                    "zone_id": "3815",
                    "name": "Katanga"
                    },
                    {
                    "zone_id": "3816",
                    "name": "Kasai-Oriental"
                    },
                    {
                    "zone_id": "3817",
                    "name": "Kinshasa"
                    },
                    {
                    "zone_id": "3818",
                    "name": "Kasai-Occidental"
                    },
                    {
                    "zone_id": "3819",
                    "name": "Maniema"
                    },
                    {
                    "zone_id": "3820",
                    "name": "Nord-Kivu"
                    },
                    {
                    "zone_id": "3821",
                    "name": "Orientale"
                    },
                    {
                    "zone_id": "3822",
                    "name": "Sud-Kivu"
                    }
                ]
            },
            {
                "_id": "ZMB",
                "country_id": "238",
                "pais_name": "Zambia",
                "phone_code": "260",
                "departamento": [
                    {
                    "zone_id": "3823",
                    "name": "Central"
                    },
                    {
                    "zone_id": "3824",
                    "name": "Copperbelt"
                    },
                    {
                    "zone_id": "3825",
                    "name": "Eastern"
                    },
                    {
                    "zone_id": "3826",
                    "name": "Luapula"
                    },
                    {
                    "zone_id": "3827",
                    "name": "Lusaka"
                    },
                    {
                    "zone_id": "3828",
                    "name": "Northern"
                    },
                    {
                    "zone_id": "3829",
                    "name": "North-Western"
                    },
                    {
                    "zone_id": "3830",
                    "name": "Southern"
                    },
                    {
                    "zone_id": "3831",
                    "name": "Western"
                    }
                ]
            },
            {
                "_id": "ZWE",
                "country_id": "239",
                "pais_name": "Zimbabwe",
                "phone_code": "263",
                "departamento": [
                    {
                    "zone_id": "3832",
                    "name": "Bulawayo"
                    },
                    {
                    "zone_id": "3833",
                    "name": "Harare"
                    },
                    {
                    "zone_id": "3834",
                    "name": "Manicaland"
                    },
                    {
                    "zone_id": "3835",
                    "name": "Mashonaland Central"
                    },
                    {
                    "zone_id": "3836",
                    "name": "Mashonaland East"
                    },
                    {
                    "zone_id": "3837",
                    "name": "Mashonaland West"
                    },
                    {
                    "zone_id": "3838",
                    "name": "Masvingo"
                    },
                    {
                    "zone_id": "3839",
                    "name": "Matabeleland North"
                    },
                    {
                    "zone_id": "3840",
                    "name": "Matabeleland South"
                    },
                    {
                    "zone_id": "3841",
                    "name": "Midlands"
                    }
                ]
            },
            {
                "_id": "ITA",
                "country_id": "105",
                "pais_name": "Italy",
                "phone_code": "39",
                "departamento": [
                    {
                    "zone_id": "3842",
                    "name": "Agrigento"
                    },
                    {
                    "zone_id": "3843",
                    "name": "Alessandria"
                    },
                    {
                    "zone_id": "3844",
                    "name": "Ancona"
                    },
                    {
                    "zone_id": "3845",
                    "name": "Aosta"
                    },
                    {
                    "zone_id": "3846",
                    "name": "Arezzo"
                    },
                    {
                    "zone_id": "3847",
                    "name": "Ascoli Piceno"
                    },
                    {
                    "zone_id": "3848",
                    "name": "Asti"
                    },
                    {
                    "zone_id": "3849",
                    "name": "Avellino"
                    },
                    {
                    "zone_id": "3850",
                    "name": "Bari"
                    },
                    {
                    "zone_id": "3851",
                    "name": "Belluno"
                    },
                    {
                    "zone_id": "3852",
                    "name": "Benevento"
                    },
                    {
                    "zone_id": "3853",
                    "name": "Bergamo"
                    },
                    {
                    "zone_id": "3854",
                    "name": "Biella"
                    },
                    {
                    "zone_id": "3855",
                    "name": "Bologna"
                    },
                    {
                    "zone_id": "3856",
                    "name": "Bolzano"
                    },
                    {
                    "zone_id": "3857",
                    "name": "Brescia"
                    },
                    {
                    "zone_id": "3858",
                    "name": "Brindisi"
                    },
                    {
                    "zone_id": "3859",
                    "name": "Cagliari"
                    },
                    {
                    "zone_id": "3860",
                    "name": "Caltanissetta"
                    },
                    {
                    "zone_id": "3861",
                    "name": "Campobasso"
                    },
                    {
                    "zone_id": "3862",
                    "name": "Carbonia-Iglesias"
                    },
                    {
                    "zone_id": "3863",
                    "name": "Caserta"
                    },
                    {
                    "zone_id": "3864",
                    "name": "Catania"
                    },
                    {
                    "zone_id": "3865",
                    "name": "Catanzaro"
                    },
                    {
                    "zone_id": "3866",
                    "name": "Chieti"
                    },
                    {
                    "zone_id": "3867",
                    "name": "Como"
                    },
                    {
                    "zone_id": "3868",
                    "name": "Cosenza"
                    },
                    {
                    "zone_id": "3869",
                    "name": "Cremona"
                    },
                    {
                    "zone_id": "3870",
                    "name": "Crotone"
                    },
                    {
                    "zone_id": "3871",
                    "name": "Cuneo"
                    },
                    {
                    "zone_id": "3872",
                    "name": "Enna"
                    },
                    {
                    "zone_id": "3873",
                    "name": "Ferrara"
                    },
                    {
                    "zone_id": "3874",
                    "name": "Firenze"
                    },
                    {
                    "zone_id": "3875",
                    "name": "Foggia"
                    },
                    {
                    "zone_id": "3876",
                    "name": "Forli-Cesena"
                    },
                    {
                    "zone_id": "3877",
                    "name": "Frosinone"
                    },
                    {
                    "zone_id": "3878",
                    "name": "Genova"
                    },
                    {
                    "zone_id": "3879",
                    "name": "Gorizia"
                    },
                    {
                    "zone_id": "3880",
                    "name": "Grosseto"
                    },
                    {
                    "zone_id": "3881",
                    "name": "Imperia"
                    },
                    {
                    "zone_id": "3882",
                    "name": "Isernia"
                    },
                    {
                    "zone_id": "3883",
                    "name": "L&#39;Aquila"
                    },
                    {
                    "zone_id": "3884",
                    "name": "La Spezia"
                    },
                    {
                    "zone_id": "3885",
                    "name": "Latina"
                    },
                    {
                    "zone_id": "3886",
                    "name": "Lecce"
                    },
                    {
                    "zone_id": "3887",
                    "name": "Lecco"
                    },
                    {
                    "zone_id": "3888",
                    "name": "Livorno"
                    },
                    {
                    "zone_id": "3889",
                    "name": "Lodi"
                    },
                    {
                    "zone_id": "3890",
                    "name": "Lucca"
                    },
                    {
                    "zone_id": "3891",
                    "name": "Macerata"
                    },
                    {
                    "zone_id": "3892",
                    "name": "Mantova"
                    },
                    {
                    "zone_id": "3893",
                    "name": "Massa-Carrara"
                    },
                    {
                    "zone_id": "3894",
                    "name": "Matera"
                    },
                    {
                    "zone_id": "3895",
                    "name": "Medio Campidano"
                    },
                    {
                    "zone_id": "3896",
                    "name": "Messina"
                    },
                    {
                    "zone_id": "3897",
                    "name": "Milano"
                    },
                    {
                    "zone_id": "3898",
                    "name": "Modena"
                    },
                    {
                    "zone_id": "3899",
                    "name": "Napoli"
                    },
                    {
                    "zone_id": "3900",
                    "name": "Novara"
                    },
                    {
                    "zone_id": "3901",
                    "name": "Nuoro"
                    },
                    {
                    "zone_id": "3902",
                    "name": "Ogliastra"
                    },
                    {
                    "zone_id": "3903",
                    "name": "Olbia-Tempio"
                    },
                    {
                    "zone_id": "3904",
                    "name": "Oristano"
                    },
                    {
                    "zone_id": "3905",
                    "name": "Padova"
                    },
                    {
                    "zone_id": "3906",
                    "name": "Palermo"
                    },
                    {
                    "zone_id": "3907",
                    "name": "Parma"
                    },
                    {
                    "zone_id": "3908",
                    "name": "Pavia"
                    },
                    {
                    "zone_id": "3909",
                    "name": "Perugia"
                    },
                    {
                    "zone_id": "3910",
                    "name": "Pesaro e Urbino"
                    },
                    {
                    "zone_id": "3911",
                    "name": "Pescara"
                    },
                    {
                    "zone_id": "3912",
                    "name": "Piacenza"
                    },
                    {
                    "zone_id": "3913",
                    "name": "Pisa"
                    },
                    {
                    "zone_id": "3914",
                    "name": "Pistoia"
                    },
                    {
                    "zone_id": "3915",
                    "name": "Pordenone"
                    },
                    {
                    "zone_id": "3916",
                    "name": "Potenza"
                    },
                    {
                    "zone_id": "3917",
                    "name": "Prato"
                    },
                    {
                    "zone_id": "3918",
                    "name": "Ragusa"
                    },
                    {
                    "zone_id": "3919",
                    "name": "Ravenna"
                    },
                    {
                    "zone_id": "3920",
                    "name": "Reggio Calabria"
                    },
                    {
                    "zone_id": "3921",
                    "name": "Reggio Emilia"
                    },
                    {
                    "zone_id": "3922",
                    "name": "Rieti"
                    },
                    {
                    "zone_id": "3923",
                    "name": "Rimini"
                    },
                    {
                    "zone_id": "3924",
                    "name": "Roma"
                    },
                    {
                    "zone_id": "3925",
                    "name": "Rovigo"
                    },
                    {
                    "zone_id": "3926",
                    "name": "Salerno"
                    },
                    {
                    "zone_id": "3927",
                    "name": "Sassari"
                    },
                    {
                    "zone_id": "3928",
                    "name": "Savona"
                    },
                    {
                    "zone_id": "3929",
                    "name": "Siena"
                    },
                    {
                    "zone_id": "3930",
                    "name": "Siracusa"
                    },
                    {
                    "zone_id": "3931",
                    "name": "Sondrio"
                    },
                    {
                    "zone_id": "3932",
                    "name": "Taranto"
                    },
                    {
                    "zone_id": "3933",
                    "name": "Teramo"
                    },
                    {
                    "zone_id": "3934",
                    "name": "Terni"
                    },
                    {
                    "zone_id": "3935",
                    "name": "Torino"
                    },
                    {
                    "zone_id": "3936",
                    "name": "Trapani"
                    },
                    {
                    "zone_id": "3937",
                    "name": "Trento"
                    },
                    {
                    "zone_id": "3938",
                    "name": "Treviso"
                    },
                    {
                    "zone_id": "3939",
                    "name": "Trieste"
                    },
                    {
                    "zone_id": "3940",
                    "name": "Udine"
                    },
                    {
                    "zone_id": "3941",
                    "name": "Varese"
                    },
                    {
                    "zone_id": "3942",
                    "name": "Venezia"
                    },
                    {
                    "zone_id": "3943",
                    "name": "Verbano-Cusio-Ossola"
                    },
                    {
                    "zone_id": "3944",
                    "name": "Vercelli"
                    },
                    {
                    "zone_id": "3945",
                    "name": "Verona"
                    },
                    {
                    "zone_id": "3946",
                    "name": "Vibo Valentia"
                    },
                    {
                    "zone_id": "3947",
                    "name": "Vicenza"
                    },
                    {
                    "zone_id": "3948",
                    "name": "Viterbo"
                    }
                ]
            },
            {
                "_id": "NIR",
                "country_id": "240",
                "pais_name": "Northern Ireland",
                "phone_code": "44",
                "departamento": [
                    {
                    "zone_id": "3949",
                    "name": "Antrim"
                    },
                    {
                    "zone_id": "3950",
                    "name": "Armagh"
                    },
                    {
                    "zone_id": "3951",
                    "name": "Down"
                    },
                    {
                    "zone_id": "3952",
                    "name": "Fermanagh"
                    },
                    {
                    "zone_id": "3953",
                    "name": "Derry"
                    },
                    {
                    "zone_id": "3954",
                    "name": "Tyrone"
                    }
                ]
            },
            {
                "_id": "LBN",
                "country_id": "241",
                "pais_name": "Lebanon",
                "phone_code": "961",
                "departamento": [
                    {
                        "name": "Aakkar",
                        "zone_id": "3955"
                    },
                    {
                        "name": "Baalbek-Hermel",
                        "zone_id": "3956"
                    },
                    {
                        "name": "Beqaa",
                        "zone_id": "3957"
                    },
                    {
                        "name": "Beyrouth",
                        "zone_id": "3958"
                    },
                    {
                        "name": "Liban-Nord",
                        "zone_id": "3959"
                    },
                    {
                        "name": "Liban-Sud",
                        "zone_id": "3960"
                    },
                    {
                        "name": "Mont-Liban",
                        "zone_id": "3961"
                    },
                    {
                        "name": "Nabatiye",
                        "zone_id": "3962"
                    }
                ]
            }
        ];
        
        for (var i = 0; i < objCode.length; i++) {
            if (objCode[i].pais_name.toLowerCase() === country.toLowerCase()) {
                return objCode[i].phone_code;
            }
        }
    },
    updateAccountsCliente(id) {
        if (id != "" || id != null || id != undefined) {
            var _keys = [];
            var _values = [];
            var accounts = {};
            api.get("planes/").then(res => {
                _keys = Object.keys(res);
                _values = Object.values(res);

                for (var i = 0; i < _values.length; i++) {
                    accounts[`${_values[i].nombre}`] = {
                        categorias: _values[i].categorias,
                        establecimientos: _values[i].establecimientos,
                        id_plan: _keys[i],
                        is_base: true,
                        type: _values[i].type,
                        name: _values[i].nombre,
                        value: 0
                    }
                }

                accounts['propio'] = {
                    type: 3,
                    name: 'propio',
                    value: 0
                }
                
                api.put('accounts/update/cliente/', {id: id, data: accounts});
            });
        }
    },
    getKilometros(_latOrigin, _lngOrigin, _latDestination, _lngDestination){
        var rad = function(x) {
            return x * Math.PI / 180;
        }

        // -> Radio de la tierra en km.
        var R = 6378.137;

        // -> Restamos la latitud del sitio con el origen.
        var dLat = rad(_latDestination - _latOrigin);
        // -> Restamos las longitud del sitio con el origen.
        var dLong = rad(_lngDestination - _lngOrigin);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(_latOrigin)) * Math.cos(rad(_latDestination)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;

        // -> Retornamo la cantidad en Km con tres decimales.
        return d.toFixed(3);
    },
    numberFormat(_number) {
        var result = "";
        var _newNumber;

        if (_number[0] === "-") {
            _newNumber = _number.replace(/\./g,"").substring(1);
        } else {
            _newNumber = _number.replace(/\./g,"");
        }

        if (_number.indexOf(",") >= 0) {
            _newNumber = _newNumber.substring(0, _newNumber.indexOf(","));
        }

        var i = _newNumber.length - 1;
        var j = 0;
        for (i, j; i >= 0; i--, j++) {
            result = _newNumber.charAt(i) + (j > 0 && j % 3 === 0 ? "." : "") + result;
        }

        if (_number.indexOf(",") >= 0) {
            result += _number.substring(_number.indexOf(","));
        }

        if (_number[0] === "-") {
            return `-${result}`;
        } else {
            return result;
        }
    },
    validarEmail(valor) {
        var test = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (test.test(valor)){
            return true;
        } else {
            return false;
        }
    }
};
