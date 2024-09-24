class CountryView {
  displayCountries(countries) {
    return countries;
  }

  displayError(message) {
    console.error(message);
    throw new Error(message);
  }
}

module.exports = CountryView;
