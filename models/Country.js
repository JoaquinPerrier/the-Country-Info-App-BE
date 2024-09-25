const axios = require("axios");
require("dotenv").config(); // Carga las variables de entorno

class Country {
  static async fetchAvailableCountries() {
    const response = await axios.get(
      `${process.env.API_URL}/AvailableCountries`
    );
    return response.data;
  }

  static async fetchCountryInfo(countryCode) {
    const response = await axios.get(
      `${process.env.API_URL}/CountryInfo/${countryCode}`
    );
    return response.data;
  }

  static async fetchFlagInfo(iso2) {
    const response = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      {
        iso2: iso2,
      }
    );
    return response.data;
  }
}

module.exports = Country;
