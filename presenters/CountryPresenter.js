const Country = require("../models/Country");

class CountryPresenter {
  constructor(view) {
    this.view = view;
  }

  async loadCountries() {
    try {
      const countries = await Country.fetchAvailableCountries();
      return this.view.displayCountries(countries);
    } catch (error) {
      this.view.displayError("Error al cargar los países.");
    }
  }

  async loadCountryInfo(countryCode) {
    try {
      const countryInfo = await Country.fetchCountryInfo(countryCode);
      return this.view.displayCountryInfo(countryInfo);
    } catch (error) {
      this.view.displayError("Error al cargar la información del país.");
    }
  }

  async loadCountryFlagInfo(countryCode) {
    try {
      const countryFlagInfo = await Country.fetchFlagInfo(countryCode);
      return this.view.displayCountryFlagInfo(countryFlagInfo);
    } catch (error) {
      this.view.displayError(
        "Error al cargar la información de la bandera del país."
      );
    }
  }
}

module.exports = CountryPresenter;
