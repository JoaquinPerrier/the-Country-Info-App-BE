const axios = require("axios");

class Country {
  static async fetchAvailableCountries() {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    return response.data;
  }
}

module.exports = Country;
