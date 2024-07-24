import React from 'react';
import { Form, Col } from 'react-bootstrap';

interface Props {
  age: string;
  workclass: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const AgeWorkclass: React.FC<Props> = ({ age, workclass, handleChange }) => (
  <>
    <Col md={6}>
      <Form.Group controlId="age" className="mb-3">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" name="age" placeholder="Edad" value={age} onChange={handleChange} required />
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="workclass" className="mb-3">
        <Form.Label>Clase de Trabajo</Form.Label>
        <Form.Control as="select" name="workclass" value={workclass} onChange={handleChange} required>
          <option value="">Seleccione la Clase de Trabajo</option>
          <option value="Private">Privado</option>
          <option value="Self-emp-not-inc">Autoempleo-no-inc</option>
          <option value="State-gov">Gobierno Estatal</option>
          <option value="Federal-gov">Gobierno Federal</option>
          <option value="Local-gov">Gobierno Local</option>
        </Form.Control>
      </Form.Group>
    </Col>
  </>
);

export default AgeWorkclass;
