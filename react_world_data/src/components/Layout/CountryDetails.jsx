import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams(); // e.g., "India"
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(params.id); // params.id like "India"
        console.log("API Response:", res);

        // ✅ Handle array response from /name API
        if (res && res.status === 200 && Array.isArray(res.data)) {
          setCountry(res.data[0]); // first country in the result
        } else {
          setError("Invalid response format.");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch country data.");
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;
  if (error) return <p className="error-msg">{error}</p>;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags?.svg}
              alt={country.flags?.alt || "Flag"}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">{country.name?.official}</p>

              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names:</span>{" "}
                  {country.name?.nativeName &&
                    Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ")}
                </p>
                <p>
                  <span className="card-description">Population:</span>{" "}
                  {country.population?.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region:</span>{" "}
                  {country.region}
                </p>
                <p>
                  <span className="card-description">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description">Capital:</span>{" "}
                  {country.capital?.join(", ")}
                </p>
                <p>
                  <span className="card-description">Top Level Domain:</span>{" "}
                  {country.tld?.[0]}
                </p>
                <p>
                  <span className="card-description">Currencies:</span>{" "}
                  {country.currencies &&
                    Object.keys(country.currencies)
                      .map((key) => country.currencies[key].name)
                      .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages:</span>{" "}
                  {country.languages &&
                    Object.keys(country.languages)
                      .map((key) => country.languages[key])
                      .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
