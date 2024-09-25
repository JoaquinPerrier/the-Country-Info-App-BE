class CountryView {
  displayCountries(countries) {
    return countries;
  }

  displayCountryInfo(countryInfo) {
    return countryInfo;
  }

  displayCountryFlagInfo(countryFlagInfo) {
    return countryFlagInfo;
  }

  displayError(message) {
    console.error(message);
    throw new Error(message);
  }
}

module.exports = CountryView;
