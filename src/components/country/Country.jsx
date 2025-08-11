import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  // console.log(handleVisitedCountry);
  return (
    <div className={`country-card ${visited && "visited"}`}>
      <img
        src={country.flags.png}
        alt={country.flags.alt || country.name.common}
        className="country-flag"
      />
      <h3 className="country-name">{country.name.common}</h3>
      <p>
        <strong>Capital:</strong> {country.capital?.join(", ") || "N/A"}
      </p>

      <button
        className="button-22"
        onClick={() => handleVisitedCountry(country)}
      >
        Mark visited
      </button>
      <button
        className="button-9"
        onClick={() => handleVisitedFlags(country.flags.png)}
      >
        Add Flag
      </button>
      <button className="btn" onClick={handleVisited}>
        {visited ? "Visited" : "Going"}
      </button>
    </div>
  );
};

export default Country;

// // const Country = ({ country }) => {
// //   console.log(country);
// //   return <div>
// //     <p>Name : {country.name.common}</p>
// //     <p>Capital : {country.capital}</p>
// //     <img src={country.flags.png}alt="" />
// //     <p>Population : {country.population}</p>
// //     <p>languages : {country.languages.eng}</p>
// //     </div>;

// // };

// // export default Country;

// import { useState } from "react";
// import "./Country.css";

// const Country = ({ country, handleVisitedCountry }) => {
//   const [visited, setVisited] = useState(false);
//   const handleVisited = () => {
//     setVisited(!visited);
//   };
//   console.log(handleVisitedCountry);
//   return (
//     <div className={`country-card ${visited && "visited"}`}>
//       <img
//         src={country.flags.png}
//         alt={country.flags.alt || country.name.common}
//         className="country-flag"
//       />
//       <h3 className="country-name">{country.name.common}</h3>
//       {/* <p>
//         <strong>Official Name:</strong> {country.name.official}
//       </p> */}
//       <p>
//         <strong>Capital:</strong> {country.capital?.join(", ") || "N/A"}
//       </p>
//       {/* <p>
//         <strong>Area:</strong> {country.area.toLocaleString()} km²
//       </p>
//       <p>
//         <strong>Time zone:</strong> {country.timezones.join(", ")}
//       </p>
//       <p>
//         <strong>Population:</strong> {country.population.toLocaleString()}
//       </p>
//       <p>
//         <strong>Languages:</strong>{" "}
//         {Object.values(country.languages).join(", ")}
//       </p>
//       <p>
//         <strong>Currencies:</strong>{" "}
//         {Object.entries(country.currencies)
//           .map(([key, { name, symbol }]) => `${name} (${symbol})`)
//           .join(", ")}
//       </p>
//       <p>
//         <strong>Borders:</strong>{" "}
//         {country.borders?.length ? country.borders.join(", ") : "None"}
//       </p> */}
//       <button onClick={() => handleVisitedCountry(country.name.common)}>
//         Mark visited
//       </button>
//       <button className="btn" onClick={handleVisited}>
//         {visited ? "Visited" : "Going"}
//       </button>
//     </div>
//   );
// };

// export default Country;
