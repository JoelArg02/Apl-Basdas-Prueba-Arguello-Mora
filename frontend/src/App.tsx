import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import "./App.css";
import AgeWorkclass from "./components/AgeWorkclass";
import EducationDetails from "./components/EducationDetails";
import PersonalDetails from "./components/PersonalDetails";
import OccupationDetails from "./components/OccupationDetails";
import HoursCountry from "./components/HoursCountry";

type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    age: "",
    workclass: "",
    fnlwgt: "",
    education: "",
    education_num: "",
    marital_status: "",
    occupation: "",
    relationship: "",
    race: "",
    sex: "",
    capital_gain: "",
    capital_loss: "",
    hours_per_week: "",
    native_country: "",
  });

  const [prediction, setPrediction] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<FormControlElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/predict",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error al obtener la predicción:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Predictor de Ingresos</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <AgeWorkclass
            age={formData.age}
            workclass={formData.workclass}
            handleChange={handleChange}
          />
        </Row>
        <Row>
          <EducationDetails
            education={formData.education}
            education_num={formData.education_num}
            handleChange={handleChange}
          />
        </Row>
        <Row>
          <PersonalDetails
            marital_status={formData.marital_status}
            relationship={formData.relationship}
            race={formData.race}
            sex={formData.sex}
            handleChange={handleChange}
          />
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="fnlwgt">
              <Form.Label>Peso Final</Form.Label>
              <Form.Control
                type="text"
                name="fnlwgt"
                value={formData.fnlwgt}
                onChange={handleChange}
                placeholder="Ingrese el peso final"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="capital_gain">
              <Form.Label>Ganancia de Capital</Form.Label>
              <Form.Control
                type="text"
                name="capital_gain"
                value={formData.capital_gain}
                onChange={handleChange}
                placeholder="Ingrese la ganancia de capital"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="capital_loss">
              <Form.Label>Pérdida de Capital</Form.Label>
              <Form.Control
                type="text"
                name="capital_loss"
                value={formData.capital_loss}
                onChange={handleChange}
                placeholder="Ingrese la pérdida de capital"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <HoursCountry
            hours_per_week={formData.hours_per_week}
            native_country={formData.native_country}
            handleChange={handleChange}
          />
        </Row>
        <Row>
          <OccupationDetails
            occupation={formData.occupation}
            capital_gain={formData.capital_gain}
            capital_loss={formData.capital_loss}
            handleChange={handleChange}
          />
        </Row>
        <Button variant="primary" type="submit" className="mt-3">
          Predecir
        </Button>
      </Form>
      {prediction && (
        <Alert variant="success" className="mt-3">
          <h2>Predicción: {prediction}</h2>
        </Alert>
      )}
    </Container>
  );
};

export default App;
