import React from 'react';
import { Form, Col } from 'react-bootstrap';

interface Props {
  hours_per_week: string;
  native_country: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const HoursCountry: React.FC<Props> = ({ hours_per_week, native_country, handleChange }) => (
  <>
    <Col md={6}>
      <Form.Group controlId="hours_per_week" className="mb-3">
        <Form.Label>Horas por Semana</Form.Label>
        <Form.Control type="number" name="hours_per_week" placeholder="Horas por Semana" value={hours_per_week} onChange={handleChange} required />
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="native_country" className="mb-3">
        <Form.Label>País de Origen</Form.Label>
        <Form.Control as="select" name="native_country" value={native_country} onChange={handleChange} required>
          <option value="">Seleccione el País</option>
          <option value="United-States">Estados Unidos</option>
          <option value="Cuba">Cuba</option>
          <option value="India">India</option>
          <option value="Jamaica">Jamaica</option>
        </Form.Control>
      </Form.Group>
    </Col>
  </>
);

export default HoursCountry;
