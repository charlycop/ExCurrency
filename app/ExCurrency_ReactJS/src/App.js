import React, { Component } from 'react'

import './App.css'
import Result from './Result'
import BoutonListe from './BoutonListe'
import Tableau from './Tableau'


function nav(move) {
    const activeE = document.activeElement;   
    const currentIndex = activeE.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.items');
    const targetElement = items[next];
    if(targetElement !== undefined)
        targetElement.focus()
    
    /* Petite bidouille suite à l'affichage de la pub qui perturbe le CSS */
    if(activeE.nodeName === 'BODY')
        activeE.style = '';
}


class App extends Component {
    state = {
        montant : '',
        montantRes : 0,
        elementActif : 0,
        deviseReference : '',
        deviseListeG : 'EUR',
        deviseListeD : 'USD',
        actualRate : 0,
        dateUpdate : 'NEED TO GET THE RATES ONLINE',
        styleTab: "hidden",
        tableauZero : [],
        nomDevises: {},
        lastChange: null,
    }

    
    switchCurrencies() {
        const {montant, deviseListeG, deviseListeD}= this.state
        const newRate = this.findRate(deviseListeD, deviseListeG)

        this.setState({ deviseListeG: deviseListeD,
                        deviseListeD: deviseListeG,
                        montantRes : montant * newRate,
                        actualRate : newRate})
    }
    
    /* renvoi l'index dans le tableauO de la devise en arguement */
    findIndice(devise) {
        for (var i = 0, c = this.state.tableauZero.length; i < c; i++) {
            if (this.state.tableauZero[i][0] === devise)
                return i;
        }
    }
 
    /* Renvoi le taux de conversion */
    findRate(deviseGauche, deviseDroite) {
        var rate;
        const tableauO = this.state.tableauZero;

        if (deviseGauche === this.state.deviseReference) {
            rate = tableauO[this.findIndice(deviseDroite)][1];
        } else if (deviseDroite === this.state.deviseReference) {
            rate = 1 / tableauO[this.findIndice(deviseGauche)][1];
        } else {
            rate = tableauO[this.findIndice(deviseDroite)][1] / tableauO[this.findIndice(deviseGauche)][1];
        }
        return rate;
    }
    
    changeDevise(newDevise){

        const {montant, lastChange, deviseListeG, deviseListeD}= this.state

        var newDeviseG = deviseListeG, newDeviseD = deviseListeD
        
        if(lastChange === 'ListeG')
            newDeviseG = newDevise
        else 
            newDeviseD = newDevise
        
        const newRate = this.findRate(newDeviseG, newDeviseD)
        
        /* On enlève la liste et on focus */
        document.getElementById(lastChange).focus()
        this.setState({ deviseListeG: newDeviseG,
                        deviseListeD: newDeviseD,
                        actualRate  : newRate,
                        montantRes  : montant * newRate,
                        styleTab: 'hidden' })
                        
    }
    

    /// NAVIGATION D-PAD ///
    // Arrow fx for binding
    handleKeydown = e => {

        console.log(e.key)
        // check if rates update is needed
        this.checkRateUpdate();
        
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
                            this.changeDevise(e.target.childNodes[0].parentElement.id);
                        } else {
                            switch (e.target.id) {
                                case 'ListeG': //same for listeG et listeD
                                case 'ListeD':
                                    this.showList(e.target.id);
                                    break;
                                    case 'doublefleche':
                                        this.switchCurrencies()
                                        break;
                                        default:
                                            break;
                                        }
                                    }
                                    break;
                                   
