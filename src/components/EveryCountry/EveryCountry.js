import React from 'react'
import './EveryCountry.css'

// <img className='countryFlag' src={country.countryInfo.flag} alt='' /> 

const EveryCountry = ({ countriesArray, handleClick, onSearchChange }) => {
    return(
        <div className='everyPerson'>
            <input className='countrylooker' type='search'  placeholder='search user' onChange={onSearchChange} />
            <table className='countriesTable'> 
                <thead>
                    <tr className='headers'>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>Cases Today</th>
                        <th>Deaths</th>
                        <th>Deaths Today</th>
                        <th>Recovered</th>
                        <th>Recovered Today</th>
                        <th>Active</th>
                        <th>Critical</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countriesArray.map((country, index) => {
                            return(
                                <tr key={country.country}>
                                    <td className='countryName' onClick={handleClick}>{country.country}</td>
                                    <td>{country.cases}</td>
                                    <td>{country.todayCases}</td>
                                    <td className='deaths'>{country.deaths}</td>
                                    <td className='deaths' >{country.todayDeaths}</td>
                                    <td className='recovered' >{country.recovered}</td>
                                    <td className='recovered' >{country.todayRecovered}</td>
                                    <td className='active' >{country.active}</td>
                                    <td className='critical' >{country.critical}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EveryCountry