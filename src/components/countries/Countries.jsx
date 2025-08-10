import { useEffect, useState } from "react";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedContries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=borders,timezones,area,name,capital,flags,codes,currencies,languages,population"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
  };
  return (
    <div>
      <h4>countries {countries.length}</h4>
      <div>
        <h5>Visited Countries</h5>
        <ol></ol>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {countries.map((country) => (
          <Country key={country.population} country={country} handleVisitedCountry={handleVisitedCountry}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
