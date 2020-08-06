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
        message.textContent = translate('message');

    }

});

    var url = "https://api.exchangeratesapi.io/latest";
    var deviseReference = 'EUR';

    var tableauO = [
        [deviseReference, parseFloat(1.0)]
    ];

    var lastChange;

    function fillTab() {
        var tab = document.getElementById('tableau'), newTd, newTr,
            cpt = 0;

        for (var element of tableauO) {
            newTd = document.createElement('td');
            newTr = document.createElement('tr');
            newTd.id = element[0];
            newTd.className = 'items';
            newTd.tabIndex = ((cpt++) + 4);
            newTd.innerHTML = element[0] + '<br>(' + tableauComplets[element[0]] + ')';
            newTr.appendChild(newTd);
            tab.appendChild(newTr);
        }
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
        var text = '', un = parseFloat(1).toFixed(2),
            DeviseAutreListe, txdechange,
            tauxUnitaire = document.getElementById("txdechange");

        if (isNaN(montant) || montant == '')
            montant = 1;

        if (liste === 'ListeG') {
            DeviseAutreListe = document.getElementById('ListeD').innerHTML;
            txdechange = findRate(deviseName, DeviseAutreListe);
            text = montant + ' ' + deviseName + ' = ' + (parseFloat(txdechange) * parseFloat(montant)).toFixed(2) + ' ' + DeviseAutreListe;

            tauxUnitaire.innerHTML =
                un + ' ' + deviseName + ' = ' + parseFloat(txdechange).toFixed(2) + ' ' + DeviseAutreListe + '   -   ' +
                un + ' ' + DeviseAutreListe + ' = ' + (1 / txdechange).toFixed(2) + ' ' + deviseName;

        } else if (liste === 'ListeD') {
            DeviseAutreListe = document.getElementById('ListeG').innerHTML;
            txdechange = findRate(DeviseAutreListe, deviseName);
            text = montant + ' ' + DeviseAutreListe + ' = ' + (txdechange * montant).toFixed(2) + ' ' + deviseName;

            tauxUnitaire.innerHTML =
                un + ' ' + DeviseAutreListe + ' = ' + parseFloat(txdechange).toFixed(2) + ' ' + deviseName + '   -   ' +
                un + ' ' + deviseName + ' = ' + (1 / txdechange).toFixed(2) + ' ' + DeviseAutreListe;

        }

        return text;
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        /* if the transfert is "done" */
        if (this.readyState === XMLHttpRequest.DONE) {

            /* update the localstorage rates if it's OK */
            if(this.status === 200)
                localStorage.setItem("jsonRates", this.responseText);

            /* alert if we don't have rates even offline in localstorage */
            if(!localStorage.getItem("jsonRates")){
                alert('Please activate the internet connexion in order to get the rates.\n'+
                        'After you get the rates 1 time then you can stay offline');

                // Recharge la page
                document.location.reload();
            }

            /* get the localstorage rates and parse from json format */
            var jsonRates = localStorage.getItem("jsonRates");
            var myObj = JSON.parse(jsonRates);

            /* On rempli le tableau global avec les devises et les taux */
            for (var i in myObj.rates)
                tableauO.push([i, parseFloat(myObj.rates[i])]);

            /* on en profite pour trier dans l'ordre alphabétique */
            tableauO.sort();

            /* MAJ de la date */
            document.getElementById("updateDate").innerHTML = 'Got the rates on ' + myObj.date;

            /* on initialise les données du site */
            initialize();
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function actionTodo(element){

    }

    /// NAVIGATION D-PAD ///


    function nav(move) {

        var currentIndex = document.activeElement.tabIndex;
        const next = currentIndex + move;
        const items = document.querySelectorAll('.items');
        const targetElement = items[next];
        targetElement.focus();
    }



    function handleKeydown(e) {
        switch (e.key) {
            case 'ArrowUp':
                if((e.target.nodeName === 'TD' && e.target.tabIndex > 4)
                    || e.target.nodeName !== 'TD')
                    nav(-1);
                break;
            case 'ArrowDown':
                if((e.target.nodeName !== 'TD' && e.target.tabIndex < 3)
                    || e.target.nodeName === 'TD')
                   nav(1);
                break;
            case 'Enter':
                if(e.target.nodeName === 'TD'){
                    changeDevise(e.target.childNodes[0].parentElement.id);
                } else {
                    switch (e.target.id) {
                        case 'ListeG':
                            showList('ListeG');
                            break;
                        case 'ListeD':
                            showList('ListeD');
                            break;
                        case 'doublefleche':
                            switchCurrencies();
                            break;
                        default:
                            break;
                    }
                }
                break;
            default:
                break;
        }
    }


    document.activeElement.addEventListener('keydown', handleKeydown);


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

    function addAdvert(element){
        getKaiAd({
            publisher: '8378d86d-8018-4346-8af2-3be8ddbd0cb3',
            app: 'ExCurrency',
            test:0, //1 for test, 0 for prod
            onerror: err => console.error('Custom catch:', err),
            onready: ad => {
                // Ad is ready to be displayed
                // custom event
                let button = document.getElementById(element)
                button.addEventListener('focus', function btnListener() {
                    button.removeEventListener('focus', btnListener)
                    // calling 'display' will display the ad
                    ad.call('display');
                })
            }
        });
    }

    function showList(listeId) {

        //On programme la pub (quand on a choisi la devise)
        addAdvert(listeId);

        // On indique quel liste est impactée
        lastChange = listeId;

        // On affiche le tableau des devises
        cover.classList.toggle("hidden");

        // On focus sur le bon élément du tableau
        document.getElementById(document.getElementById(listeId).innerHTML).focus();
    }


     // EVENEMENTS //
    var update = function(e){
        var deviseName = document.getElementById('ListeG').innerHTML,
            res = document.getElementById("result");

        sessionStorage.setItem("montant", e.target.value);

        /* Update the result field amount */
        res.innerHTML = conversion(deviseName, 'ListeG', e.target.value);

        /* Update the result field font-size*/
        res.style.fontSize = parseInt(380/res.innerHTML.length) + "px";
    };





    document.getElementById('montant').addEventListener('focus', function(e) {
        e.target.value = '';
    });

    document.getElementById('montant').addEventListener('keyup', update);

    document.getElementById('montant').focus();

    /////////////////
