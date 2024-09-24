const express = require("express");
const CountryView = require("./views/CountryView");
const CountryPresenter = require("./presenters/CountryPresenter");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/countries", async (req, res) => {
  const view = new CountryView();
  const presenter = new CountryPresenter(view);

  try {
    const countries = await presenter.loadCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).send("Fetching error!");
  }
});

app.listen(PORT, () => {
  console.log(`Server runing in port: ${PORT}`);
});
