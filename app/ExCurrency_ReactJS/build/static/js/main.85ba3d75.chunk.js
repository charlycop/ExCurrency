(this.webpackJsonpexcurrency_reactjs=this.webpackJsonpexcurrency_reactjs||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(2),o=a.n(i),r=(a(12),a(3)),c=a(4),l=a(6),d=a(5),u=(a(13),function(e){var t=e.fromAmount,a=e.fromCurrency,n=e.toAmount,i=e.toCurrency,o=e.actualRate,r=parseFloat(t).toFixed(2)+" "+a+" = "+parseFloat(n).toFixed(2)+" "+i,c=parseInt(400/r.length);return s.a.createElement("div",{className:"result"},s.a.createElement("div",{className:"overflow",id:"result",style:{fontSize:c+"px"}},r),s.a.createElement("div",{className:"txdechange",id:"txdechange"},"1.00 ",a," = ",parseFloat(o).toFixed(4)," ",i," - 1.00 ",i," = ",parseFloat(1/o).toFixed(4)," ",a))}),m=function(e){var t=e.id,a=e.tabIndex,n=e.text;return s.a.createElement("div",{className:"Liste items",id:t,tabIndex:a},n)},h=function(e){var t=e.styli,a=e.tableauO,n=e.noms;return s.a.createElement("div",{id:"cover",className:t},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"CURRENCIES"))),s.a.createElement("tbody",{id:"tableau"},a.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",{id:e[0],className:"items",tabIndex:t+4},e[0],s.a.createElement("br",null),n[e[0]]))})))))};function v(e){var t=document.activeElement,a=t.tabIndex+e,n=document.querySelectorAll(".items")[a];void 0!==n&&n.focus(),"BODY"===t.nodeName&&(t.style="")}var f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={montant:"",montantRes:0,elementActif:0,deviseReference:"",deviseListeG:"EUR",deviseListeD:"USD",actualRate:0,dateUpdate:"NEED TO GET THE RATES ONLINE",styleTab:"hidden",tableauZero:[],nomDevises:{},lastChange:null},e.handleKeydown=function(t){switch(e.checkRateUpdate(),t.key){case"ArrowUp":("TD"===t.target.nodeName&&t.target.tabIndex>4||"TD"!==t.target.nodeName)&&v(-1);break;case"ArrowDown":("TD"!==t.target.nodeName&&t.target.tabIndex<3||"TD"===t.target.nodeName)&&v(1);break;case"Enter":if("TD"===t.target.nodeName)e.changeDevise(t.target.childNodes[0].parentElement.id);else switch(t.target.id){case"ListeG":case"ListeD":e.showList(t.target.id);break;case"doublefleche":e.switchCurrencies()}}},e}return Object(c.a)(a,[{key:"switchCurrencies",value:function(){var e=this.state,t=e.montant,a=e.deviseListeG,n=e.deviseListeD,s=this.findRate(n,a);this.setState({deviseListeG:n,deviseListeD:a,montantRes:t*s,actualRate:s})}},{key:"findIndice",value:function(e){for(var t=0,a=this.state.tableauZero.length;t<a;t++)if(this.state.tableauZero[t][0]===e)return t}},{key:"findRate",value:function(e,t){var a=this.state.tableauZero;return e===this.state.deviseReference?a[this.findIndice(t)][1]:t===this.state.deviseReference?1/a[this.findIndice(e)][1]:a[this.findIndice(t)][1]/a[this.findIndice(e)][1]}},{key:"changeDevise",value:function(e){var t=this.state,a=t.montant,n=t.lastChange,s=t.deviseListeG,i=t.deviseListeD;"ListeG"===n?s=e:i=e;var o=this.findRate(s,i);document.getElementById(n).focus(),this.setState({deviseListeG:s,deviseListeD:i,actualRate:o,montantRes:a*o,styleTab:"hidden"})}},{key:"checkRateUpdate",value:function(){var e=this.state.dateUpdate;if(console.log("dateUpdate : "+e),"number"===typeof e){var t=new Date-e;console.log("timeSinceLastUpdate : "+t),console.log("timeMaxWithOutUpdate : 21600000"),t>216e5?(this.getTheRates(),console.log("MAJ")):console.log("PAS MAJ")}else console.log("une string")}},{key:"updateConv",value:function(e){this.setState({montant:e.target.value,montantRes:parseFloat(e.target.value)*this.state.actualRate})}},{key:"getTheRates",value:function(){var e=new XMLHttpRequest;e.onreadystatechange=function(t){if(e.readyState===XMLHttpRequest.DONE){200===e.status&&localStorage.setItem("jsonRates",e.responseText),localStorage.getItem("jsonRates")||(alert("Please activate the internet connexion in order to get the rates.\nAfter you get the rates 1 time then you can stay offline"),document.location.reload());var a=localStorage.getItem("jsonRates"),n=JSON.parse(a),s=1,i=[];for(var o in n.rates)i.push([o,parseFloat(n.rates[o])]),"EUR"===o&&(s=parseFloat(n.rates[o]));i.sort(),this.setState({tableauZero:i,montantRes:this.state.montant*s,actualRate:s,deviseReference:n.base,dateUpdate:1e3*n.timestamp}),this.fillTab()}}.bind(this),e.open("GET","https://openexchangerates.org/api/latest.json?app_id=6848de5224cf47ebac7a7faabc2a529a",!0),e.send()}},{key:"fillTab",value:function(){var e=new XMLHttpRequest;e.onreadystatechange=function(t){if(200===e.status&&4===e.readyState){var a=JSON.parse(e.responseText);this.setState({nomDevises:a})}}.bind(this),e.open("GET","data/currenciesList.json",!0),e.send()}},{key:"componentDidMount",value:function(){this.getTheRates(),document.activeElement.addEventListener("keydown",this.handleKeydown);var e=document.getElementById("montant");null!==e&&e.focus()}},{key:"showList",value:function(e){this.addAdvert(e),this.setState({styleTab:"overlay",lastChange:e}),"ListeG"===e?document.getElementById(this.state.deviseListeG).focus():document.getElementById(this.state.deviseListeD).focus()}},{key:"addAdvert",value:function(e){window.getKaiAd({publisher:"8378d86d-8018-4346-8af2-3be8ddbd0cb3",app:"ExCurrency",test:0,onerror:function(e){return console.error("Custom catch:",e)},onready:function(t){var a=document.getElementById(e);a.addEventListener("focus",(function e(){a.removeEventListener("focus",e),t.call("display")}))}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.montant,n=t.montantRes,i=t.deviseListeG,o=t.deviseListeD,r=t.actualRate,c=t.dateUpdate,l=t.styleTab,d=t.tableauZero,v=t.nomDevises;return s.a.createElement("div",null,s.a.createElement("div",{id:"conteneur"},s.a.createElement("input",{className:"items",type:"tel",tabIndex:0,name:"montant",id:"montant",placeholder:"Amount",value:a,onChange:function(t){return e.updateConv(t)}}),s.a.createElement(m,{id:"ListeG",tabIndex:1,text:this.state.deviseListeG}),s.a.createElement("img",{id:"doublefleche",className:"doublefleche items",tabIndex:2,src:"/img/iconmonstr-cursor-15-24.png",alt:"Toggle"}),s.a.createElement(m,{id:"ListeD",tabIndex:3,text:this.state.deviseListeD}),s.a.createElement(u,{fromAmount:a.length>0?parseFloat(a):1,fromCurrency:i,toAmount:a.length>0?n:r,toCurrency:o,actualRate:r})),s.a.createElement("div",{id:"updateDate"},"Update : ",new Date(c).toString()),s.a.createElement(h,{styli:l,tableauO:d,noms:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.85ba3d75.chunk.js.map