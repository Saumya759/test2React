import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Weathers.css";
import { GetWeatherRequest } from "../Redux/createActions/createActions";
import DisplayWeather from "./DisplayWeather";

const Weathers = () => {
  const [weather, setWeather] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [form, setForm] = useState({
    city: "New Delhi",
    country: "India",
    APIKEY: "64159847d9a7badd874f16035aad4b4d",
  });

  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state.GetWeatherstatus && state.GetWeatherstatus.error
  );

  useEffect(() => {
    dispatch(GetWeatherRequest(form));
  }, []);

  async function weatherData(e) {
    if (form.city && form.country) {
      state && setWeather({ data: state });
      dispatch(GetWeatherRequest(form));
    }
  }
  useEffect(async () => {
    const data = await fetch(`${process.env.REACT_APP_BASE_URL}rest/v2/all`)
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
              <option>New Delhi</option>
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
              <option>India</option>
              {alldata.map((opt, i) => (
                <option value={opt.country}>{opt.country}</option>
              ))}
            </select>
          </Col>
        </Row>
      </Form>
      {state ? (
        <div>
          <DisplayWeather data={state} />
        </div>
      ) : null}
    </>
  );
};
export default Weathers;
