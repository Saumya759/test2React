import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../Styles/Weathers.css";
import DisplayWeather from "./DisplayWeather";

const Weathers = () => {
  const [weather, setWeather] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [form, setForm] = useState({});

  const APIKEY = "64159847d9a7badd874f16035aad4b4d";
  async function weatherData(e) {
    // e.preventDefault();
    if (form.city && form.country) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }
  useEffect(async () => {
    const data = await fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => data);

    const countrydata = [];
    data?.map((data) => {
      let data1 = {
        country: data.name,
        capital: data.capital,
      };
      countrydata.push(data1);
    });
    setAllData(countrydata);
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
    // weatherData()
  };

  return (
    <>
      <Form inline className="form">
        <Row>
          <Col xs="auto" className="font">
            Capital:{" "}
            <select
              type="text"
              placeholder=""
              className="box"
              name="city"
              onChange={(e) => handleChange(e)}
            >
              {alldata.map((opt, i) => (
                <option value={opt.capital}>{opt.capital}</option>
              ))}
            </select>
          </Col>
          <Col xs="auto" className="font">
            Country:
            <select
              type="text"
              placeholder=""
              className="box"
              name="country"
              onChange={(e) => handleChange(e)}
              onBlur={weatherData}
            >
              {alldata.map((opt, i) => (
                <option value={opt.country}>{opt.country}</option>
              ))}
            </select>
          </Col>
        </Row>
      </Form>
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </>
  );
};
export default Weathers;
