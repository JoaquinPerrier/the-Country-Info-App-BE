class CountryView {
  displayCountries(countries) {
    return countries;
  }

  displayCountryInfo(countryInfo) {
    return countryInfo;
  }

  displayError(message) {
    console.error(message);
    throw new Error(message);
  }
}

module.exports = CountryView;
