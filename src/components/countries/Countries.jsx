import { use, useEffect, useState } from "react";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=borders,timezones,area,name,capital,flags,codes,currencies,languages,population"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log(country);
    setVisitedCountries([...visitedCountries, country]);
  };
  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  return (
    <div>
      {/* Visited Country */}
      <h4>countries {countries.length}</h4>
      <div>
        <h5>Visited Countries {visitedCountries.length}</h5>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ol>
      </div>
      {/* Display Flags */}
      <div className="flag-container">
        {visitedFlags.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>
      {/* Display Countries */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
