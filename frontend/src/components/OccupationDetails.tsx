import React from 'react';
import { Form, Col } from 'react-bootstrap';

interface Props {
  occupation: string;
  capital_gain: string;
  capital_loss: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const OccupationDetails: React.FC<Props> = ({ occupation, capital_gain, capital_loss, handleChange }) => (
  <>
      <Form.Group controlId="occupation" className="mb-3">
        <Form.Label>Ocupación</Form.Label>
        <Form.Control as="select" name="occupation" value={occupation} onChange={handleChange} required>
          <option value="">Seleccione Ocupación</option>
          <option value="Exec-managerial">Ejecutivo-Directivo</option>
          <option value="Prof-specialty">Especialista-Profesional</option>
          <option value="Handlers-cleaners">Manejadores-Limpiadores</option>
        </Form.Control>
      </Form.Group>
   
  </>
);

export default OccupationDetails;
