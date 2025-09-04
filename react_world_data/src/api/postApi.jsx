import axios from "axios";

const api = axios.create(


    {
        baseURL: "https://restcountries.com/v3.1"
    }
)
//https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags

//HTTP GET METHOD

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
};


// HTTP GET METHOD  for the individual country name

// postApi.js
// axios = a javascript HTTP client library


// Fetch country details using full country name
export const getCountryIndData = async (name) => {
  try {
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags,flags`
    );
    return res; // Return full Axios response
  } catch (err) {
    console.error("API error:", err);
    return { status: 500, data: null }; // Always return an object
  }
};
