import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FilterForm({ tag, filter, onFilterChange, values, type }) {
  return (
    <Form className="form">
      <Form.Group controlId="filter">
        <Form.Label>{tag}</Form.Label>
        <Form.Select as="select" value={filter} onChange={onFilterChange}>
          <option value="">{`All ${type}`}</option>
          {
            values.map((data, idx) => (
              <option key={idx} value={data}>{data}</option>
            ))
          }
        </Form.Select>
      </Form.Group>
    </Form>
  );
}


FilterForm.propTypes = {
  tag: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
};
