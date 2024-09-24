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
}

module.exports = Country;
