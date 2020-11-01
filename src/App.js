import React, { useState, useEffect } from "react";
import './App.css';
import {MenuItem, FormControl, Select} from "@material-ui/core"
//https://disease.sh/v3/covid-19/countries

function App() {
  const[countries, setCountries]=useState([]);
  //writing a variable in REACT
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,  //united states, united kingdom
            value: country.countryInfo.iso2, //us,uk,fra
          }));
          /*let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);*/
        });
    };
     getCountriesData();
  }, []);
  return (
    <div className="app">
      <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select value="abc" variant="outlined">
          {/*Loop through countries and show a drop down list of all options*/}
          
           {countries.map((country) =>(
                  <MenuItem value={country.value}>{country.name}</MenuItem>
            ) )}

          {/*
          <MenuItem value="WorldWide">yoo</MenuItem>
          <MenuItem value="WorldWide">you will be</MenuItem>
  <MenuItem value="WorldWide">amazon sde</MenuItem> */}


        </Select>
      </FormControl>
      </div>

      {/*  Header  */}
      {/*  Title+ Select input dropdown field */}

      {/* infoboxes */}
      {/* infoboxes */}
      {/* infoboxes */}

      {/* title */}
      {/* graph */}

      {/* Chart */}
    </div>
  );
}

export default App;
