// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {

    // We'll ask the browser to use strict code to help us catch errors earlier.
    // https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
    'use strict';

    var translate = navigator.mozL10n.get;

    // We want to wait until the localisations library has loaded all the strings.
    // So we'll tell it to let us know once it's ready.
    navigator.mozL10n.once(start);

    // ---

    function start() {

        var message = document.getElementById('message');

        // We're using textContent because inserting content from external sources into your page using innerHTML can be dangerous.
        // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
        //message.textContent = translate('message');

    }
});


    /* Variables Globales */
    var tableauComplets = {
        'AED': 'UAE Dirham',
        'AFN': 'Afghani',
        'ALL': 'Lek',
        'AMD': 'Armenian Dram',
        'ANG': 'Netherlands Antillean Guilder',
        'AOA': 'Kwanza',
        'ARS': 'Argentine Peso',
        'AUD': 'Australian Dollar',
        'AWG': 'Aruban Florin',
        'AZN': 'Azerbaijanian Manat',
        'BAM': 'Convertible Mark',
        'BBD': 'Barbados Dollar',
        'BDT': 'Taka',
        'BGN': 'Bulgarian Lev',
        'BHD': 'Bahraini Dinar',
        'BIF': 'Burundi Franc',
        'BMD': 'Bermudian Dollar',
        'BND': 'Brunei Dollar',
        'BOB': 'Boliviano',
        'BOV': 'Mvdol',
        'BRL': 'Brazilian Real',
        'BSD': 'Bahamian Dollar',
        'BTN': 'Ngultrum',
        'BWP': 'Pula',
        'BYN': 'Belarussian Ruble',
        'BZD': 'Belize Dollar',
        'CAD': 'Canadian Dollar',
        'CDF': 'Congolese Franc',
        'CHE': 'WIR Euro',
        'CHF': 'Swiss Franc',
        'CHW': 'WIR Franc',
        'CLF': 'Unidad de Fomento',
        'CLP': 'Chilean Peso',
        'CNY': 'Yuan Renminbi',
        'COP': 'Colombian Peso',
        'COU': 'Unidad de Valor Real',
        'CRC': 'Costa Rican Colon',
        'CUC': 'Peso Convertible',
        'CUP': 'Cuban Peso',
        'CVE': 'Cabo Verde Escudo',
        'CZK': 'Czech Koruna',
        'DJF': 'Djibouti Franc',
        'DKK': 'Danish Krone',
        'DOP': 'Dominican Peso',
        'DZD': 'Algerian Dinar',
        'EGP': 'Egyptian Pound',
        'ERN': 'Nakfa',
        'ETB': 'Ethiopian Birr',
        'EUR': 'Euro',
        'FJD': 'Fiji Dollar',
        'FKP': 'Falkland Islands Pound',
        'GBP': 'Pound Sterling',
        'GEL': 'Lari',
        'GHS': 'Ghana Cedi',
        'GIP': 'Gibraltar Pound',
        'GMD': 'Dalasi',
        'GNF': 'Guinea Franc',
        'GTQ': 'Quetzal',
        'GYD': 'Guyana Dollar',
        'HKD': 'Hong Kong Dollar',
        'HNL': 'Lempira',
        'HRK': 'Kuna',
        'HTG': 'Gourde',
        'HUF': 'Forint',
        'IDR': 'Rupiah',
        'ILS': 'New Israeli Sheqel',
        'INR': 'Indian Rupee',
        'IQD': 'Iraqi Dinar',
        'IRR': 'Iranian Rial',
        'ISK': 'Iceland Krona',
        'JMD': 'Jamaican Dollar',
        'JOD': 'Jordanian Dinar',
        'JPY': 'Yen',
        'KES': 'Kenyan Shilling',
        'KGS': 'Som',
        'KHR': 'Riel',
        'KMF': 'Comoro Franc',
        'KPW': 'North Korean Won',
        'KRW': 'Won',
        'KWD': 'Kuwaiti Dinar',
        'KYD': 'Cayman Islands Dollar',
        'KZT': 'Tenge',
        'LAK': 'Kip',
        'LBP': 'Lebanese Pound',
        'LKR': 'Sri Lanka Rupee',
        'LRD': 'Liberian Dollar',
        'LSL': 'Loti',
        'LYD': 'Libyan Dinar',
        'MAD': 'Moroccan Dirham',
        'MDL': 'Moldovan Leu',
        'MGA': 'Malagasy Ariary',
        'MKD': 'Denar',
        'MMK': 'Kyat',
        'MNT': 'Tugrik',
        'MOP': 'Pataca',
        'MRU': 'Ouguiya',
        'MUR': 'Mauritius Rupee',
        'MVR': 'Rufiyaa',
        'MWK': 'Kwacha',
        'MXN': 'Mexican Peso',
        'MXV': 'Mexican Unidad de Inversion (UDI)',
        'MYR': 'Malaysian Ringgit',
        'MZN': 'Mozambique Metical',
        'NAD': 'Namibia Dollar',
        'NGN': 'Naira',
        'NIO': 'Cordoba Oro',
        'NOK': 'Norwegian Krone',
        'NPR': 'Nepalese Rupee',
        'NZD': 'New Zealand Dollar',
        'OMR': 'Rial Omani',
        'PAB': 'Balboa',
        'PEN': 'Nuevo Sol',
        'PGK': 'Kina',
        'PHP': 'Philippine Peso',
        'PKR': 'Pakistan Rupee',
        'PLN': 'Zloty',
        'PYG': 'Guarani',
        'QAR': 'Qatari Rial',
        'RON': 'Romanian Leu',
        'RSD': 'Serbian Dinar',
        'RUB': 'Russian Ruble',
        'RWF': 'Rwanda Franc',
        'SAR': 'Saudi Riyal',
        'SBD': 'Solomon Islands Dollar',
        'SCR': 'Seychelles Rupee',
        'SDG': 'Sudanese Pound',
        'SEK': 'Swedish Krona',
        'SGD': 'Singapore Dollar',
        'SHP': 'Saint Helena Pound',
        'SLL': 'Leone',
        'SOS': 'Somali Shilling',
        'SRD': 'Surinam Dollar',
        'SSP': 'South Sudanese Pound',
        'STN': 'Dobra',
        'SVC': 'El Salvador Colon',
        'SYP': 'Syrian Pound',
        'SZL': 'Lilangeni',
        'THB': 'Baht',
        'TJS': 'Somoni',
        'TMT': 'Turkmenistan New Manat',
        'TND': 'Tunisian Dinar',
        'TOP': 'Pa’anga',
        'TRY': 'Turkish Lira',
        'TTD': 'Trinidad and Tobago Dollar',
        'TWD': 'New Taiwan Dollar',
        'TZS': 'Tanzanian Shilling',
        'UAH': 'Hryvnia',
        'UGX': 'Uganda Shilling',
        'USD': 'US Dollar',
        'USN': 'US Dollar (Next day)',
        'UYI': 'Uruguay Peso en Unidades Indexadas (URUIURUI)',
        'UYU': 'Peso Uruguayo',
        'UZS': 'Uzbekistan Sum',
        'VEF': 'Bolivar',
        'VND': 'Dong',
        'VUV': 'Vatu',
        'WST': 'Tala',
        'XAF': 'CFA Franc BEAC',
        'XCD': 'East Caribbean Dollar',
        'XDR': 'SDR (Special Drawing Right)',
        'XOF': 'CFA Franc BCEAO',
        'XPF': 'CFP Franc',
        'XSU': 'Sucre',
        'XUA': 'ADB Unit of Account',
        'YER': 'Yemeni Rial',
        'ZAR': 'Rand',
        'ZMW': 'Zambian Kwacha',
        'ZWL': 'Zimbabwe Dollar'
    };
    var url = "https://api.exchangeratesapi.io/latest";
    var deviseReference = 'EUR';

    var tableauO = [
        [deviseReference, parseFloat(1.0)]
    ];

    var lastChange;

    function fillTab() {
        var t = '',
            cpt = 0;

        for (var element of tableauO) {
            t += '<tr><td  class=\'items\' tabIndex=' + ((cpt++) + 4) + ' id=' + element[0] + '>' + element[0] + '<br>(' + tableauComplets[element[0]] + ')</td></tr>';
        }
        document.getElementById('tableau').innerHTML = t;
    }

    /* Sélectionne une devise dans la liste */
    function setDefault() {
        var listeD = document.getElementById('ListeD'),
            listeG = document.getElementById('ListeG');

        if (sessionStorage.getItem("ListeD")) {
            listeD.innerHTML = sessionStorage.getItem("ListeD");
        } else {
            listeD.innerHTML = 'USD';
        }

        if (sessionStorage.getItem("ListeG")) {
            ListeG.innerHTML = sessionStorage.getItem("ListeG");
        } else {
            ListeG.innerHTML = deviseReference;
        }

    }

    function initialize() {

        /* Déclaration des accès aux listes */
        var montant = document.getElementById('montant'),
            listeG = document.getElementById('ListeG');

        /* Devise par défaut des listes */
        setDefault();

        /* Conversion du montant par défaut */
        document.getElementById("result").innerHTML = conversion(listeG.innerHTML, listeG.id, montant.value);

        /* On rempli le tableau */
        fillTab();

    }

    /* renvoi l'index dans le tableauO de la devise en arguement */
    function findIndice(devise) {
        for (var i = 0, c = tableauO.length; i < c; i++) {
            if (tableauO[i][0] === devise)
                return i;
        }
    }


    /* Renvoi le taux de conversion */
    function findRate(deviseGauche, deviseDroite) {
        var rate;

        if (deviseGauche === deviseReference) {
            rate = tableauO[findIndice(deviseDroite)][1];
        } else if (deviseDroite === deviseReference) {
            rate = 1 / tableauO[findIndice(deviseGauche)][1];
        } else {
            rate = tableauO[findIndice(deviseDroite)][1] / tableauO[findIndice(deviseGauche)][1];
        }

        return rate;
    }

    function conversion(deviseName, liste, montant) {
        var text = '',
            DeviseAutreListe, txdechange,
            tauxUnitaire = document.getElementById("txdechange");

        if (isNaN(montant) || montant == '')
            montant = 1;

        if (liste === 'ListeG') {
            DeviseAutreListe = document.getElementById('ListeD').innerHTML;
            txdechange = findRate(deviseName, DeviseAutreListe);
            text = montant + ' ' + deviseName + ' = ' + (parseFloat(txdechange) * parseFloat(montant)).toFixed(2) + ' ' + DeviseAutreListe;

            tauxUnitaire.innerHTML =
                '1.00 ' + deviseName + ' = ' + parseFloat(txdechange).toFixed(2) + ' ' + DeviseAutreListe + '   -   ' +
                '1.00 ' + DeviseAutreListe + ' = ' + (1 / txdechange).toFixed(2) + ' ' + deviseName;

        } else if (liste === 'ListeD') {
            DeviseAutreListe = document.getElementById('ListeG').innerHTML;
            txdechange = findRate(DeviseAutreListe, deviseName);
            text = montant + ' ' + DeviseAutreListe + ' = ' + (txdechange * montant).toFixed(2) + ' ' + deviseName;

            tauxUnitaire.innerHTML =
                '1.00 ' + DeviseAutreListe + ' = ' + parseFloat(txdechange).toFixed(2) + ' ' + deviseName + '   -   ' +
                '1.00 ' + deviseName + ' = ' + (1 / txdechange).toFixed(2) + ' ' + DeviseAutreListe;

        }

        return text;
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var text = '';

            /* On rempli le tableau global avec les devises et les taux */
            for (var i in myObj.rates) {
                text += '1.00 ' + myObj.base + ' = ' + myObj.rates[i] + " " + i + "<br>";
                tableauO.push([i, parseFloat(myObj.rates[i])]);
            }

            /* on en profiute pour trier dans l'ordre alphabétique */
            tableauO.sort();

            /* MAJ de la date */
            document.getElementById("bottom").innerHTML = 'Got the rates on ' + myObj.date;

            /* on initialise les données du site */
            initialize();
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();


    /// NAVIGATION D-PAD ///
    function nav(move) {

        var currentIndex = document.activeElement.tabIndex;
        const next = currentIndex + move;
        const items = document.querySelectorAll('.items');
        const targetElement = items[next];
        targetElement.focus();

    }





    document.getElementById('ListeG').addEventListener('keydown', function(e) {

        /* disable the +/- sur le champ montant */
        if ( e.which == 38 || e.which == 40 ){
            e.preventDefault();
        }

        /* soit on descend d'une case, soit on modifie le montant. */
        switch (e.key) {
            case 'ArrowUp':
                nav(-1);
                break;
            case 'ArrowDown':
                nav(1);
                break;
            case 'Enter':
                showList('ListeG');
                break;
            default:
                break;
        }
    });

    document.getElementById('ListeD').addEventListener('keydown', function(e) {

        /* soit on descend d'une case, soit on modifie le montant. */
        switch (e.key) {
            case 'ArrowUp':
                nav(-1);
                break;
            case 'Enter':
                showList('ListeD');
                break;
            default:
                break;
        }
    });




    document.getElementById('doublefleche').addEventListener('keydown', function(e) {

        switch (e.key) {
            case 'ArrowUp':
                nav(-1);
                break;
            case 'ArrowDown':
                nav(1);
                break;
            case 'Enter':
                switchCurrencies();
                break;
            default:
                break;
        }
    });

function changeDevise(devise){
    var liste = document.getElementById(lastChange),
        montant = document.getElementById('montant').value;

    /* On change le nom sur le bouton */
    liste.innerHTML = devise;

    /* Conversion du montant actuel */
    document.getElementById("result").innerHTML = conversion(liste.innerHTML, liste.id, montant);

    /* On enlève la liste */
    liste.focus();
    cover.classList.toggle("hidden");
}


    document.getElementById('tableau').addEventListener('keydown', function(e) {
        switch (e.key) {
            case 'ArrowUp':
                if (e.target.tabIndex > 4)
                    nav(-1);
                break;
            case 'ArrowDown':
                if (e.target.tabIndex < 36)
                    nav(1);
                break;
            case 'Enter':
                changeDevise(e.target.childNodes[0].parentElement.id);
                break;
            default:
                break;
        }
    });

    ///// fin navigation /////


    function switchCurrencies() {
        /* Devise par défaut des listes */
        var listeD = document.getElementById('ListeD'),
            listeG = document.getElementById('ListeG'),
            montant = document.getElementById('montant').value,
            deviseD = listeD.innerHTML,
            deviseG = listeG.innerHTML;

        /* on interverti */
        listeD.innerHTML = deviseG;
        listeG.innerHTML = deviseD;

        /* Conversion du montant actuel */
        document.getElementById("result").innerHTML = conversion(listeG.innerHTML, listeG.id, montant);
    };

    function showList(listeId) {

        // On indique quel liste est impactée
        lastChange = listeId;

        // On affiche le tableau des devises
        cover.classList.toggle("hidden");

        // On focus sur le bon élément du tableau
        document.getElementById(document.getElementById(listeId).innerHTML).focus();
    }


    // EVENEMENTS //


    document.getElementById('montant').focus();
    document.getElementById('montant').addEventListener('keyup', function(e){
        /* soit on descend d'une case, soit on modifie le montant. */
        switch (e.key) {
            case 'ArrowDown':
                nav(1);
                break;
            case 'ArrowUp':
                break;
            default:
                var deviseName = document.getElementById('ListeG').innerHTML;
                sessionStorage.setItem("montant", e.target.value);
                document.getElementById("result").innerHTML = conversion(deviseName, 'ListeG', e.target.value);
        }
    });

    document.getElementById('montant').addEventListener('keydown', function(e){
        /* disable the +/- sur le champ montant */
        if ( e.which == 38 || e.which == 40 )
            e.preventDefault();
    });


    document.getElementById('montant').addEventListener('focus', function(e) {
        e.target.value = '';
    });

    /////////////////
