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
}

module.exports = CountryPresenter;