                case 'Backspace':
                    console.log('TEST') 
                    if(e.target.nodeName === 'TD'){
                        e.preventDefault();               
                        document.getElementById(this.state.lastChange).focus()
                        this.setState({ styleTab: 'hidden' })
                    }
                break;
            default:
                break;
        }
    }

    // check if rates update is needed
    checkRateUpdate(){
        const dateUpdate = this.state.dateUpdate;
        
        if(typeof dateUpdate === "number"){
            const timeSinceLastUpdate  = new Date() - dateUpdate;
            const timeMaxWithOutUpdate = 21600000 // 6h = 6 * 60 * 60 * 1000 = 21600000

            if (timeSinceLastUpdate > timeMaxWithOutUpdate)
                this.getTheRates();
        }
    }

    updateConv(e){
       this.setState({ montant: e.target.value,
                       montantRes: parseFloat(e.target.value) * this.state.actualRate })
    }
 
    ////////////GET RATES FROM NEW API BEGIN ///////////
    getTheRates() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(e) {
            /* if the transfert is "done" */
            if (xmlhttp.readyState === XMLHttpRequest.DONE) {

                /* update the localstorage rates if it's OK */
                if(xmlhttp.status === 200)
                    localStorage.setItem("jsonRates", xmlhttp.responseText);
                
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
                var newRate=1;
                var tableauO = []
                for (var i in myObj.rates){
                    tableauO.push([i, parseFloat(myObj.rates[i])]);
                    if (i === 'EUR') // On en profite pour récupérer le tx EUR/USD
                        newRate = parseFloat(myObj.rates[i])
                }
                /* on en profite pour trier dans l'ordre alphabétique */
                tableauO.sort();
                
                /* MAJ de les états (date, taux, conversion, tableau) */
                this.setState({ tableauZero : tableauO,
                                montantRes  : this.state.montant * newRate,
                                actualRate  : newRate,
                                deviseReference : myObj.base,
                                dateUpdate  : myObj.timestamp*1000})
//new Date(myObj.timestamp*1000).toString()
                /* On rempli le tableau complet en arrière plan */
                this.fillTab()
            }
            
        }.bind(this)
        

        xmlhttp.open("GET", 'https://openexchangerates.org/api/latest.json?app_id=6848de5224cf47ebac7a7faabc2a529a', true);
        xmlhttp.send();
    }

    fillTab () {

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(e) {
            if(xmlhttp.status === 200 && xmlhttp.readyState === 4){
                var maListe = JSON.parse(xmlhttp.responseText)
                this.setState({nomDevises : maListe})
            }
        }.bind(this)
    
        xmlhttp.open("GET","data/currenciesList.json", true);
        xmlhttp.send();
    }


    
    componentDidMount(){

        this.getTheRates()

        // Make the D-PAD navigation possible
        document.activeElement.addEventListener('keydown', this.handleKeydown);
        
        const e = document.getElementById('montant')
        if(e !== null)
            e.focus();
    }

    showList(listeId) {
        
        // Deja on charge la pub en tache de fond
        this.addAdvert(listeId);

        // On affiche le tableau des devises
        this.setState({styleTab : "overlay", lastChange : listeId});
    
        // On focus sur le bon élément du tableau
        if(listeId === 'ListeG')
            document.getElementById(this.state.deviseListeG).focus();
        else
            document.getElementById(this.state.deviseListeD).focus();
    }

    addAdvert(element){
        window.getKaiAd({
            publisher: '8378d86d-8018-4346-8af2-3be8ddbd0cb3',
            app: 'ExCurrency',
            test: 0, //1 for test, 0 for prod
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

    render() {
      const {montant,
             montantRes,
             deviseListeG,
             deviseListeD,
             actualRate,
             dateUpdate,
             styleTab,
             tableauZero,
             nomDevises }= this.state     
             
             
        


      return (<div>
          <div id="conteneur">
                <input
                    className='items'
                    type="tel"
                    tabIndex={0}
                    name='montant'
                    id='montant'
                    placeholder='Amount'
                    value={montant}
                    onChange = {(e) => this.updateConv(e)}
                    />

                <BoutonListe id="ListeG" tabIndex={1} text={this.state.deviseListeG}/> 

                <img id='doublefleche' className='doublefleche items' tabIndex={2} src="/img/iconmonstr-cursor-15-24.png" alt="Toggle" />

                <BoutonListe id="ListeD" tabIndex={3} text={this.state.deviseListeD}/> 
                
                <Result fromAmount = {(montant.length > 0) ? parseFloat(montant) : 1}
                        fromCurrency = {deviseListeG}
                        toAmount = {(montant.length > 0) ? montantRes : actualRate}
                        toCurrency = {deviseListeD}
                        actualRate = {actualRate}
                />
        </div>
            <div id='updateDate'>Update : {new Date(dateUpdate).toString()}</div>
            <Tableau styli={styleTab} tableauO={tableauZero} noms={nomDevises}/>
        </div>
      )
  }
}
export default App;