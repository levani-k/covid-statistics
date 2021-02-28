import React from 'react';
import CountryCard from'./components/CountryCard/CountryCard'
import EveryCountry from './components/EveryCountry/EveryCountry'
import './App.css'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      countriesArray: [],
      country: [],
      searchfield: '',
      isCountryDisplayed: false
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  componentDidMount() {
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(response => response.json())
    .then(data => this.setState({ countriesArray: data }))
  }

  handleClick = (event) => {
    for(var index = 0; index < this.state.countriesArray.length; index++) {
      if(event.target.innerHTML === this.state.countriesArray[index].country) {
        this.setState({
          country: this.state.countriesArray[index],
          isCountryDisplayed: true
        })
      }
    }
  }

  render() {
    const { countriesArray, searchfield} = this.state
    const filteredCountries = countriesArray.filter(country =>{
      return country.country.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className='wholeContent'>
        {
          this.state.isCountryDisplayed ? <CountryCard country={this.state.country}/> : <h6>Click on the specific country name to view all the details about the country.</h6>
        }
        <EveryCountry countriesArray={filteredCountries} handleClick={this.handleClick} onSearchChange={this.onSearchChange}/>
      </div>
    );
  }
}

export default App;
