import { useEffect, useState } from "react";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
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
  return (
    <div>
      <h4>countries {countries.length}</h4>
      <div>
        <h5>Visited Countries {visitedCountries.length}</h5>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ol>
      </div>
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
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
