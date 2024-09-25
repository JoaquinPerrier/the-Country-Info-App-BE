const express = require("express");
const cors = require("cors");
const CountryView = require("./views/CountryView");
const CountryPresenter = require("./presenters/CountryPresenter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/countries", async (req, res) => {
  const view = new CountryView();
  const presenter = new CountryPresenter(view);

  try {
    const countries = await presenter.loadCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).send("Error al cargar los países.");
  }
});

app.get("/country-info/:countryCode", async (req, res) => {
  const { countryCode } = req.params;
  const view = new CountryView();
  const presenter = new CountryPresenter(view);

  try {
    const countryInfo = await presenter.loadCountryInfo(countryCode);
    res.json(countryInfo);
  } catch (error) {
    res.status(500).send("Error al cargar la información del país.");
  }
});

app.get("/flag", async (req, res) => {
  const { iso2 } = req.body;
  const view = new CountryView();
  const presenter = new CountryPresenter(view);

  if (!iso2) {
    return res.status(400).json({ error: "Missing params!" });
  }

  try {
    const countryFlagInfo = await presenter.loadCountryFlagInfo(iso2);

    res.json({ countryFlagInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la bandera" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
