import React from 'react'
import './CountryCard.css'


const CountryCard = ({ country }) => {
    const dateTime = new Date(country.updated);
    const displayDateTime = dateTime.toLocaleString("en-GB");
    return(
        <div className='countryCard'>
            <h3>{country.country}</h3>
            <div className='cardLittleInfo'>
                <img className='countryImg' src={country.countryInfo.flag} alt=''/>
                <div className='smallInfo'>
                    <p>Continent: {country.continent}</p>
                    <p>Population: {country.population}</p>
                    <p>Updated at {displayDateTime}</p>
                </div>
            </div>
            <div className='container'>
                <div className='infoBox'><p>Total Case</p><p>{country.cases}</p></div>
                <div className='infoBox'><p>Today Cases</p><p>{country.todayCases}</p></div>
                <div className='infoBox deaths'><p>Total Deaths</p><p>{country.deaths}</p></div>
                <div className='infoBox deaths'><p>Today Deaths</p><p>{country.todayDeaths}</p></div>
                <div className='infoBox recovered'><p>Total Recovered</p><p>{country.recovered}</p></div>
                <div className='infoBox recovered'><p>Today Recovered</p><p>{country.todayRecovered}</p></div>
                <div className='infoBox active'><p>Active</p><p>{country.active}</p></div>
                <div className='infoBox critical'><p>Critical</p><p>{country.critical}</p></div>
                <div className='infoBox'><p>Cases Per Million</p><p>{country.casesPerOneMillion}</p></div>
                <div className='infoBox deaths'><p>Deaths Per Million</p><p>{country.deathsPerOneMillion}</p></div>
                <div className='infoBox'><p>Total tests</p><p>{country.tests}</p></div>
                <div className='infoBox'><p>Tests Per Million</p><p>{country.testsPerOneMillion}</p></div>
                <div className='infoBox'><p>population</p><p>{country.population}</p></div>
                <div className='infoBox'><p>one Case Per People</p><p>{country.oneCasePerPeople}</p></div>
                <div className='infoBox deaths'><p>one Death Per People</p><p>{country.oneDeathPerPeople}</p></div>
                <div className='infoBox'><p>One Test Per People</p><p>{country.oneTestPerPeople}</p></div>
                <div className='infoBox active'><p>Active Per One Million</p><p>{country.activePerOneMillion}</p></div>
                <div className='infoBox recovered'><p>Recovered Per One Million</p><p>{country.recoveredPerOneMillion}</p></div>
                <div className='infoBox critical'><p>Critical Per One Million</p><p>{country.criticalPerOneMillion}</p></div>
            </div>
        </div>
    )
}

export default CountryCard