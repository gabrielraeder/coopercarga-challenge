import { useEffect, useState } from 'react';
import Card from './Card';
import dataJson from '../../data.json';
import FilterForm from './FilterForm';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function CardList() {
  const [data, setData] = useState([]);
  const [filterSize, setFilterSize] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterSport, setFilterSport] = useState('');
  const [uniqueSizes] = useState([]);
  const [uniqueFootSizes] = useState([]);
  const [uniqueTypes] = useState([]);
  const [uniqueSports] = useState([]);

  useEffect(() => {
    setData(dataJson);  
  }, []);
  
  const getUniqueValues = () => {
    return data.forEach((item) => {
      item.available_sizes.forEach((value) => {
        if (!uniqueSizes.includes(value) && isNaN(value)) {
          uniqueSizes.push(value);
        }
        else if(!uniqueFootSizes.includes(value) && !isNaN(value)) {
          uniqueFootSizes.push(value);
        }
      });
      if (!uniqueTypes.includes(item.type)) uniqueTypes.push(item.type);
      if (!uniqueSports.includes(item.sport)) uniqueSports.push(item.sport);
    });
  };

  const filteredItems = filterSize
    ? data.filter((item) => item.available_sizes.includes(filterSize))
    : data;

  const filteredType = filterType
    ? filteredItems.filter((item) => item.type === filterType)
    : filteredItems;

  const filteredSport = filterSport
    ? filteredType.filter((item) => item.sport === filterSport)
    : filteredType;

  getUniqueValues();
  
  return (
    <div className="cards_container">
      <Navbar bg="light" expand="md" className='filters_container'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto filters">
              <FilterForm
                tag="Size"
                filter={filterSize}
                onFilterChange={ ({ target: { value } }) => setFilterSize(value) }
                values={uniqueSizes}
                type="sizes"
              />
              <FilterForm
                tag="Foot Size"
                filter={filterSize}
                onFilterChange={({ target: { value } }) => setFilterSize(value)}
                values={uniqueFootSizes}
                type="sizes"
              />
              <FilterForm
                tag="Type"
                filter={filterType}
                onFilterChange={({ target: { value } }) => setFilterType(value)}
                values={uniqueTypes}
                type="types"
              />
              <FilterForm
                tag="Sport"
                filter={filterSport}
                onFilterChange={({ target: { value } }) => setFilterSport(value)}
                values={uniqueSports}
                type="sports"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='card_list' data-testid="card_list">
        {
          filteredSport.map((item, index) => (
            <Card key={index} item={item} />
          ))
        }
        {!filteredSport.length && <h2>No items found.</h2>}
      </div>
    </div>
  );
}
