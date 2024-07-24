import React from 'react';
import { Form, Col } from 'react-bootstrap';

interface Props {
  marital_status: string;
  relationship: string;
  race: string;
  sex: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const PersonalDetails: React.FC<Props> = ({ marital_status, relationship, race, sex, handleChange }) => (
  <>
    <Col md={6}>
      <Form.Group controlId="marital_status" className="mb-3">
        <Form.Label>Estado Civil</Form.Label>
        <Form.Control as="select" name="marital_status" value={marital_status} onChange={handleChange} required>
          <option value="">Seleccione Estado Civil</option>
          <option value="Never-married">Nunca Casado</option>
          <option value="Married-civ-spouse">Casado</option>
          <option value="Divorced">Divorciado</option>
        </Form.Control>
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="relationship" className="mb-3">
        <Form.Label>Relación</Form.Label>
        <Form.Control as="select" name="relationship" value={relationship} onChange={handleChange} required>
          <option value="">Seleccione Relación</option>
          <option value="Husband">Esposo</option>
          <option value="Not-in-family">No en Familia</option>
          <option value="Wife">Esposa</option>
        </Form.Control>
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="race" className="mb-3">
        <Form.Label>Raza</Form.Label>
        <Form.Control as="select" name="race" value={race} onChange={handleChange} required>
          <option value="">Seleccione Raza</option>
          <option value="White">Blanco</option>
          <option value="Black">Negro</option>
          <option value="Asian-Pac-Islander">Asiático-Isleño del Pacífico</option>
          <option value="Amer-Indian-Eskimo">Indio Americano-Eskimal</option>
        </Form.Control>
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="sex" className="mb-3">
        <Form.Label>Sexo</Form.Label>
        <Form.Control as="select" name="sex" value={sex} onChange={handleChange} required>
          <option value="">Seleccione Sexo</option>
          <option value="Male">Hombre</option>
          <option value="Female">Mujer</option>
        </Form.Control>
      </Form.Group>
    </Col>
  </>
);

export default PersonalDetails;
