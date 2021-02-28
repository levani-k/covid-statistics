(this["webpackJsonpcovid-statistics"]=this["webpackJsonpcovid-statistics"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(3),r=c.n(i),a=(c(12),c(4)),l=c(5),o=c(7),d=c(6),j=(c(13),c(0)),h=function(e){var t=e.country,c=new Date(t.updated).toLocaleString("en-GB");return Object(j.jsxs)("div",{className:"countryCard",children:[Object(j.jsx)("h1",{style:{marginLeft:"16px"},children:t.country}),Object(j.jsxs)("div",{className:"cardLittleInfo",children:[Object(j.jsx)("img",{className:"countryImg",src:t.countryInfo.flag,alt:""}),Object(j.jsxs)("div",{className:"smallInfo",children:[Object(j.jsxs)("p",{children:["Continent: ",t.continent]}),Object(j.jsxs)("p",{children:["Population: ",t.population]}),Object(j.jsxs)("p",{children:["Updated at ",c]})]})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Total Case"}),Object(j.jsx)("p",{children:t.cases})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Today Cases"}),Object(j.jsx)("p",{children:t.todayCases})]}),Object(j.jsxs)("div",{className:"infoBox deaths",children:[Object(j.jsx)("p",{children:"Total Deaths"}),Object(j.jsx)("p",{children:t.deaths})]}),Object(j.jsxs)("div",{className:"infoBox deaths",children:[Object(j.jsx)("p",{children:"Today Deaths"}),Object(j.jsx)("p",{children:t.todayDeaths})]}),Object(j.jsxs)("div",{className:"infoBox recovered",children:[Object(j.jsx)("p",{children:"Total Recovered"}),Object(j.jsx)("p",{children:t.recovered})]}),Object(j.jsxs)("div",{className:"infoBox recovered",children:[Object(j.jsx)("p",{children:"Today Recovered"}),Object(j.jsx)("p",{children:t.todayRecovered})]}),Object(j.jsxs)("div",{className:"infoBox active",children:[Object(j.jsx)("p",{children:"Active"}),Object(j.jsx)("p",{children:t.active})]}),Object(j.jsxs)("div",{className:"infoBox critical",children:[Object(j.jsx)("p",{children:"Critical"}),Object(j.jsx)("p",{children:t.critical})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Cases Per Million"}),Object(j.jsx)("p",{children:t.casesPerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox deaths",children:[Object(j.jsx)("p",{children:"Deaths Per Million"}),Object(j.jsx)("p",{children:t.deathsPerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Total tests"}),Object(j.jsx)("p",{children:t.tests})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Tests Per Million"}),Object(j.jsx)("p",{children:t.testsPerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"population"}),Object(j.jsx)("p",{children:t.population})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"one Case Per People"}),Object(j.jsx)("p",{children:t.oneCasePerPeople})]}),Object(j.jsxs)("div",{className:"infoBox deaths",children:[Object(j.jsx)("p",{children:"one Death Per People"}),Object(j.jsx)("p",{children:t.oneDeathPerPeople})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"One Test Per People"}),Object(j.jsx)("p",{children:t.oneTestPerPeople})]}),Object(j.jsxs)("div",{className:"infoBox active",children:[Object(j.jsx)("p",{children:"Active Per One Million"}),Object(j.jsx)("p",{children:t.activePerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox recovered",children:[Object(j.jsx)("p",{children:"Recovered Per One Million"}),Object(j.jsx)("p",{children:t.recoveredPerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox critical",children:[Object(j.jsx)("p",{children:"Critical Per One Million"}),Object(j.jsx)("p",{children:t.criticalPerOneMillion})]})]})]})},x=(c(15),function(e){var t=e.countriesArray,c=e.handleClick,s=e.onSearchChange,n=e.inputOnClick;return Object(j.jsxs)("div",{className:"everyPerson",children:[Object(j.jsx)("div",{className:"searchCountryField",children:Object(j.jsx)("input",{className:"countrylooker",id:"countryName",type:"search",placeholder:"search country by name",onChange:s,onClick:n})}),Object(j.jsxs)("table",{className:"countriesTable",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"headers",children:[Object(j.jsx)("th",{children:"Country"}),Object(j.jsx)("th",{children:"Total Cases"}),Object(j.jsx)("th",{children:"Cases Today"}),Object(j.jsx)("th",{children:"Deaths"}),Object(j.jsx)("th",{children:"Deaths Today"}),Object(j.jsx)("th",{children:"Recovered"}),Object(j.jsx)("th",{children:"Recovered Today"}),Object(j.jsx)("th",{children:"Active"}),Object(j.jsx)("th",{children:"Critical"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"countryName",onClick:c,children:e.country}),Object(j.jsx)("td",{children:e.cases}),Object(j.jsx)("td",{children:e.todayCases}),Object(j.jsx)("td",{className:"deaths",children:e.deaths}),Object(j.jsx)("td",{className:"deaths",children:e.todayDeaths}),Object(j.jsx)("td",{className:"recovered",children:e.recovered}),Object(j.jsx)("td",{className:"recovered",children:e.todayRecovered}),Object(j.jsx)("td",{className:"active",children:e.active}),Object(j.jsx)("td",{className:"critical",children:e.critical})]},e.country)}))})]})]})}),O=(c(16),function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(a.a)(this,c),(e=t.call(this)).filterCountries=function(){var t=e.state,c=t.countriesArray,s=t.searchfield;return c.filter((function(e){return e.country.toLowerCase().includes(s.toLowerCase())}))},e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.handleClick=function(t){for(var c=0;c<e.state.countriesArray.length;c++)t.target.innerHTML===e.state.countriesArray[c].country&&(e.setState({country:e.state.countriesArray[c]}),window.scrollTo({top:0,left:0,behavior:"smooth"}))},e.inputOnClick=function(t){document.getElementById("countryName").addEventListener("keyup",(function(t){if("Enter"===t.key){var c=e.filterCountries();1===c.length&&(e.setState({country:c[0]}),window.scrollTo({top:0,left:0,behavior:"smooth"}))}}))},e.state={countriesArray:[],country:[],searchfield:""},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=Math.floor(221*Math.random());fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(c){return e.setState({countriesArray:c,country:c[t]})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"wholeContent",children:[0!==this.state.country.length?Object(j.jsx)(h,{country:this.state.country}):Object(j.jsx)("h3",{children:"Loading country info"}),this.state.countriesArray.length>0?Object(j.jsx)(x,{countriesArray:this.filterCountries(),handleClick:this.handleClick,onSearchChange:this.onSearchChange,inputOnClick:this.inputOnClick}):Object(j.jsx)("h3",{children:"Loading countries info"})]})}}]),c}(n.a.Component)),b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.7bf44177.chunk.js.map