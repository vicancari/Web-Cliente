var MODE_ENV = 2; // 1 produccion - 2 developer

let config = {
    dominioApi_dev: "http://localhost:9990/api",
    dominioWeb_dev: "http://localhost:8080",
    dominioApi_prod: "https://myraus.com:9990/api",
    dominioWeb_prod: "https://myraus.com/cliente/",
    idiomas: [
        {
            value: "aa",
            title: "Afar"
        },
        {
            value: "ab",
            title: "Abkhaz"
        },
        {
            value: "ae",
            title: "Avestan"
        },
        {
            value: "af",
            title: "Afrikaans"
        },
        {
            value: "ak",
            title: "Akan"
        },
        {
            value: "am",
            title: "Amharic"
        },
        {
            value: "an",
            title: "Aragonese"
        },
        {
            value: "ar",
            title: "Arabic"
        },
        {
            value: "as",
            title: "Assamese"
        },
        {
            value: "av",
            title: "Avaric"
        },
        {
            value: "ay",
            title: "Aymara"
        },
        {
            value: "az",
            title: "Azerbaijani"
        },
        {
            value: "ba",
            title: "Bashkir"
        },
        {
            value: "be",
            title: "Belarusian"
        },
        {
            value: "bg",
            title: "Bulgarian"
        },
        {
            value: "bh",
            title: "Bihari"
        },
        {
            value: "bi",
            title: "Bislama"
        },
        {
            value: "bm",
            title: "Bambara"
        },
        {
            value: "bn",
            title: "Bengali"
        },
        {
            value: "bo",
            title: "Tibetan Standard, Tibetan, Central"
        },
        {
            value: "br",
            title: "Breton"
        },
        {
            value: "bs",
            title: "Bosnian"
        },
        {
            value: "ca",
            title: "Catalan; Valencian"
        },
        {
            value: "ce",
            title: "Chechen"
        },
        {
            value: "ch",
            title: "Chamorro"
        },
        {
            value: "co",
            title: "Corsican"
        },
        {
            value: "cr",
            title: "Cree"
        },
        {
            value: "cs",
            title: "Czech"
        },
        {
            value: "cu",
            title:
                "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"
        },
        {
            value: "cv",
            title: "Chuvash"
        },
        {
            value: "cy",
            title: "Welsh"
        },
        {
            value: "da",
            title: "Danish"
        },
        {
            value: "de",
            title: "German"
        },
        {
            value: "dv",
            title: "Divehi; Dhivehi; Maldivian;"
        },
        {
            value: "dz",
            title: "Dzongkha"
        },
        {
            value: "ee",
            title: "Ewe"
        },
        {
            value: "el",
            title: "Greek, Modern"
        },
        {
            value: "en",
            title: "English"
        },
        {
            value: "eo",
            title: "Esperanto"
        },
        {
            value: "es",
            title: "Español, Castellano"
        },
        {
            value: "et",
            title: "Estonian"
        },
        {
            value: "eu",
            title: "Basque"
        },
        {
            value: "fa",
            title: "Persian"
        },
        {
            value: "ff",
            title: "Fula; Fulah; Pulaar; Pular"
        },
        {
            value: "fi",
            title: "Finnish"
        },
        {
            value: "fj",
            title: "Fijian"
        },
        {
            value: "fo",
            title: "Faroese"
        },
        {
            value: "fr",
            title: "French"
        },
        {
            value: "fy",
            title: "Western Frisian"
        },
        {
            value: "ga",
            title: "Irish"
        },
        {
            value: "gd",
            title: "Scottish Gaelic; Gaelic"
        },
        {
            value: "gl",
            title: "Galician"
        },
        {
            value: "gn",
            title: "GuaranÃ­"
        },
        {
            value: "gu",
            title: "Gujarati"
        },
        {
            value: "gv",
            title: "Manx"
        },
        {
            value: "ha",
            title: "Hausa"
        },
        {
            value: "he",
            title: "Hebrew (modern)"
        },
        {
            value: "hi",
            title: "Hindi"
        },
        {
            value: "ho",
            title: "Hiri Motu"
        },
        {
            value: "hr",
            title: "Croatian"
        },
        {
            value: "ht",
            title: "Haitian; Haitian Creole"
        },
        {
            value: "hu",
            title: "Hungarian"
        },
        {
            value: "hy",
            title: "Armenian"
        },
        {
            value: "hz",
            title: "Herero"
        },
        {
            value: "ia",
            title: "Interlingua"
        },
        {
            value: "id",
            title: "Indonesian"
        },
        {
            value: "ie",
            title: "Interlingue"
        },
        {
            value: "ig",
            title: "Igbo"
        },
        {
            value: "ii",
            title: "Nuosu"
        },
        {
            value: "ik",
            title: "Inupiaq"
        },
        {
            value: "io",
            title: "Ido"
        },
        {
            value: "is",
            title: "Icelandic"
        },
        {
            value: "it",
            title: "Italian"
        },
        {
            value: "iu",
            title: "Inuktitut"
        },
        {
            value: "ja",
            title: "Japanese (ja)"
        },
        {
            value: "jv",
            title: "Javanese (jv)"
        },
        {
            value: "ka",
            title: "Georgian"
        },
        {
            value: "kg",
            title: "Kongo"
        },
        {
            value: "ki",
            title: "Kikuyu, Gikuyu"
        },
        {
            value: "kj",
            title: "Kwanyama, Kuanyama"
        },
        {
            value: "kk",
            title: "Kazakh"
        },
        {
            value: "kl",
            title: "Kalaallisut, Greenlandic"
        },
        {
            value: "km",
            title: "Khmer"
        },
        {
            value: "kn",
            title: "Kannada"
        },
        {
            value: "ko",
            title: "Korean"
        },
        {
            value: "kr",
            title: "Kanuri"
        },
        {
            value: "ks",
            title: "Kashmiri"
        },
        {
            value: "ku",
            title: "Kurdish"
        },
        {
            value: "kv",
            title: "Komi"
        },
        {
            value: "kw",
            title: "Cornish"
        },
        {
            value: "ky",
            title: "Kirghiz, Kyrgyz"
        },
        {
            value: "la",
            title: "Latin"
        },
        {
            value: "lb",
            title: "Luxembourgish, Letzeburgesch"
        },
        {
            value: "lg",
            title: "Luganda"
        },
        {
            value: "li",
            title: "Limburgish, Limburgan, Limburger"
        },
        {
            value: "ln",
            title: "Lingala"
        },
        {
            value: "lo",
            title: "Lao"
        },
        {
            value: "lt",
            title: "Lithuanian"
        },
        {
            value: "lu",
            title: "Luba-Katanga"
        },
        {
            value: "lv",
            title: "Latvian"
        },
        {
            value: "mg",
            title: "Malagasy"
        },
        {
            value: "mh",
            title: "Marshallese"
        },
        {
            value: "mi",
            title: "Maori"
        },
        {
            value: "mk",
            title: "Macedonian"
        },
        {
            value: "ml",
            title: "Malayalam"
        },
        {
            value: "mn",
            title: "Mongolian"
        },
        {
            value: "mr",
            title: "Marathi (Marāṭhī)"
        },
        {
            value: "ms",
            title: "Malay"
        },
        {
            value: "mt",
            title: "Maltese"
        },
        {
            value: "my",
            title: "Burmese"
        },
        {
            value: "na",
            title: "Nauru"
        },
        {
            value: "nb",
            title: "Norwegian Bokmål"
        },
        {
            value: "nd",
            title: "North Ndebele"
        },
        {
            value: "ne",
            title: "Nepali"
        },
        {
            value: "ng",
            title: "Ndonga"
        },
        {
            value: "nl",
            title: "Dutch"
        },
        {
            value: "nn",
            title: "Norwegian Nynorsk"
        },
        {
            value: "no",
            title: "Norwegian"
        },
        {
            value: "nr",
            title: "South Ndebele"
        },
        {
            value: "nv",
            title: "Navajo, Navaho"
        },
        {
            value: "ny",
            title: "Chichewa; Chewa; Nyanja"
        },
        {
            value: "oc",
            title: "Occitan"
        },
        {
            value: "oj",
            title: "Ojibwe, Ojibwa"
        },
        {
            value: "om",
            title: "Oromo"
        },
        {
            value: "or",
            title: "Oriya"
        },
        {
            value: "os",
            title: "Ossetian, Ossetic"
        },
        {
            value: "pa",
            title: "Panjabi, Punjabi"
        },
        {
            value: "pi",
            title: "Pali"
        },
        {
            value: "pl",
            title: "Polish"
        },
        {
            value: "ps",
            title: "Pashto, Pushto"
        },
        {
            value: "pt",
            title: "Portuguese"
        },
        {
            value: "qu",
            title: "Quechua"
        },
        {
            value: "rm",
            title: "Romansh"
        },
        {
            value: "rn",
            title: "Kirundi"
        },
        {
            value: "ro",
            title: "Romanian, Moldavian, Moldovan"
        },
        {
            value: "ru",
            title: "Russian"
        },
        {
            value: "rw",
            title: "Kinyarwanda"
        },
        {
            value: "sa",
            title: "Sanskrit (Saṁskṛta)"
        },
        {
            value: "sc",
            title: "Sardinian"
        },
        {
            value: "sd",
            title: "Sindhi"
        },
        {
            value: "se",
            title: "Northern Sami"
        },
        {
            value: "sg",
            title: "Sango"
        },
        {
            value: "si",
            title: "Sinhala, Sinhalese"
        },
        {
            value: "sk",
            title: "Slovak"
        },
        {
            value: "sl",
            title: "Slovene"
        },
        {
            value: "sm",
            title: "Samoan"
        },
        {
            value: "sn",
            title: "Shona"
        },
        {
            value: "so",
            title: "Somali"
        },
        {
            value: "sq",
            title: "Albanian"
        },
        {
            value: "sr",
            title: "Serbian"
        },
        {
            value: "ss",
            title: "Swati"
        },
        {
            value: "st",
            title: "Southern Sotho"
        },
        {
            value: "su",
            title: "Sundanese"
        },
        {
            value: "sv",
            title: "Swedish"
        },
        {
            value: "sw",
            title: "Swahili"
        },
        {
            value: "ta",
            title: "Tamil"
        },
        {
            value: "te",
            title: "Telugu"
        },
        {
            value: "tg",
            title: "Tajik"
        },
        {
            value: "th",
            title: "Thai"
        },
        {
            value: "ti",
            title: "Tigrinya"
        },
        {
            value: "tk",
            title: "Turkmen"
        },
        {
            value: "tl",
            title: "Tagalog"
        },
        {
            value: "tn",
            title: "Tswana"
        },
        {
            value: "to",
            title: "Tonga (Tonga Islands)"
        },
        {
            value: "tr",
            title: "Turkish"
        },
        {
            value: "ts",
            title: "Tsonga"
        },
        {
            value: "tt",
            title: "Tatar"
        },
        {
            value: "tw",
            title: "Twi"
        },
        {
            value: "ty",
            title: "Tahitian"
        },
        {
            value: "ug",
            title: "Uighur, Uyghur"
        },
        {
            value: "uk",
            title: "Ukrainian"
        },
        {
            value: "ur",
            title: "Urdu"
        },
        {
            value: "uz",
            title: "Uzbek"
        },
        {
            value: "ve",
            title: "Venda"
        },
        {
            value: "vi",
            title: "Vietnamese"
        },
        {
            value: "vo",
            title: "Volapük"
        },
        {
            value: "wa",
            title: "Walloon"
        },
        {
            value: "wo",
            title: "Wolof"
        },
        {
            value: "xh",
            title: "Xhosa"
        },
        {
            value: "yi",
            title: "Yiddish"
        },
        {
            value: "yo",
            title: "Yoruba"
        },
        {
            value: "za",
            title: "Zhuang, Chuang"
        },
        {
            value: "zh",
            title: "Chinese"
        },
        {
            value: "zu",
            title: "Zulu"
        }
    ],
    paises: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua &amp; Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia &amp; Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central Arfrican Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D Ivoire",
        "Croatia",
        "Cuba",
        "Curacao",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Polynesia",
        "French West Indies",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauro",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Perú",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Pierre &amp; Miquelon",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "España",
        "Sri Lanka",
        "St Kitts &amp; Nevis",
        "St Lucia",
        "St Vincent",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor L'Este",
        "Togo",
        "Tonga",
        "Trinidad &amp; Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks &amp; Caicos",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (US)",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ],
    rutaApi(direccion) {
        return MODE_ENV === 1
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