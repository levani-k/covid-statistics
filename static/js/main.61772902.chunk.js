(this["webpackJsonpcovid-statistics"]=this["webpackJsonpcovid-statistics"]||[]).push([[0],[,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(3),r=t.n(i),a=(t(12),t(4)),l=t(5),o=t(7),d=t(6),j=(t(13),t(0)),h=function(e){var c=e.country,t=new Date(c.updated).toLocaleString("en-GB");return Object(j.jsxs)("div",{className:"countryCard",children:[Object(j.jsx)("h3",{children:c.country}),Object(j.jsxs)("div",{className:"cardLittleInfo",children:[Object(j.jsx)("img",{className:"countryImg",src:c.countryInfo.flag,alt:""}),Object(j.jsxs)("div",{className:"smallInfo",children:[Object(j.jsxs)("p",{children:["Continent: ",c.continent]}),Object(j.jsxs)("p",{children:["Population: ",c.population]}),Object(j.jsxs)("p",{children:["Updated at ",t]})]})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Total Case"}),Object(j.jsx)("p",{children:c.cases})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Today Cases"}),Object(j.jsx)("p",{children:c.todayCases})]}),Object(j.jsxs)("div",{className:"infoBox deaths",children:[Object(j.jsx)("p",{children:"Total Deaths"}),Object(j.jsx)("p",{children:c.deaths})]}),Object(j.jsxs)("div",{className:"infoBox deaths",children:[Object(j.jsx)("p",{children:"Today Deaths"}),Object(j.jsx)("p",{children:c.todayDeaths})]}),Object(j.jsxs)("div",{className:"infoBox recovered",children:[Object(j.jsx)("p",{children:"Total Recovered"}),Object(j.jsx)("p",{children:c.recovered})]}),Object(j.jsxs)("div",{className:"infoBox recovered",children:[Object(j.jsx)("p",{children:"Today Recovered"}),Object(j.jsx)("p",{children:c.todayRecovered})]}),Object(j.jsxs)("div",{className:"infoBox active",children:[Object(j.jsx)("p",{children:"Active"}),Object(j.jsx)("p",{children:c.active})]}),Object(j.jsxs)("div",{className:"infoBox critical",children:[Object(j.jsx)("p",{children:"Critical"}),Object(j.jsx)("p",{children:c.critical})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Cases Per Million"}),Object(j.jsx)("p",{children:c.casesPerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox deaths",children:[Object(j.jsx)("p",{children:"Deaths Per Million"}),Object(j.jsx)("p",{children:c.deathsPerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Total tests"}),Object(j.jsx)("p",{children:c.tests})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"Tests Per Million"}),Object(j.jsx)("p",{children:c.testsPerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"population"}),Object(j.jsx)("p",{children:c.population})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"one Case Per People"}),Object(j.jsx)("p",{children:c.oneCasePerPeople})]}),Object(j.jsxs)("div",{className:"infoBox deaths",children:[Object(j.jsx)("p",{children:"one Death Per People"}),Object(j.jsx)("p",{children:c.oneDeathPerPeople})]}),Object(j.jsxs)("div",{className:"infoBox",children:[Object(j.jsx)("p",{children:"One Test Per People"}),Object(j.jsx)("p",{children:c.oneTestPerPeople})]}),Object(j.jsxs)("div",{className:"infoBox active",children:[Object(j.jsx)("p",{children:"Active Per One Million"}),Object(j.jsx)("p",{children:c.activePerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox recovered",children:[Object(j.jsx)("p",{children:"Recovered Per One Million"}),Object(j.jsx)("p",{children:c.recoveredPerOneMillion})]}),Object(j.jsxs)("div",{className:"infoBox critical",children:[Object(j.jsx)("p",{children:"Critical Per One Million"}),Object(j.jsx)("p",{children:c.criticalPerOneMillion})]})]})]})},x=(t(15),function(e){var c=e.countriesArray,t=e.handleClick,s=e.onSearchChange,n=e.inputOnClick;return Object(j.jsxs)("div",{className:"everyPerson",children:[Object(j.jsx)("input",{className:"countrylooker",id:"countryName",type:"search",placeholder:"search user",onChange:s,onClick:n}),Object(j.jsxs)("table",{className:"countriesTable",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"headers",children:[Object(j.jsx)("th",{children:"Country"}),Object(j.jsx)("th",{children:"Total Cases"}),Object(j.jsx)("th",{children:"Cases Today"}),Object(j.jsx)("th",{children:"Deaths"}),Object(j.jsx)("th",{children:"Deaths Today"}),Object(j.jsx)("th",{children:"Recovered"}),Object(j.jsx)("th",{children:"Recovered Today"}),Object(j.jsx)("th",{children:"Active"}),Object(j.jsx)("th",{children:"Critical"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e,c){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"countryName",onClick:t,children:e.country}),Object(j.jsx)("td",{children:e.cases}),Object(j.jsx)("td",{children:e.todayCases}),Object(j.jsx)("td",{className:"deaths",children:e.deaths}),Object(j.jsx)("td",{className:"deaths",children:e.todayDeaths}),Object(j.jsx)("td",{className:"recovered",children:e.recovered}),Object(j.jsx)("td",{className:"recovered",children:e.todayRecovered}),Object(j.jsx)("td",{className:"active",children:e.active}),Object(j.jsx)("td",{className:"critical",children:e.critical})]},e.country)}))})]})]})}),O=(t(16),function(e){Object(o.a)(t,e);var c=Object(d.a)(t);function t(){var e;return Object(a.a)(this,t),(e=c.call(this)).filterCountries=function(){var c=e.state,t=c.countriesArray,s=c.searchfield;return t.filter((function(e){return e.country.toLowerCase().includes(s.toLowerCase())}))},e.onSearchChange=function(c){e.setState({searchfield:c.target.value})},e.handleClick=function(c){for(var t=0;t<e.state.countriesArray.length;t++)c.target.innerHTML===e.state.countriesArray[t].country&&e.setState({country:e.state.countriesArray[t],isCountryDisplayed:!0})},e.inputOnClick=function(c){document.getElementById("countryName").addEventListener("keyup",(function(c){if("Enter"===c.key){var t=e.filterCountries();1===t.length&&e.setState({country:t[0],isCountryDisplayed:!0})}}))},e.state={countriesArray:[],country:[],searchfield:"",isCountryDisplayed:!1},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(c){return e.setState({countriesArray:c})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"wholeContent",children:[this.state.isCountryDisplayed?Object(j.jsx)(h,{country:this.state.country}):Object(j.jsx)("h3",{children:"Click on the specific country name to view all the details about the country."}),Object(j.jsx)(x,{countriesArray:this.filterCountries(),handleClick:this.handleClick,onSearchChange:this.onSearchChange,inputOnClick:this.inputOnClick})]})}}]),t}(n.a.Component)),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.61772902.chunk.js.map