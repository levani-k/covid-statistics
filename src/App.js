import React from "react";
import CountryCard from "./components/CountryCard/CountryCard";
import EveryCountry from "./components/EveryCountry/EveryCountry";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countriesArray: [],
      country: [],
      searchfield: "",
    };
  }

  filterCountries = () => {
    const { countriesArray, searchfield } = this.state;
    const filteredCountries = countriesArray.filter((country) => {
      return country.country.toLowerCase().includes(searchfield.toLowerCase());
    });

    return filteredCountries;
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    const randomNum = Math.floor(Math.random() * 221);
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ countriesArray: data, country: data[randomNum] })
      );
  }

  handleClick = (event) => {
    for (var index = 0; index < this.state.countriesArray.length; index++) {
      if (event.target.innerHTML === this.state.countriesArray[index].country) {
        this.setState({
          country: this.state.countriesArray[index],
        });
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  };

  inputOnClick = (event) => {
    let input = document.getElementById("countryName");
    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        let country = this.filterCountries();
        if (country.length === 1) {
          this.setState({
            country: country[0],
          });
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }
    });
  };

  render() {
    return (
      <div className="wholeContent">
        {this.state.country.length !== 0 ? (
          <CountryCard country={this.state.country} />
        ) : (
          <h3>Loading country info</h3>
        )}
        {this.state.countriesArray.length > 0 ? (
          <EveryCountry
            countriesArray={this.filterCountries()}
            handleClick={this.handleClick}
            onSearchChange={this.onSearchChange}
            inputOnClick={this.inputOnClick}
          />
        ) : (
          <h3>Loading countries info</h3>
        )}
      </div>
    );
  }
}

export default App;
