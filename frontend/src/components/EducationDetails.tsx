import React from 'react';
import { Form, Col } from 'react-bootstrap';

interface Props {
  education: string;
  education_num: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const EducationDetails: React.FC<Props> = ({ education, education_num, handleChange }) => (
  <>
    <Col md={6}>
      <Form.Group controlId="education" className="mb-3">
        <Form.Label>Educación</Form.Label>
        <Form.Control as="select" name="education" value={education} onChange={handleChange} required>
          <option value="">Seleccione Educación</option>
          <option value="Bachelors">Licenciatura</option>
          <option value="HS-grad">Bachillerato</option>
          <option value="Masters">Maestría</option>
          <option value="Doctorate">Doctorado</option>
          <option value="Some-college">Algo de Universidad</option>
          <option value="Assoc-acdm">Asociado Académico</option>
        </Form.Control>
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="education_num" className="mb-3">
        <Form.Label>Número de Años de Educación</Form.Label>
        <Form.Control type="number" name="education_num" placeholder="Número de Años de Educación" value={education_num} onChange={handleChange} required />
      </Form.Group>
    </Col>
  </>
);

export default EducationDetails;
